import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function DashboardCards() {
  return (
    <section
      id="dashboard"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-8"
    >
      <Card className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-t-4 border-red-500 card-hover">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-[#0F4C52]">Risco Fiscal</h3>
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          <p className="text-sm text-[#082D31]/70 mb-2">Imposto Máximo</p>
        </CardHeader>
        <CardContent>
          <h3 className="text-3xl font-bold text-[#082D31] mb-1">53,84%</h3>
          <p className="text-sm text-[#082D31]">
            Sobre lucros distribuídos incorretamente.
          </p>
          <p className="text-xs mt-2 text-red-600">
            <span>⚠</span> Produtor assume 100%
          </p>
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-t-4 border-[#2E8B94] card-hover">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-[#0F4C52]">Depreciação</h3>
            <svg
              className="w-6 h-6 text-[#2E8B94]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <p className="text-sm text-[#082D31]/70 mb-2">Perda Anual</p>
        </CardHeader>
        <CardContent>
          <h3 className="text-3xl font-bold text-[#082D31] mb-1">-20%</h3>
          <p className="text-sm text-[#082D31]">
            Do valor contábil de veículos no CNPJ.
          </p>
          <p className="text-xs mt-2 text-[#2E8B94]">
            <span>✓</span> Dedutível do IRPJ
          </p>
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-t-4 border-amber-500 card-hover">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-[#0F4C52]">Frequência</h3>
            <svg
              className="w-6 h-6 text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm text-[#082D31]/70 mb-2">Envio Obrigatório</p>
        </CardHeader>
        <CardContent>
          <h3 className="text-3xl font-bold text-[#082D31] mb-1">Mensal</h3>
          <p className="text-sm text-[#082D31]">
            Extratos e notas para a contabilidade.
          </p>
          <p className="text-xs mt-2 text-amber-600">
            <span>⏰</span> Último dia útil
          </p>
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-between bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 border-t-4 border-green-500 card-hover">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-[#0F4C52]">Objetivo</h3>
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm text-[#082D31]/70 mb-2">Segurança</p>
        </CardHeader>
        <CardContent>
          <h3 className="text-3xl font-bold text-[#082D31] mb-1">100%</h3>
          <p className="text-sm text-[#082D31]">
            Para escalar seu negócio digital.
          </p>
          <p className="text-xs mt-2 text-green-600">
            <span>✓</span> Cada um paga o seu
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
