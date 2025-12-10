'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { YearlyResult } from '@/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface TaxSimulatorChartProps {
  yearlyResults: YearlyResult[];
}

export function TaxSimulatorChart({
  yearlyResults,
}: TaxSimulatorChartProps) {
  const data = {
    labels: yearlyResults.map((r) => r.year.toString()),
    datasets: [
      {
        label: 'Carga PF',
        data: yearlyResults.map((r) => r.totalPf),
        backgroundColor: '#D97D54',
        borderRadius: 4,
      },
      {
        label: 'Carga PJ',
        data: yearlyResults.map((r) => r.totalPj),
        backgroundColor: '#0F4C52',
        borderRadius: 4,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            if (label && value !== null) {
              return `${label}: ${new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(value)}`;
            }
            return '';
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#e5e5e5',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-[#0F4C52]">
          Evolução da Carga Tributária (Anual)
        </h3>
        <div className="flex space-x-4 text-xs font-semibold">
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#D97D54] rounded-full mr-1"></span>
            Pessoa Física
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 bg-[#0F4C52] rounded-full mr-1"></span>
            Pessoa Jurídica
          </div>
        </div>
      </div>
      <div className="relative h-64 md:h-80 w-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
