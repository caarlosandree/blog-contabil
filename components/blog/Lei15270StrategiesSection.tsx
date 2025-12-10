'use client';

import { useState } from 'react';
import { clsx } from 'clsx';

interface StrategyCard {
  id: string;
  category: 'alert' | 'strategy';
  badge: string;
  badgeColor: string;
  icon: string;
  title: string;
  description: string;
  borderColor: string;
  hoverColor: string;
}

const strategies: StrategyCard[] = [
  {
    id: 'retencao',
    category: 'alert',
    badge: 'Nova Regra',
    badgeColor: 'bg-red-100 text-[#D97D54]',
    icon: '📄',
    title: 'Retenção de 10% na Fonte',
    description:
      'Empresas que distribuem mais de R$ 50 mil/mês devem reter 10% de IR. Entenda como funciona a cumulatividade mensal.',
    borderColor: 'border-[#D97D54]',
    hoverColor: 'group-hover:text-[#D97D54]',
  },
  {
    id: 'transicao',
    category: 'strategy',
    badge: 'Estratégia Ouro',
    badgeColor: 'bg-teal-100 text-[#2E8B94]',
    icon: '🛡️',
    title: 'Blindagem de Lucros 2025',
    description:
      'Como usar a Ata de Destinação até 31/12/2025 para isentar lucros contábeis mesmo que o caixa não exista hoje.',
    borderColor: 'border-[#2E8B94]',
    hoverColor: 'group-hover:text-[#2E8B94]',
  },
  {
    id: 'irpfm',
    category: 'alert',
    badge: 'Imposto Anual',
    badgeColor: 'bg-orange-100 text-[#F4B79A]',
    icon: '📊',
    title: 'O IRPF Mínimo (IRPFM)',
    description:
      'Para quem ganha acima de R$ 600 mil/ano. Como é calculado o ajuste anual e como evitar pagar a mais.',
    borderColor: 'border-[#F4B79A]',
    hoverColor: 'group-hover:text-[#F4B79A]',
  },
  {
    id: 'holding',
    category: 'strategy',
    badge: 'Estrutura',
    badgeColor: 'bg-teal-50 text-[#2E8B94]',
    icon: '🏢',
    title: 'Holding Patrimonial',
    description:
      'A nova tributação atinge apenas Pessoas Físicas. Descubra quando vale a pena criar uma Holding.',
    borderColor: 'border-[#2E8B94]',
    hoverColor: 'group-hover:text-[#2E8B94]',
  },
  {
    id: 'redutor',
    category: 'strategy',
    badge: 'Contabilidade',
    badgeColor: 'bg-gray-200 text-[#0F4C52]',
    icon: '🔢',
    title: 'O Redutor de 34%',
    description:
      'A trava contra a dupla tributação. Se sua empresa já paga muito IRPJ, você pode pagar menos na PF.',
    borderColor: 'border-[#0F4C52]',
    hoverColor: 'group-hover:text-[#0F4C52]',
  },
  {
    id: 'checklist',
    category: 'strategy',
    badge: 'Ação Imediata',
    badgeColor: 'bg-[#2E8B94] text-white',
    icon: '✓',
    title: 'Checklist Fim de Ano',
    description:
      '7 passos práticos para executar antes de 31/12/2025 e garantir sua economia tributária.',
    borderColor: 'border-[#2E8B94]',
    hoverColor: 'group-hover:text-[#2E8B94]',
  },
];

interface Lei15270StrategiesSectionProps {
  onCardClick: (id: string) => void;
}

export function Lei15270StrategiesSection({
  onCardClick,
}: Lei15270StrategiesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'alert' | 'strategy'>(
    'all'
  );
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStrategies = strategies.filter((strategy) => {
    const matchesFilter =
      activeFilter === 'all' || strategy.category === activeFilter;
    const matchesSearch =
      searchTerm === '' ||
      strategy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      strategy.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="strategies" className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4 border-b border-gray-300 pb-4">
        <div>
          <h2 className="text-3xl font-bold text-[#0F4C52]">
            Central de Estratégias
          </h2>
          <p className="text-sm text-[#A9A9A9] mt-1">
            Explore os tópicos para ver detalhes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="flex bg-white p-1 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveFilter('all')}
              className={clsx(
                'px-4 py-2 text-sm font-semibold rounded-md transition-all shadow-md',
                activeFilter === 'all'
                  ? 'bg-[#0F4C52] text-white'
                  : 'text-[#A9A9A9] hover:text-[#D97D54] hover:bg-red-50'
              )}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveFilter('alert')}
              className={clsx(
                'px-4 py-2 text-sm font-semibold rounded-md transition-all',
                activeFilter === 'alert'
                  ? 'bg-[#0F4C52] text-white'
                  : 'text-[#A9A9A9] hover:text-[#D97D54] hover:bg-red-50'
              )}
            >
              Alertas
            </button>
            <button
              onClick={() => setActiveFilter('strategy')}
              className={clsx(
                'px-4 py-2 text-sm font-semibold rounded-md transition-all',
                activeFilter === 'strategy'
                  ? 'bg-[#0F4C52] text-white'
                  : 'text-[#A9A9A9] hover:text-[#2E8B94] hover:bg-teal-50'
              )}
            >
              Soluções
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar termo..."
              className="pl-10 pr-4 py-2 rounded-lg border border-[#A9A9A9] focus:outline-none focus:border-[#0F4C52] w-full sm:w-64 text-sm"
            />
            <span className="absolute left-3 top-2.5 text-[#A9A9A9]">🔍</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStrategies.map((strategy) => (
          <div
            key={strategy.id}
            id={strategy.id === 'checklist' ? 'checklist' : undefined}
            onClick={() => onCardClick(strategy.id)}
            className={clsx(
              'content-card bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border-t-4',
              strategy.borderColor,
              'group'
            )}
          >
            <div className="flex justify-between items-start mb-4">
              <span
                className={clsx(
                  'text-xs font-bold px-2 py-1 rounded uppercase',
                  strategy.badgeColor
                )}
              >
                {strategy.badge}
              </span>
              <span
                className={clsx(
                  'text-3xl text-[#A9A9A9] transition-colors',
                  strategy.hoverColor
                )}
              >
                {strategy.icon}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#0F4C52] mb-2">
              {strategy.title}
            </h3>
            <p className="text-sm text-[#A9A9A9] mb-4 line-clamp-3">
              {strategy.description}
            </p>
            <span className="text-[#2E8B94] font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              Ler Detalhes <span>→</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
