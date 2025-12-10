import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TaxSimulator } from '@/components/simulador/TaxSimulator';

export const metadata: Metadata = {
  title: 'Simulador de Taxa - Plano A Contabilidade',
  description:
    'Simulador tributário comparativo entre Pessoa Física e Pessoa Jurídica (Lucro Presumido) para projetos imobiliários.',
};

export default function SimuladorTaxaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F0F7F7] text-[#082D31] antialiased">
      <Header />
      <div className="pt-16">
        <TaxSimulator />
      </div>
      <Footer />
    </div>
  );
}
