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
  {
    slug: 'lei-15-270-2025',
    title: 'Lei 15.270/2025: O Novo Imposto Sobre Altas Rendas',
    description:
      'A Lei 15.270/2025 altera as regras do jogo. Entenda a retenção de 10% na fonte e o IRPFM para rendas acima de R$ 600 mil anuais. Dashboard interativo com estratégias, simulador e checklist.',
    category: 'tributario',
    publishedAt: '2025-01-01',
    featured: true,
  },
];