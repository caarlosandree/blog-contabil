import Link from 'next/link';
import type { BlogSubject } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  subject: BlogSubject;
}

const categoryLabels: Record<BlogSubject['category'], string> = {
  jurisprudencia: 'Jurisprudência',
  tributario: 'Tributário',
  contabil: 'Contábil',
  fiscal: 'Fiscal',
};

const categoryVariants: Record<BlogSubject['category'], 'default' | 'secondary' | 'outline'> = {
  jurisprudencia: 'default',
  tributario: 'secondary',
  contabil: 'default',
  fiscal: 'outline',
};

export function BlogCard({ subject }: BlogCardProps) {
  const categoryLabel = categoryLabels[subject.category];
  const categoryVariant = categoryVariants[subject.category];

  return (
    <Link href={`/blog/${subject.slug}`} className="block group">
      <Card className="hover:shadow-md hover:border-[#2E8B94] transition-all duration-200 h-full">
        <CardHeader>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant={categoryVariant}>{categoryLabel}</Badge>
            {subject.featured && (
              <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                Destaque
              </Badge>
            )}
          </div>
          <h3 className="text-xl font-bold text-[#082D31] group-hover:text-[#2E8B94] transition-colors mt-2">
            {subject.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-[#082D31] leading-relaxed line-clamp-3">
            {subject.description}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between pt-2 border-t border-[#F0F7F7]">
          <span className="text-sm text-[#082D31]/70">
            {new Date(subject.publishedAt).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span className="text-sm font-medium text-[#2E8B94] group-hover:text-[#0F4C52] transition-colors">
            Ler mais →
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}