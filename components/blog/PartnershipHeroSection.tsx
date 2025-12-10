export function PartnershipHeroSection() {
  return (
    <section className="bg-[#0F4C52] text-white pb-16 pt-10 rounded-b-[3rem] w-full mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Modelos de Parceria no{' '}
            <span className="text-[#2E8B94]">Mercado Digital</span>
          </h1>
          <p className="text-[#F0F7F7] text-lg mb-8 max-w-3xl mx-auto">
            Entenda a diferença crucial entre <strong>Comissionamento</strong> e{' '}
            <strong>Parceria de Negócios</strong>. Evite riscos fiscais, bitributação
            e autuações escolhendo a estrutura correta para seu infoproduto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-left max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2E8B94] text-[#082D31] transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[#0F4C52]">Comissionamento</h3>
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <p className="text-sm text-[#082D31]/70 mb-2">Responsabilidade Fiscal</p>
            <p className="text-2xl font-bold">Centralizada</p>
            <p className="text-xs mt-2 text-red-600">
              <span>⚠</span> Produtor assume 100%
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2E8B94] text-[#082D31] transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-[#0F4C52]">Parceria de Negócios</h3>
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-[#082D31]/70 mb-2">Responsabilidade Fiscal</p>
            <p className="text-2xl font-bold">Dividida</p>
            <p className="text-xs mt-2 text-green-600">
              <span>✓</span> Cada um paga o seu
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500 text-[#082D31] transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-red-600">Risco de Erro</h3>
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
