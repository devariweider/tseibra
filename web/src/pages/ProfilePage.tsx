import { useEffect, useState, type FormEvent } from 'react';
import { useAuth } from '../features/auth/AuthProvider';
import { useTheme, type ThemeMode } from '../features/theme/ThemeProvider';
import { api, ApiError } from '../lib/api';
import { formatDate } from '../lib/format';
import { Alert } from '../components/ui/Primitives';

interface ThemeOption {
  mode: ThemeMode;
  icon: string;
  label: string;
  hint: string;
}

const THEME_OPTIONS: ThemeOption[] = [
  { mode: 'claro', icon: '☀️', label: 'Claro', hint: 'Tema padrão' },
  { mode: 'escuro', icon: '🌙', label: 'Noturno', hint: 'Menor brilho' },
  { mode: 'sistema', icon: '🖥️', label: 'Sistema', hint: 'Segue o dispositivo' },
];

export function ProfilePage() {
  const { user, logout } = useAuth();
  const { mode, setMode } = useTheme();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Meu perfil · Plataforma de Treinamento SEI Brasiléia';
  }, []);

  if (!user) return null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    if (newPassword !== confirmPassword) {
      setError('A confirmação da senha não confere.');
      return;
    }

    setSubmitting(true);
    try {
      const result = await api.post<{ message: string }>('/api/auth/change-password', {
        currentPassword,
        newPassword,
      });
      setSuccess(result.message);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.userMessage : 'Não foi possível alterar a senha.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="page">
      <header className="page__header">
        <div>
          <h1>Meu perfil</h1>
          <p className="page__subtitle">Dados da sua conta e segurança de acesso.</p>
        </div>
      </header>

      <div className="grid grid--two">
        <section className="panel">
          <header className="panel__header">
            <h2>Dados cadastrais</h2>
          </header>
          <dl className="definition-list">
            <div className="definition-list__item">
              <dt>Nome</dt>
              <dd>{user.name}</dd>
            </div>
            <div className="definition-list__item">
              <dt>E-mail</dt>
              <dd>{user.email}</dd>
            </div>
            <div className="definition-list__item">
              <dt>Órgão / unidade</dt>
              <dd>{user.organization ?? 'Não informado'}</dd>
            </div>
            <div className="definition-list__item">
              <dt>Perfil de acesso</dt>
              <dd>
                {user.role === 'admin' ? 'Administrador' : user.role === 'instrutor' ? 'Instrutor' : 'Aluno'}
              </dd>
            </div>
            <div className="definition-list__item">
              <dt>Conta criada em</dt>
              <dd>{formatDate(user.createdAt)}</dd>
            </div>
          </dl>
          <p className="muted">
            Para alterar nome, órgão ou perfil, procure o administrador da plataforma.
          </p>
        </section>

        <section className="panel">
          <header className="panel__header">
            <h2>Aparência</h2>
          </header>
          <p className="muted">
            O modo noturno reduz o brilho da tela em sessões longas de estudo. A preferência fica
            salva neste dispositivo.
          </p>
          <div className="theme-options" role="radiogroup" aria-label="Tema da interface">
            {THEME_OPTIONS.map((option) => (
              <button
                key={option.mode}
                type="button"
                role="radio"
                aria-checked={mode === option.mode}
                className={`theme-option ${mode === option.mode ? 'is-active' : ''}`}
                onClick={() => setMode(option.mode)}
              >
                <span className="theme-option__icon" aria-hidden="true">
                  {option.icon}
                </span>
                {option.label}
                <span className="theme-option__hint">{option.hint}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="panel">
          <header className="panel__header">
            <h2>Alterar senha</h2>
          </header>

          {error && (
            <Alert tone="danger" title="Falha ao alterar">
              {error}
            </Alert>
          )}
          {success && (
            <Alert tone="success" title="Senha alterada">
              {success}{' '}
              <button type="button" className="link" onClick={() => void logout()}>
                Sair da conta
              </button>
            </Alert>
          )}

          <form onSubmit={(event) => void handleSubmit(event)} className="form">
            <div className="field">
              <label htmlFor="currentPassword">Senha atual</label>
              <input
                id="currentPassword"
                type="password"
                autoComplete="current-password"
                required
                value={currentPassword}
                onChange={(event) => setCurrentPassword(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="newPassword">Nova senha</label>
              <input
                id="newPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
              <small className="field__hint">Mínimo de 8 caracteres, com letras e números.</small>
            </div>
            <div className="field">
              <label htmlFor="confirmPassword">Confirmar nova senha</label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn--primary" disabled={submitting}>
              {submitting ? 'Alterando…' : 'Alterar senha'}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}