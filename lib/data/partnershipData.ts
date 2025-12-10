import type { PartnershipItem } from '@/types';

export const partnershipItems: PartnershipItem[] = [
  {
    id: 'comissionamento',
    title: 'Modelo de Comissionamento',
    category: 'model',
    excerpt: 'O produtor é o único responsável fiscal. Ideal para centralizar a operação.',
    content: {
      what: 'O produtor é o único responsável fiscal pela venda aos clientes finais. O coprodutor é tratado como prestador de serviços.',
      advantages: [
        'Simples de operar em qualquer plataforma.',
        'Ideal para centralizar operação e faturamento.',
      ],
      observations: [
        'Receita total tributada no CNPJ do produtor.',
        'Coprodutor emite nota de serviço contra o produtor (valor líquido).',
      ],
      example: {
        title: 'Exemplo Prático',
        data: [
          { label: 'Venda Total', value: 'R$ 100,00' },
          { label: '(-) Taxas (Plataforma/Afiliado)', value: 'R$ 15,00' },
          { label: 'Base de Cálculo', value: 'R$ 85,00' },
          { label: 'Comissão Coprodutor (30%)', value: 'R$ 25,50' },
        ],
      },
    },
    borderColor: 'border-[#0F4C52]',
    badgeColor: 'bg-[#0F4C52]/10 text-[#0F4C52]',
    badgeLabel: 'Modelo 1',
  },
  {
    id: 'parceria',
    title: 'Parceria de Negócios',
    category: 'model',
    excerpt: 'Divisão de responsabilidade fiscal e jurídica. Cada um emite sua nota.',
    content: {
      what: 'Produtor e coprodutor dividem a responsabilidade. Cada um emite sua própria nota fiscal diretamente para o cliente final, proporcional à sua parte.',
      advantages: [
        'Redução de tributos (cada um paga o seu).',
        'Ideal para parcerias estratégicas de longo prazo.',
      ],
      observations: [
        'Necessita emissão automatizada (eNotas, etc).',
        'Cliente recebe múltiplas notas fiscais.',
      ],
      example: {
        title: 'Exemplo (Venda de R$ 1.165)',
        data: [
          { label: 'Especialista (82%)', value: 'R$ 955,30' },
          { label: 'Agência (18%)', value: 'R$ 209,70' },
          { label: 'Total pago pelo Cliente', value: 'R$ 1.165,00' },
        ],
      },
    },
    borderColor: 'border-[#2E8B94]',
    badgeColor: 'bg-[#2E8B94]/10 text-[#2E8B94]',
    badgeLabel: 'Modelo 2',
  },
  {
    id: 'erro-dimp',
    title: 'Erro de Configuração DIMP',
    category: 'risk',
    excerpt: 'Configurar comissionamento na plataforma mas dividir notas no emissor gera inconsistência fiscal.',
    content: {
      what: 'Se a DIMP da plataforma diz que 100% é do produtor, mas vocês dividem as notas, a conta não fecha. A Receita vai cobrar a diferença do produtor.',
    },
    borderColor: 'border-red-500',
    badgeColor: 'bg-red-100 text-red-700',
    badgeLabel: 'Risco Crítico',
  },
  {
    id: 'plataformas-ok',
    title: 'Onde fazer Parceria?',
    category: 'platform',
    excerpt: 'Hotmart, Kiwify e Hubla permitem a divisão correta ou integrações adequadas.',
    content: {
      what: 'Plataformas que suportam parceria de negócios corretamente.',
      advantages: [
        'Hotmart: Integração nativa com eNotas. DIMP com divisão proporcional correta.',
        'Kiwify: Coprodução com divisão automática. Suporta eNotas e Spedy.',
        'Hubla: Requer atenção: todos parceiros devem usar o mesmo emissor com a mesma configuração.',
      ],
    },
    borderColor: 'border-[#2E8B94]',
    badgeColor: 'bg-[#2E8B94]/10 text-[#2E8B94]',
    badgeLabel: 'Recomendadas',
  },
  {
    id: 'plataformas-nok',
    title: 'Evite Divisão Aqui',
    category: 'platform',
    excerpt: 'Eduzz, Greenn, Ticto dividem por qtde. de vendas, não valor. Gera caos contábil.',
    content: {
      what: 'O problema é o método de divisão ("Split"). Elas dividem por quantidade de vendas, não pelo valor monetário.',
      observations: [
        'Exemplo do Erro: Se houver 11 vendas e a divisão for 50/50, uma empresa receberá 6 vendas e a outra 5. Uma paga imposto a mais, a outra a menos. No longo prazo, vira uma bola de neve fiscal.',
        'Nestas plataformas, use o modelo de Comissionamento.',
      ],
    },
    borderColor: 'border-amber-500',
    badgeColor: 'bg-amber-100 text-amber-700',
    badgeLabel: 'Atenção',
  },
  {
    id: 'requisitos',
    title: 'Requisitos Fiscais',
    category: 'model',
    excerpt: 'Contratos, CNAEs e organização de documentos. O básico bem feito.',
    content: {
      what: 'Checklist obrigatório para estruturação correta de parcerias.',
      advantages: [
        'Contrato de parceria formalizado (percentuais, prazos).',
        'CNPJ e CNAE compatíveis para infoprodutos.',
        'Automação de notas fiscais configurada corretamente.',
        'Pasta compartilhada para conferência mensal de notas.',
      ],
    },
    borderColor: 'border-[#082D31]',
    badgeColor: 'bg-gray-100 text-[#082D31]',
    badgeLabel: 'Checklist',
  },
];
