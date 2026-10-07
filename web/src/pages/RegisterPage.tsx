import { useEffect, useState, type FormEvent } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth, type RegisterInput } from '../features/auth/AuthProvider';
import { ApiError } from '../lib/api';
import { Alert } from '../components/ui/Primitives';
import { FullPageLoader } from '../components/ui/Loader';

const PASSWORD_RULES = [
  { label: 'Ao menos 8 caracteres', test: (value: string) => value.length >= 8 },
  { label: 'Ao menos uma letra', test: (value: string) => /[a-zA-Z]/.test(value) },
  { label: 'Ao menos um número', test: (value: string) => /\d/.test(value) },
];

export function RegisterPage() {
  const { user, loading, register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterInput>({ name: '', email: '', password: '', organization: '' });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Criar conta · Plataforma de Treinamento SEI Brasiléia';
  }, []);

  if (loading) return <FullPageLoader message="Verificando sua sessão…" />;
  if (user) return <Navigate to="/" replace />;

  const passwordOk = PASSWORD_RULES.every((rule) => rule.test(form.password));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    if (!passwordOk) {
      setError('A senha não atende aos requisitos mínimos de segurança.');
      return;
    }
    setSubmitting(true);
    try {
      await register({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        ...(form.organization?.trim() ? { organization: form.organization.trim() } : {}),
      });
      navigate('/', { replace: true });
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.userMessage : 'Não foi possível criar a conta.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
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
          <Alert tone="danger" title="Falha no cadastro">
            {error}
          </Alert>
        )}

        <form onSubmit={(event) => void handleSubmit(event)} className="form" noValidate>
          <div className="field">
            <label htmlFor="name">Nome completo</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              minLength={3}
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="reg-email">E-mail</label>
            <input
              id="reg-email"
              name="email"
              type="email"
              autoComplete="username"
              required
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="organization">Órgão / unidade (opcional)</label>
            <input
              id="organization"
              name="organization"
              value={form.organization ?? ''}
              onChange={(event) => setForm({ ...form, organization: event.target.value })}
              placeholder="Ex.: Tribunal Superior Eleitoral de Brasília"
            />
          </div>

          <div className="field">
            <label htmlFor="reg-password">Senha</label>
            <input
              id="reg-password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={form.password}
              onChange={(event) => setForm({ ...form, password: event.target.value })}
            />
            <ul className="password-rules">
              {PASSWORD_RULES.map((rule) => {
                const ok = rule.test(form.password);
                return (
                  <li key={rule.label} className={ok ? 'is-ok' : ''}>
                    <span aria-hidden="true">{ok ? '✔' : '○'}</span> {rule.label}
                  </li>
                );
              })}
            </ul>
          </div>

          <button type="submit" className="btn btn--primary btn--block" disabled={submitting || !passwordOk}>
            {submitting ? 'Criando conta…' : 'Criar conta e começar'}
          </button>
        </form>

        <p className="auth-card__footer">
          Já tem conta? <Link to="/entrar">Entrar</Link>
        </p>
      </div>
    </div>
  );
}