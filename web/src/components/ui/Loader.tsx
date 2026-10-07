export function FullPageLoader({ message }: { message?: string }) {
  return (
    <div className="fullpage-loader" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true" />
      <p>{message ?? 'Carregando…'}</p>
    </div>
  );
}

export function InlineLoader({ label }: { label?: string }) {
  return (
    <div className="inline-loader" role="status">
      <div className="spinner spinner--sm" aria-hidden="true" />
      <span>{label ?? 'Carregando…'}</span>
    </div>
  );
}