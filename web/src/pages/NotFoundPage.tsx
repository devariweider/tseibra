import { Link } from 'react-router-dom';
import { EmptyState } from '../components/ui/Primitives';

export function NotFoundPage() {
  return (
    <EmptyState title="Página não encontrada">
      <p>O endereço acessado não existe na plataforma.</p>
      <Link to="/" className="btn btn--primary">
        Voltar ao painel
      </Link>
    </EmptyState>
  );
}