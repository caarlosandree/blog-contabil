import type { SimulatorInputs } from '@/types';

export interface ValidationError {
  field: keyof SimulatorInputs | 'general';
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
}

/**
 * Valida os inputs do simulador
 */
export function validateSimulatorInputs(
  inputs: SimulatorInputs
): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  // Validação: valores não podem ser negativos
  if (inputs.valorAquisicao < 0) {
    errors.push({
      field: 'valorAquisicao',
      message: 'Valor de aquisição não pode ser negativo',
    });
  }

  if (inputs.custoObra < 0) {
    errors.push({
      field: 'custoObra',
      message: 'Custo de obra não pode ser negativo',
    });
  }

  if (inputs.valorVenda < 0) {
    errors.push({
      field: 'valorVenda',
      message: 'Valor de venda não pode ser negativo',
    });
  }

  if (inputs.lucroPfReinvestido < 0) {
    errors.push({
      field: 'lucroPfReinvestido',
      message: 'Lucro PF reinvestido não pode ser negativo',
    });
  }

  if (inputs.qtdImoveisAno < 0) {
    errors.push({
      field: 'qtdImoveisAno',
      message: 'Quantidade de imóveis não pode ser negativa',
    });
  }

  // Validação: valores mínimos
  if (inputs.valorAquisicao === 0 && inputs.custoObra === 0) {
    warnings.push({
      field: 'general',
      message: 'Valor de aquisição e custo de obra não podem ser ambos zero',
    });
  }

  if (inputs.valorVenda === 0) {
    warnings.push({
      field: 'valorVenda',
      message: 'Valor de venda deve ser maior que zero',
    });
  }

  if (inputs.qtdImoveisAno === 0) {
    warnings.push({
      field: 'qtdImoveisAno',
      message: 'Quantidade de imóveis deve ser maior que zero',
    });
  }

  // Validação de lógica de negócio: valor de venda deve ser maior que custo total
  const custoTotalUnitario = inputs.valorAquisicao + inputs.custoObra;
  if (inputs.valorVenda > 0 && custoTotalUnitario > 0) {
    if (inputs.valorVenda <= custoTotalUnitario) {
      warnings.push({
        field: 'valorVenda',
        message: `Valor de venda (${formatCurrency(inputs.valorVenda)}) deve ser maior que o custo total (${formatCurrency(custoTotalUnitario)}) para haver lucro`,
      });
    }
  }

  // Validação: lucro PF reinvestido não deve exceder receita total
  const receitaTotal = inputs.valorVenda * inputs.qtdImoveisAno;
  if (inputs.lucroPfReinvestido > receitaTotal) {
    warnings.push({
      field: 'lucroPfReinvestido',
      message: `Lucro PF reinvestido (${formatCurrency(inputs.lucroPfReinvestido)}) não pode exceder a receita total (${formatCurrency(receitaTotal)})`,
    });
  }

  // Validação: valores máximos razoáveis (para evitar erros de digitação)
  const MAX_VALUE = 1_000_000_000; // 1 bilhão
  if (inputs.valorAquisicao > MAX_VALUE) {
    warnings.push({
      field: 'valorAquisicao',
      message: 'Valor de aquisição parece muito alto. Verifique se está correto.',
    });
  }

  if (inputs.custoObra > MAX_VALUE) {
    warnings.push({
      field: 'custoObra',
      message: 'Custo de obra parece muito alto. Verifique se está correto.',
    });
  }

  if (inputs.valorVenda > MAX_VALUE) {
    warnings.push({
      field: 'valorVenda',
      message: 'Valor de venda parece muito alto. Verifique se está correto.',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Formata valor para exibição (função auxiliar)
 */
function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Obtém mensagem de erro para um campo específico
 */
export function getFieldError(
  errors: ValidationError[],
  field: keyof SimulatorInputs
): string | undefined {
  return errors.find((e) => e.field === field)?.message;
}

/**
 * Obtém mensagem de warning para um campo específico
 */
export function getFieldWarning(
  warnings: ValidationError[],
  field: keyof SimulatorInputs
): string | undefined {
  return warnings.find((w) => w.field === field)?.message;
}
