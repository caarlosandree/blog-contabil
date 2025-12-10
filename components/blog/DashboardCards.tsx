import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function DashboardCards() {
  return (
    <section
      id="dashboard"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <Card className="flex flex-col justify-between hover:shadow-md transition">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-red-100 rounded-lg text-red-700">
              <svg
                className="w-6 h-6"
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
            <span className="text-xs font-semibold text-[#082D31]/70 uppercase">
              Risco Fiscal
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-3xl font-bold text-[#082D31] mb-1">53,84%</h3>
          <p className="text-sm text-[#082D31]">
            Imposto máximo sobre lucros distribuídos incorretamente.
          </p>
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-between hover:shadow-md transition">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-[#F0F7F7] rounded-lg text-[#0F4C52]">
              <svg
                className="w-6 h-6"
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
            <span className="text-xs font-semibold text-[#082D31]/70 uppercase">
              Depreciação
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-3xl font-bold text-[#082D31] mb-1">-20%</h3>
          <p className="text-sm text-[#082D31]">
            Perda anual do valor contábil de veículos no CNPJ.
          </p>
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-between hover:shadow-md transition">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
              <svg
                className="w-6 h-6"
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
            <span className="text-xs font-semibold text-[#082D31]/70 uppercase">
              Frequência
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-3xl font-bold text-[#082D31] mb-1">Mensal</h3>
          <p className="text-sm text-[#082D31]">
            Envio obrigatório de extratos e notas para a contabilidade.
          </p>
        </CardContent>
      </Card>

      <Card className="flex flex-col justify-between hover:shadow-md transition">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <svg
                className="w-6 h-6"
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
            <span className="text-xs font-semibold text-[#082D31]/70 uppercase">
              Objetivo
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="text-3xl font-bold text-[#082D31] mb-1">100%</h3>
          <p className="text-sm text-[#082D31]">
            Segurança para escalar seu negócio digital.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
