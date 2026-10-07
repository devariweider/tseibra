export function ProgressBar({
  value,
  label,
  tone = 'default',
  showValue = false,
}: {
  value: number;
  label?: string;
  tone?: 'default' | 'success' | 'warning';
  showValue?: boolean;
}) {
  const percent = Math.min(100, Math.max(0, Math.round(value)));
  return (
    <div className="progress">
      {(label || showValue) && (
        <div className="progress__header">
          {label && <span className="progress__label">{label}</span>}
          {showValue && <span className="progress__value">{percent}%</span>}
        </div>
      )}
      <div
        className="progress__track"
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? 'Progresso'}
      >
        <div className={`progress__bar progress__bar--${tone}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}