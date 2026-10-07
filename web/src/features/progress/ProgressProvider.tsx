import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { api } from '../../lib/api';
import type { Curriculum, LessonProgress } from '../../lib/types';

interface ProgressContextValue {
  curriculum: Curriculum | null;
  loadingCurriculum: boolean;
  progress: Map<string, LessonProgress>;
  loadingProgress: boolean;
  reloadProgress: () => Promise<void>;
  lessonStatus: (lessonId: string) => LessonProgress['status'];
  isCompleted: (lessonId: string) => boolean;
  bestScore: (lessonId: string) => number | null;
  attemptsOf: (lessonId: string) => number;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [curriculum, setCurriculum] = useState<Curriculum | null>(null);
  const [loadingCurriculum, setLoadingCurriculum] = useState(true);
  const [progress, setProgress] = useState<Map<string, LessonProgress>>(new Map());
  const [loadingProgress, setLoadingProgress] = useState(true);

  useEffect(() => {
    let active = true;
    api
      .get<Curriculum>('/api/curriculum')
      .then((data: Curriculum) => {
        if (active) setCurriculum(data);
      })
      .catch(() => {
        if (active) setCurriculum(null);
      })
      .finally(() => {
        if (active) setLoadingCurriculum(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const reloadProgress = useCallback(async (): Promise<void> => {
    setLoadingProgress(true);
    try {
      const { progress: rows } = await api.get<{ progress: LessonProgress[] }>('/api/progress');
      setProgress(new Map(rows.map((row: LessonProgress) => [row.lessonId, row])));
    } catch {
      setProgress(new Map());
    } finally {
      setLoadingProgress(false);
    }
  }, []);

  useEffect(() => {
    void reloadProgress();
  }, [reloadProgress]);

  const value = useMemo<ProgressContextValue>(() => {
    const entryOf = (lessonId: string): LessonProgress | undefined => progress.get(lessonId);

    return {
      curriculum,
      loadingCurriculum,
      progress,
      loadingProgress,
      reloadProgress,
      lessonStatus: (lessonId: string) => entryOf(lessonId)?.status ?? 'nao_iniciado',
      isCompleted: (lessonId: string) => entryOf(lessonId)?.status === 'concluido',
      bestScore: (lessonId: string) => entryOf(lessonId)?.bestScore ?? null,
      attemptsOf: (lessonId: string) => entryOf(lessonId)?.attemptsCount ?? 0,
    };
  }, [curriculum, loadingCurriculum, progress, loadingProgress, reloadProgress]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress deve ser usado dentro de <ProgressProvider>.');
  return context;
}