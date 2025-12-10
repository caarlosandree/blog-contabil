import dynamic from 'next/dynamic';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Lei15270HeroSection } from '@/components/blog/Lei15270HeroSection';
import { Lei15270StatsCards } from '@/components/blog/Lei15270StatsCards';

const Lei15270ChartsSection = dynamic(
  () =>
    import('@/components/blog/Lei15270ChartsSection').then((mod) => ({
      default: mod.Lei15270ChartsSection,
    }))
);

const Lei15270PageWrapper = dynamic(
  () =>
    import('@/components/blog/Lei15270PageWrapper').then((mod) => ({
      default: mod.Lei15270PageWrapper,
    }))
);

const Lei15270Calculator = dynamic(
  () =>
    import('@/components/blog/Lei15270Calculator').then((mod) => ({
      default: mod.Lei15270Calculator,
    }))
);

export const metadata = {
  title: 'Lei 15.270/2025: O Novo Imposto Sobre Altas Rendas | Dashboard Interativo',
  description:
    'A Lei 15.270/2025 altera as regras do jogo. Entenda a retenção de 10% na fonte e o IRPFM para rendas acima de R$ 600 mil anuais. Dashboard interativo com estratégias, simulador e checklist.',
};

export default function Lei15270Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#DCDCDC] text-[#141414] antialiased">
      <Header />
      <Lei15270HeroSection />
      <main className="grow">
        <Lei15270StatsCards />
        <Lei15270ChartsSection />
        <Lei15270PageWrapper />
        <Lei15270Calculator />
      </main>
      <Footer />
    </div>
  );
}
