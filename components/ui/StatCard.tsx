import { Card, CardContent } from '@/components/ui/card';

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
  valueClassName = 'text-[#082D31]',
}: StatCardProps) {
  return (
    <Card className="stat-card">
      <CardContent className="p-6">
        <p className="text-sm font-semibold text-[#082D31]/70 uppercase">{label}</p>
        <p className={`text-3xl font-bold mt-2 ${valueClassName}`}>{value}</p>
        {description && (
          <p className="text-xs text-[#082D31]/50 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
