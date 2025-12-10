'use client';

import { useState, useEffect } from 'react';
import type { SimulatorInputs, YearlyResult } from '@/types';
import { TaxSimulatorSidebar } from './TaxSimulatorSidebar';
import { TaxSimulatorKPIs } from './TaxSimulatorKPIs';
import { TaxSimulatorChart } from './TaxSimulatorChart';
import { TaxSimulatorTable } from './TaxSimulatorTable';
import { TaxSimulatorExport } from './TaxSimulatorExport';
import { TaxSimulatorAdditionalCharts } from './TaxSimulatorAdditionalCharts';
import {
  getInitialInputsFromUrl,
  updateUrlWithInputs,
} from '@/lib/utils/simulatorUrl';
import { calculateSimulatorResults } from '@/lib/utils/simulatorCalculations';

export function TaxSimulator() {
  const [inputs, setInputs] = useState<SimulatorInputs>(() =>
    getInitialInputsFromUrl()
  );

  // Atualiza URL imediatamente ao carregar
  useEffect(() => {
    updateUrlWithInputs(inputs);
  }, []); // Apenas no mount

  // Atualiza URL quando inputs mudam (com debounce)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      updateUrlWithInputs(inputs);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputs]);

  const {
    yearlyResults,
    totalPf,
    totalPj,
    receitaTotal,
    custoTotal: custoTotalAquisicao,
    lucroBruto,
  } = calculateSimulatorResults(inputs);

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] bg-[#F0F7F7]">
      <TaxSimulatorSidebar inputs={inputs} onInputsChange={setInputs} />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
        <div className="max-w-7xl mx-auto space-y-6">
          <TaxSimulatorKPIs
            totalPf={totalPf}
            totalPj={totalPj}
            receitaTotal={receitaTotal}
            custoTotal={custoTotalAquisicao}
            lucroBruto={lucroBruto}
            yearlyResults={yearlyResults}
          />
          <TaxSimulatorExport
            yearlyResults={yearlyResults}
            totalPf={totalPf}
            totalPj={totalPj}
          />
          <TaxSimulatorChart yearlyResults={yearlyResults} />
          <TaxSimulatorAdditionalCharts yearlyResults={yearlyResults} />
          <TaxSimulatorTable yearlyResults={yearlyResults} />
        </div>
      </main>
    </div>
  );
}
