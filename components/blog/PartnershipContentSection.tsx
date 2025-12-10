'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import type { PartnershipItem, PartnershipCategory } from '@/types';
import { PartnershipModal } from './PartnershipModal';

interface PartnershipContentSectionProps {
  items: PartnershipItem[];
}

const categories: Array<{ value: PartnershipCategory | 'all'; label: string }> = [
  { value: 'all', label: 'Tudo' },
  { value: 'model', label: 'Modelos' },
  { value: 'risk', label: 'Riscos' },
  { value: 'platform', label: 'Plataformas' },
];

export function PartnershipContentSection({ items }: PartnershipContentSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<PartnershipCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<PartnershipItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = items.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchLower) ||
      item.excerpt.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (item: PartnershipItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <section id="details" className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-[#0F4C52]">Explorar Detalhes</h2>

          <div className="flex flex-wrap gap-2 bg-white p-1 rounded-lg shadow-sm w-fit mx-auto">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={clsx(
                  'px-4 py-2 text-sm font-semibold rounded-md transition-colors',
                  selectedCategory === category.value
                    ? 'bg-[#0F4C52] text-white'
                    : 'text-[#082D31] hover:bg-gray-100'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar termo..."
              className="pl-10 pr-4 py-2 rounded-lg border border-[#082D31]/20 focus:outline-none focus:border-[#2E8B94] w-64 bg-white text-sm"
            />
            <svg
              className="absolute left-3 top-3 h-4 w-4 text-[#082D31]/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-[#082D31]">
            <p>Nenhum resultado encontrado para sua busca.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={clsx(
                  'bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 flex flex-col cursor-pointer card-hover border-t-4',
                  item.borderColor
                )}
                onClick={() => handleOpenModal(item)}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={clsx('text-xs font-bold px-2 py-1 rounded', item.badgeColor)}>
                    {item.badgeLabel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#082D31] mb-2">{item.title}</h3>
                <p className="text-[#082D31]/70 text-sm mb-4 grow leading-relaxed">
                  {item.excerpt}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOpenModal(item);
                  }}
                  className="group flex items-center text-[#0F4C52] font-bold text-sm hover:underline transition self-start"
                >
                  Ver detalhes e exemplo
                  <svg
                    className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      <PartnershipModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
