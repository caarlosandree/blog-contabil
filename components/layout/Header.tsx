'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function Header() {
  const pathname = usePathname();
  const isJuriscarfPage = pathname?.includes('/blog/juriscarf');
  const isBlogMainPage = pathname === '/blog';

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0F4C52] shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center gap-2">
            <svg
              className="h-8 w-8 text-[#2E8B94]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <Link
              href="/blog"
              className="font-bold text-xl tracking-tight hover:opacity-90 transition-opacity"
            >
              Plano A <span className="text-[#2E8B94] font-light">Contabilidade</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {isBlogMainPage && (
              <>
                <a
                  href="#dashboard"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Dashboard
                </a>
                <a
                  href="#guia"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Guia Prático
                </a>
                <Link
                  href="/simulador-taxa"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Simulador de Taxa
                </Link>
                <a
                  href="#materias"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Matérias
                </a>
                <Button
                  asChild
                  variant="secondary"
                  className="bg-[#2E8B94] text-white hover:bg-[#2E8B94]/90 rounded-full"
                >
                  <a href="#contato">Fale Conosco</a>
                </Button>
              </>
            )}
            {isJuriscarfPage && (
              <>
                <Link
                  href="/blog"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Blog
                </Link>
                <a
                  href="#dashboard"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Painel Geral
                </a>
                <a
                  href="#criteria"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Critérios Legais
                </a>
                <a
                  href="#cases"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Banco de Acórdãos
                </a>
              </>
            )}
            {!isBlogMainPage && !isJuriscarfPage && (
              <>
                <Link
                  href="/blog"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Blog
                </Link>
                <Link
                  href="/simulador-taxa"
                  className="text-[#2E8B94] hover:text-white transition-colors text-sm font-medium"
                >
                  Simulador de Taxa
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
