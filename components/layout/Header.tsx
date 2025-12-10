export function Header() {
  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold tracking-tight">
            JURIS<span className="text-blue-300">CARF</span>
          </span>
          <span className="hidden md:inline-block border-l border-blue-700 pl-3 text-sm text-blue-100">
            Análise de Confusão Patrimonial e DDL
          </span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#dashboard" className="hover:text-blue-200 transition">
            Painel Geral
          </a>
          <a href="#criteria" className="hover:text-blue-200 transition">
            Critérios Legais
          </a>
          <a href="#cases" className="hover:text-blue-200 transition">
            Banco de Acórdãos
          </a>
        </nav>
      </div>
    </header>
  );
}
