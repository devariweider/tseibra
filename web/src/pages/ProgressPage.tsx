import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProgress } from '../features/progress/ProgressProvider';
import type { ModuleSummary } from '../lib/types';
import { formatDate, formatMinutes, scoreTone } from '../lib/format';
import { Badge, EmptyState, StatCard } from '../components/ui/Primitives';
import { ProgressBar } from '../components/ui/ProgressBar';

type SortKey = 'ordem' | 'nota' | 'tentativas';

export function ProgressPage() {
  const { curriculum, progress, isCompleted, bestScore, lessonStatus } = useProgress();
  const [sortKey, setSortKey] = useState<SortKey>('ordem');
  const [onlyWeak, setOnlyWeak] = useState(false);

  const rows = useMemo(() => {
    if (!curriculum) return [];
    const flat = curriculum.modules.flatMap((module) =>
      module.lessons.map((lesson) => {
        const entry = progress.get(lesson.id);
        return {
          module,
          lesson,
          status: lessonStatus(lesson.id),
          score: bestScore(lesson.id),
          attempts: entry?.attemptsCount ?? 0,
          completedAt: entry?.completedAt ?? null,
        };
      }),
    );

    const filtered = onlyWeak ? flat.filter((row) => row.score === null || row.score < 70) : flat;

    return [...filtered].sort((a, b) => {
      if (sortKey === 'nota') return (a.score ?? -1) - (b.score ?? -1);
      if (sortKey === 'tentativas') return b.attempts - a.attempts;
      return 0;
    });
  }, [curriculum, progress, lessonStatus, bestScore, sortKey, onlyWeak]);

  if (!curriculum) {
    return (
      <EmptyState title="Conteúdo indisponível">
        <p>Não foi possível carregar o conteúdo do curso.</p>
      </EmptyState>
    );
  }

  const completed = rows.filter((row) => isCompleted(row.lesson.id)).length;
  const withScore = rows.filter((row) => row.score !== null);
  const average =
    withScore.length === 0
      ? null
      : Math.round(
          withScore.reduce((sum, row) => sum + (row.score ?? 0), 0) / withScore.length,
        );
  const studySeconds = Array.from(progress.values()).reduce((sum, entry) => sum + entry.attemptsCount, 0);
  const weakCount = rows.filter((row) => row.score === null || row.score < 70).length;

  return (
    <div className="page">
      <header className="page__header">
        <div>
          <h1>Meu progresso</h1>
          <p className="page__subtitle">
            Acompanhe cada aula, reveja suas notas e identifique os pontos que precisam de revisão.
          </p>
        </div>
      </header>

      <section className="stats-grid">
        <StatCard icon="✅" label="Aulas concluídas" value={`${completed} / ${rows.length}`} />
        <StatCard icon="📈" label="Média geral" value={average === null ? '—' : `${average}%`} />
        <StatCard icon="🔁" label="Tentativas" value={studySeconds} />
        <StatCard
          icon="🔎"
          label="Aulas a revisar"
          value={weakCount}
          hint="Nota abaixo de 70% ou ainda não realizadas"
        />
      </section>

      <section className="panel">
        <header className="panel__header">
          <h2>Detalhamento por aula</h2>
          <div className="panel__actions">
            <label className="switch">
              <input type="checkbox" checked={onlyWeak} onChange={(event) => setOnlyWeak(event.target.checked)} />
              <span>Somente pontos frágeis</span>
            </label>
            <select
              className="select"
              value={sortKey}
              onChange={(event) => setSortKey(event.target.value as SortKey)}
              aria-label="Ordenar aulas"
            >
              <option value="ordem">Ordem do curso</option>
              <option value="nota">Menor nota primeiro</option>
              <option value="tentativas">Mais tentativas</option>
            </select>
          </div>
        </header>

        {rows.length === 0 ? (
          <EmptyState title="Nenhuma aula no filtro atual" />
        ) : (
          <div className="table-wrapper">
            <table className="data-table data-table--compact">
              <thead>
                <tr>
                  <th scope="col">Aula</th>
                  <th scope="col">Módulo</th>
                  <th scope="col">Situação</th>
                  <th scope="col">Nota</th>
                  <th scope="col">Tentativas</th>
                  <th scope="col">Conclusão</th>
                  <th scope="col" aria-label="Ações" />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.lesson.id}>
                    <td>
                      <Link to={`/aula/${row.lesson.id}`} className="link">
                        {row.lesson.title}
                      </Link>
                    </td>
                    <td className="muted">{row.module.title.replace(/^Módulo \d+ — /, '')}</td>
                    <td>
                      {row.status === 'concluido' ? (
                        <Badge tone="success">Concluída</Badge>
                      ) : row.status === 'em_andamento' ? (
                        <Badge tone="info">Em andamento</Badge>
                      ) : (
                        <Badge tone="neutral">Não iniciada</Badge>
                      )}
                    </td>
                    <td>
                      {row.score === null ? (
                        <span className="muted">—</span>
                      ) : (
                        <Badge tone={scoreTone(row.score) === 'alta' ? 'success' : scoreTone(row.score) === 'media' ? 'warning' : 'danger'}>
                          {row.score}%
                        </Badge>
                      )}
                    </td>
                    <td>{row.attempts}</td>
                    <td className="muted">{row.completedAt ? formatDate(row.completedAt) : '—'}</td>
                    <td>
                      <Link to={`/aula/${row.lesson.id}`} className="btn btn--ghost btn--sm">
                        {row.status === 'concluido' ? 'Revisar' : 'Estudar'}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="panel">
        <header className="panel__header">
          <h2>Progresso por módulo</h2>
          <span className="panel__hint">{formatMinutes(curriculum.totals.minutes)} de carga horária</span>
        </header>
        <ul className="module-progress-list">
          {curriculum.modules.map((module) => (
            <ModuleProgressRow key={module.id} module={module} lessonIds={module.lessons.map((l) => l.id)} isCompleted={isCompleted} />
          ))}
        </ul>
      </section>
    </div>
  );
}

function ModuleProgressRow({
  module,
  lessonIds,
  isCompleted,
}: {
  module: ModuleSummary;
  lessonIds: string[];
  isCompleted: (lessonId: string) => boolean;
}) {
  const completed = lessonIds.filter(isCompleted).length;
  const percent = lessonIds.length === 0 ? 0 : Math.round((completed / lessonIds.length) * 100);
  return (
    <li className="module-progress">
      <div className="module-progress__head">
        <Link to={`/modulos#${module.id}`} className="module-progress__title">
          {module.title}
        </Link>
        <span className="module-progress__meta">
          {completed}/{lessonIds.length} aulas
        </span>
      </div>
      <ProgressBar value={percent} tone={percent === 100 ? 'success' : 'default'} showValue />
    </li>
  );
}