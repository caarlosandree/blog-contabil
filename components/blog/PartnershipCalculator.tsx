'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';

export function PartnershipCalculator() {
  const [price, setPrice] = useState(1000);
  const [percent, setPercent] = useState(30);

  const results = useMemo(() => {
    const comProd = price;
    const comCo = price * (percent / 100);
    const parcCo = price * (percent / 100);
    const parcProd = price - parcCo;

    return {
      comProd,
      comCo,
      parcProd,
      parcCo,
    };
  }, [price, percent]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <section id="calculator" className="bg-white py-12 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0F4C52] rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-bold mb-4 text-[#2E8B94]">
              Simulador de Notas
            </h2>
            <p className="mb-6 opacity-80 text-base">
              Insira o valor do produto e a porcentagem de comissão para ver quem
              emite qual nota em cada modelo.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="calcPrice" className="block text-sm font-bold mb-2">
                  Valor da Venda (R$)
                </label>
                <input
                  id="calcPrice"
                  type="number"
                  min="0"
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
                  className="w-full p-3 rounded-lg bg-white text-[#082D31] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#2E8B94] focus:ring-offset-2 focus:ring-offset-[#0F4C52]"
                />
              </div>
              <div>
                <label htmlFor="calcPercent" className="block text-sm font-bold mb-2">
                  Comissão Coprodutor (%)
                </label>
                <input
                  id="calcPercent"
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  value={percent}
                  onChange={(e) => setPercent(parseFloat(e.target.value) || 0)}
                  className="w-full p-3 rounded-lg bg-white text-[#082D31] text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#2E8B94] focus:ring-offset-2 focus:ring-offset-[#0F4C52]"
                />
              </div>
              <Button
                onClick={() => {
                  // Força re-render se necessário, mas o useMemo já atualiza automaticamente
                }}
                className="w-full bg-[#2E8B94] text-[#0F4C52] font-bold py-3 px-6 rounded-lg hover:bg-white transition mt-4"
              >
                Calcular Cenários
              </Button>
            </div>
          </div>

          <div className="flex-1 bg-white text-[#082D31] p-6 rounded-xl w-full shadow-2xl">
            <h3 className="font-bold text-[#0F4C52] border-b border-gray-200 pb-2 mb-4">
              Resultados da Simulação
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-xs font-bold text-[#0F4C52] uppercase mb-3">
                  Comissionamento
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-[#082D31]/70 mb-1">Nota Produtor p/ Cliente:</p>
                    <p className="font-bold text-lg text-[#082D31]">
                      {formatCurrency(results.comProd)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#082D31]/70 mb-1">Nota Coprodutor p/ Produtor:</p>
                    <p className="font-bold text-lg text-[#2E8B94]">
                      {formatCurrency(results.comCo)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-xs font-bold text-[#2E8B94] uppercase mb-3">
                  Parceria de Negócios
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-[#082D31]/70 mb-1">Nota Produtor p/ Cliente:</p>
                    <p className="font-bold text-lg text-[#082D31]">
                      {formatCurrency(results.parcProd)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#082D31]/70 mb-1">Nota Coprodutor p/ Cliente:</p>
                    <p className="font-bold text-lg text-[#2E8B94]">
                      {formatCurrency(results.parcCo)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-xs text-yellow-800">
              <span className="font-semibold">ℹ</span> Valores estimados brutos. Não inclui taxas de
              plataforma ou parcelamento neste simulador simples.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
