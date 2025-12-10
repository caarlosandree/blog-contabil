export function Lei15270HeroSection() {
  return (
    <section
      id="overview"
      className="bg-[#0F4C52] pb-24 pt-12 rounded-b-[3rem] text-white relative w-full mt-16"
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <span className="bg-[#2E8B94] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block text-white">
          Vigência: Jan/2026
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
          O Novo Imposto Sobre{' '}
          <span className="text-[#2E8B94]">Altas Rendas</span>
        </h2>
        <p className="text-lg text-[#F0F7F7] mb-8 max-w-2xl mx-auto">
          A Lei 15.270/2025 altera as regras do jogo. Entenda a retenção de 10%
          na fonte e o IRPFM para rendas acima de R$ 600 mil anuais.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#strategies"
            className="bg-[#D97D54] text-white hover:bg-white hover:text-[#D97D54] border border-transparent hover:border-[#D97D54] transition-all px-6 py-3 rounded-lg font-bold"
          >
            <span className="mr-2">⚠️</span> Ver Riscos
          </a>
          <a
            href="#checklist"
            className="bg-transparent border border-[#2E8B94] text-[#2E8B94] hover:bg-[#2E8B94] hover:text-[#0F4C52] transition-all px-6 py-3 rounded-lg font-bold"
          >
            <span className="mr-2">✓</span> Checklist 2025
          </a>
        </div>
      </div>
    </section>
  );
}
