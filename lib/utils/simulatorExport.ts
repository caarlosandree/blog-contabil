import type { YearlyResult } from '@/types';
import { formatCurrency } from './currency';

/**
 * Exporta os resultados para CSV
 */
export function exportToCSV(
  yearlyResults: YearlyResult[],
  totalPf: number,
  totalPj: number
): void {
  const headers = [
    'Ano',
    'Receita Total',
    'Funding Extra',
    'IRRF Funding (PF)',
    'GC (PF)',
    'IBS/CBS (PF)',
    'Total PF',
    '% Efetiva PF',
    'Total PJ',
    '% Efetiva PJ',
  ];

  const rows = yearlyResults.map((row) => [
    row.year.toString(),
    formatCurrency(row.receitaTotal),
    formatCurrency(row.fundingExtra),
    formatCurrency(row.irrfFunding),
    formatCurrency(row.impostoGc),
    formatCurrency(row.valorIbsCbsPf),
    formatCurrency(row.totalPf),
    `${row.effectivePf.toFixed(2)}%`,
    formatCurrency(row.totalPj),
    `${row.effectivePj.toFixed(2)}%`,
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map((row) => row.join(',')),
    '',
    'Resumo',
    `Custo Tributário Total PF,${formatCurrency(totalPf)}`,
    `Custo Tributário Total PJ,${formatCurrency(totalPj)}`,
    `Economia,${formatCurrency(Math.abs(totalPf - totalPj))}`,
  ].join('\n');

  const blob = new Blob(['\ufeff' + csvContent], {
    type: 'text/csv;charset=utf-8;',
  });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `simulador-taxa-${new Date().toISOString().split('T')[0]}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Copia o link compartilhável para a área de transferência
 */
export async function copyShareableLink(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(window.location.href);
    return true;
  } catch (err) {
    // Fallback para navegadores mais antigos
    const textArea = document.createElement('textarea');
    textArea.value = window.location.href;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
}

/**
 * Gera um relatório em texto formatado
 */
export function generateTextReport(
  yearlyResults: YearlyResult[],
  totalPf: number,
  totalPj: number
): string {
  const winner = totalPj < totalPf ? 'PJ' : 'PF';
  const savings = Math.abs(totalPf - totalPj);

  let report = '=== SIMULADOR DE TAXA - RELATÓRIO ===\n\n';
  report += `Data: ${new Date().toLocaleDateString('pt-BR')}\n\n`;
  report += '=== RESUMO ===\n';
  report += `Custo Tributário Total (PF): ${formatCurrency(totalPf)}\n`;
  report += `Custo Tributário Total (PJ): ${formatCurrency(totalPj)}\n`;
  report += `Melhor Estratégia: ${winner === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}\n`;
  report += `Economia: ${formatCurrency(savings)}\n\n`;
  report += '=== DETALHAMENTO ANUAL ===\n\n';

  yearlyResults.forEach((row) => {
    report += `Ano ${row.year}:\n`;
    report += `  Receita Total: ${formatCurrency(row.receitaTotal)}\n`;
    report += `  Funding Extra: ${formatCurrency(row.fundingExtra)}\n`;
    report += `  IRRF Funding (PF): ${formatCurrency(row.irrfFunding)}\n`;
    report += `  GC (PF): ${formatCurrency(row.impostoGc)}\n`;
    report += `  IBS/CBS (PF): ${formatCurrency(row.valorIbsCbsPf)}\n`;
    report += `  Total PF: ${formatCurrency(row.totalPf)} (${row.effectivePf.toFixed(2)}%)\n`;
    report += `  Total PJ: ${formatCurrency(row.totalPj)} (${row.effectivePj.toFixed(2)}%)\n\n`;
  });

  return report;
}

/**
 * Exporta o relatório como arquivo de texto
 */
export function exportToText(
  yearlyResults: YearlyResult[],
  totalPf: number,
  totalPj: number
): void {
  const report = generateTextReport(yearlyResults, totalPf, totalPj);
  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `simulador-taxa-${new Date().toISOString().split('T')[0]}.txt`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
