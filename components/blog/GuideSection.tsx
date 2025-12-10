'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import type { GuideItem, GuideCategory } from '@/types';
import { GuideModal } from './GuideModal';

interface GuideSectionProps {
  items: GuideItem[];
}

export function GuideSection({ items }: GuideSectionProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<GuideCategory | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<GuideItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories: Array<{ value: GuideCategory | 'all'; label: string }> = [
    { value: 'all', label: 'Todos' },
    { value: 'organização', label: 'Organização' },
    { value: 'fiscal', label: 'Fiscal & Notas' },
    { value: 'financeiro', label: 'Financeiro' },
    { value: 'riscos', label: 'Riscos & Alertas' },
  ];

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchLower) ||
      item.excerpt.toLowerCase().includes(searchLower) ||
      item.content.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  const handleOpenModal = (item: GuideItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setSelectedItem(null);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const getCategoryBadgeColor = (category: GuideCategory) => {
    switch (category) {
      case 'riscos':
        return 'bg-red-100 text-red-700';
      case 'organização':
        return 'bg-blue-100 text-blue-700';
      case 'financeiro':
        return 'bg-green-100 text-green-700';
      case 'fiscal':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <>
      <section id="guia" className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-blue-900">Guia Prático Interativo</h2>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por tema..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-slate-600"
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

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={clsx(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-colors border',
                selectedCategory === category.value
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-white text-slate-600 border-slate-300 hover:border-blue-900 hover:text-blue-900'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-slate-600">
            <p>Nenhum resultado encontrado para sua busca.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col hover:shadow-md transition duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={clsx(
                      'inline-block py-1 px-2 rounded text-xs font-bold uppercase tracking-wide',
                      getCategoryBadgeColor(item.category)
                    )}
                  >
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 grow leading-relaxed">
                  {item.excerpt}
                </p>
                <button
                  onClick={() => handleOpenModal(item)}
                  className="group flex items-center text-blue-900 font-semibold text-sm hover:text-blue-700 transition"
                >
                  Ver Detalhes
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

      <GuideModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
