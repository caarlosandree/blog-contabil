import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface StatCardProps {
  label: string;
  value: string;
  description?: string;
  valueClassName?: string;
  borderColor?: string;
}

export function StatCard({
  label,
  value,
  description,
  valueClassName = 'text-[#082D31]',
  borderColor = 'border-[#2E8B94]',
}: StatCardProps) {
  return (
    <Card className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-t-4 ${borderColor} card-hover`}>
      <CardHeader>
        <p className="text-sm font-semibold text-[#082D31]/70 uppercase">{label}</p>
      </CardHeader>
      <CardContent>
        <p className={`text-3xl font-bold ${valueClassName}`}>{value}</p>
        {description && (
          <p className="text-sm text-[#082D31] mt-2">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
