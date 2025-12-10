'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils/currency';
import type { SimulatorInputs } from '@/types';

interface TaxSimulatorSidebarProps {
  inputs: SimulatorInputs;
  onInputsChange: (inputs: SimulatorInputs) => void;
}

export function TaxSimulatorSidebar({
  inputs,
  onInputsChange,
}: TaxSimulatorSidebarProps) {
  const valorAquisicaoCentsRef = useRef<number>(inputs.valorAquisicao * 100);
  const custoObraCentsRef = useRef<number>(inputs.custoObra * 100);
  const valorVendaCentsRef = useRef<number>(inputs.valorVenda * 100);
  const lucroPfReinvestidoCentsRef = useRef<number>(
    inputs.lucroPfReinvestido * 100
  );

  const [valorAquisicaoInput, setValorAquisicaoInput] = useState<string>(
    formatCurrency(inputs.valorAquisicao)
  );
  const [custoObraInput, setCustoObraInput] = useState<string>(
    formatCurrency(inputs.custoObra)
  );
  const [valorVendaInput, setValorVendaInput] = useState<string>(
    formatCurrency(inputs.valorVenda)
  );
  const [lucroPfReinvestidoInput, setLucroPfReinvestidoInput] = useState<string>(
    formatCurrency(inputs.lucroPfReinvestido)
  );

  const handleInputChange = (
    field: keyof SimulatorInputs,
    value: number | boolean
  ) => {
    onInputsChange({
      ...inputs,
      [field]: value,
    });
  };

  const handleCurrencyInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    centsRef: React.MutableRefObject<number>,
    setInputState: (value: string) => void,
    field: 'valorAquisicao' | 'custoObra' | 'valorVenda' | 'lucroPfReinvestido'
  ) => {
    const inputValue = e.target.value;

    if (!inputValue || inputValue.trim() === '') {
      centsRef.current = 0;
      handleInputChange(field, 0);
      setInputState('');
      return;
    }

    const numbersOnly = inputValue.replace(/\D/g, '');

    if (!numbersOnly) {
      centsRef.current = 0;
      handleInputChange(field, 0);
      setInputState('');
      return;
    }

    const cents = Number(numbersOnly);

    if (isNaN(cents) || cents < 0) {
      centsRef.current = 0;
      handleInputChange(field, 0);
      setInputState('');
      return;
    }

    centsRef.current = cents;

    const reais = cents / 100;
    handleInputChange(field, reais);

    const formatted = formatCurrency(reais);
    setInputState(formatted);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  return (
    <aside className="w-full md:w-80 bg-white flex flex-col shadow-xl z-20 md:h-full shrink-0 overflow-y-auto">
      <div className="bg-[#0F4C52] p-6 text-white">
        <h1 className="text-lg font-bold tracking-wide uppercase">
          Simulador <span className="text-[#2E8B94]">Tax</span>
        </h1>
        <p className="text-xs text-gray-300 mt-1">
          Comparativo PF vs PJ (Lucro Presumido)
        </p>
      </div>

      <div className="p-6 space-y-5 flex-1">
        <h2 className="text-[#2E8B94] text-sm font-bold uppercase border-b border-[#A9A9A9] pb-2 mb-4">
          Parâmetros do Projeto
        </h2>

        <div>
          <label className="block text-xs font-bold text-[#A9A9A9] mb-1">
            Valor Aquisição (Terreno/Imóvel)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={valorAquisicaoInput}
            onChange={(e) =>
              handleCurrencyInputChange(
                e,
                valorAquisicaoCentsRef,
                setValorAquisicaoInput,
                'valorAquisicao'
              )
            }
            onFocus={handleFocus}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] focus:ring-1 focus:ring-[#2E8B94] transition text-[#141414] font-semibold"
            placeholder="R$ 0,00"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#A9A9A9] mb-1">
            Custo de Obra (Unitário)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={custoObraInput}
            onChange={(e) =>
              handleCurrencyInputChange(
                e,
                custoObraCentsRef,
                setCustoObraInput,
                'custoObra'
              )
            }
            onFocus={handleFocus}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] focus:ring-1 focus:ring-[#2E8B94] transition text-[#141414] font-semibold"
            placeholder="R$ 0,00"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#A9A9A9] mb-1">
            Valor de Venda (Unitário)
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={valorVendaInput}
            onChange={(e) =>
              handleCurrencyInputChange(
                e,
                valorVendaCentsRef,
                setValorVendaInput,
                'valorVenda'
              )
            }
            onFocus={handleFocus}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] focus:ring-1 focus:ring-[#2E8B94] transition text-[#141414] font-semibold"
            placeholder="R$ 0,00"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-[#A9A9A9] mb-1">
              Qtd. Imóveis/Ano
            </label>
            <input
              type="number"
              value={inputs.qtdImoveisAno}
              onChange={(e) =>
                handleInputChange('qtdImoveisAno', parseFloat(e.target.value) || 0)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] transition text-[#141414] font-semibold"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-[#A9A9A9]">
          <h2 className="text-[#2E8B94] text-sm font-bold uppercase mb-3">
            Funding & Perfil PF
          </h2>

          <label className="block text-xs font-bold text-[#A9A9A9] mb-1">
            Lucro PF Reinvestido
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={lucroPfReinvestidoInput}
            onChange={(e) =>
              handleCurrencyInputChange(
                e,
                lucroPfReinvestidoCentsRef,
                setLucroPfReinvestidoInput,
                'lucroPfReinvestido'
              )
            }
            onFocus={handleFocus}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] transition text-[#141414] font-semibold mb-4"
            placeholder="R$ 0,00"
          />

          <div className="flex items-center space-x-3 bg-white border border-gray-200 p-3 rounded shadow-sm">
            <input
              type="checkbox"
              id="pf_contribuinte_ibs"
              checked={inputs.pfContribuinteIbs}
              onChange={(e) =>
                handleInputChange('pfContribuinteIbs', e.target.checked)
              }
              className="w-5 h-5 text-[#0F4C52] focus:ring-[#2E8B94] border-gray-300 rounded cursor-pointer"
            />
            <label
              htmlFor="pf_contribuinte_ibs"
              className="text-sm font-medium text-[#141414] cursor-pointer leading-tight"
            >
              PF é contribuinte habitual? <br />
              <span className="text-[10px] text-[#D97D54]">
                (Incide IBS/CBS na PF)
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="p-6 mt-auto">
        <Button
          className="w-full bg-[#0F4C52] hover:bg-[#082D31] text-white font-bold py-3 rounded shadow-lg transition transform hover:scale-105 uppercase tracking-wider text-sm"
        >
          Recalcular Cenário
        </Button>
      </div>
    </aside>
  );
}
