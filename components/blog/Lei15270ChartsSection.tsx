'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function Lei15270ChartsSection() {
  // Chart 1: Retention Comparison
  const retentionData = {
    labels: ['R$ 40.000 (Mensal)', 'R$ 70.000 (Mensal)'],
    datasets: [
      {
        label: 'Valor Líquido',
        data: [40000, 63000],
        backgroundColor: '#0F4C52',
      },
      {
        label: 'Imposto Retido (Perdido)',
        data: [0, 7000],
        backgroundColor: '#D97D54',
      },
    ],
  };

  const retentionOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  };

  // Chart 2: IRPFM Curve
  const irpfmData = {
    labels: ['0', '600k', '900k', '1.2M', '1.5M', '2M'],
    datasets: [
      {
        label: 'Alíquota Efetiva (%)',
        data: [0, 0, 5, 10, 10, 10],
        borderColor: '#2E8B94',
        backgroundColor: 'rgba(46, 139, 148, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const irpfmOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 12,
        title: {
          display: true,
          text: 'Imposto (%)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section id="analysis" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-[#0F4C52] mb-2 border-l-8 border-[#2E8B94] pl-4">
        Impacto Visual
      </h2>
      <p className="text-[#A9A9A9] mb-8 pl-6">
        Entenda como a tributação progressiva afeta seus rendimentos.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg text-[#0F4C52] mb-4 flex items-center gap-2">
            <span className="text-[#2E8B94]">📊</span> Comparativo de
            Distribuição Mensal
          </h3>
          <div className="relative w-full h-72">
            <Bar data={retentionData} options={retentionOptions} />
          </div>
          <p className="text-xs text-[#A9A9A9] mt-4 text-center">
            Distribuir acima de R$ 50k gera retenção imediata de 10% sobre o
            total.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="font-bold text-lg text-[#0F4C52] mb-4 flex items-center gap-2">
            <span className="text-[#D97D54]">📈</span> Curva Progressiva IRPFM
          </h3>
          <div className="relative w-full h-72">
            <Line data={irpfmData} options={irpfmOptions} />
          </div>
          <p className="text-xs text-[#A9A9A9] mt-4 text-center">
            A alíquota efetiva sobe conforme a renda anual aumenta (Teto de 10%
            acima de 1.2M).
          </p>
        </div>
      </div>
    </section>
  );
}
