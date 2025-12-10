export type CaseType = 'cartao' | 'veiculos' | 'pessoais' | 'lucros';

export type RiskLevel = 'low' | 'medium' | 'high';

export interface Case {
  id: number;
  number: string;
  type: CaseType;
  title: string;
  summary: string;
  fact: string;
  fisco: string;
  defense: string;
  decision: string;
  law: string;
  risk: RiskLevel;
}

export type BlogCategory = 'jurisprudencia' | 'tributario' | 'contabil' | 'fiscal';

export interface BlogSubject {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  publishedAt: string;
  featured?: boolean;
}

export type GuideCategory = 'organização' | 'fiscal' | 'financeiro' | 'riscos';

export interface GuideItem {
  id: number;
  title: string;
  category: GuideCategory;
  excerpt: string;
  content: string;
}

export type PartnershipCategory = 'model' | 'risk' | 'platform';

export interface PartnershipItem {
  id: string;
  title: string;
  category: PartnershipCategory;
  excerpt: string;
  content: {
    what: string;
    advantages?: string[];
    observations?: string[];
    example?: {
      title: string;
      data: Array<{ label: string; value: string }>;
    };
  };
  borderColor: string;
  badgeColor: string;
  badgeLabel: string;
}

export interface SimulatorInputs {
  valorAquisicao: number;
  custoObra: number;
  valorVenda: number;
  qtdImoveisAno: number;
  lucroPfReinvestido: number;
  pfContribuinteIbs: boolean;
}

export interface YearlyResult {
  year: number;
  receitaTotal: number;
  fundingExtra: number;
  irrfFunding: number;
  impostoGc: number;
  valorIbsCbsPf: number;
  totalPf: number;
  effectivePf: number;
  totalPj: number;
  effectivePj: number;
}
