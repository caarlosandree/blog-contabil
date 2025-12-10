import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { blogSubjects } from '@/lib/data/blogData';

export const metadata = {
  title: 'Blog Plano A - Assuntos Contábeis',
  description:
    'Blog sobre assuntos contábeis, tributários e fiscais. Análises, jurisprudências e conteúdos especializados.',
};

export default function BlogPage() {
  const featuredSubjects = blogSubjects.filter((subject) => subject.featured);
  const regularSubjects = blogSubjects.filter((subject) => !subject.featured);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 w-full">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Blog Plano A
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Conteúdos especializados sobre assuntos contábeis, tributários e
            fiscais. Análises detalhadas, jurisprudências e insights para
            profissionais da área.
          </p>
        </section>

        {featuredSubjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Em Destaque
            </h2>
            <BlogGrid subjects={featuredSubjects} />
          </section>
        )}

        {regularSubjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Todos os Assuntos
            </h2>
            <BlogGrid subjects={regularSubjects} />
          </section>
        )}

        {blogSubjects.length === 0 && (
          <section>
            <BlogGrid subjects={blogSubjects} />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}