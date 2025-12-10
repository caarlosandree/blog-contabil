'use client';

import { useState, useRef } from 'react';
import {
  formatCurrency,
} from '@/lib/utils/currency';

export function Lei15270Calculator() {
  const [monthlyProfitInput, setMonthlyProfitInput] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  // Ref para armazenar o valor numérico em centavos (para cálculo correto)
  const centsValueRef = useRef<number>(0);

  // Converte centavos para reais
  const monthlyProfit = centsValueRef.current / 100;

  const calculateImpact = () => {
    if (monthlyProfit > 0) {
      setShowResult(true);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // Seleciona todo o texto quando o campo recebe foco
    e.target.select();
    // Reseta o valor quando foca (opcional - remove se preferir manter o valor)
    // centsValueRef.current = 0;
    // setMonthlyProfitInput('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    
    // Se o campo estiver vazio, limpa tudo
    if (!inputValue || inputValue.trim() === '') {
      centsValueRef.current = 0;
      setMonthlyProfitInput('');
      return;
    }
    
    // Remove tudo exceto números
    const numbersOnly = inputValue.replace(/\D/g, '');
    
    if (!numbersOnly) {
      centsValueRef.current = 0;
      setMonthlyProfitInput('');
      return;
    }
    
    // Converte para número (já está em centavos)
    // Exemplo: "3" = 3 centavos, "32" = 32 centavos, "321" = 3,21 reais
    const cents = Number(numbersOnly);
    
    if (isNaN(cents) || cents < 0) {
      centsValueRef.current = 0;
      setMonthlyProfitInput('');
      return;
    }
    
    // Armazena o valor em centavos
    centsValueRef.current = cents;
    
    // Converte centavos para reais e formata
    const reais = cents / 100;
    const formatted = formatCurrency(reais);
    setMonthlyProfitInput(formatted);
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
                type="text"
                inputMode="numeric"
                value={monthlyProfitInput}
                onChange={handleInputChange}
                onFocus={handleFocus}
                className="w-full p-3 rounded bg-white text-[#0F4C52] font-bold border-2 border-white focus:outline-none focus:ring-2 focus:ring-[#2E8B94] focus:border-[#2E8B94]"
                placeholder="R$ 0,00"
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
                    {formatCurrency(retention)}
                    <br />
                    <span className="text-xs font-normal text-white">
                      10% retido na fonte
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[#2E8B94]">{formatCurrency(0)}</span>
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
              <span className="font-bold">{formatCurrency(annual)}</span>
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
