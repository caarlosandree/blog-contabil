'use client';

import { formatCurrency } from '@/lib/utils/currency';

interface TaxSimulatorKPIsProps {
  totalPf: number;
  totalPj: number;
}

export function TaxSimulatorKPIs({
  totalPf,
  totalPj,
}: TaxSimulatorKPIsProps) {
  const winner = totalPj < totalPf ? 'PJ' : 'PF';
  const savings = Math.abs(totalPf - totalPj);
  const winnerColor = winner === 'PJ' ? 'text-[#0F4C52]' : 'text-[#D97D54]';

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#D97D54]">
        <h3 className="text-sm font-bold text-[#A9A9A9] uppercase">
          Custo Tributário Total (PF)
        </h3>
        <p className="text-2xl font-bold text-[#D97D54] mt-2">
          {formatCurrency(totalPf)}
        </p>
        <p className="text-xs text-gray-500 mt-1">Acumulado 2026-2033</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0F4C52]">
        <h3 className="text-sm font-bold text-[#A9A9A9] uppercase">
          Custo Tributário Total (PJ)
        </h3>
        <p className="text-2xl font-bold text-[#0F4C52] mt-2">
          {formatCurrency(totalPj)}
        </p>
        <p className="text-xs text-gray-500 mt-1">Acumulado 2026-2033</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#2E8B94] relative overflow-hidden">
        <div className="absolute right-0 top-0 p-2 opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 text-[#2E8B94]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-sm font-bold text-[#A9A9A9] uppercase">
          Melhor Estratégia
        </h3>
        <p className={`text-xl font-bold ${winnerColor} mt-2`}>
          {winner === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}
        </p>
        <p className="text-sm font-semibold text-[#141414] mt-1">
          Economia: <span className="text-[#2E8B94]">{formatCurrency(savings)}</span>
        </p>
      </div>
    </div>
  );
}
