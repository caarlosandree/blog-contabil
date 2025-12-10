'use client';

import { formatCurrency } from '@/lib/utils/currency';
import type { YearlyResult } from '@/types';

interface TaxSimulatorKPIsProps {
  totalPf: number;
  totalPj: number;
  receitaTotal: number;
  custoTotal: number;
  lucroBruto: number;
  yearlyResults: YearlyResult[];
}

export function TaxSimulatorKPIs({
  totalPf,
  totalPj,
  receitaTotal,
  custoTotal,
  lucroBruto,
  yearlyResults,
}: TaxSimulatorKPIsProps) {
  const winner = totalPj < totalPf ? 'PJ' : 'PF';
  const savings = Math.abs(totalPf - totalPj);
  const winnerColor = winner === 'PJ' ? 'text-[#0F4C52]' : 'text-[#D97D54]';

  // Cálculos adicionais
  // Os impostos são acumulados para 8 anos (2026-2033), então precisamos
  // calcular os valores acumulados de receita, custo e lucro bruto para 8 anos
  const NUM_YEARS = yearlyResults.length;
  const receitaTotalAcumulada = receitaTotal * NUM_YEARS;
  const custoTotalAcumulado = custoTotal * NUM_YEARS;
  const lucroBrutoAcumulado = lucroBruto * NUM_YEARS;
  
  const lucroLiquidoPf = lucroBrutoAcumulado - totalPf;
  const lucroLiquidoPj = lucroBrutoAcumulado - totalPj;
  const margemLucroPf = receitaTotalAcumulada > 0 ? (lucroLiquidoPf / receitaTotalAcumulada) * 100 : 0;
  const margemLucroPj = receitaTotalAcumulada > 0 ? (lucroLiquidoPj / receitaTotalAcumulada) * 100 : 0;
  const roiPf = custoTotalAcumulado > 0 ? (lucroLiquidoPf / custoTotalAcumulado) * 100 : 0;
  const roiPj = custoTotalAcumulado > 0 ? (lucroLiquidoPj / custoTotalAcumulado) * 100 : 0;
  
  // Taxa efetiva média (média das taxas efetivas ao longo dos anos)
  const taxaEfetivaMediaPf = yearlyResults.reduce((acc, r) => acc + r.effectivePf, 0) / yearlyResults.length;
  const taxaEfetivaMediaPj = yearlyResults.reduce((acc, r) => acc + r.effectivePj, 0) / yearlyResults.length;

  return (
    <div className="space-y-6" role="region" aria-label="Indicadores principais do simulador">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#D97D54]" role="article" aria-label="Custo tributário total pessoa física">
          <h3 className="text-sm font-bold text-[#A9A9A9] uppercase">
            Custo Tributário Total (PF)
          </h3>
          <p className="text-2xl font-bold text-[#D97D54] mt-2" aria-label={`Custo tributário total pessoa física: ${formatCurrency(totalPf)}`}>
            {formatCurrency(totalPf)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Acumulado 2026-2033</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0F4C52]" role="article" aria-label="Custo tributário total pessoa jurídica">
          <h3 className="text-sm font-bold text-[#A9A9A9] uppercase">
            Custo Tributário Total (PJ)
          </h3>
          <p className="text-2xl font-bold text-[#0F4C52] mt-2" aria-label={`Custo tributário total pessoa jurídica: ${formatCurrency(totalPj)}`}>
            {formatCurrency(totalPj)}
          </p>
          <p className="text-xs text-gray-500 mt-1">Acumulado 2026-2033</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#2E8B94] relative overflow-hidden" role="article" aria-label="Melhor estratégia tributária">
          <div className="absolute right-0 top-0 p-2 opacity-10" aria-hidden="true">
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
          <p className={`text-xl font-bold ${winnerColor} mt-2`} aria-label={`Melhor estratégia: ${winner === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}`}>
            {winner === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}
          </p>
          <p className="text-sm font-semibold text-[#141414] mt-1">
            Economia: <span className="text-[#2E8B94]" aria-label={`Economia: ${formatCurrency(savings)}`}>{formatCurrency(savings)}</span>
          </p>
        </div>
      </div>

      {/* KPIs Adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#2E8B94]">
          <h3 className="text-xs font-bold text-[#A9A9A9] uppercase">
            Lucro Líquido (PF)
          </h3>
          <p className="text-xl font-bold text-[#D97D54] mt-1">
            {formatCurrency(lucroLiquidoPf)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Margem: {margemLucroPf.toFixed(2)}%
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#2E8B94]">
          <h3 className="text-xs font-bold text-[#A9A9A9] uppercase">
            Lucro Líquido (PJ)
          </h3>
          <p className="text-xl font-bold text-[#0F4C52] mt-1">
            {formatCurrency(lucroLiquidoPj)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Margem: {margemLucroPj.toFixed(2)}%
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#2E8B94]">
          <h3 className="text-xs font-bold text-[#A9A9A9] uppercase">
            ROI (PF)
          </h3>
          <p className="text-xl font-bold text-[#D97D54] mt-1">
            {roiPf.toFixed(2)}%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Retorno sobre investimento
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#2E8B94]">
          <h3 className="text-xs font-bold text-[#A9A9A9] uppercase">
            ROI (PJ)
          </h3>
          <p className="text-xl font-bold text-[#0F4C52] mt-1">
            {roiPj.toFixed(2)}%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Retorno sobre investimento
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#D97D54]">
          <h3 className="text-xs font-bold text-[#A9A9A9] uppercase">
            Taxa Efetiva Média (PF)
          </h3>
          <p className="text-2xl font-bold text-[#D97D54] mt-1">
            {taxaEfetivaMediaPf.toFixed(2)}%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Média da carga tributária anual
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-[#0F4C52]">
          <h3 className="text-xs font-bold text-[#A9A9A9] uppercase">
            Taxa Efetiva Média (PJ)
          </h3>
          <p className="text-2xl font-bold text-[#0F4C52] mt-1">
            {taxaEfetivaMediaPj.toFixed(2)}%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Média da carga tributária anual
          </p>
        </div>
      </div>
    </div>
  );
}
