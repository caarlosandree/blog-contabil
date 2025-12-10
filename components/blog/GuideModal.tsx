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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col border-t-4 border-[#0F4C52]">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-[#0F4C52]">
            {item.title}
          </DialogTitle>
        </DialogHeader>
        <div
          className="text-sm text-[#082D31] leading-relaxed space-y-4 overflow-y-auto custom-scroll flex-1"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
        <DialogFooter className="flex-row-reverse gap-2 sm:gap-0">
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
            className="bg-green-600 hover:bg-green-500 text-white sm:mr-3"
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
