export function Lei15270StatsCards() {
  return (
    <div className="container mx-auto px-4 -mt-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2E8B94]">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-[#A9A9A9] uppercase">
              Retenção Mensal
            </p>
            <span className="text-[#2E8B94] text-xl">💰</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0F4C52]">R$ 50.000</h3>
          <p className="text-sm text-[#141414] mt-1">
            Limite mensal de isenção na fonte por sócio.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#D97D54]">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-[#A9A9A9] uppercase">
              Alíquota Máxima
            </p>
            <span className="text-[#D97D54] text-xl">%</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0F4C52]">10%</h3>
          <p className="text-sm text-[#141414] mt-1">
            Imposto sobre o excedente distribuído.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#F4B79A]">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-[#A9A9A9] uppercase">
              Gatilho IRPFM
            </p>
            <span className="text-[#F4B79A] text-xl">⚖️</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0F4C52]">R$ 600 mil</h3>
          <p className="text-sm text-[#141414] mt-1">
            Renda anual mínima para incidência do novo imposto.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#2E8B94]">
          <div className="flex justify-between items-start mb-2">
            <p className="text-xs font-bold text-[#A9A9A9] uppercase">
              Prazo Crítico
            </p>
            <span className="text-[#2E8B94] text-xl">📅</span>
          </div>
          <h3 className="text-xl font-bold text-[#0F4C52]">31/12/2025</h3>
          <p className="text-sm text-[#141414] mt-1">
            Data limite para aprovar lucros isentos.
          </p>
        </div>
      </div>
    </div>
  );
}
