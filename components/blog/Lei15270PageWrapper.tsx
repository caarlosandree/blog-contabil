'use client';

import { useState } from 'react';
import { Lei15270StrategiesSection } from './Lei15270StrategiesSection';
import { Lei15270Modals } from './Lei15270Modals';

export function Lei15270PageWrapper() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setOpenModal(id);
  };

  return (
    <>
      <Lei15270StrategiesSection onCardClick={handleCardClick} />
      <Lei15270Modals openModal={openModal} onClose={() => setOpenModal(null)} />
    </>
  );
}
