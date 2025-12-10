'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import type { YearlyResult } from '@/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface TaxSimulatorAdditionalChartsProps {
  yearlyResults: YearlyResult[];
}

export function TaxSimulatorAdditionalCharts({
  yearlyResults,
}: TaxSimulatorAdditionalChartsProps) {
  // Gráfico de linha: Evolução da diferença PF vs PJ
  const lineData = {
    labels: yearlyResults.map((r) => r.year.toString()),
    datasets: [
      {
        label: 'Diferença (PJ - PF)',
        data: yearlyResults.map((r) => r.totalPj - r.totalPf),
        borderColor: '#2E8B94',
        backgroundColor: 'rgba(46, 139, 148, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const lineOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.parsed.y;
            const label = value >= 0 ? 'PJ é mais caro' : 'PF é mais cara';
            return `${label}: ${new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(Math.abs(value))}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: false,
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

  // Gráfico de área empilhada: Composição dos impostos PF
  const stackedAreaData = {
    labels: yearlyResults.map((r) => r.year.toString()),
    datasets: [
      {
        label: 'IRRF Funding',
        data: yearlyResults.map((r) => r.irrfFunding),
        backgroundColor: 'rgba(217, 125, 84, 0.7)',
        borderColor: '#D97D54',
        borderWidth: 1,
      },
      {
        label: 'GC (15%)',
        data: yearlyResults.map((r) => r.impostoGc),
        backgroundColor: 'rgba(217, 125, 84, 0.5)',
        borderColor: '#D97D54',
        borderWidth: 1,
      },
      {
        label: 'IBS/CBS',
        data: yearlyResults.map((r) => r.valorIbsCbsPf),
        backgroundColor: 'rgba(217, 125, 84, 0.3)',
        borderColor: '#D97D54',
        borderWidth: 1,
      },
    ],
  };

  const stackedAreaOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(value)}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        grid: {
          color: '#e5e5e5',
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Gráfico de Linha: Evolução da Diferença */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-[#0F4C52]">
            Evolução da Diferença (PJ - PF)
          </h3>
        </div>
        <div className="relative h-64 md:h-80 w-full">
          <Line data={lineData} options={lineOptions} />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Valores positivos indicam que PJ é mais caro. Valores negativos
          indicam que PF é mais cara.
        </p>
      </div>

      {/* Gráfico de Área Empilhada: Composição PF */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-[#0F4C52]">
            Composição dos Impostos (PF)
          </h3>
        </div>
        <div className="relative h-64 md:h-80 w-full">
          <Bar data={stackedAreaData} options={stackedAreaOptions} />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Breakdown dos impostos que compõem a carga tributária da PF.
        </p>
      </div>
    </div>
  );
}
