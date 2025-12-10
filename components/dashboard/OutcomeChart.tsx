'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function OutcomeChart() {
  const data = {
    labels: [
      'Remuneração Indireta (IRPF + INSS)',
      'Distribuição Disfarçada (DDL)',
      'Mera Indedutibilidade (IRPJ)',
      'Decisão Favorável',
    ],
    datasets: [
      {
        data: [55, 20, 15, 10],
        backgroundColor: ['#b91c1c', '#f59e0b', '#64748b', '#10b981'],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 12, font: { size: 10 } },
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold text-[#082D31] mb-4">
        Consequência Tributária (Decisão CARF)
      </h3>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
      <p className="text-sm text-[#082D31]/70 text-center mt-4 max-w-md">
        O Fisco tende a tratar os pagamentos não como mera DDL (tributação
        exclusiva na fonte em alguns casos antigos), mas como{' '}
        <strong>Remuneração/Pró-labore</strong>, atraindo alíquotas de até 27,5%
        + Previdência.
      </p>
    </div>
  );
}
