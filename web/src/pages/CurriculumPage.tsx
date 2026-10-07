import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../features/progress/ProgressProvider';
import { formatMinutes, normalizeSearch } from '../lib/format';
import { Badge, EmptyState } from '../components/ui/Primitives';
import { ProgressBar } from '../components/ui/ProgressBar';
import { FullPageLoader } from '../components/ui/Loader';

const FILTERS = [
  { id: 'todos', label: 'Todos' },
  { id: 'nao_iniciado', label: 'Não iniciados' },
  { id: 'em_andamento', label: 'Em andamento' },
  { id: 'concluido', label: 'Concluídos' },
] as const;

type FilterId = (typeof FILTERS)[number]['id'];

export function CurriculumPage() {
  const { curriculum, loadingCurriculum, lessonStatus, isCompleted, bestScore } = useProgress();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<FilterId>('todos');
  const [openModule, setOpenModule] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Módulos · Plataforma de Treinamento SEI Brasiléia';
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) setOpenModule(hash);
  }, [curriculum]);

  const term = normalizeSearch(query);

  const visibleModules = useMemo(() => {
    if (!curriculum) return [];
    return curriculum.modules
      .map((module) => {
        const lessons = module.lessons.filter((lesson) => {
          const matchesTerm =
            term.length === 0 ||
            normalizeSearch(lesson.title).includes(term) ||
            normalizeSearch(module.title).includes(term) ||
            normalizeSearch(module.subtitle).includes(term);
          const status = lessonStatus(lesson.id);
          const matchesFilter = filter === 'todos' || status === filter;
          return matchesTerm && matchesFilter;
        });
        return { module, lessons };
      })
      .filter(({ lessons }) => lessons.length > 0);
  }, [curriculum, term, filter, lessonStatus]);

  if (loadingCurriculum) return <FullPageLoader message="Carregando o conteúdo do curso…" />;
  if (!curriculum) {
    return (
      <EmptyState title="Conteúdo indisponível">
        <p>Não foi possível carregar o conteúdo do curso. Verifique se a API está em execução.</p>
      </EmptyState>
    );
  }

  return (
    <div className="page">
      <header className="page__header">
        <div>
          <h1>Conteúdo do curso</h1>
          <p className="page__subtitle">
            {curriculum.totals.modules} módulos · {curriculum.totals.lessons} aulas ·{' '}
            {curriculum.totals.questions} questões · {formatMinutes(curriculum.totals.minutes)}
          </p>
        </div>
      </header>

      <div className="toolbar">
        <div className="search">
          <span aria-hidden="true">🔍</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar aula, módulo ou tema…"
            aria-label="Buscar no conteúdo"
          />
        </div>
        <div className="chips" role="group" aria-label="Filtrar por situação">
          {FILTERS.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`chip ${filter === option.id ? 'is-active' : ''}`}
              onClick={() => setFilter(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {visibleModules.length === 0 && (
        <EmptyState title="Nenhum resultado">
          <p>Ajuste a busca ou o filtro para encontrar o conteúdo desejado.</p>
        </EmptyState>
      )}

      <div className="accordion">
        {visibleModules.map(({ module, lessons }) => {
          const moduleLessonIds = module.lessons.map((lesson) => lesson.id);
          const completed = moduleLessonIds.filter(isCompleted).length;
          const percent = module.lessonCount === 0 ? 0 : Math.round((completed / module.lessonCount) * 100);
          const isOpen = openModule === module.id;

          return (
            <section key={module.id} id={module.id} className="module-card">
              <button
                type="button"
                className="module-card__head"
                aria-expanded={isOpen}
                onClick={() => setOpenModule(isOpen ? null : module.id)}
              >
                <div className="module-card__head-main">
                  <h2>{module.title}</h2>
                  <p>{module.subtitle}</p>
                </div>
                <div className="module-card__head-meta">
                  <Badge tone={percent === 100 ? 'success' : 'neutral'}>
                    {completed}/{module.lessonCount} aulas
                  </Badge>
                  <span className="module-card__minutes">{formatMinutes(module.estimatedMinutes)}</span>
                  <span className={`module-card__chevron ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                    ▾
                  </span>
                </div>
              </button>

              <div className="module-card__progress">
                <ProgressBar value={percent} tone={percent === 100 ? 'success' : 'default'} showValue />
              </div>

              {isOpen && (
                <div className="module-card__body">
                  <p className="module-card__description">{module.description}</p>

                  <div className="module-card__grid">
                    <div>
                      <h3>Objetivos de aprendizagem</h3>
                      <ul className="objective-list">
                        {module.objectives.map((objective) => (
                          <li key={objective}>{objective}</li>
                        ))}
                      </ul>
                      <p className="module-card__source">
                        <strong>Fonte:</strong> {module.sourceRef}
                      </p>
                    </div>

                    <div>
                      <h3>Aulas do módulo</h3>
                      <ul className="lesson-list">
                        {lessons.map((lesson, index) => {
                          const status = lessonStatus(lesson.id);
                          const score = bestScore(lesson.id);
                          return (
                            <li key={lesson.id}>
                              <Link to={`/aula/${lesson.id}`} className="lesson-item">
                                <span className={`lesson-item__status lesson-item__status--${status}`}>
                                  {status === 'concluido' ? '✓' : status === 'em_andamento' ? '◔' : index + 1}
                                </span>
                                <span className="lesson-item__main">
                                  <strong>{lesson.title}</strong>
                                  <small>
                                    {formatMinutes(lesson.estimatedMinutes)} · {lesson.questionCount} questões
                                  </small>
                                </span>
                                {score !== null && (
                                  <Badge tone={score >= 70 ? 'success' : 'warning'}>{score}%</Badge>
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}