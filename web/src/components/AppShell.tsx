import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthProvider';
import { useTheme } from '../features/theme/ThemeProvider';
import { initials } from '../lib/format';

interface NavItem {
  to: string;
  label: string;
  icon: string;
  end?: boolean;
  adminOnly?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Painel', icon: '📊', end: true },
  { to: '/modulos', label: 'Módulos', icon: '📚' },
  { to: '/progresso', label: 'Meu progresso', icon: '🎯' },
  { to: '/certificado', label: 'Certificado', icon: '🎓' },
  { to: '/perfil', label: 'Meu perfil', icon: '👤' },
  { to: '/admin', label: 'Administração', icon: '🛠️', adminOnly: true },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  if (!user) return null;
  const items = NAV_ITEMS.filter((item) => !item.adminOnly || user.role === 'admin');

  async function handleLogout() {
    await logout();
    navigate('/entrar', { replace: true });
  }

  return (
    <div className="shell">
      <header className="shell__header">
        <div className="shell__brand">
          <button
            type="button"
            className="shell__menu-toggle"
            aria-label="Alternar menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">☰</span>
          </button>
          <Link to="/" className="shell__logo">
            <span className="shell__logo-mark" aria-hidden="true">
              <span className="shell__logo-mark__line shell__logo-mark__line--top">TSEI</span>
              <span className="shell__logo-mark__line shell__logo-mark__line--bottom">BRA</span>
            </span>
            <span className="shell__logo-text">
              <strong>Plataforma de Treinamento</strong>
              <small>SEI Brasiléia · Capacitação em SEI</small>
            </span>
          </Link>
        </div>

        <div className="shell__user">
          <div className="shell__user-info">
            <strong>{user.name}</strong>
            <span>{user.organization ?? 'Sem órgão informado'}</span>
          </div>
          <span className="avatar" aria-hidden="true">
            {initials(user.name)}
          </span>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-pressed={theme === 'escuro'}
            title={theme === 'escuro' ? 'Ativar modo claro' : 'Ativar modo noturno'}
            aria-label={theme === 'escuro' ? 'Ativar modo claro' : 'Ativar modo noturno'}
          >
            <span aria-hidden="true">{theme === 'escuro' ? '☀️' : '🌙'}</span>
          </button>
          <button type="button" className="btn btn--ghost btn--sm" onClick={() => void handleLogout()}>
            Sair
          </button>
        </div>
      </header>

      <div className="shell__body">
        <nav className={`shell__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <ul>
            {items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `shell__nav-link ${isActive ? 'is-active' : ''}`}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
<div className="shell__nav-footer">
        <p>
          <strong>{user.role === 'admin' ? 'Administrador' : user.role === 'instrutor' ? 'Instrutor' : 'Aluno'}</strong>
          <br />
          {user.email}
        </p>
        {/* No celular o cabeçalho rola junto com o menu; manter o botão
            aqui evita depender da área sensível ao toque no topo fixo. */}
        <button
          type="button"
          className="theme-toggle shell__nav-theme"
          onClick={toggle}
          aria-pressed={theme === 'escuro'}
          title={theme === 'escuro' ? 'Ativar modo claro' : 'Ativar modo noturno'}
          aria-label={theme === 'escuro' ? 'Ativar modo claro' : 'Ativar modo noturno'}
        >
          <span aria-hidden="true">{theme === 'escuro' ? '☀️' : '🌙'}</span>
        </button>
      </div>
        </nav>

        <main className="shell__main">{children}</main>
      </div>
    </div>
  );
}