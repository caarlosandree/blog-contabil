import type { Case } from '@/types';

export const casesData: Case[] = [
  {
    id: 1,
    number: 'Acórdão 9101-00X.XXX',
    type: 'cartao',
    title: 'Pagamento de Despesas Pessoais via Cartão Corporativo',
    summary:
      'Empresa pagava faturas de cartão de crédito em nome dos sócios. Contabilidade registrava como "Despesas Gerais".',
    fact: 'Fiscalização identificou pagamentos mensais de faturas de cartão de crédito pessoal dos sócios pela conta da PJ, somando R$ 2 mi em 3 anos.',
    fisco: 'Caracteriza confusão patrimonial e pagamento sem causa ou remuneração indireta. Deve incidir IRPF e Contribuição Previdenciária.',
    defense: 'Alegou que eram adiantamentos de lucros ou empréstimos que seriam compensados futuramente.',
    decision:
      'DESFAVORÁVEL AO CONTRIBUINTE. O CARF entendeu que, sem contrato de mútuo formalizado e sem contabilização como adiantamento à época, os valores são remuneração indireta (salário disfarçado).',
    law: 'Art. 60 do DL 1.598/77; RIR/2018; Princípio da Entidade.',
    risk: 'high',
  },
  {
    id: 2,
    number: 'Acórdão 1402-00X.XXX',
    type: 'veiculos',
    title: 'Aquisição de Veículo de Luxo (Uso Pessoal)',
    summary: 'Empresa de consultoria comprou Porsche utilizado exclusivamente pelo sócio majoritário.',
    fact: 'Compra de veículo de luxo contabilizado no ativo imobilizado, com depreciação lançada como despesa e custos de manutenção/combustível pagos pela PJ.',
    fisco: 'O bem não é necessário à atividade da empresa. A depreciação é indedutível e o valor do uso é salário in natura (Fringe Benefit).',
    defense: 'O veículo era usado para visitar clientes e representação comercial da empresa.',
    decision:
      'PARCIALMENTE DESFAVORÁVEL. Glosa da depreciação mantida (despesa indedutível no IRPJ). Discussão sobre tributação no sócio mantida como "Distribuição Disfarçada de Lucros" (DDL).',
    law: 'Art. 526 do RIR/2018 (Conceito de DDL).',
    risk: 'medium',
  },
  {
    id: 3,
    number: 'Acórdão 2401-00X.XXX',
    type: 'lucros',
    title: 'Distribuição de Lucros x Débitos Fiscais',
    summary: 'Reclassificação de lucros isentos para pró-labore tributável por falta de escrituração contábil idônea.',
    fact: 'Empresa distribuiu R$ 500 mil isentos, mas contabilidade era precária e misturava contas pessoais e empresariais (confusão patrimonial).',
    fisco: 'Não havendo contabilidade confiável que comprove o lucro real, a isenção cai. O valor excedente à presunção é tributável.',
    defense: 'A empresa tinha caixa disponível para a distribuição.',
    decision:
      'DESFAVORÁVEL. A confusão patrimonial contamina a escrituração. Sem contabilidade regular, a isenção limita-se às regras do Lucro Presumido. O excedente é tributado tabela progressiva.',
    law: 'Lei nº 9.249/95; Art. 60 DL 1.598/77.',
    risk: 'high',
  },
  {
    id: 4,
    number: 'Acórdão 1301-00X.XXX',
    type: 'pessoais',
    title: 'Pagamento de Mensalidade Escolar e Viagens',
    summary: 'PJ pagava escola dos filhos do sócio e viagens internacionais da família.',
    fact: 'Despesas lançadas como "Treinamento" e "Viagens e Estadias", mas comprovantes eram de escola infantil e pacotes turísticos Disney.',
    fisco: 'Natureza salarial dos pagamentos (salário indireto). Incidência de contribuição previdenciária e IRRF.',
    defense: 'Tentativa de caracterizar como benefícios de política de RH extensível a funcionários.',
    decision:
      'DESFAVORÁVEL. Benefício concedido apenas aos sócios/diretores caracteriza remuneração pelo trabalho (Pró-labore disfarçado).',
    law: 'Art. 43 do CTN; Lei nº 8.212/91 (Cota Patronal).',
    risk: 'high',
  },
  {
    id: 5,
    number: 'Acórdão 9202-00X.XXX',
    type: 'veiculos',
    title: 'Aeronave Corporativa',
    summary: 'Uso misto de aeronave da empresa.',
    fact: 'Fiscalização apontou uso pessoal da aeronave em finais de semana.',
    fisco: 'Tentou tributar 100% dos custos como remuneração do sócio.',
    defense: 'Apresentou diário de bordo comprovando 80% de uso em negócios.',
    decision:
      'FAVORÁVEL AO CONTRIBUINTE. Havendo prova robusta de uso preponderantemente negocial, afastou-se a confusão patrimonial integral, mantendo apenas glosas pontuais.',
    law: 'Princípio da Verdade Material.',
    risk: 'low',
  },
];
