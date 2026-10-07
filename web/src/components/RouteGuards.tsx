import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../features/auth/AuthProvider';
import type { UserRole } from '../lib/types';
import { FullPageLoader } from './ui/Loader';

export function RequireAuth({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <FullPageLoader message="Verificando sua sessão…" />;
  if (!user) return <Navigate to="/entrar" replace state={{ from: location.pathname }} />;
  return <>{children}</>;
}

export function RequireRole({ roles, children }: { roles: UserRole[]; children: ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/entrar" replace />;
  if (!roles.includes(user.role)) {
    return (
      <div className="empty-state">
        <h2>Acesso restrito</h2>
        <p>Você não possui permissão para acessar esta área da plataforma.</p>
      </div>
    );
  }
  return <>{children}</>;
}