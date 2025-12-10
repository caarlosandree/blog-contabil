import type { YearlyResult, SimulatorInputs } from '@/types';
import { formatCurrency } from './currency';
import { calculateSimulatorResults } from './simulatorCalculations';

/**
 * Exporta os resultados para CSV
 */
export function exportToCSV(
  yearlyResults: YearlyResult[],
  totalPf: number,
  totalPj: number,
  filename?: string
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
  link.setAttribute('download', filename || `simulador-taxa-${new Date().toISOString().split('T')[0]}.csv`);
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
  } catch {
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
    } catch {
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
  totalPj: number,
  filename?: string
): void {
  const report = generateTextReport(yearlyResults, totalPf, totalPj);
  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', filename || `simulador-taxa-${new Date().toISOString().split('T')[0]}.txt`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Exporta relatório a partir dos inputs (para histórico)
 */
export function exportFromInputs(
  inputs: SimulatorInputs,
  simulationName?: string
): void {
  const results = calculateSimulatorResults(inputs);
  const name = simulationName || 'simulacao';
  const sanitizedName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const date = new Date().toISOString().split('T')[0];
  
  exportToCSV(results.yearlyResults, results.totalPf, results.totalPj, `${sanitizedName}-${date}`);
}

/**
 * Exporta relatório em texto a partir dos inputs (para histórico)
 */
export function exportTextFromInputs(
  inputs: SimulatorInputs,
  simulationName?: string
): void {
  const results = calculateSimulatorResults(inputs);
  const name = simulationName || 'simulacao';
  const sanitizedName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const date = new Date().toISOString().split('T')[0];
  
  exportToText(results.yearlyResults, results.totalPf, results.totalPj, `${sanitizedName}-${date}`);
}

/**
 * Gera relatório completo com informações dos inputs
 */
export function generateDetailedReport(
  inputs: SimulatorInputs,
  simulationName?: string,
  createdAt?: string
): string {
  const results = calculateSimulatorResults(inputs);
  const winner = results.totalPj < results.totalPf ? 'PJ' : 'PF';
  const savings = Math.abs(results.totalPf - results.totalPj);
  
  // Os impostos são acumulados para 8 anos (2026-2033), então precisamos
  // calcular os valores acumulados de receita, custo e lucro bruto para 8 anos
  const NUM_YEARS = results.yearlyResults.length;
  const receitaTotalAcumulada = results.receitaTotal * NUM_YEARS;
  const custoTotalAcumulado = results.custoTotal * NUM_YEARS;
  const lucroBrutoAcumulado = results.lucroBruto * NUM_YEARS;
  
  const lucroLiquidoPf = lucroBrutoAcumulado - results.totalPf;
  const lucroLiquidoPj = lucroBrutoAcumulado - results.totalPj;
  const margemLucroPf = receitaTotalAcumulada > 0 ? (lucroLiquidoPf / receitaTotalAcumulada) * 100 : 0;
  const margemLucroPj = receitaTotalAcumulada > 0 ? (lucroLiquidoPj / receitaTotalAcumulada) * 100 : 0;
  const roiPf = custoTotalAcumulado > 0 ? (lucroLiquidoPf / custoTotalAcumulado) * 100 : 0;
  const roiPj = custoTotalAcumulado > 0 ? (lucroLiquidoPj / custoTotalAcumulado) * 100 : 0;

  let report = '=== SIMULADOR DE TAXA - RELATÓRIO DETALHADO ===\n\n';
  
  if (simulationName) {
    report += `Simulação: ${simulationName}\n`;
  }
  if (createdAt) {
    report += `Data de Criação: ${new Date(createdAt).toLocaleString('pt-BR')}\n`;
  }
  report += `Data do Relatório: ${new Date().toLocaleString('pt-BR')}\n\n`;
  
  report += '=== PARÂMETROS DO PROJETO ===\n';
  report += `Valor de Aquisição: ${formatCurrency(inputs.valorAquisicao)}\n`;
  report += `Custo de Obra (Unitário): ${formatCurrency(inputs.custoObra)}\n`;
  report += `Valor de Venda (Unitário): ${formatCurrency(inputs.valorVenda)}\n`;
  report += `Quantidade de Imóveis/Ano: ${inputs.qtdImoveisAno}\n`;
  report += `Lucro PF Reinvestido: ${formatCurrency(inputs.lucroPfReinvestido)}\n`;
  report += `PF Contribuinte Habitual (IBS/CBS): ${inputs.pfContribuinteIbs ? 'Sim' : 'Não'}\n\n`;
  
  report += '=== RESUMO FINANCEIRO ===\n';
  report += `Receita Total: ${formatCurrency(results.receitaTotal)}\n`;
  report += `Custo Total: ${formatCurrency(results.custoTotal)}\n`;
  report += `Lucro Bruto: ${formatCurrency(results.lucroBruto)}\n\n`;
  
  report += '=== RESUMO TRIBUTÁRIO ===\n';
  report += `Custo Tributário Total (PF): ${formatCurrency(results.totalPf)}\n`;
  report += `Custo Tributário Total (PJ): ${formatCurrency(results.totalPj)}\n`;
  report += `Melhor Estratégia: ${winner === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}\n`;
  report += `Economia: ${formatCurrency(savings)}\n\n`;
  
  report += '=== INDICADORES ADICIONAIS ===\n';
  report += `Lucro Líquido (PF): ${formatCurrency(lucroLiquidoPf)}\n`;
  report += `Lucro Líquido (PJ): ${formatCurrency(lucroLiquidoPj)}\n`;
  report += `Margem de Lucro (PF): ${margemLucroPf.toFixed(2)}%\n`;
  report += `Margem de Lucro (PJ): ${margemLucroPj.toFixed(2)}%\n`;
  report += `ROI (PF): ${roiPf.toFixed(2)}%\n`;
  report += `ROI (PJ): ${roiPj.toFixed(2)}%\n\n`;
  
  report += '=== DETALHAMENTO ANUAL ===\n\n';
  results.yearlyResults.forEach((row) => {
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
 * Exporta relatório detalhado a partir dos inputs
 */
export function exportDetailedReportFromInputs(
  inputs: SimulatorInputs,
  simulationName?: string,
  createdAt?: string
): void {
  const report = generateDetailedReport(inputs, simulationName, createdAt);
  const name = simulationName || 'simulacao';
  const sanitizedName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
  const date = new Date().toISOString().split('T')[0];
  
  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `relatorio-${sanitizedName}-${date}.txt`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Exporta todo o histórico de simulações em um único arquivo CSV
 */
export function exportHistoryToCSV(
  simulations: Array<{ inputs: SimulatorInputs; name: string; createdAt: string }>
): void {
  if (simulations.length === 0) {
    alert('Nenhuma simulação no histórico para exportar.');
    return;
  }

  const csvLines: string[] = [];
  
  // Cabeçalho principal
  csvLines.push('=== HISTÓRICO COMPLETO DE SIMULAÇÕES ===');
  csvLines.push(`Data do Relatório: ${new Date().toLocaleString('pt-BR')}`);
  csvLines.push(`Total de Simulações: ${simulations.length}`);
  csvLines.push('');

  simulations.forEach((simulation, index) => {
    const results = calculateSimulatorResults(simulation.inputs);
    const winner = results.totalPj < results.totalPf ? 'PJ' : 'PF';
    const savings = Math.abs(results.totalPf - results.totalPj);
    
    // Os impostos são acumulados para 8 anos (2026-2033), então precisamos
    // calcular os valores acumulados de receita, custo e lucro bruto para 8 anos
    const NUM_YEARS = results.yearlyResults.length;
    const receitaTotalAcumulada = results.receitaTotal * NUM_YEARS;
    const custoTotalAcumulado = results.custoTotal * NUM_YEARS;
    const lucroBrutoAcumulado = results.lucroBruto * NUM_YEARS;
    
    const lucroLiquidoPf = lucroBrutoAcumulado - results.totalPf;
    const lucroLiquidoPj = lucroBrutoAcumulado - results.totalPj;
    const margemLucroPf = receitaTotalAcumulada > 0 ? (lucroLiquidoPf / receitaTotalAcumulada) * 100 : 0;
    const margemLucroPj = receitaTotalAcumulada > 0 ? (lucroLiquidoPj / receitaTotalAcumulada) * 100 : 0;
    const roiPf = custoTotalAcumulado > 0 ? (lucroLiquidoPf / custoTotalAcumulado) * 100 : 0;
    const roiPj = custoTotalAcumulado > 0 ? (lucroLiquidoPj / custoTotalAcumulado) * 100 : 0;

    // Cabeçalho da simulação
    csvLines.push(`=== SIMULAÇÃO ${index + 1} de ${simulations.length} ===`);
    csvLines.push(`Nome: ${simulation.name}`);
    csvLines.push(`Data de Criação: ${new Date(simulation.createdAt).toLocaleString('pt-BR')}`);
    csvLines.push('');

    // Parâmetros
    csvLines.push('--- PARÂMETROS DO PROJETO ---');
    csvLines.push('Parâmetro,Valor');
    csvLines.push(`Valor de Aquisição,${formatCurrency(simulation.inputs.valorAquisicao)}`);
    csvLines.push(`Custo de Obra (Unitário),${formatCurrency(simulation.inputs.custoObra)}`);
    csvLines.push(`Valor de Venda (Unitário),${formatCurrency(simulation.inputs.valorVenda)}`);
    csvLines.push(`Quantidade de Imóveis/Ano,${simulation.inputs.qtdImoveisAno}`);
    csvLines.push(`Lucro PF Reinvestido,${formatCurrency(simulation.inputs.lucroPfReinvestido)}`);
    csvLines.push(`PF Contribuinte Habitual (IBS/CBS),${simulation.inputs.pfContribuinteIbs ? 'Sim' : 'Não'}`);
    csvLines.push('');

    // Resumo Financeiro
    csvLines.push('--- RESUMO FINANCEIRO ---');
    csvLines.push('Item,Valor');
    csvLines.push(`Receita Total,${formatCurrency(results.receitaTotal)}`);
    csvLines.push(`Custo Total,${formatCurrency(results.custoTotal)}`);
    csvLines.push(`Lucro Bruto,${formatCurrency(results.lucroBruto)}`);
    csvLines.push(`Lucro Líquido (PF),${formatCurrency(lucroLiquidoPf)}`);
    csvLines.push(`Lucro Líquido (PJ),${formatCurrency(lucroLiquidoPj)}`);
    csvLines.push(`Margem de Lucro (PF),${margemLucroPf.toFixed(2)}%`);
    csvLines.push(`Margem de Lucro (PJ),${margemLucroPj.toFixed(2)}%`);
    csvLines.push(`ROI (PF),${roiPf.toFixed(2)}%`);
    csvLines.push(`ROI (PJ),${roiPj.toFixed(2)}%`);
    csvLines.push('');

    // Resumo Tributário
    csvLines.push('--- RESUMO TRIBUTÁRIO ---');
    csvLines.push('Item,Valor');
    csvLines.push(`Custo Tributário Total (PF),${formatCurrency(results.totalPf)}`);
    csvLines.push(`Custo Tributário Total (PJ),${formatCurrency(results.totalPj)}`);
    csvLines.push(`Melhor Estratégia,${winner === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}`);
    csvLines.push(`Economia,${formatCurrency(savings)}`);
    csvLines.push('');

    // Detalhamento Anual
    csvLines.push('--- DETALHAMENTO ANUAL (2026-2033) ---');
    csvLines.push('Ano,Receita Total,Funding Extra,IRRF Funding (PF),GC (PF),IBS/CBS (PF),Total PF,% Efetiva PF,Total PJ,% Efetiva PJ');
    
    results.yearlyResults.forEach((row) => {
      csvLines.push([
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
      ].join(','));
    });
    
    csvLines.push('');
    csvLines.push('');
  });

  const csvContent = csvLines.join('\n');

  const blob = new Blob(['\ufeff' + csvContent], {
    type: 'text/csv;charset=utf-8;',
  });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  const date = new Date().toISOString().split('T')[0];
  link.setAttribute('download', `historico-completo-${date}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Exporta todo o histórico de simulações em um único arquivo TXT
 */
export function exportHistoryToText(
  simulations: Array<{ inputs: SimulatorInputs; name: string; createdAt: string }>
): void {
  if (simulations.length === 0) {
    alert('Nenhuma simulação no histórico para exportar.');
    return;
  }

  let report = '=== SIMULADOR DE TAXA - HISTÓRICO COMPLETO ===\n\n';
  report += `Data do Relatório: ${new Date().toLocaleString('pt-BR')}\n`;
  report += `Total de Simulações: ${simulations.length}\n\n`;
  report += '='.repeat(80) + '\n\n';

  simulations.forEach((simulation, index) => {
    const results = calculateSimulatorResults(simulation.inputs);
    const winner = results.totalPj < results.totalPf ? 'PJ' : 'PF';
    const savings = Math.abs(results.totalPf - results.totalPj);
    
    // Os impostos são acumulados para 8 anos (2026-2033), então precisamos
    // calcular os valores acumulados de receita e lucro bruto para 8 anos
    const NUM_YEARS = results.yearlyResults.length;
    const receitaTotalAcumulada = results.receitaTotal * NUM_YEARS;
    const lucroBrutoAcumulado = results.lucroBruto * NUM_YEARS;
    
    const lucroLiquidoPf = lucroBrutoAcumulado - results.totalPf;
    const lucroLiquidoPj = lucroBrutoAcumulado - results.totalPj;
    const margemLucroPf = receitaTotalAcumulada > 0 ? (lucroLiquidoPf / receitaTotalAcumulada) * 100 : 0;
    const margemLucroPj = receitaTotalAcumulada > 0 ? (lucroLiquidoPj / receitaTotalAcumulada) * 100 : 0;

    report += `SIMULAÇÃO ${index + 1} de ${simulations.length}\n`;
    report += '-'.repeat(80) + '\n';
    report += `Nome: ${simulation.name}\n`;
    report += `Data de Criação: ${new Date(simulation.createdAt).toLocaleString('pt-BR')}\n\n`;

    report += 'Parâmetros:\n';
    report += `  Valor de Aquisição: ${formatCurrency(simulation.inputs.valorAquisicao)}\n`;
    report += `  Custo de Obra: ${formatCurrency(simulation.inputs.custoObra)}\n`;
    report += `  Valor de Venda: ${formatCurrency(simulation.inputs.valorVenda)}\n`;
    report += `  Quantidade de Imóveis/Ano: ${simulation.inputs.qtdImoveisAno}\n`;
    report += `  Lucro PF Reinvestido: ${formatCurrency(simulation.inputs.lucroPfReinvestido)}\n`;
    report += `  PF Contribuinte Habitual: ${simulation.inputs.pfContribuinteIbs ? 'Sim' : 'Não'}\n\n`;

    report += 'Resumo:\n';
    report += `  Receita Total: ${formatCurrency(results.receitaTotal)}\n`;
    report += `  Custo Total: ${formatCurrency(results.custoTotal)}\n`;
    report += `  Lucro Bruto: ${formatCurrency(results.lucroBruto)}\n`;
    report += `  Custo Tributário Total (PF): ${formatCurrency(results.totalPf)}\n`;
    report += `  Custo Tributário Total (PJ): ${formatCurrency(results.totalPj)}\n`;
    report += `  Melhor Estratégia: ${winner === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}\n`;
    report += `  Economia: ${formatCurrency(savings)}\n`;
    report += `  Margem de Lucro (PF): ${margemLucroPf.toFixed(2)}%\n`;
    report += `  Margem de Lucro (PJ): ${margemLucroPj.toFixed(2)}%\n\n`;

    report += '='.repeat(80) + '\n\n';
  });

  const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  const date = new Date().toISOString().split('T')[0];
  link.setAttribute('download', `historico-completo-${date}.txt`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
