'use client';

import { useState } from 'react';
import type { SimulatorInputs, YearlyResult } from '@/types';
import { TaxSimulatorSidebar } from './TaxSimulatorSidebar';
import { TaxSimulatorKPIs } from './TaxSimulatorKPIs';
import { TaxSimulatorChart } from './TaxSimulatorChart';
import { TaxSimulatorTable } from './TaxSimulatorTable';

const YEARS = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];

const RATES = {
  pf_ibs: {
    2026: 0,
    2027: 0.0425,
    2028: 0.0425,
    2029: 0.05175,
    2030: 0.061,
    2031: 0.07025,
    2032: 0.0795,
    2033: 0.135,
  },
  pj_total: {
    2026: 0.0673,
    2027: 0.0733,
    2028: 0.0733,
    2029: 0.08255,
    2030: 0.0918,
    2031: 0.10105,
    2032: 0.1103,
    2033: 0.1658,
  },
};

export function TaxSimulator() {
  const [inputs, setInputs] = useState<SimulatorInputs>({
    valorAquisicao: 500000,
    custoObra: 300000,
    valorVenda: 1200000,
    qtdImoveisAno: 2,
    lucroPfReinvestido: 200000,
    pfContribuinteIbs: false,
  });

  const calculateResults = (): {
    yearlyResults: YearlyResult[];
    totalPf: number;
    totalPj: number;
  } => {
    const custoTotalAquisicao =
      (inputs.valorAquisicao + inputs.custoObra) * inputs.qtdImoveisAno;
    const receitaTotal = inputs.valorVenda * inputs.qtdImoveisAno;
    const lucroBruto = receitaTotal - custoTotalAquisicao;
    const fundingExtra = Math.max(
      0,
      custoTotalAquisicao - inputs.lucroPfReinvestido
    );

    const yearlyResults: YearlyResult[] = [];
    let totalPf = 0;
    let totalPj = 0;

    YEARS.forEach((year) => {
      // PF Scenario
      const irrfFunding = fundingExtra * 0.1;
      const impostoGc = lucroBruto * 0.15;
      const rateIbsPf = inputs.pfContribuinteIbs
        ? RATES.pf_ibs[year as keyof typeof RATES.pf_ibs]
        : 0;
      const valorIbsCbsPf = receitaTotal * rateIbsPf;
      const totalPfYear = irrfFunding + impostoGc + valorIbsCbsPf;
      const effectivePf =
        receitaTotal > 0 ? (totalPfYear / receitaTotal) * 100 : 0;

      // PJ Scenario
      const ratePj =
        RATES.pj_total[year as keyof typeof RATES.pj_total];
      const totalPjYear = receitaTotal * ratePj;
      const effectivePj = ratePj * 100;

      totalPf += totalPfYear;
      totalPj += totalPjYear;

      yearlyResults.push({
        year,
        receitaTotal,
        fundingExtra,
        irrfFunding,
        impostoGc,
        valorIbsCbsPf,
        totalPf: totalPfYear,
        effectivePf,
        totalPj: totalPjYear,
        effectivePj,
      });
    });

    return { yearlyResults, totalPf, totalPj };
  };

  const { yearlyResults, totalPf, totalPj } = calculateResults();

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] bg-[#F0F7F7]">
      <TaxSimulatorSidebar inputs={inputs} onInputsChange={setInputs} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div className="max-w-7xl mx-auto space-y-6">
          <TaxSimulatorKPIs totalPf={totalPf} totalPj={totalPj} />
          <TaxSimulatorChart yearlyResults={yearlyResults} />
          <TaxSimulatorTable yearlyResults={yearlyResults} />
        </div>
      </main>
    </div>
  );
}
