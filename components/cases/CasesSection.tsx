'use client';

import { useState } from 'react';
import { CaseFilters } from './CaseFilters';
import { CasesGrid } from './CasesGrid';
import { CaseModal } from './CaseModal';
import { casesData } from '@/lib/data/casesData';
import type { Case, CaseType } from '@/types';

export function CasesSection() {
  const [activeFilter, setActiveFilter] = useState<CaseType | 'all'>('all');
  const [selectedCase, setSelectedCase] = useState<Case | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (filter: CaseType | 'all') => {
    setActiveFilter(filter);
  };

  const handleCaseClick = (caseData: Case) => {
    setSelectedCase(caseData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
  };

  return (
    <>
      <section id="cases" className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8 bg-slate-900 text-white">
          <h2 className="text-2xl font-bold">Explorador de Acórdãos</h2>
          <p className="text-blue-200 mt-2 text-sm md:text-base">
            Navegue por casos representativos que tratam dos tópicos pesquisados.
            Utilize os filtros para focar em temas específicos como "Veículos",
            "Cartão de Crédito" ou "Lucros Isentos".
          </p>

          <CaseFilters
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
          />
        </div>

        <CasesGrid
          cases={casesData}
          filter={activeFilter}
          onCaseClick={handleCaseClick}
        />
      </section>

      <CaseModal
        caseData={selectedCase}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
