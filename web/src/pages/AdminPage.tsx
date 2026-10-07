import { useCallback, useEffect, useState, type FormEvent } from 'react';
import { api, ApiError } from '../lib/api';
import type { StudentOverview, UserRole } from '../lib/types';
import { formatDateTime, formatHoursFromSeconds, relativeTime } from '../lib/format';
import { Alert, Badge, EmptyState } from '../components/ui/Primitives';
import { ProgressBar } from '../components/ui/ProgressBar';
import { Modal } from '../components/ui/Modal';
import { FullPageLoader } from '../components/ui/Loader';

interface EditForm {
  name: string;
  organization: string;
  role: UserRole;
  active: boolean;
  /** Senha só é enviada quando o campo é preenchido. */
  password: string;
}

export function AdminPage() {
  const [users, setUsers] = useState<StudentOverview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'aluno' as UserRole, organization: '' });
  const [submitting, setSubmitting] = useState(false);

  // Edição de usuário existente
  const [editing, setEditing] = useState<StudentOverview | null>(null);
  const [editForm, setEditForm] = useState<EditForm>({ name: '', organization: '', role: 'aluno', active: true, password: '' });
  const [editError, setEditError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { users: rows } = await api.get<{ users: StudentOverview[] }>('/api/admin/users');
      setUsers(rows);
      setError(null);
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.userMessage : 'Não foi possível carregar os usuários.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.title = 'Administração · Plataforma de Treinamento SEI Brasiléia';
    void load();
  }, [load]);

  async function toggleActive(user: StudentOverview) {
    setFeedback(null);
    try {
      await api.patch(`/api/admin/users/${user.userId}`, { active: !user.active });
      setFeedback(
        user.active
          ? `Acesso de ${user.name} bloqueado e sessões encerradas.`
          : `Acesso de ${user.name} reativado.`,
      );
      await load();
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.userMessage : 'Falha ao alterar o usuário.');
    }
  }

  function openEditDialog(user: StudentOverview): void {
    setEditing(user);
    setEditError(null);
    setEditForm({
      name: user.name,
      organization: user.organization ?? '',
      role: user.role,
      active: user.active,
      password: '',
    });
  }

  function closeEditDialog(): void {
    setEditing(null);
    setEditError(null);
  }

  async function saveUser(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!editing) return;

    const name = editForm.name.trim();
    if (name.length < 3) {
      setEditError('O nome deve ter ao menos 3 caracteres.');
      return;
    }
    if (editForm.password && editForm.password.length < 8) {
      setEditError('A senha deve ter ao menos 8 caracteres.');
      return;
    }

    setSaving(true);
    setEditError(null);
    try {
      const payload: Record<string, unknown> = {
        name,
        role: editForm.role,
        active: editForm.active,
        organization: editForm.organization.trim() || null,
      };
      // Senha em branco = manter a atual.
      if (editForm.password) payload.password = editForm.password;

      await api.patch(`/api/admin/users/${editing.userId}`, payload);
      // Recarrega antes de fechar para que a tabela já exiba os dados novos
      // no instante em que o diálogo sair da tela.
      await load();
      setFeedback(
        `Dados de ${name} atualizados.` +
          (editForm.password ? ' Senha redefinida e sessões encerradas.' : ''),
      );
      closeEditDialog();
    } catch (caught) {
      setEditError(caught instanceof ApiError ? caught.userMessage : 'Falha ao salvar as alterações.');
    } finally {
      setSaving(false);
    }
  }

  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await api.post('/api/admin/users', {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        role: form.role,
        ...(form.organization.trim() ? { organization: form.organization.trim() } : {}),
      });
      setFeedback(`Usuário ${form.email} criado com sucesso.`);
      setForm({ name: '', email: '', password: '', role: 'aluno', organization: '' });
      setShowForm(false);
      await load();
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.userMessage : 'Falha ao criar o usuário.');
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <FullPageLoader message="Carregando alunos…" />;

  const totals = {
    active: users.filter((user) => user.active).length,
    blocked: users.filter((user) => !user.active).length,
    finished: users.filter((user) => user.completedLessons === user.totalLessons && user.totalLessons > 0).length,
    studyTime: users.reduce((sum, user) => sum + user.studySeconds, 0),
  };

  return (
    <div className="page">
      <header className="page__header">
        <div>
          <h1>Administração da turma</h1>
          <p className="page__subtitle">Gerencie contas, perfis de acesso e acompanhe o desempenho.</p>
        </div>
        <button type="button" className="btn btn--primary" onClick={() => setShowForm((open) => !open)}>
          {showForm ? 'Cancelar' : '+ Novo usuário'}
        </button>
      </header>

      {feedback && (
        <Alert tone="success" title="Operação concluída">
          {feedback}
        </Alert>
      )}
      {error && (
        <Alert tone="danger" title="Erro">
          {error}
        </Alert>
      )}

      {showForm && (
        <section className="panel">
          <header className="panel__header">
            <h2>Novo usuário</h2>
          </header>
          <form onSubmit={(event) => void createUser(event)} className="form form--inline">
            <div className="field">
              <label htmlFor="new-name">Nome</label>
              <input
                id="new-name"
                required
                minLength={3}
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="new-email">E-mail</label>
              <input
                id="new-email"
                type="email"
                required
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="new-password">Senha provisória</label>
              <input
                id="new-password"
                required
                minLength={8}
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="new-role">Perfil</label>
              <select
                id="new-role"
                value={form.role}
                onChange={(event) => setForm({ ...form, role: event.target.value as UserRole })}
              >
                <option value="aluno">Aluno</option>
                <option value="instrutor">Instrutor</option>
                <option value="admin">Administrador</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="new-org">Órgão</label>
              <input
                id="new-org"
                value={form.organization}
                onChange={(event) => setForm({ ...form, organization: event.target.value })}
              />
            </div>
            <button type="submit" className="btn btn--primary" disabled={submitting}>
              {submitting ? 'Criando…' : 'Criar usuário'}
            </button>
          </form>
        </section>
      )}

      <section className="stats-grid">
        <div className="stat-card">
          <span className="stat-card__icon" aria-hidden="true">
            👥
          </span>
          <div className="stat-card__body">
            <span className="stat-card__value">{users.length}</span>
            <span className="stat-card__label">Usuários cadastrados</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-card__icon" aria-hidden="true">
            ✅
          </span>
          <div className="stat-card__body">
            <span className="stat-card__value">{totals.active}</span>
            <span className="stat-card__label">Com acesso ativo</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-card__icon" aria-hidden="true">
            🎓
          </span>
          <div className="stat-card__body">
            <span className="stat-card__value">{totals.finished}</span>
            <span className="stat-card__label">Trilha concluída</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-card__icon" aria-hidden="true">
            ⏱️
          </span>
          <div className="stat-card__body">
            <span className="stat-card__value">{formatHoursFromSeconds(totals.studyTime)}</span>
            <span className="stat-card__label">Tempo de estudo somado</span>
          </div>
        </div>
      </section>

      <section className="panel">
        <header className="panel__header">
          <h2>Alunos</h2>
          <span className="panel__hint">{totals.blocked} conta(s) bloqueada(s)</span>
        </header>

        {users.length === 0 ? (
          <EmptyState title="Nenhum usuário cadastrado" />
        ) : (
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th scope="col">Aluno</th>
                  <th scope="col">Progresso</th>
                  <th scope="col">Média</th>
                  <th scope="col">Tempo</th>
                  <th scope="col">Última atividade</th>
                  <th scope="col">Perfil</th>
                  <th scope="col">Situação</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  const percent =
                    user.totalLessons === 0
                      ? 0
                      : Math.round((user.completedLessons / user.totalLessons) * 100);
                  return (
                    <tr key={user.userId}>
                      <td>
                        <strong>{user.name}</strong>
                        <br />
                        <small className="muted">
                          {user.email}
                          {user.organization ? ` · ${user.organization}` : ''}
                        </small>
                      </td>
                      <td className="cell-progress">
                        <ProgressBar value={percent} />
                        <small className="muted">
                          {user.completedLessons}/{user.totalLessons}
                        </small>
                      </td>
                      <td>
                        {user.averageScore === null ? (
                          <span className="muted">—</span>
                        ) : (
                          <Badge tone={user.averageScore >= 70 ? 'success' : 'warning'}>
                            {user.averageScore}%
                          </Badge>
                        )}
                      </td>
                      <td>{formatHoursFromSeconds(user.studySeconds)}</td>
                      <td className="muted">
                        {user.lastActivityAt ? relativeTime(user.lastActivityAt) : 'sem atividade'}
                        {user.lastActivityAt && (
                          <small className="muted"> · {formatDateTime(user.lastActivityAt)}</small>
                        )}
                      </td>
                      <td>
                        <Badge
                          tone={
                            user.role === 'admin' ? 'info' : user.role === 'instrutor' ? 'warning' : 'neutral'
                          }
                        >
                          {user.role === 'admin' ? 'Administrador' : user.role === 'instrutor' ? 'Instrutor' : 'Aluno'}
                        </Badge>
                      </td>
                      <td>
                        <Badge tone={user.active ? 'success' : 'danger'}>
                          {user.active ? 'ativo' : 'bloqueado'}
                        </Badge>
                      </td>
                      <td>
                        <div className="row-actions">
                          <button
                            type="button"
                            className="btn btn--ghost btn--sm"
                            onClick={() => openEditDialog(user)}
                          >
                            Editar usuário
                          </button>
                          <button
                            type="button"
                            className="btn btn--ghost btn--sm"
                            onClick={() => void toggleActive(user)}
                          >
                            {user.active ? 'Bloquear' : 'Reativar'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <Modal
        open={editing !== null}
        title="Editar usuário"
        description={editing ? editing.email : undefined}
        onClose={closeEditDialog}
        footer={
          <>
            <button type="button" className="btn btn--ghost" onClick={closeEditDialog} disabled={saving}>
              Cancelar
            </button>
            <button type="submit" form="edit-user-form" className="btn btn--primary" disabled={saving}>
              {saving ? 'Salvando…' : 'Salvar alterações'}
            </button>
          </>
        }
      >
        <form id="edit-user-form" onSubmit={(event) => void saveUser(event)} className="form">
          {editError && (
            <Alert tone="danger" title="Falha ao salvar">
              {editError}
            </Alert>
          )}

          <div className="field">
            <label htmlFor="edit-name">Nome completo</label>
            <input
              id="edit-name"
              required
              minLength={3}
              maxLength={120}
              value={editForm.name}
              onChange={(event) => setEditForm({ ...editForm, name: event.target.value })}
            />
          </div>

          <div className="field">
            <label htmlFor="edit-organization">Órgão / unidade</label>
            <input
              id="edit-organization"
              maxLength={120}
              value={editForm.organization}
              onChange={(event) => setEditForm({ ...editForm, organization: event.target.value })}
              placeholder="Ex.: Secretaria de Saúde de Brasiléia"
            />
          </div>

          <div className="field">
            <label htmlFor="edit-role">Perfil de acesso</label>
            <select
              id="edit-role"
              value={editForm.role}
              onChange={(event) => setEditForm({ ...editForm, role: event.target.value as UserRole })}
            >
              <option value="aluno">Aluno — acesso somente à própria trilha</option>
              <option value="instrutor">Instrutor — acompanha alunos</option>
              <option value="admin">Administrador — gerencia a turma</option>
            </select>
          </div>

          <div className="switch">
            <input
              id="edit-active"
              type="checkbox"
              checked={editForm.active}
              onChange={(event) => setEditForm({ ...editForm, active: event.target.checked })}
            />
            <span>
              Conta ativa — ao desmarcar, o acesso é bloqueado e as sessões são encerradas
            </span>
          </div>

          <div className="field">
            <label htmlFor="edit-password">Redefinir senha</label>
            <input
              id="edit-password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              value={editForm.password}
              onChange={(event) => setEditForm({ ...editForm, password: event.target.value })}
              placeholder="Deixe em branco para manter a senha atual"
            />
            <small className="field__hint">
              Mínimo de 8 caracteres. Ao definir uma nova senha, as sessões ativas são encerradas e o
              usuário terá de entrar novamente.
            </small>
          </div>
        </form>
      </Modal>
    </div>
  );
}