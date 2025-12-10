import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-[#0F4C52] text-white pb-16 pt-10 rounded-b-[3rem] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-0">
      <div className="max-w-7xl mx-auto text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Organização fiscal, contábil e financeira{' '}
          <span className="text-[#2E8B94]">para escalar com segurança</span>
        </h1>
        <p className="text-[#F0F7F7] text-lg mb-8 max-w-3xl mx-auto">
          Este guia interativo transforma as diretrizes da Plano A em ações
          práticas. Evite a confusão patrimonial, emita notas corretamente e
          utilize a contabilidade estratégica para pagar menos impostos
          legalmente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-left max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2E8B94] text-[#082D31] transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[#0F4C52]">Organização</h3>
              <svg
                className="w-6 h-6 text-[#2E8B94]"
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
            </div>
            <p className="text-sm text-[#082D31]/70 mb-2">Estruturação</p>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-xs mt-2 text-[#2E8B94]">
              <span className="text-green-600">✓</span> Separação patrimonial correta
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2E8B94] text-[#082D31] transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[#0F4C52]">Fiscal & Notas</h3>
              <svg
                className="w-6 h-6 text-[#2E8B94]"
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
            </div>
            <p className="text-sm text-[#082D31]/70 mb-2">Emissão</p>
            <p className="text-2xl font-bold">Correta</p>
            <p className="text-xs mt-2 text-[#2E8B94]">
              <span className="text-green-600">✓</span> Evite autuações
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 text-[#082D31] transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-red-600">Risco Fiscal</h3>
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <p className="text-sm text-[#082D31]/70 mb-2">Configuração Errada</p>
            <p className="text-2xl font-bold">Autuação</p>
            <p className="text-xs mt-2 text-[#082D31]/70">
              Inconsistência na DIMP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
