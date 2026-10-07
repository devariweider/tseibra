import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthProvider';
import { useProgress } from '../features/progress/ProgressProvider';
import { api } from '../lib/api';
import type { DashboardData } from '../lib/types';
import { formatHoursFromSeconds, formatMinutes, relativeTime } from '../lib/format';
import { Badge, EmptyState, StatCard } from '../components/ui/Primitives';
import { ProgressBar } from '../components/ui/ProgressBar';
import { FullPageLoader } from '../components/ui/Loader';

export function DashboardPage() {
  const { user } = useAuth();
  const { curriculum, isCompleted, lessonStatus } = useProgress();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      setData(await api.get<DashboardData>('/api/dashboard'));
      setError(null);
    } catch {
      setError('Não foi possível carregar o seu painel.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.title = 'Painel · Plataforma de Treinamento SEI Brasiléia';
    void load();
  }, [load]);

  if (loading) return <FullPageLoader message="Montando o seu painel…" />;

  const firstLesson = curriculum?.modules[0]?.lessons[0];
  const greeting = `${new Date().getHours() < 12 ? 'Bom dia' : new Date().getHours() < 18 ? 'Boa tarde' : 'Boa noite'}, ${user?.name.split(' ')[0]}`;
  const nextLessonId =
    data?.continueStudying?.lessonId ??
    curriculum?.modules.flatMap((module) => module.lessons).find((lesson) => !isCompleted(lesson.id))?.id ??
    firstLesson?.id;

  return (
    <div className="page">
      <header className="page__header">
        <div>
          <h1>{greeting}</h1>
          <p className="page__subtitle">
            {data && data.completedLessons === 0
              ? 'Comece pelo primeiro módulo e construa sua capacitação no SEI.'
              : 'Continue sua trilha de capacitação no SEI.'}
          </p>
        </div>
        {nextLessonId && (
          <Link to={`/aula/${nextLessonId}`} className="btn btn--primary">
            {data?.continueStudying ? 'Continuar estudo' : 'Começar agora'}
          </Link>
        )}
      </header>

      {error && (
        <div className="alert alert--warning">
          <div className="alert__body">{error}</div>
        </div>
      )}

      {data && (
        <>
          <section className="stats-grid" aria-label="Indicadores de progresso">
            <StatCard
              icon="✅"
              label="Aulas concluídas"
              value={`${data.completedLessons} / ${data.totals.lessons}`}
              hint={`${data.inProgressPercent}% da trilha`}
            />
            <StatCard
              icon="🎯"
              label="Média de aproveitamento"
              value={data.averageScore === null ? '—' : `${data.averageScore}%`}
              hint="Média das melhores notas"
            />
            <StatCard
              icon="⏱️"
              label="Tempo de estudo"
              value={formatHoursFromSeconds(data.studySeconds)}
              hint="Registrado na plataforma"
            />
            <StatCard
              icon="🔥"
              label="Sequência"
              value={`${data.streakDays} ${data.streakDays === 1 ? 'dia' : 'dias'}`}
              hint="Dias consecutivos de atividade"
            />
          </section>

          <section className="panel">
            <header className="panel__header">
              <h2>Progresso por módulo</h2>
              <Link to="/modulos" className="link">
                Ver conteúdo completo →
              </Link>
            </header>

            {data.byModule.length === 0 ? (
              <EmptyState title="Nenhum módulo disponível" />
            ) : (
              <ul className="module-progress-list">
                {data.byModule.map((module) => {
                  const percent =
                    module.totalLessons === 0
                      ? 0
                      : Math.round((module.completedLessons / module.totalLessons) * 100);
                  return (
                    <li key={module.moduleId} className="module-progress">
                      <div className="module-progress__head">
                        <Link to={`/modulos#${module.moduleId}`} className="module-progress__title">
                          {module.moduleTitle}
                        </Link>
                        <span className="module-progress__meta">
                          {module.completedLessons}/{module.totalLessons} aulas
                          {module.averageScore !== null && (
                            <Badge tone={module.averageScore >= 70 ? 'success' : 'warning'}>
                              média {module.averageScore}%
                            </Badge>
                          )}
                        </span>
                      </div>
                      <ProgressBar value={percent} tone={percent === 100 ? 'success' : 'default'} />
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <div className="grid grid--two">
            <section className="panel">
              <header className="panel__header">
                <h2>Trilha do curso</h2>
                <span className="panel__hint">{formatMinutes(data.totals.minutes)} de conteúdo</span>
              </header>
              <ul className="trail-list">
                {curriculum?.modules.map((module) => {
                  const completed = module.lessons.filter((lesson) => isCompleted(lesson.id)).length;
                  const inProgress = module.lessons.some(
                    (lesson) => lessonStatus(lesson.id) === 'em_andamento',
                  );
                  return (
                    <li key={module.id}>
                      <Link to={`/modulos#${module.id}`} className="trail-list__item">
                        <div>
                          <strong>{module.title}</strong>
                          <span>{module.subtitle}</span>
                        </div>
                        <div className="trail-list__aside">
                          {completed === module.lessonCount ? (
                            <Badge tone="success">concluído</Badge>
                          ) : inProgress ? (
                            <Badge tone="info">em andamento</Badge>
                          ) : (
                            <Badge tone="neutral">{completed > 0 ? `${completed} feitas` : 'não iniciado'}</Badge>
                          )}
                          <span className="trail-list__count">
                            {module.lessonCount} aulas · {module.questionCount} questões
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section className="panel">
              <header className="panel__header">
                <h2>Atividade recente</h2>
              </header>
              {data.recentAttempts.length === 0 ? (
                <EmptyState title="Nenhuma tentativa registrada">
                  <p>Resolva o quiz de uma aula para começar a acompanhar seu histórico.</p>
                </EmptyState>
              ) : (
                <ul className="activity-list">
                  {data.recentAttempts.map((attempt) => (
                    <li key={`${attempt.lessonId}-${attempt.createdAt}`}>
                      <Link to={`/aula/${attempt.lessonId}`}>
                        <div>
                          <strong>{attempt.lessonTitle}</strong>
                          <span>{relativeTime(attempt.createdAt)}</span>
                        </div>
                        <Badge tone={attempt.score >= 70 ? 'success' : 'danger'}>{attempt.score}%</Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        </>
      )}
    </div>
  );
}