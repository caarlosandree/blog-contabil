'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils/currency';
import type { SimulatorInputs } from '@/types';
import {
  validateSimulatorInputs,
  getFieldError,
  getFieldWarning,
  type ValidationResult,
} from '@/lib/utils/simulatorValidation';
import { TaxSimulatorHelp } from './TaxSimulatorHelp';
import { TaxSimulatorHistory } from './TaxSimulatorHistory';
import { Info, Save } from 'lucide-react';
import { saveSimulation } from '@/lib/utils/simulatorStorage';
import { updateUrlWithInputs } from '@/lib/utils/simulatorUrl';

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

  const [validation, setValidation] = useState<ValidationResult>(() =>
    validateSimulatorInputs(inputs)
  );
  const [saved, setSaved] = useState(false);

  // Atualiza validação quando inputs mudam
  useEffect(() => {
    setValidation(validateSimulatorInputs(inputs));
  }, [inputs]);

  const handleSave = () => {
    saveSimulation(inputs);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    // Atualiza URL ao salvar para garantir que o link esteja atualizado
    updateUrlWithInputs(inputs);
  };

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

  const handleReset = () => {
    const defaultInputs: SimulatorInputs = {
      valorAquisicao: 500000,
      custoObra: 300000,
      valorVenda: 1200000,
      qtdImoveisAno: 2,
      lucroPfReinvestido: 200000,
      pfContribuinteIbs: false,
    };
    onInputsChange(defaultInputs);
    setValorAquisicaoInput(formatCurrency(defaultInputs.valorAquisicao));
    setCustoObraInput(formatCurrency(defaultInputs.custoObra));
    setValorVendaInput(formatCurrency(defaultInputs.valorVenda));
    setLucroPfReinvestidoInput(formatCurrency(defaultInputs.lucroPfReinvestido));
    valorAquisicaoCentsRef.current = defaultInputs.valorAquisicao * 100;
    custoObraCentsRef.current = defaultInputs.custoObra * 100;
    valorVendaCentsRef.current = defaultInputs.valorVenda * 100;
    lucroPfReinvestidoCentsRef.current = defaultInputs.lucroPfReinvestido * 100;
  };

  const getInputClassName = (
    field: keyof SimulatorInputs,
    baseClassName: string
  ): string => {
    const error = getFieldError(validation.errors, field);
    const warning = getFieldWarning(validation.warnings, field);
    
    if (error) {
      return `${baseClassName} border-red-500 focus:border-red-500 focus:ring-red-500`;
    }
    if (warning) {
      return `${baseClassName} border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500`;
    }
    return baseClassName;
  };

  return (
    <aside className="w-full md:w-80 bg-white flex flex-col shadow-xl z-20 md:h-full shrink-0 overflow-y-auto overflow-x-hidden">
      <div className="bg-[#0F4C52] p-6 text-white min-w-0 overflow-x-hidden">
        <div className="flex items-start justify-between min-w-0">
          <div>
            <h1 className="text-lg font-bold tracking-wide uppercase">
              Simulador <span className="text-[#2E8B94]">Tax</span>
            </h1>
            <p className="text-xs text-gray-300 mt-1">
              Comparativo PF vs PJ (Lucro Presumido)
            </p>
          </div>
          <div className="ml-4 flex gap-2">
            <TaxSimulatorHistory onLoadSimulation={onInputsChange} />
            <TaxSimulatorHelp />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5 flex-1 min-w-0 overflow-x-hidden">
        <h2 className="text-[#2E8B94] text-sm font-bold uppercase border-b border-[#A9A9A9] pb-2 mb-4">
          Parâmetros do Projeto
        </h2>

        <div>
          <label className="flex items-center gap-1 text-xs font-bold text-[#A9A9A9] mb-1">
            Valor Aquisição (Terreno/Imóvel)
            <span className="text-red-500">*</span>
            <span
              className="text-[#2E8B94] cursor-help"
              title="Valor pago pelo terreno ou imóvel antes da obra"
            >
              <Info className="h-3 w-3" />
            </span>
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
            className={getInputClassName(
              'valorAquisicao',
              'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] focus:ring-1 focus:ring-[#2E8B94] transition text-[#141414] font-semibold'
            )}
            placeholder="R$ 0,00"
            aria-label="Valor de aquisição do terreno ou imóvel"
            aria-describedby={getFieldError(validation.errors, 'valorAquisicao') || getFieldWarning(validation.warnings, 'valorAquisicao') ? 'valorAquisicao-error' : undefined}
          />
          {getFieldError(validation.errors, 'valorAquisicao') && (
            <p id="valorAquisicao-error" className="text-xs text-red-500 mt-1" role="alert">
              {getFieldError(validation.errors, 'valorAquisicao')}
            </p>
          )}
          {getFieldWarning(validation.warnings, 'valorAquisicao') && (
            <p className="text-xs text-yellow-600 mt-1">
              {getFieldWarning(validation.warnings, 'valorAquisicao')}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-1 text-xs font-bold text-[#A9A9A9] mb-1">
            Custo de Obra (Unitário)
            <span className="text-red-500">*</span>
            <span
              className="text-[#2E8B94] cursor-help"
              title="Custo total da construção ou reforma por unidade (materiais, mão de obra, etc.)"
            >
              <Info className="h-3 w-3" />
            </span>
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
            className={getInputClassName(
              'custoObra',
              'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] focus:ring-1 focus:ring-[#2E8B94] transition text-[#141414] font-semibold'
            )}
            placeholder="R$ 0,00"
            aria-label="Custo de obra unitário"
            aria-describedby={getFieldError(validation.errors, 'custoObra') || getFieldWarning(validation.warnings, 'custoObra') ? 'custoObra-error' : undefined}
          />
          {getFieldError(validation.errors, 'custoObra') && (
            <p id="custoObra-error" className="text-xs text-red-500 mt-1" role="alert">
              {getFieldError(validation.errors, 'custoObra')}
            </p>
          )}
          {getFieldWarning(validation.warnings, 'custoObra') && (
            <p className="text-xs text-yellow-600 mt-1">
              {getFieldWarning(validation.warnings, 'custoObra')}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-center gap-1 text-xs font-bold text-[#A9A9A9] mb-1">
            Valor de Venda (Unitário)
            <span className="text-red-500">*</span>
            <span
              className="text-[#2E8B94] cursor-help"
              title="Preço de venda de cada unidade imobiliária. Deve ser maior que o custo total para haver lucro"
            >
              <Info className="h-3 w-3" />
            </span>
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
            className={getInputClassName(
              'valorVenda',
              'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] focus:ring-1 focus:ring-[#2E8B94] transition text-[#141414] font-semibold'
            )}
            placeholder="R$ 0,00"
            aria-label="Valor de venda unitário"
            aria-describedby={getFieldError(validation.errors, 'valorVenda') || getFieldWarning(validation.warnings, 'valorVenda') ? 'valorVenda-error' : undefined}
          />
          {getFieldError(validation.errors, 'valorVenda') && (
            <p id="valorVenda-error" className="text-xs text-red-500 mt-1" role="alert">
              {getFieldError(validation.errors, 'valorVenda')}
            </p>
          )}
          {getFieldWarning(validation.warnings, 'valorVenda') && (
            <p className="text-xs text-yellow-600 mt-1">
              {getFieldWarning(validation.warnings, 'valorVenda')}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 min-w-0">
          <div className="min-w-0">
            <label className="flex items-center gap-1 text-xs font-bold text-[#A9A9A9] mb-1">
              Qtd. Imóveis/Ano
              <span className="text-red-500">*</span>
              <span
                className="text-[#2E8B94] cursor-help"
                title="Número de unidades vendidas por ano. Multiplica os valores unitários para calcular a receita total"
              >
                <Info className="h-3 w-3" />
              </span>
            </label>
            <input
              type="number"
              min="0"
              step="1"
              value={inputs.qtdImoveisAno}
              onChange={(e) =>
                handleInputChange('qtdImoveisAno', Math.max(0, parseFloat(e.target.value) || 0))
              }
              className={getInputClassName(
                'qtdImoveisAno',
                'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] transition text-[#141414] font-semibold'
              )}
              aria-label="Quantidade de imóveis por ano"
              aria-describedby={getFieldError(validation.errors, 'qtdImoveisAno') || getFieldWarning(validation.warnings, 'qtdImoveisAno') ? 'qtdImoveisAno-error' : undefined}
            />
            {getFieldError(validation.errors, 'qtdImoveisAno') && (
              <p id="qtdImoveisAno-error" className="text-xs text-red-500 mt-1" role="alert">
                {getFieldError(validation.errors, 'qtdImoveisAno')}
              </p>
            )}
            {getFieldWarning(validation.warnings, 'qtdImoveisAno') && (
              <p className="text-xs text-yellow-600 mt-1">
                {getFieldWarning(validation.warnings, 'qtdImoveisAno')}
              </p>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-[#A9A9A9]">
          <h2 className="text-[#2E8B94] text-sm font-bold uppercase mb-3">
            Funding & Perfil PF
          </h2>

          <label className="flex items-center gap-1 text-xs font-bold text-[#A9A9A9] mb-1">
            Lucro PF Reinvestido
            <span
              className="text-[#2E8B94] cursor-help"
              title="Valor do lucro de pessoa física que será reinvestido no projeto. Reduz o funding extra e o IRRF sobre funding"
            >
              <Info className="h-3 w-3" />
            </span>
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
            className={getInputClassName(
              'lucroPfReinvestido',
              'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#2E8B94] transition text-[#141414] font-semibold mb-4'
            )}
            placeholder="R$ 0,00"
            aria-label="Lucro de pessoa física reinvestido"
            aria-describedby={getFieldError(validation.errors, 'lucroPfReinvestido') || getFieldWarning(validation.warnings, 'lucroPfReinvestido') ? 'lucroPfReinvestido-error' : undefined}
          />
          {getFieldError(validation.errors, 'lucroPfReinvestido') && (
            <p id="lucroPfReinvestido-error" className="text-xs text-red-500 mt-1 mb-4" role="alert">
              {getFieldError(validation.errors, 'lucroPfReinvestido')}
            </p>
          )}
          {getFieldWarning(validation.warnings, 'lucroPfReinvestido') && (
            <p className="text-xs text-yellow-600 mt-1 mb-4">
              {getFieldWarning(validation.warnings, 'lucroPfReinvestido')}
            </p>
          )}

          <div className="flex items-center space-x-3 bg-white border border-gray-200 p-3 rounded shadow-sm">
            <input
              type="checkbox"
              id="pf_contribuinte_ibs"
              checked={inputs.pfContribuinteIbs}
              onChange={(e) =>
                handleInputChange('pfContribuinteIbs', e.target.checked)
              }
              className="w-5 h-5 text-[#0F4C52] focus:ring-[#2E8B94] border-gray-300 rounded cursor-pointer"
              aria-label="Pessoa física é contribuinte habitual de IBS/CBS"
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

      <div className="p-6 mt-auto space-y-3 min-w-0 overflow-x-hidden">
        {validation.warnings.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-yellow-800">
            <p className="font-semibold mb-1">Avisos:</p>
            <ul className="list-disc list-inside space-y-1">
              {validation.warnings.map((warning, idx) => (
                <li key={idx}>{warning.message}</li>
              ))}
            </ul>
          </div>
        )}
        {validation.errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded p-3 text-xs text-red-800">
            <p className="font-semibold mb-1">Erros:</p>
            <ul className="list-disc list-inside space-y-1">
              {validation.errors.map((error, idx) => (
                <li key={idx}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="grid grid-cols-2 gap-3 min-w-0">
          <Button
            onClick={handleSave}
            className="bg-[#2E8B94] hover:bg-[#0F4C52] text-white font-bold py-3 rounded shadow-lg transition uppercase tracking-wider text-sm"
            aria-label="Salvar simulação no histórico"
          >
            {saved ? (
              <>
                <span className="mr-2">✓</span> Salvo!
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Salvar
              </>
            )}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-[#0F4C52] text-[#0F4C52] hover:bg-[#0F4C52] hover:text-white font-bold py-3 rounded shadow-lg transition uppercase tracking-wider text-sm"
            aria-label="Resetar valores para padrão"
          >
            Resetar
          </Button>
        </div>
      </div>
    </aside>
  );
}
