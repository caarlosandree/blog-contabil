'use client';

import { clsx } from 'clsx';
import type { Case, CaseType } from '@/types';

interface CasesGridProps {
  cases: Case[];
  filter: CaseType | 'all';
  onCaseClick: (caseData: Case) => void;
}

function getDecisionBadgeClass(decision: string): string {
  if (decision.includes('DESFAVORÁVEL')) {
    return 'bg-red-100 text-red-800';
  }
  if (decision.includes('PARCIAL')) {
    return 'bg-amber-100 text-amber-800';
  }
  if (decision.includes('FAVORÁVEL')) {
    return 'bg-green-100 text-green-800';
  }
  return 'bg-[#F0F7F7] text-[#082D31]';
}

function getDecisionLabel(decision: string): string {
  return decision.split('.')[0];
}

export function CasesGrid({ cases, filter, onCaseClick }: CasesGridProps) {
  const filteredCases =
    filter === 'all'
      ? cases
      : cases.filter((c) => c.type === filter);

  if (filteredCases.length === 0) {
    return (
      <div className="p-6 text-[#082D31]/70 col-span-2 text-center">
        Nenhum acórdão encontrado para este filtro.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#F0F7F7] bg-[#F0F7F7]">
      {filteredCases.map((item) => {
        const badgeClass = getDecisionBadgeClass(item.decision);
        const decisionLabel = getDecisionLabel(item.decision);

        return (
          <div
            key={item.id}
            className="p-6 bg-white hover:bg-[#F0F7F7] transition duration-150 ease-in-out group cursor-pointer border-b md:border-b-0 md:border-r border-[#F0F7F7] last:border-0"
            onClick={() => onCaseClick(item)}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono text-[#082D31]/50 border border-[#F0F7F7] px-2 py-1 rounded">
                {item.number}
              </span>
              <span
                className={clsx(
                  'text-xs font-bold px-2 py-1 rounded',
                  badgeClass
                )}
              >
                {decisionLabel}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#082D31] mb-2 group-hover:text-[#0F4C52] transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-[#082D31] line-clamp-2">{item.summary}</p>
            <div className="mt-4 flex items-center text-[#2E8B94] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Ver Detalhes &rarr;
            </div>
          </div>
        );
      })}
    </div>
  );
}
