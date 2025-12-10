import { StatCard } from '@/components/dashboard/StatCard';

export function KPICards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      <StatCard
        label="Risco de Autuação"
        value="Alto"
        description="Em casos de falta de comprovação documental robusta."
        valueClassName="text-red-600"
        borderColor="border-red-500"
      />
      <StatCard
        label="Tese Predominante"
        value="Salário Indireto"
        description="Reclassificação para rendimento tributável do sócio."
        valueClassName="text-[#0F4C52]"
        borderColor="border-[#2E8B94]"
      />
      <StatCard
        label="Foco da Fiscalização"
        value="Cartões & Veículos"
        description="Itens mais frequentes em autuações."
        valueClassName="text-[#082D31]"
        borderColor="border-[#2E8B94]"
      />
      <StatCard
        label="Fundamento Legal"
        value="Art. 60 DL 1.598/77"
        description="Norma geral antielisiva para DDL."
        valueClassName="text-[#082D31]"
        borderColor="border-[#0F4C52]"
      />
    </section>
  );
}
