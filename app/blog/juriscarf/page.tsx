import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Confusão Patrimonial & Remuneração Indireta
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Este relatório interativo consolida a jurisprudência recente do CARF
            sobre a utilização de recursos corporativos para fins particulares. O
            foco está na reclassificação fiscal de despesas &quot;operacionais&quot; para{' '}
            <strong>Remuneração Indireta</strong> ou{' '}
            <strong>Distribuição Disfarçada de Lucros (DDL)</strong>, impactando
            IRPF (sócios), IRPJ e Contribuições Previdenciárias.
          </p>
        </section>

        <KPICards />

        <section
          id="dashboard"
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8"
        >
          <div className="mb-8 border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Panorama das Decisões
            </h2>
            <p className="text-slate-600 mt-2">
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

        <CriteriaPillars />

        <CasesSection />
      </main>
      <Footer />
    </div>
  );
}