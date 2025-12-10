'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { History, Trash2, X, Download } from 'lucide-react';
import type { SimulatorInputs } from '@/types';
import {
  getSimulationHistory,
  deleteSimulation,
  clearSimulationHistory,
  type SavedSimulation,
} from '@/lib/utils/simulatorStorage';
import { formatCurrency } from '@/lib/utils/currency';
import {
  exportHistoryToCSV,
  exportHistoryToText,
} from '@/lib/utils/simulatorExport';

interface TaxSimulatorHistoryProps {
  onLoadSimulation: (inputs: SimulatorInputs) => void;
}

export function TaxSimulatorHistory({
  onLoadSimulation,
}: TaxSimulatorHistoryProps) {
  const [history, setHistory] = useState<SavedSimulation[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open) {
      // Carrega histórico quando o dialog abre
      setHistory(getSimulationHistory());
    }
  };

  const handleLoad = (simulation: SavedSimulation) => {
    onLoadSimulation(simulation.inputs);
    setIsOpen(false);
  };

  const handleDelete = (id: string) => {
    deleteSimulation(id);
    setHistory(getSimulationHistory());
  };

  const handleClearAll = () => {
    if (confirm('Tem certeza que deseja limpar todo o histórico?')) {
      clearSimulationHistory();
      setHistory([]);
    }
  };


  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-[#2E8B94] border-[#2E8B94] hover:bg-[#2E8B94] hover:text-white"
          aria-label="Ver histórico de simulações"
        >
          <History className="h-4 w-4 mr-2" />
          Histórico
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#0F4C52]">
            Histórico de Simulações
          </DialogTitle>
          <DialogDescription>
            Carregue simulações anteriores ou gerencie seu histórico
          </DialogDescription>
        </DialogHeader>

        {history.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <History className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Nenhuma simulação salva ainda.</p>
            <p className="text-sm mt-2">
              As simulações serão salvas automaticamente quando você usar o
              botão de salvar.
            </p>
          </div>
        ) : (
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center gap-2 flex-wrap">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => exportHistoryToCSV(history)}
                  className="text-[#2E8B94] border-[#2E8B94] hover:bg-[#2E8B94] hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Tudo (CSV)
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => exportHistoryToText(history)}
                  className="text-[#2E8B94] border-[#2E8B94] hover:bg-[#2E8B94] hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Exportar Tudo (TXT)
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleClearAll}
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Limpar Tudo
              </Button>
            </div>
            {history.map((simulation) => (
              <div
                key={simulation.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#0F4C52] mb-2">
                      {simulation.name}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs text-gray-600">
                      <div>
                        <span className="font-medium">Aquisição:</span>{' '}
                        {formatCurrency(simulation.inputs.valorAquisicao)}
                      </div>
                      <div>
                        <span className="font-medium">Obra:</span>{' '}
                        {formatCurrency(simulation.inputs.custoObra)}
                      </div>
                      <div>
                        <span className="font-medium">Venda:</span>{' '}
                        {formatCurrency(simulation.inputs.valorVenda)}
                      </div>
                      <div>
                        <span className="font-medium">Qtd/Ano:</span>{' '}
                        {simulation.inputs.qtdImoveisAno}
                      </div>
                      <div>
                        <span className="font-medium">Reinvestido:</span>{' '}
                        {formatCurrency(simulation.inputs.lucroPfReinvestido)}
                      </div>
                      <div>
                        <span className="font-medium">IBS:</span>{' '}
                        {simulation.inputs.pfContribuinteIbs ? 'Sim' : 'Não'}
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(simulation.createdAt).toLocaleString('pt-BR')}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      onClick={() => handleLoad(simulation)}
                      className="bg-[#2E8B94] hover:bg-[#0F4C52] text-white"
                    >
                      Carregar
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(simulation.id)}
                      className="text-red-600 border-red-600 hover:bg-red-50"
                      aria-label="Excluir simulação"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
