/**
 * Formata um número para formato de moeda brasileira (R$)
 * @param value - Valor numérico a ser formatado
 * @returns String formatada como "R$ 1.234,56"
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Remove formatação de moeda e retorna apenas o número
 * @param value - String formatada como "R$ 1.234,56" ou "1.234,56"
 * @returns Número sem formatação
 */
export function parseCurrency(value: string): number {
  // Remove tudo exceto números (sem vírgulas ou pontos)
  // Isso garante que sempre tratamos o valor como inteiro
  const numbers = value.replace(/\D/g, '');
  
  // Se estiver vazio, retorna 0
  if (!numbers) return 0;
  
  // Converte diretamente para número
  const parsed = Number(numbers);
  return isNaN(parsed) ? 0 : parsed;
}

/**
 * Formata valor enquanto o usuário digita (formatação progressiva)
 * @param value - String digitada pelo usuário
 * @returns String formatada como "R$ 1.234,56"
 */
export function formatCurrencyInput(value: string): string {
  // Remove tudo exceto números
  const numbers = value.replace(/\D/g, '');
  
  if (!numbers) return '';
  
  // Converte para número e divide por 100 para ter centavos
  // Isso permite que o usuário digite "1234" e veja "R$ 12,34"
  const number = parseInt(numbers, 10) / 100;
  
  // Formata como moeda
  return formatCurrency(number);
}

/**
 * Formata valor de entrada de forma mais simples (sem divisão por 100)
 * Útil quando o usuário já digita o valor completo
 * Sempre extrai apenas os números da string original para evitar reformatação incorreta
 * @param value - String digitada pelo usuário (pode estar formatada ou não)
 * @returns String formatada como "R$ 1.234,56"
 */
export function formatCurrencyInputSimple(value: string): string {
  // Remove tudo exceto números - isso garante que sempre pegamos apenas os dígitos
  // mesmo se o valor já estiver formatado
  const numbers = value.replace(/\D/g, '');
  
  if (!numbers) return '';
  
  // Converte diretamente para número (sem dividir por 100)
  // Usa Number ao invés de parseInt para evitar problemas com números muito grandes
  const number = Number(numbers);
  
  // Verifica se é um número válido
  if (isNaN(number) || number < 0) return '';
  
  // Formata como moeda
  return formatCurrency(number);
}

/**
 * Extrai o valor numérico de uma string formatada para uso em cálculos
 * @param formattedValue - String formatada como "R$ 1.234,56"
 * @returns Número para cálculos
 */
export function getNumericValue(formattedValue: string): number {
  return parseCurrency(formattedValue);
}
