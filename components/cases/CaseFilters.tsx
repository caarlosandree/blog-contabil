'use client';

import { clsx } from 'clsx';
import type { CaseType } from '@/types';

interface CaseFiltersProps {
  activeFilter: CaseType | 'all';
  onFilterChange: (filter: CaseType | 'all') => void;
}

const filters: Array<{ key: CaseType | 'all'; label: string }> = [
  { key: 'all', label: 'Todos' },
  { key: 'veiculos', label: 'Veículos & Imóveis' },
  { key: 'pessoais', label: 'Despesas Pessoais' },
  { key: 'lucros', label: 'Lucros Isentos' },
  { key: 'cartao', label: 'Cartão Corporativo' },
];

export function CaseFilters({ activeFilter, onFilterChange }: CaseFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-6">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={clsx(
            'px-4 py-2 rounded-full border border-blue-400 text-sm font-medium hover:bg-blue-800 transition',
            activeFilter === filter.key &&
              'bg-blue-900 text-white border-blue-900'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
