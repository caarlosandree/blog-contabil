'use client';

import { clsx } from 'clsx';
import type { PartnershipItem } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface PartnershipModalProps {
  item: PartnershipItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PartnershipModal({ item, isOpen, onClose }: PartnershipModalProps) {
  if (!item) {
    return null;
  }

  const getHeaderColor = () => {
    if (item.borderColor.includes('red')) return 'bg-red-500';
    if (item.borderColor.includes('amber')) return 'bg-amber-500';
    if (item.borderColor.includes('[#2E8B94]')) return 'bg-[#2E8B94]';
    return 'bg-[#0F4C52]';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
        <div className={`${getHeaderColor()} p-6 text-white rounded-t-lg sticky top-0 z-10`}>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-bold text-white">
              {item.title}
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
        <div className="px-8 py-6 text-sm text-[#082D31] leading-relaxed space-y-4 overflow-y-auto custom-scroll flex-1">
          <div>
            <h4 className="font-bold text-[#0F4C52] mb-2">💡 O que é?</h4>
            <p className="text-[#082D31] text-sm">{item.content.what}</p>
          </div>

          {item.content.advantages && item.content.advantages.length > 0 && (
            <div className="bg-gray-50 p-4 rounded border-l-4 border-[#0F4C52]">
              <h5 className="font-bold text-sm mb-2">Vantagens ✅</h5>
              <ul className="text-xs space-y-2 text-[#082D31]">
                {item.content.advantages.map((advantage, index) => (
                  <li key={index}>• {advantage}</li>
                ))}
              </ul>
            </div>
          )}

          {item.content.observations && item.content.observations.length > 0 && (
            <div className="bg-gray-50 p-4 rounded border-l-4 border-amber-500">
              <h5 className="font-bold text-sm mb-2">
                {item.category === 'risk' ? 'Detalhes ⚠️' : 'Observações ⚠️'}
              </h5>
              <ul className="text-xs space-y-2 text-[#082D31]">
                {item.content.observations.map((observation, index) => (
                  <li key={index}>• {observation}</li>
                ))}
              </ul>
            </div>
          )}

          {item.content.example && (
            <div>
              <h4 className="font-bold text-[#0F4C52] mb-2">📊 {item.content.example.title}</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-[#082D31]">
                  <thead className="text-xs text-[#0F4C52] uppercase bg-gray-100">
                    <tr>
                      <th className="px-4 py-2">Item</th>
                      <th className="px-4 py-2">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.content.example.data.map((row, index) => (
                      <tr
                        key={index}
                        className={clsx(
                          'border-b',
                          index === item.content.example!.data.length - 1 && 'bg-green-50 font-bold'
                        )}
                      >
                        <td className="px-4 py-2">{row.label}</td>
                        <td className="px-4 py-2">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        <DialogFooter className="px-8 pb-6 flex-row-reverse gap-2 sm:gap-0 border-t border-gray-200 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Fechar
          </Button>
          <Button
            asChild
            className="bg-[#2E8B94] hover:bg-[#2E8B94]/90 text-white sm:mr-3"
          >
            <a
              href="https://wa.me/5548991436776"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Contador
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
