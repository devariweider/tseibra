import { useEffect, useState, type FormEvent } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthProvider';
import { useTheme } from '../features/theme/ThemeProvider';
import { ApiError } from '../lib/api';
import { Alert } from '../components/ui/Primitives';
import { FullPageLoader } from '../components/ui/Loader';

export function LoginPage() {
  const { user, loading, login } = useAuth();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const from = (location.state as { from?: string } | null)?.from ?? '/';

  useEffect(() => {
    document.title = 'Entrar · Plataforma de Treinamento SEI Brasiléia';
  }, []);

  if (loading) return <FullPageLoader message="Verificando sua sessão…" />;
  if (user) return <Navigate to={from} replace />;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(email.trim(), password);
      navigate(from, { replace: true });
    } catch (caught) {
      if (caught instanceof ApiError) setError(caught.userMessage);
      else setError('Não foi possível entrar. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <button
        type="button"
        className="auth-page__theme"
        onClick={toggle}
        aria-pressed={theme === 'escuro'}
        title={theme === 'escuro' ? 'Ativar modo claro' : 'Ativar modo noturno'}
        aria-label={theme === 'escuro' ? 'Ativar modo claro' : 'Ativar modo noturno'}
      >
        <span aria-hidden="true">{theme === 'escuro' ? '☀️' : '🌙'}</span>
        <span>{theme === 'escuro' ? 'Modo claro' : 'Modo noturno'}</span>
      </button>
      <div className="auth-card">
        <div className="auth-card__brand">
          <span className="shell__logo-mark" aria-hidden="true">
            <span className="shell__logo-mark__line shell__logo-mark__line--top">TSEI</span>
            <span className="shell__logo-mark__line shell__logo-mark__line--bottom">BRA</span>
          </span>
          <div>
            <h1>Plataforma de Treinamento SEI Brasiléia</h1>
            <p>Capacitação em SEI</p>
          </div>
        </div>

        {error && (
          <Alert tone="danger" title="Não foi possível entrar">
            {error}
          </Alert>
        )}

        <form onSubmit={(event) => void handleSubmit(event)} className="form" noValidate>
          <div className="field">
            <label htmlFor="email">E-mail institucional</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu.nome@orgao.gov.br"
            />
          </div>

          <div className="field">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="btn btn--primary btn--block" disabled={submitting}>
            {submitting ? 'Entrando…' : 'Entrar'}
          </button>
        </form>

        <p className="auth-card__footer">
          Ainda não tem conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>

        <footer className="auth-card__credits">
          <strong>Desenvolvido por</strong>
          <p className="auth-card__author">Ari Weider de Andrade Mendes</p>
          <p className="auth-card__role">Analista de Sistemas</p>
          <p className="auth-card__org">Prefeitura de Brasiléia</p>
          <p className="auth-card__org">Secretaria de Saúde de Brasiléia</p>
        </footer>
      </div>
    </div>
  );
}