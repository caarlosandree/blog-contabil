import { BlogCard } from './BlogCard';
import type { BlogSubject } from '@/types';

interface BlogGridProps {
  subjects: BlogSubject[];
}

export function BlogGrid({ subjects }: BlogGridProps) {
  if (subjects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600 text-lg">
          Nenhum assunto disponível no momento.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subjects.map((subject) => (
        <BlogCard key={subject.slug} subject={subject} />
      ))}
    </div>
  );
}