import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthProvider';
import { useProgress } from '../features/progress/ProgressProvider';
import { api, ApiError } from '../lib/api';
import type { LessonPayload, LessonProgress, QuizResult } from '../lib/types';
import { formatMinutes, relativeTime } from '../lib/format';
import { Alert, Badge, EmptyState } from '../components/ui/Primitives';
import { FullPageLoader } from '../components/ui/Loader';
import { ContentBlocks } from '../components/ContentBlocks';

type QuizMode = 'idle' | 'answering' | 'reviewing';

interface HistoryItem {
  lessonId: string;
  previousId: string | null;
  nextId: string | null;
}

export function LessonPage() {
  const { lessonId = '' } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { reloadProgress, progress } = useProgress();

  const [lesson, setLesson] = useState<LessonPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [tab, setTab] = useState<'conteudo' | 'quiz' | 'resumo'>('conteudo');
  const [mode, setMode] = useState<QuizMode>('idle');
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [quizError, setQuizError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryItem | null>(null);

  const startedAtRef = useRef<number>(Date.now());
  const reportedRef = useRef<string | null>(null);

  // Carregamento da aula + navegação sequencial entre aulas.
  useEffect(() => {
    let active = true;
    setLoading(true);
    setLoadError(null);
    setTab('conteudo');
    setMode('idle');
    setAnswers({});
    setResult(null);
    setQuizError(null);
    reportedRef.current = null;
    startedAtRef.current = Date.now();

    api
      .get<LessonPayload>(`/api/curriculum/lessons/${lessonId}`)
      .then(async (data) => {
        if (!active) return;
        setLesson(data);
        document.title = `${data.title} · Plataforma de Treinamento SEI Brasiléia`;

        const listResponse = await api.get<{ modules: Array<{ lessons: Array<{ id: string }> }> }>(
          '/api/curriculum',
        );
        if (!active) return;
        const flat = listResponse.modules.flatMap((module) => module.lessons.map((lesson) => lesson.id));
        const index = flat.indexOf(lessonId);
        setHistory({
          lessonId,
          previousId: index > 0 ? (flat[index - 1] ?? null) : null,
          nextId: index >= 0 ? (flat[index + 1] ?? null) : null,
        });
      })
      .catch((error: unknown) => {
        if (!active) return;
        setLoadError(error instanceof ApiError ? error.userMessage : 'Não foi possível carregar a aula.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [lessonId]);

  // Marca a aula como iniciada (uma única vez por visita).
  useEffect(() => {
    if (!lessonId || reportedRef.current === lessonId) return;
    reportedRef.current = lessonId;
    void api
      .post<{ progress: LessonProgress }>(`/api/progress/${lessonId}/start`)
      .then(() => reloadProgress())
      .catch(() => undefined);
  }, [lessonId, reloadProgress]);

  // Registra tempo de estudo ao sair da aula.
  useEffect(() => {
    return () => {
      const seconds = Math.round((Date.now() - startedAtRef.current) / 1000);
      if (seconds < 10 || !user) return;
      const payload = JSON.stringify({ startedAt: new Date(startedAtRef.current).toISOString(), seconds });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/study-sessions', new Blob([payload], { type: 'application/json' }));
      }
    };
  }, [lessonId, user]);

  const lessonProgress = lessonId ? progress.get(lessonId) : undefined;

  const submitQuiz = useCallback(async () => {
    if (!lesson) return;
    setSubmitting(true);
    setQuizError(null);
    try {
      const secondsSpent = Math.round((Date.now() - startedAtRef.current) / 1000);
      const response = await api.post<{ result: QuizResult }>(`/api/progress/${lessonId}/submissions`, {
        answers,
        secondsSpent,
      });
      setResult(response.result);
      setMode('reviewing');
      await reloadProgress();
    } catch (error) {
      setQuizError(error instanceof ApiError ? error.userMessage : 'Não foi possível corrigir as respostas.');
    } finally {
      setSubmitting(false);
    }
  }, [lesson, answers, lessonId, reloadProgress]);

  if (loading) return <FullPageLoader message="Abrindo a aula…" />;

  if (loadError || !lesson) {
    return (
      <EmptyState title="Aula não encontrada">
        <p>{loadError ?? 'O conteúdo solicitado não existe nesta trilha.'}</p>
        <Link to="/modulos" className="btn btn--primary">
          Voltar ao conteúdo
        </Link>
      </EmptyState>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === lesson.quiz.length;
  const wrongIds = new Set(
    result?.answers.filter((answer) => !answer.isCorrect).map((answer) => answer.questionId) ?? [],
  );

  return (
    <div className="page page--lesson">
      <nav className="breadcrumb" aria-label="Trilha">
        <Link to="/modulos">Módulos</Link>
        <span aria-hidden="true">/</span>
        <span>{lesson.moduleTitle}</span>
      </nav>

      <header className="lesson-header">
        <div>
          <h1>{lesson.title}</h1>
          <p className="page__subtitle">
            {formatMinutes(lesson.estimatedMinutes)} de leitura · {lesson.quiz.length} questões de avaliação
          </p>
        </div>
        <div className="lesson-header__badges">
          {lessonProgress?.status === 'concluido' && (
            <Badge tone="success">Aula concluída · {lessonProgress.bestScore}%</Badge>
          )}
          {lessonProgress?.status === 'em_andamento' && <Badge tone="info">Em andamento</Badge>}
        </div>
      </header>

      <div className="tabs" role="tablist" aria-label="Seções da aula">
        {(['conteudo', 'quiz', 'resumo'] as const).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            className={`tab ${tab === key ? 'is-active' : ''}`}
            onClick={() => setTab(key)}
          >
            {key === 'conteudo' ? 'Conteúdo' : key === 'quiz' ? 'Avaliação' : 'Resumo rápido'}
          </button>
        ))}
      </div>

      {tab === 'conteudo' && (
        <div className="grid grid--lesson">
          <article className="panel panel--content">
            <ContentBlocks blocks={lesson.blocks} />
          </article>

          <aside className="lesson-aside">
            <div className="panel">
              <h3>Objetivos da aula</h3>
              <ul className="objective-list">
                {lesson.objectives.map((objective) => (
                  <li key={objective}>{objective}</li>
                ))}
              </ul>
            </div>
            <div className="panel panel--accent">
              <h3>Responda à avaliação</h3>
              <p>
                A aula é concluída com <strong>70%</strong> de acerto. Você pode refazer quantas vezes precisar.
              </p>
              <button type="button" className="btn btn--primary btn--block" onClick={() => setTab('quiz')}>
                Ir para o quiz
              </button>
            </div>
          </aside>
        </div>
      )}

      {tab === 'quiz' && (
        <section className="panel">
          {mode === 'reviewing' && result && (
            <div className={`quiz-result ${result.passed ? 'is-pass' : 'is-fail'}`}>
              <div className="quiz-result__score">
                <span className="quiz-result__value">{result.score}%</span>
                <span>
                  {result.answers.filter((answer) => answer.isCorrect).length} de {result.total} acertos
                </span>
              </div>
              <div>
                <h2>{result.passed ? 'Aula concluída!' : 'Ainda não passou'}</h2>
                <p>
                  {result.passed
                    ? `Aprovação com ${result.score}% (mínimo de ${result.passThreshold}%). Sua próxima aula já está liberada.`
                    : `Você precisa de ${result.passThreshold}% para concluir. Revise o resumo rápido e tente novamente.`}
                </p>
              </div>
              <div className="quiz-result__actions">
                <button type="button" className="btn btn--ghost" onClick={() => setTab('resumo')}>
                  Ver resumo
                </button>
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={() => {
                    setAnswers({});
                    setResult(null);
                    setMode('answering');
                  }}
                >
                  Refazer
                </button>
              </div>
            </div>
          )}

          {quizError && (
            <Alert tone="danger" title="Erro ao corrigir">
              {quizError}
            </Alert>
          )}

          {mode === 'idle' && (
            <div className="quiz-intro">
              <h2>Avaliação de conhecimento</h2>
              <p>
                São <strong>{lesson.quiz.length} questões</strong> sobre o conteúdo desta aula. A correção é
                realizada pelo servidor e o gabarito comentado é exibido ao final.
              </p>
              <ul className="bullet-list">
                <li>Nota mínima para conclusão: {70}%</li>
                <li>Você pode repetir a avaliação para melhorar sua média</li>
                {lessonProgress?.attemptsCount ? <li>Tentativas anteriores: {lessonProgress.attemptsCount}</li> : null}
              </ul>
              <button type="button" className="btn btn--primary" onClick={() => setMode('answering')}>
                Iniciar avaliação
              </button>
            </div>
          )}

          {(mode === 'answering' || mode === 'reviewing') && (
            <form
              className="quiz"
              onSubmit={(event) => {
                event.preventDefault();
                if (!allAnswered) {
                  setQuizError('Responda todas as questões antes de enviar.');
                  return;
                }
                void submitQuiz();
              }}
            >
              <div className="quiz__progress">
                <span>
                  {answeredCount} de {lesson.quiz.length} questões respondidas
                </span>
                <span className="quiz__progress-bar">
                  <span
                    style={{
                      width: `${Math.round((answeredCount / lesson.quiz.length) * 100)}%`,
                    }}
                  />
                </span>
              </div>

              {lesson.quiz.map((question, questionIndex) => {
                const graded = result?.answers.find((answer) => answer.questionId === question.id);
                const showFeedback = mode === 'reviewing' && graded !== undefined;
                return (
                  <fieldset key={question.id} className="quiz__question" disabled={mode === 'reviewing'}>
                    <legend>
                      <span className="quiz__question-number">{questionIndex + 1}</span>
                      {question.prompt}
                    </legend>
                    <div className="quiz__options">
                      {question.options.map((option, optionIndex) => {
                        const selected = answers[question.id] === optionIndex;
                        let stateClass = '';
                        if (showFeedback && graded) {
                          if (optionIndex === graded.correctIndex) stateClass = ' is-correct';
                          else if (selected && optionIndex === graded.selectedIndex) stateClass = ' is-wrong';
                        } else if (selected) {
                          stateClass = ' is-selected';
                        }
                        return (
                          <label key={optionIndex} className={`quiz__option ${stateClass}`}>
                            <input
                              type="radio"
                              name={question.id}
                              value={optionIndex}
                              checked={selected}
                              onChange={() =>
                                setAnswers((current) => ({ ...current, [question.id]: optionIndex }))
                              }
                            />
                            <span className="quiz__option-marker" aria-hidden="true">
                              {String.fromCharCode(65 + optionIndex)}
                            </span>
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>

                    {showFeedback && graded && (
                      <div className={`quiz__feedback ${graded.isCorrect ? 'is-correct' : 'is-wrong'}`}>
                        <strong>{graded.isCorrect ? '✔ Correta' : '✘ Incorreta'}</strong>
                        <p>{graded.explanation}</p>
                      </div>
                    )}
                  </fieldset>
                );
              })}

              {mode === 'answering' && (
                <footer className="quiz__footer">
                  <button type="submit" className="btn btn--primary" disabled={!allAnswered || submitting}>
                    {submitting ? 'Corrigindo…' : 'Enviar respostas'}
                  </button>
                  {!allAnswered && (
                    <span className="quiz__hint">Faltam {lesson.quiz.length - answeredCount} questão(ões).</span>
                  )}
                </footer>
              )}

              {mode === 'reviewing' && (
                <footer className="quiz__footer quiz__footer--review">
                  {wrongIds.size > 0 && (
                    <p className="quiz__hint">
                      Revise as questões marcadas em vermelho. Depois, clique em <strong>Refazer</strong> para
                      tentar novamente.
                    </p>
                  )}
                </footer>
              )}
            </form>
          )}
        </section>
      )}

      {tab === 'resumo' && (
        <section className="panel panel--content">
          <h2>Resumo rápido</h2>
          <p className="page__subtitle">
            Releia os pontos essential antes de responder à avaliação. Funciona bem na revisão antes da prova.
          </p>
          <ul className="keypoints">
            {lesson.keyPoints.map((point, index) => (
              <li key={index}>
                <span aria-hidden="true">✓</span>
                {point}
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn--primary" onClick={() => setTab('quiz')}>
            Ir para a avaliação
          </button>
        </section>
      )}

      <nav className="lesson-nav" aria-label="Navegação entre aulas">
        {history?.previousId ? (
          <button type="button" className="btn btn--ghost" onClick={() => navigate(`/aula/${history.previousId}`)}>
            ← Aula anterior
          </button>
        ) : (
          <span />
        )}
        {history?.nextId && (
          <button type="button" className="btn btn--primary" onClick={() => navigate(`/aula/${history.nextId}`)}>
            Próxima aula →
          </button>
        )}
      </nav>

      {lessonProgress?.completedAt && (
        <p className="lesson-footer-note">
          Concluída em {relativeTime(lessonProgress.completedAt)} · melhor nota {lessonProgress.bestScore}%
        </p>
      )}
    </div>
  );
}