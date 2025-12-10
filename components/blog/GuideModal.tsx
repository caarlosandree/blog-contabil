'use client';

import type { GuideItem } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface GuideModalProps {
  item: GuideItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GuideModal({ item, isOpen, onClose }: GuideModalProps) {
  if (!item) {
    return null;
  }

  const getCategoryColor = () => {
    switch (item.category) {
      case 'riscos':
        return 'bg-red-500';
      case 'organização':
        return 'bg-[#0F4C52]';
      case 'financeiro':
        return 'bg-green-500';
      case 'fiscal':
        return 'bg-amber-500';
      default:
        return 'bg-[#0F4C52]';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col p-0 overflow-hidden">
        <div className={`${getCategoryColor()} p-6 text-white rounded-t-lg sticky top-0 z-10`}>
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
        <div
          className="px-8 py-6 text-sm text-[#082D31] leading-relaxed space-y-4 overflow-y-auto custom-scroll flex-1"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
        <DialogFooter className="px-8 pb-6 flex-row-reverse gap-2 sm:gap-0 border-t border-gray-200 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="sm:mt-0"
          >
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
