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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function AssetsChart() {
  const data = {
    labels: [
      'Cartão de Crédito/Contas',
      'Veículos de Luxo',
      'Imóveis/Manutenção',
      'Viagens/Lazer',
      'Educação',
    ],
    datasets: [
      {
        label: 'Frequência Relativa (%)',
        data: [45, 25, 15, 10, 5],
        backgroundColor: '#1e3a8a',
        borderRadius: 4,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}% dos casos analisados`,
        },
      },
    },
    scales: {
      y: { beginAtZero: true, max: 60 },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold text-slate-700 mb-4">
        Tipos de Despesas Reclassificadas
      </h3>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
      <p className="text-sm text-slate-500 text-center mt-4 max-w-md">
        Gastos com cartão de crédito corporativo sem prestação de contas e
        veículos de luxo representam a maioria das autuações por confusão
        patrimonial.
      </p>
    </div>
  );
}
