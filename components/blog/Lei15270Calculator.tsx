'use client';

import { useState } from 'react';

export function Lei15270Calculator() {
  const [monthlyProfit, setMonthlyProfit] = useState<number>(0);
  const [showResult, setShowResult] = useState(false);

  const calculateImpact = () => {
    if (monthlyProfit > 0) {
      setShowResult(true);
    }
  };

  const annual = monthlyProfit * 12;
  const retention = monthlyProfit > 50000 ? monthlyProfit * 0.1 : 0;

  let statusText = '';
  let statusColor = '';
  let adviceText = '';

  if (annual <= 600000) {
    statusText = 'ISENTO';
    statusColor = 'text-[#2E8B94]';
    adviceText =
      'Você está na zona segura! Mantenha suas retiradas mensais abaixo de 50 mil para evitar burocracia.';
  } else if (annual <= 1200000) {
    statusText = 'TRIBUTAÇÃO PROGRESSIVA (0% a 10%)';
    statusColor = 'text-[#F4B79A]';
    adviceText =
      'Atenção: Você pagará imposto no ajuste anual. Se houve retenção mensal, poderá abater.';
  } else {
    statusText = 'TETO MÁXIMO (10%)';
    statusColor = 'text-[#D97D54]';
    adviceText =
      'Alerta Vermelho: Considere criar uma Holding ou verificar o Redutor de 34% urgentemente.';
  }

  return (
    <section className="bg-[#0F4C52] py-12 text-white mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Simulador Rápido 2026</h2>
          <p className="text-[#F0F7F7] mb-6">
            Insira seus dados estimados para 2026 e veja se você será impactado
            pela nova lei.
          </p>

          <div className="grid gap-4">
            <div>
              <label className="block text-xs font-bold uppercase mb-1 text-[#2E8B94]">
                Lucro Mensal Pretendido (R$)
              </label>
              <input
                type="number"
                value={monthlyProfit || ''}
                onChange={(e) => setMonthlyProfit(Number(e.target.value))}
                className="w-full p-3 rounded bg-white text-[#0F4C52] font-bold border-2 border-white focus:outline-none focus:ring-2 focus:ring-[#2E8B94] focus:border-[#2E8B94]"
                placeholder="Ex: 60000"
              />
            </div>
          </div>
          <button
            onClick={calculateImpact}
            className="mt-6 bg-[#2E8B94] text-[#0F4C52] font-bold px-6 py-3 rounded hover:bg-white transition w-full md:w-auto"
          >
            Calcular Impacto
          </button>
        </div>

        {showResult && (
          <div className="md:w-1/2 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
              Resultado Estimado
            </h3>

            <div className="flex justify-between items-center mb-3">
              <span>Retenção Mensal:</span>
              <div className="font-bold text-[#D97D54]">
                {retention > 0 ? (
                  <>
                    R$ {retention.toLocaleString('pt-BR')}
                    <br />
                    <span className="text-xs font-normal text-white">
                      10% retido na fonte
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[#2E8B94]">R$ 0,00</span>
                    <br />
                    <span className="text-xs font-normal text-white">
                      Isento na fonte
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span>Total Anual:</span>
              <span className="font-bold">
                R$ {annual.toLocaleString('pt-BR')}
              </span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span>Status IRPFM:</span>
              <span className={`font-bold ${statusColor}`}>{statusText}</span>
            </div>
            <div className="mt-4 p-3 bg-white/10 rounded text-sm italic">
              {adviceText}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
