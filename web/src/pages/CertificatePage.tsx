import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthProvider';
import { useProgress } from '../features/progress/ProgressProvider';
import { formatDate, formatMinutes } from '../lib/format';
import { Badge, EmptyState, StatCard } from '../components/ui/Primitives';
import { ProgressBar } from '../components/ui/ProgressBar';

export function CertificatePage() {
  const { user } = useAuth();
  const { curriculum, isCompleted, progress } = useProgress();

  useEffect(() => {
    document.title = 'Certificado · Plataforma de Treinamento SEI Brasiléia';
  }, []);

  const stats = useMemo(() => {
    if (!curriculum) return { completed: 0, total: 0, percent: 0, average: null, minutes: 0 };
    const total = curriculum.totals.lessons;
    const completed = curriculum.modules
      .flatMap((module) => module.lessons)
      .filter((lesson) => isCompleted(lesson.id)).length;
    const scores = Array.from(progress.values())
      .map((entry) => entry.bestScore)
      .filter((score): score is number => score !== null);
    return {
      completed,
      total,
      percent: total === 0 ? 0 : Math.round((completed / total) * 100),
      average:
        scores.length === 0 ? null : Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length),
      minutes: curriculum.totals.minutes,
    };
  }, [curriculum, isCompleted, progress]);

  if (!curriculum) {
    return (
      <EmptyState title="Conteúdo indisponível">
        <p>Não foi possível carregar o conteúdo do curso.</p>
      </EmptyState>
    );
  }

  const eligible = stats.percent >= 100;

  return (
    <div className="page">
      <header className="page__header">
        <div>
          <h1>Certificado de conclusão</h1>
          <p className="page__subtitle">
            O certificado é emitido ao concluir 100% das aulas com aproveitamento mínimo de 70% em cada
            avaliação.
          </p>
        </div>
      </header>

      <section className="stats-grid">
        <StatCard icon="✅" label="Aulas concluídas" value={`${stats.completed} / ${stats.total}`} hint={`${stats.percent}%`} />
        <StatCard icon="📈" label="Média final" value={stats.average === null ? '—' : `${stats.average}%`} />
        <StatCard icon="⏱️" label="Carga horária" value={formatMinutes(stats.minutes)} />
        <StatCard icon="📅" label="Emitido em" value={eligible ? formatDate(new Date().toISOString()) : '—'} />
      </section>

      <section className={`certificate ${eligible ? 'is-eligible' : ''}`}>
        <div className="certificate__frame">
          <p className="certificate__institution">Plataforma de Treinamento SEI Brasiléia · Capacitação em SEI</p>
          <h2>Certificado de conclusão</h2>
          <p className="certificate__text">
            Certifica que <strong>{user?.name}</strong>, do órgão <strong>{user?.organization ?? 'não informado'}</strong>,
            concluiu a trilha de capacitação <strong>SEI! Administrar</strong>, com {stats.total} aulas e carga
            horária total de {formatMinutes(stats.minutes)}, obtendo aproveitamento médio de{' '}
            <strong>{stats.average === null ? '—' : `${stats.average}%`}</strong>.
          </p>
          <div className="certificate__meta">
            <div>
              <span>Data</span>
              <strong>{formatDate(new Date().toISOString())}</strong>
            </div>
            <div>
              <span>Código de verificação</span>
              <strong className="certificate__code">
                TSEI-{user?.id.slice(0, 8).toUpperCase()}-{stats.percent}
              </strong>
            </div>
          </div>
        </div>

        {eligible ? (
          <div className="certificate__actions">
            <Badge tone="success">Parabéns! Certificação liberada.</Badge>
            <button type="button" className="btn btn--primary" onClick={() => window.print()}>
              Imprimir / salvar em PDF
            </button>
          </div>
        ) : (
          <div className="certificate__actions">
            <Badge tone="warning">Em andamento — {stats.percent}% concluído</Badge>
            <ProgressBar value={stats.percent} label="Progresso para a certificação" showValue />
            <Link to="/modulos" className="btn btn--primary">
              Continuar estudando
            </Link>
          </div>
        )}
      </section>

      {stats.percent > 0 && !eligible && (
        <section className="panel">
          <header className="panel__header">
            <h2>O que falta</h2>
          </header>
          <ul className="bullet-list">
            {curriculum.modules
              .flatMap((module) => module.lessons.map((lesson) => ({ module, lesson })))
              .filter(({ lesson }) => !isCompleted(lesson.id))
              .slice(0, 12)
              .map(({ module, lesson }) => (
                <li key={lesson.id}>
                  <Link to={`/aula/${lesson.id}`} className="link">
                    {module.title}: {lesson.title}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      )}

      </div>
  );
}