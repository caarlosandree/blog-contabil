import type { SimulatorInputs } from '@/types';

export interface SavedSimulation {
  id: string;
  name: string;
  inputs: SimulatorInputs;
  createdAt: string;
}

const STORAGE_KEY = 'tax-simulator-history';
const MAX_HISTORY = 10;

/**
 * Salva uma simulação no histórico
 */
export function saveSimulation(
  inputs: SimulatorInputs,
  name?: string
): SavedSimulation {
  const history = getSimulationHistory();
  const newSimulation: SavedSimulation = {
    id: Date.now().toString(),
    name: name || `Simulação ${new Date().toLocaleString('pt-BR')}`,
    inputs,
    createdAt: new Date().toISOString(),
  };

  // Adiciona no início e limita o histórico
  const updatedHistory = [newSimulation, ...history].slice(0, MAX_HISTORY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));

  return newSimulation;
}

/**
 * Obtém o histórico de simulações
 */
export function getSimulationHistory(): SavedSimulation[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as SavedSimulation[];
  } catch (error) {
    console.error('Erro ao ler histórico:', error);
    return [];
  }
}

/**
 * Remove uma simulação do histórico
 */
export function deleteSimulation(id: string): void {
  const history = getSimulationHistory();
  const updatedHistory = history.filter((s) => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
}

/**
 * Limpa todo o histórico
 */
export function clearSimulationHistory(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Atualiza o nome de uma simulação
 */
export function updateSimulationName(id: string, name: string): void {
  const history = getSimulationHistory();
  const updatedHistory = history.map((s) =>
    s.id === id ? { ...s, name } : s
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
}
