'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function ChartsSection() {
  const pricingData = {
    labels: [
      'Impostos (Total)',
      'Taxas Plataforma',
      'Comissões/Parceiros',
      'Lucro Real',
    ],
    datasets: [
      {
        data: [15, 10, 30, 45],
        backgroundColor: ['#b91c1c', '#f59e0b', '#64748b', '#10b981'],
        borderWidth: 0,
      },
    ],
  };

  const pricingOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', labels: { usePointStyle: true } },
    },
  };

  const taxData = {
    labels: [
      'Lucro Distribuído (Correto)',
      'Pró-Labore',
      'Sem Contabilidade (Risco)',
    ],
    datasets: [
      {
        label: 'Imposto Aproximado (%)',
        data: [0, 27.5, 53.8],
        backgroundColor: ['#10b981', '#1e3a8a', '#b91c1c'],
        borderRadius: 4,
      },
    ],
  };

  const taxOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true, max: 60 },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F0F7F7]">
        <h3 className="text-lg font-bold text-[#0F4C52] mb-2">
          Composição de Preço (Exemplo)
        </h3>
        <p className="text-sm text-[#082D31] mb-6">
          Muitos produtores esquecem os custos ocultos. O lucro real é menor que
          o valor da venda.
        </p>
        <div className="chart-container" style={{ height: '300px' }}>
          <Doughnut data={pricingData} options={pricingOptions} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F0F7F7]">
        <h3 className="text-lg font-bold text-[#0F4C52] mb-2">
          Impacto Tributário: Pró-labore vs Lucro
        </h3>
        <p className="text-sm text-[#082D31] mb-6">
          A importância de ter a contabilidade em dia para isenção de impostos
          na distribuição de lucro.
        </p>
        <div className="chart-container" style={{ height: '300px' }}>
          <Bar data={taxData} options={taxOptions} />
        </div>
      </div>
    </section>
  );
}
