import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type ThemeMode = 'claro' | 'escuro' | 'sistema';
export type ResolvedTheme = 'claro' | 'escuro';

const STORAGE_KEY = 'tseibra:tema';

interface ThemeContextValue {
  /** Preferência escolhida pelo usuário (pode ser "sistema"). */
  mode: ThemeMode;
  /** Tema efetivamente aplicado. */
  theme: ResolvedTheme;
  /** Verdadeiro quando segue a preferência do sistema operacional. */
  followsSystem: boolean;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredMode(): ThemeMode {
  if (typeof window === 'undefined') return 'sistema';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'claro' || stored === 'escuro' || stored === 'sistema') return stored;
  } catch {
    // localStorage indisponível (modo privado): usa a preferência do sistema.
  }
  return 'sistema';
}

function prefersDark(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function resolve(mode: ThemeMode): ResolvedTheme {
  if (mode === 'claro' || mode === 'escuro') return mode;
  return prefersDark() ? 'escuro' : 'claro';
}

/** Mantém o atributo e a cor da barra do navegador alinhados ao tema. */
function applyTheme(theme: ResolvedTheme): void {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'escuro' ? '#0e1621' : '#0b3b6f';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode);
  const [theme, setTheme] = useState<ResolvedTheme>(() => resolve(readStoredMode()));

  // Aplica o tema no primeiro render para evitar "flash" de tema incorreto.
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Acompanha a mudança do tema do sistema operacional enquanto em modo "sistema".
  useEffect(() => {
    if (mode !== 'sistema') return;
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent): void => setTheme(event.matches ? 'escuro' : 'claro');
    query.addEventListener('change', handleChange);
    return () => query.removeEventListener('change', handleChange);
  }, [mode]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    setTheme(resolve(next));
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Persistência indisponível: a preferência vale apenas para a sessão.
    }
  }, []);

  const toggle = useCallback(() => {
    setMode(theme === 'escuro' ? 'claro' : 'escuro');
  }, [theme, setMode]);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, theme, followsSystem: mode === 'sistema', setMode, toggle }),
    [mode, theme, setMode, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme deve ser usado dentro de <ThemeProvider>.');
  return context;
}