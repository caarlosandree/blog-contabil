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
