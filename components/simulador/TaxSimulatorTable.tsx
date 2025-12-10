'use client';

import { formatCurrency } from '@/lib/utils/currency';
import type { YearlyResult } from '@/types';

interface TaxSimulatorTableProps {
  yearlyResults: YearlyResult[];
}

const formatPercent = (value: number): string => {
  return value.toFixed(2).replace('.', ',') + '%';
};

export function TaxSimulatorTable({
  yearlyResults,
}: TaxSimulatorTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-[#0F4C52] mb-4">
        Detalhamento Financeiro (2026 - 2033)
      </h3>

      <div className="overflow-x-auto custom-scrollbar pb-2">
        <table
          className="min-w-full text-sm text-left"
          role="table"
          aria-label="Detalhamento financeiro anual comparando PF e PJ"
        >
          <thead>
            <tr className="bg-[#F3F4F6] text-[#0F4C52] border-b-2 border-[#2E8B94]">
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap">Ano</th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap">
                Receita Total
              </th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap text-[#D97D54]">
                Funding Extra
              </th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap text-[#D97D54]">
                IRRF Funding (PF)
              </th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap text-[#D97D54]">
                GC (PF)
              </th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap text-[#D97D54]">
                IBS/CBS (PF)
              </th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap bg-orange-50 text-[#D97D54]">
                Total PF
              </th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap text-[#D97D54]">
                % Efetiva PF
              </th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap bg-teal-50 text-[#0F4C52]">
                Total PJ
              </th>
              <th scope="col" className="py-3 px-4 font-bold whitespace-nowrap text-[#0F4C52]">
                % Efetiva PJ
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {yearlyResults.map((row) => (
              <tr key={row.year} className="hover:bg-gray-50 transition" role="row">
                <th scope="row" className="py-3 px-4 font-bold text-[#141414]">
                  {row.year}
                </th>
                <td className="py-3 px-4 text-gray-600">
                  {formatCurrency(row.receitaTotal)}
                </td>
                <td className="py-3 px-4 text-gray-500 text-xs">
                  {formatCurrency(row.fundingExtra)}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {formatCurrency(row.irrfFunding)}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {formatCurrency(row.impostoGc)}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {formatCurrency(row.valorIbsCbsPf)}
                </td>
                <td className="py-3 px-4 font-bold text-[#D97D54] bg-orange-50 border-l-2 border-[#D97D54]">
                  {formatCurrency(row.totalPf)}
                </td>
                <td className="py-3 px-4 text-[#D97D54] font-semibold">
                  {formatPercent(row.effectivePf)}
                </td>
                <td className="py-3 px-4 font-bold text-[#0F4C52] bg-teal-50 border-l-2 border-[#0F4C52]">
                  {formatCurrency(row.totalPj)}
                </td>
                <td className="py-3 px-4 text-[#0F4C52] font-semibold">
                  {formatPercent(row.effectivePj)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
