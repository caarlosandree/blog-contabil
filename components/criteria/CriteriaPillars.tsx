export function CriteriaPillars() {
  return (
    <section id="criteria" className="space-y-6">
      <div className="bg-[#F0F7F7] border-l-4 border-[#0F4C52] p-6 rounded-r-lg">
        <h2 className="text-2xl font-bold text-[#0F4C52]">
          Critérios de Caracterização
        </h2>
        <p className="text-[#082D31] mt-2">
          Para reclassificar uma despesa operacional em despesa pessoal (e
          consequentemente em remuneração indireta), a jurisprudência do CARF
          avalia três pilares principais. Entenda a lógica aplicada pelos
          conselheiros:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-t-4 border-[#2E8B94] card-hover">
          <h3 className="text-lg font-bold text-[#082D31] mb-3">
            1. Necessidade Operacional
          </h3>
          <p className="text-[#082D31]/70 text-sm leading-relaxed">
            O bem ou serviço adquirido é <strong>essencial</strong> para a
            atividade da empresa?
            <br />
            <br />
            <em>Exemplo:</em> Uma escola paga a viagem de férias dos sócios. Se
            não houver vínculo com congresso educacional, presume-se benefício
            pessoal.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-t-4 border-amber-500 card-hover">
          <h3 className="text-lg font-bold text-[#082D31] mb-3">
            2. Identificação do Beneficiário
          </h3>
          <p className="text-[#082D31]/70 text-sm leading-relaxed">
            É possível identificar quem usufruiu do gasto?
            <br />
            <br />
            Se a empresa paga faturas de cartão de crédito em nome do sócio, a
            identificação é imediata. Isso facilita a caracterização de{' '}
            <strong>pagamento sem causa</strong> ou remuneração indireta.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-t-4 border-red-500 card-hover">
          <h3 className="text-lg font-bold text-[#082D31] mb-3">
            3. Inexistência de Reembolso
          </h3>
          <p className="text-[#082D31]/70 text-sm leading-relaxed">
            Houve ressarcimento à empresa? Foi contabilizado como mútuo
            (empréstimo)?
            <br />
            <br />
            A falta de contrato de mútuo com juros de mercado e prazo definido
            é fatal. O CARF rejeita a tese de &quot;adiantamento&quot; se não houver
            prova contábil robusta.
          </p>
        </div>
      </div>
    </section>
  );
}
