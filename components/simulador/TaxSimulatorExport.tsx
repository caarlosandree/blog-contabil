'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Share2, Check } from 'lucide-react';
import type { YearlyResult } from '@/types';
import { exportToCSV, exportToText, copyShareableLink } from '@/lib/utils/simulatorExport';

interface TaxSimulatorExportProps {
  yearlyResults: YearlyResult[];
  totalPf: number;
  totalPj: number;
}

export function TaxSimulatorExport({
  yearlyResults,
  totalPf,
  totalPj,
}: TaxSimulatorExportProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const success = await copyShareableLink();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-bold text-[#0F4C52] mb-4">
        Exportar Resultados
      </h3>
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => exportToCSV(yearlyResults, totalPf, totalPj)}
          variant="outline"
          className="border-[#2E8B94] text-[#2E8B94] hover:bg-[#2E8B94] hover:text-white"
          aria-label="Exportar para CSV"
        >
          <Download className="h-4 w-4 mr-2" />
          Exportar CSV
        </Button>
        <Button
          onClick={() => exportToText(yearlyResults, totalPf, totalPj)}
          variant="outline"
          className="border-[#2E8B94] text-[#2E8B94] hover:bg-[#2E8B94] hover:text-white"
          aria-label="Exportar para texto"
        >
          <Download className="h-4 w-4 mr-2" />
          Exportar TXT
        </Button>
        <Button
          onClick={handleCopyLink}
          variant="outline"
          className="border-[#0F4C52] text-[#0F4C52] hover:bg-[#0F4C52] hover:text-white"
          aria-label="Copiar link compartilhável"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Link Copiado!
            </>
          ) : (
            <>
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar Link
            </>
          )}
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Compartilhe este link para que outros vejam os mesmos resultados com os
        mesmos parâmetros.
      </p>
    </div>
  );
}
