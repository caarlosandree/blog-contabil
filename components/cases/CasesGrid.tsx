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
      <div className="text-center py-12 text-[#082D31]">
        <p>Nenhum acórdão encontrado para este filtro.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCases.map((item) => {
        const badgeClass = getDecisionBadgeClass(item.decision);
        const decisionLabel = getDecisionLabel(item.decision);

        const getBorderColor = () => {
          if (badgeClass.includes('red')) return 'border-red-500';
          if (badgeClass.includes('amber')) return 'border-amber-500';
          if (badgeClass.includes('green')) return 'border-green-500';
          return 'border-[#2E8B94]';
        };

        return (
          <div
            key={item.id}
            className={clsx(
              'p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 group cursor-pointer border-t-4 card-hover',
              getBorderColor()
            )}
            onClick={() => onCaseClick(item)}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs font-mono text-[#082D31]/50 border border-[#F0F7F7] px-2 py-1 rounded bg-[#F0F7F7]">
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
            <p className="text-sm text-[#082D31]/70 line-clamp-2 mb-4 leading-relaxed">{item.summary}</p>
            <div className="flex items-center text-[#0F4C52] font-bold text-sm hover:underline transition">
              Ver detalhes e exemplo
              <svg
                className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
