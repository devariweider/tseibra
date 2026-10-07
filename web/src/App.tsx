import { Route, Routes } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { RequireAuth, RequireRole } from './components/RouteGuards';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { CurriculumPage } from './pages/CurriculumPage';
import { LessonPage } from './pages/LessonPage';
import { ProgressPage } from './pages/ProgressPage';
import { CertificatePage } from './pages/CertificatePage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminPage } from './pages/AdminPage';
import { NotFoundPage } from './pages/NotFoundPage';

/** Rotas da área autenticada, renderizadas dentro do AppShell. */
function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route path="modulos" element={<CurriculumPage />} />
      <Route path="aula/:lessonId" element={<LessonPage />} />
      <Route path="progresso" element={<ProgressPage />} />
      <Route path="certificado" element={<CertificatePage />} />
      <Route path="perfil" element={<ProfilePage />} />
      <Route
        path="admin"
        element={
          <RequireRole roles={['admin']}>
            <AdminPage />
          </RequireRole>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/entrar" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route
        path="/*"
        element={
          <RequireAuth>
            <AppShell>
              <AuthenticatedRoutes />
            </AppShell>
          </RequireAuth>
        }
      />
    </Routes>
  );
}