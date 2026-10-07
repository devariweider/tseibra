import { ThemeProvider } from './features/theme/ThemeProvider';
import { AuthProvider } from './features/auth/AuthProvider';
import { ProgressProvider } from './features/progress/ProgressProvider';
import App from './App';
import './styles/global.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/**
 * Script injetado antes da renderização para definir o tema sem "flash":
 * o React hidrata depois e encontra a preferência já aplicada.
 */
function applyInitialTheme(): void {
  const STORAGE_KEY = 'tseibra:tema';
  let mode = 'sistema';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'claro' || stored === 'escuro' || stored === 'sistema') mode = stored;
  } catch {
    /* localStorage indisponível: mantém "sistema" */
  }
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  const theme = mode === 'sistema' ? (prefersDark ? 'escuro' : 'claro') : mode;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'escuro' ? '#0e1621' : '#0b3b6f';
}

applyInitialTheme();

const container = document.getElementById('root');
if (!container) throw new Error('Elemento #root não encontrado no index.html.');

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <App />
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);