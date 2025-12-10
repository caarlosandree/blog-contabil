'use client';

import type { Case } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface CaseModalProps {
  caseData: Case | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseModal({ caseData, isOpen, onClose }: CaseModalProps) {
  if (!caseData) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
        <div className="bg-[#0F4C52] p-6 text-white rounded-t-lg sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-bold text-white">
              Detalhes do Acórdão
            </DialogTitle>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Fechar modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-8 py-6 overflow-y-auto custom-scroll flex-1">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-[#082D31]/70 uppercase tracking-wider">
                Número do Acórdão
              </span>
              <p className="text-[#082D31] font-mono text-lg font-semibold">
                {caseData.number}
              </p>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                O que foi autuado?
              </span>
              <p className="text-[#082D31] mt-1">{caseData.fact}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Argumento do Fisco
                </span>
                <p className="text-sm text-[#082D31] mt-1">{caseData.fisco}</p>
              </div>

              <div>
                <span className="text-xs font-bold text-[#2E8B94] uppercase tracking-wider">
                  Defesa do Contribuinte
                </span>
                <p className="text-sm text-[#082D31] mt-1">
                  {caseData.defense}
                </p>
              </div>
            </div>

            <div className="border-t border-[#F0F7F7] pt-4">
              <span className="text-xs font-bold text-[#082D31]/70 uppercase tracking-wider">
                Decisão & Fundamento
              </span>
              <p className="text-[#082D31] mt-1 font-medium">
                {caseData.decision}
              </p>
              <p className="text-xs text-[#082D31]/70 mt-2 font-mono bg-[#F0F7F7] p-2 rounded">
                Base Legal: {caseData.law}
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="px-8 pb-6 border-t border-gray-200 pt-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onClose}
          >
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
