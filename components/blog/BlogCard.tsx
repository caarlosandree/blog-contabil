import Link from 'next/link';
import type { BlogSubject } from '@/types';

interface BlogCardProps {
  subject: BlogSubject;
}

const categoryLabels: Record<BlogSubject['category'], string> = {
  jurisprudencia: 'Jurisprudência',
  tributario: 'Tributário',
  contabil: 'Contábil',
  fiscal: 'Fiscal',
};

const categoryColors: Record<BlogSubject['category'], string> = {
  jurisprudencia: 'bg-purple-100 text-purple-800',
  tributario: 'bg-blue-100 text-blue-800',
  contabil: 'bg-green-100 text-green-800',
  fiscal: 'bg-orange-100 text-orange-800',
};

export function BlogCard({ subject }: BlogCardProps) {
  const categoryLabel = categoryLabels[subject.category];
  const categoryColor = categoryColors[subject.category];

  return (
    <Link
      href={`/blog/${subject.slug}`}
      className="block bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all duration-200 overflow-hidden group"
    >
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-2.5 py-1 text-xs font-semibold rounded-full ${categoryColor}`}
              >
                {categoryLabel}
              </span>
              {subject.featured && (
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Destaque
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
              {subject.title}
            </h3>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed line-clamp-3">
          {subject.description}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-sm text-slate-500">
            {new Date(subject.publishedAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
            Ler mais →
          </span>
        </div>
      </div>
    </Link>
  );
}