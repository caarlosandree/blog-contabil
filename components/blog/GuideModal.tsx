'use client';

import type { GuideItem } from '@/types';

interface GuideModalProps {
  item: GuideItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GuideModal({ item, isOpen, onClose }: GuideModalProps) {
  if (!isOpen || !item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60]"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-slate-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border-t-4 border-blue-900">
            <div className="bg-slate-50 px-4 py-3 sm:px-6 flex justify-between items-center border-b border-slate-100">
              <h3
                className="text-lg font-bold leading-6 text-blue-900"
                id="modalTitle"
              >
                {item.title}
              </h3>
              <button
                type="button"
                className="text-slate-600 hover:text-red-600 focus:outline-none"
                onClick={onClose}
                aria-label="Fechar modal"
              >
                <svg
                  className="h-6 w-6"
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
            <div
              className="px-4 py-5 sm:p-6 text-sm text-slate-800 leading-relaxed space-y-4 max-h-[70vh] overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
            <div className="bg-slate-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Fechar
              </button>
              <a
                href="https://wa.me/5548991436776"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:w-auto sm:mr-3"
              >
                Falar com Contador
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
