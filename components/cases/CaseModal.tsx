'use client';

import type { Case } from '@/types';

interface CaseModalProps {
  caseData: Case | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseModal({ caseData, isOpen, onClose }: CaseModalProps) {
  if (!isOpen || !caseData) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-xl font-bold text-slate-800">
            Detalhes do Acórdão
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-2xl font-bold"
            aria-label="Fechar modal"
          >
            &times;
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scroll">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Número do Acórdão
              </span>
              <p className="text-slate-900 font-mono text-lg font-semibold">
                {caseData.number}
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                O que foi autuado?
              </span>
              <p className="text-slate-800 mt-1">{caseData.fact}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Argumento do Fisco
                </span>
                <p className="text-sm text-slate-600 mt-1">{caseData.fisco}</p>
              </div>

              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Defesa do Contribuinte
                </span>
                <p className="text-sm text-slate-600 mt-1">
                  {caseData.defense}
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Decisão & Fundamento
              </span>
              <p className="text-slate-800 mt-1 font-medium">
                {caseData.decision}
              </p>
              <p className="text-xs text-slate-500 mt-2 font-mono bg-slate-100 p-2 rounded">
                Base Legal: {caseData.law}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 font-medium transition"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
