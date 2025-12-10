import { StatCard } from '@/components/ui/StatCard';

export function KPICards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <StatCard
        label="Risco de Autuação"
        value="Alto"
        description="Em casos de falta de comprovação documental robusta."
        valueClassName="text-red-700"
      />
      <StatCard
        label="Tese Predominante"
        value="Salário Indireto"
        description="Reclassificação para rendimento tributável do sócio."
        valueClassName="text-blue-900"
      />
      <StatCard
        label="Foco da Fiscalização"
        value="Cartões & Veículos"
        description="Itens mais frequentes em autuações."
        valueClassName="text-slate-800"
      />
      <StatCard
        label="Fundamento Legal"
        value="Art. 60 DL 1.598/77"
        description="Norma geral antielisiva para DDL."
        valueClassName="text-slate-800"
      />
    </section>
  );
}
