import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { api, ApiError } from '../../lib/api';
import type { User } from '../../lib/types';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<User>;
  register: (input: RegisterInput) => Promise<User>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  organization?: string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const { user: current } = await api.get<{ user: User }>('/api/auth/me');
      setUser(current);
    } catch (error) {
      if (error instanceof ApiError && (error.status === 401 || error.status === 0)) {
        setUser(null);
        return;
      }
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh().catch(() => setUser(null));
  }, [refresh]);

  const login = useCallback(async (email: string, password: string) => {
    const { user: logged } = await api.post<{ user: User }>('/api/auth/login', { email, password });
    setUser(logged);
    return logged;
  }, []);

  const register = useCallback(async (input: RegisterInput) => {
    const { user: created } = await api.post<{ user: User }>('/api/auth/register', input);
    setUser(created);
    return created;
  }, []);

  const logout = useCallback(async () => {
    try {
      await api.post('/api/auth/logout');
    } finally {
      setUser(null);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, loading, login, register, logout, refresh }),
    [user, loading, login, register, logout, refresh],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de <AuthProvider>.');
  return context;
}