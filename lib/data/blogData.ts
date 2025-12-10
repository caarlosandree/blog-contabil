import type { BlogSubject } from '@/types';

export const blogSubjects: BlogSubject[] = [
  {
    slug: 'juriscarf',
    title: 'Confusão Patrimonial & Remuneração Indireta',
    description:
      'Análise interativa consolidando a jurisprudência recente do CARF sobre a utilização de recursos corporativos para fins particulares. O foco está na reclassificação fiscal de despesas "operacionais" para Remuneração Indireta ou Distribuição Disfarçada de Lucros (DDL).',
    category: 'jurisprudencia',
    publishedAt: '2024-01-15',
    featured: true,
  },
  {
    slug: 'parcerias-digitais',
    title: 'Guia de Parcerias Digitais',
    description:
      'Entenda a diferença crucial entre Comissionamento e Parceria de Negócios. Evite riscos fiscais, bitributação e autuações escolhendo a estrutura correta para seu infoproduto.',
    category: 'fiscal',
    publishedAt: '2024-01-20',
    featured: true,
  },
];