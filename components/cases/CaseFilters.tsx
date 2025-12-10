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
    <div className="flex flex-wrap gap-2 bg-white p-1 rounded-lg shadow-sm w-fit mx-auto mt-6">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={clsx(
            'px-4 py-2 text-sm font-semibold rounded-md transition-colors',
            activeFilter === filter.key
              ? 'bg-[#0F4C52] text-white'
              : 'text-[#082D31] hover:bg-gray-100'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
