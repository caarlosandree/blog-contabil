import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/blog/HeroSection';
import { DashboardCards } from '@/components/blog/DashboardCards';
import { ChartsSection } from '@/components/blog/ChartsSection';
import { GuideSection } from '@/components/blog/GuideSection';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { guideData } from '@/lib/data/guideData';
import { blogSubjects } from '@/lib/data/blogData';

export const metadata = {
  title: 'Blog - Plano A Contabilidade',
  description:
    'Guia interativo para organização fiscal, contábil e financeira. Transforme as diretrizes da Plano A em ações práticas para escalar seu negócio com segurança.',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased">
      <Header />
      <main className="grow pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 w-full">
        <HeroSection />

        <DashboardCards />

        <ChartsSection />

        <hr className="border-slate-200" />

        <GuideSection items={guideData} />

        {blogSubjects.length > 0 && (
          <>
            <hr className="border-slate-200" />

            <section id="materias" className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="text-2xl font-bold text-blue-900">
                  Matérias do Blog
                </h2>
              </div>
              <p className="text-slate-600 max-w-3xl">
                Análises detalhadas, jurisprudências e conteúdos especializados
                sobre assuntos contábeis, tributários e fiscais.
              </p>
              <BlogGrid subjects={blogSubjects} />
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}