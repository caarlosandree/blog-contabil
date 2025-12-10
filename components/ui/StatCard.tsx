interface StatCardProps {
  label: string;
  value: string;
  description?: string;
  valueClassName?: string;
}

export function StatCard({
  label,
  value,
  description,
  valueClassName = 'text-slate-800',
}: StatCardProps) {
  return (
    <div className="stat-card bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <p className="text-sm font-semibold text-slate-500 uppercase">{label}</p>
      <p className={`text-3xl font-bold mt-2 ${valueClassName}`}>{value}</p>
      {description && (
        <p className="text-xs text-slate-400 mt-1">{description}</p>
      )}
    </div>
  );
}
