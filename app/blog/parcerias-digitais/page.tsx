import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PartnershipHeroSection } from '@/components/blog/PartnershipHeroSection';
import { PartnershipContentSection } from '@/components/blog/PartnershipContentSection';
import { PartnershipCalculator } from '@/components/blog/PartnershipCalculator';
import { partnershipItems } from '@/lib/data/partnershipData';

export const metadata = {
  title: 'Guia de Parcerias Digitais | Plano A Contabilidade',
  description:
    'Entenda a diferença crucial entre Comissionamento e Parceria de Negócios. Evite riscos fiscais, bitributação e autuações escolhendo a estrutura correta para seu infoproduto.',
};

export default function ParceriasDigitaisPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F7F7] text-[#082D31] antialiased">
      <Header />
      <PartnershipHeroSection />
      <main className="grow pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 w-full">
        <PartnershipContentSection items={partnershipItems} />

        <hr className="border-[#F0F7F7]" />

        <PartnershipCalculator />
      </main>
      <Footer />
    </div>
  );
}
