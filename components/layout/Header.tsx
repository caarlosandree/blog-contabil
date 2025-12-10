'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const isJuriscarfPage = pathname?.includes('/blog/juriscarf');

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="/blog"
          className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
        >
          <span className="text-2xl font-bold tracking-tight">
            Blog <span className="text-blue-300">Plano A</span>
          </span>
          <span className="hidden md:inline-block border-l border-blue-700 pl-3 text-sm text-blue-100">
            Assuntos Contábeis
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/blog" className="hover:text-blue-200 transition">
            Blog
          </Link>
          {isJuriscarfPage && (
            <>
              <a href="#dashboard" className="hover:text-blue-200 transition">
                Painel Geral
              </a>
              <a href="#criteria" className="hover:text-blue-200 transition">
                Critérios Legais
              </a>
              <a href="#cases" className="hover:text-blue-200 transition">
                Banco de Acórdãos
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
