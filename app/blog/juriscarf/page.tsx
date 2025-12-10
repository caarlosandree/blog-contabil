import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JuriscarfHeroSection } from '@/components/blog/JuriscarfHeroSection';
import { KPICards } from '@/components/dashboard/KPICards';
import { CriteriaPillars } from '@/components/criteria/CriteriaPillars';
import { CasesSection } from '@/components/cases/CasesSection';

const AssetsChart = dynamic(
  () => import('@/components/dashboard/AssetsChart').then((mod) => ({ default: mod.AssetsChart }))
);

const OutcomeChart = dynamic(
  () => import('@/components/dashboard/OutcomeChart').then((mod) => ({ default: mod.OutcomeChart }))
);

export const metadata = {
  title: 'JURISCARF - Confusão Patrimonial & Remuneração Indireta',
  description:
    'Relatório interativo consolidando a jurisprudência recente do CARF sobre a utilização de recursos corporativos para fins particulares.',
};

export default function JuriscarfPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F7F7] text-[#082D31] antialiased">
      <Header />
      <JuriscarfHeroSection />
      <main className="grow pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 w-full">
        <KPICards />

        <section
          id="dashboard"
          className="bg-white rounded-xl shadow-sm border border-[#F0F7F7] p-6 md:p-8"
        >
          <div className="mb-8 border-b border-[#F0F7F7] pb-4">
            <h2 className="text-2xl font-bold text-[#0F4C52]">
              Panorama das Decisões
            </h2>
            <p className="text-[#082D31] mt-2">
              Análise quantitativa baseada nos acórdãos selecionados. Observe a
              prevalência da reclassificação para &quot;Remuneração Indireta&quot;
              (incidência de INSS e IRPF Tabela Progressiva) em detrimento da
              simples glosa de despesa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AssetsChart />
            <OutcomeChart />
          </div>
        </section>

        <hr className="border-[#F0F7F7]" />

        <CriteriaPillars />

        <hr className="border-[#F0F7F7]" />

        <CasesSection />
      </main>
      <Footer />
    </div>
  );
}