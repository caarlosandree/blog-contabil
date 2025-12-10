'use client';

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Lei15270ModalsProps {
  openModal: string | null;
  onClose: () => void;
}

export function Lei15270Modals({ openModal, onClose }: Lei15270ModalsProps) {
  return (
    <>
      {/* Modal Retenção */}
      <Dialog open={openModal === 'retencao'} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold text-[#0F4C52] mb-4 border-l-4 border-[#D97D54] pl-3">
            Retenção de 10% na Fonte
          </DialogTitle>
          <div className="prose text-[#141414]">
            <p className="mb-4">
              A partir de janeiro de 2026, toda empresa que distribuir lucros
              acima de <strong>R$ 50.000,00 no mês</strong> a um mesmo sócio
              pessoa física deverá reter 10% de Imposto de Renda na fonte.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mb-4 border border-[#A9A9A9]/30">
              <h4 className="font-bold text-sm mb-2">Exemplo Prático:</h4>
              <ul className="text-sm space-y-2">
                <li>
                  💰 Distribuição: <strong>R$ 70.000</strong>
                </li>
                <li>
                  🔴 Retenção (10%): <strong>R$ 7.000</strong>
                </li>
                <li>
                  ✅ Líquido ao sócio: <strong>R$ 63.000</strong>
                </li>
              </ul>
            </div>

            <h3 className="font-bold text-lg text-[#0F4C52] mt-6 mb-2">
              Detalhes Importantes
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>
                <strong>Cumulatividade:</strong> Se houver mais de um pagamento
                no mês, os valores somam-se.
              </li>
              <li>
                <strong>Antecipação:</strong> O valor retido não é definitivo;
                ele abate do IRPFM anual.
              </li>
              <li>
                <strong>Base Legal:</strong> Art. 6º-A da Lei nº 9.250/95.
              </li>
            </ul>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal Transição */}
      <Dialog open={openModal === 'transicao'} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold text-[#0F4C52] mb-4 border-l-4 border-[#2E8B94] pl-3">
            Estratégia de Transição 2025
          </DialogTitle>
          <div className="prose text-[#141414]">
            <p className="mb-4">
              A lei cria uma oportunidade única: Lucros apurados ou formalmente
              aprovados até <strong>31/12/2025</strong> não serão tributados,
              mesmo que pagos em 2026, 2027 ou 2028.
            </p>

            <div className="bg-teal-50 p-5 rounded-lg mb-6 border border-[#2E8B94]">
              <h4 className="font-bold text-[#2E8B94] mb-2">💡 O Grande Segredo</h4>
              <p className="text-sm">
                Lucro Contábil ≠ Dinheiro em Caixa. Você pode ter R$ 500 mil de
                lucro contábil, mas apenas R$ 50 mil no banco. Você pode
                aprovar a distribuição dos R$ 500 mil em Ata agora, garantindo
                a isenção, e pagar conforme o dinheiro entrar no futuro.
              </p>
            </div>
            <h3 className="font-bold text-lg text-[#0F4C52] mb-2">
              O que fazer em Dezembro/2025?
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700">
              <li>Levantar balancete até 30/11/2025.</li>
              <li>Definir o lucro contábil acumulado.</li>
              <li>
                <strong>Formalizar Ata de Destinação</strong> e registrar na
                Junta Comercial antes de 31/12.
              </li>
            </ol>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal IRPFM */}
      <Dialog open={openModal === 'irpfm'} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold text-[#0F4C52] mb-4 border-l-4 border-[#F4B79A] pl-3">
            IRPF Mínimo (Anual)
          </DialogTitle>
          <div className="prose text-[#141414]">
            <p className="mb-4">
              O IRPFM soma todas as suas rendas (salários, aluguéis, lucros).
              Se passar de <strong>R$ 600 mil/ano</strong>, você entra na
              regra.
            </p>

            <table className="w-full text-sm text-left mb-6 border border-[#A9A9A9]/20">
              <thead className="bg-[#0F4C52] text-white">
                <tr>
                  <th className="p-3">Renda Anual</th>
                  <th className="p-3">Alíquota</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#A9A9A9]/20">
                <tr>
                  <td className="p-3">Até R$ 600 mil</td>
                  <td className="p-3">0% (Isento)</td>
                </tr>
                <tr>
                  <td className="p-3">R$ 900 mil</td>
                  <td className="p-3">~5% (Linear)</td>
                </tr>
                <tr>
                  <td className="p-3">Acima de R$ 1.2 mi</td>
                  <td className="p-3">10% (Fixo)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm font-bold text-[#D97D54]">Atenção:</p>
            <p className="text-sm mb-4">
              O imposto funciona como um ajuste anual. Se você já sofreu
              retenção na fonte durante o ano, esse valor é descontado do que
              você deve pagar (ou restituído).
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal Holding */}
      <Dialog open={openModal === 'holding'} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold text-[#0F4C52] mb-4 border-l-4 border-[#2E8B94] pl-3">
            Estrutura de Holding
          </DialogTitle>
          <div className="prose text-[#141414]">
            <p className="mb-4">
              A nova tributação (IRPFM) aplica-se apenas a{' '}
              <strong>Pessoas Físicas</strong>. Lucros pagos de PJ para PJ
              continuam isentos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 p-4 rounded border-t-4 border-[#2E8B94]">
                <h4 className="font-bold text-sm text-[#2E8B94]">
                  Quando vale a pena? ✅
                </h4>
                <ul className="text-xs list-disc pl-4 mt-2">
                  <li>Renda PF &gt; R$ 600k/ano.</li>
                  <li>
                    Intenção de reinvestir o lucro (comprar imóveis, ações pela
                    empresa).
                  </li>
                  <li>Planejamento sucessório.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded border-t-4 border-[#D97D54]">
                <h4 className="font-bold text-sm text-[#D97D54]">
                  Quando NÃO vale? ❌
                </h4>
                <ul className="text-xs list-disc pl-4 mt-2">
                  <li>
                    Se você precisa sacar todo o dinheiro para gastar na PF.
                  </li>
                  <li>
                    Se o custo de manutenção da Holding superar a economia de
                    imposto.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal Redutor */}
      <Dialog open={openModal === 'redutor'} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold text-[#0F4C52] mb-4 border-l-4 border-[#0F4C52] pl-3">
            O Redutor de 34%
          </DialogTitle>
          <div className="prose text-[#141414]">
            <p className="mb-4">
              A lei institui uma trava: A soma do imposto da empresa
              (IRPJ+CSLL) + imposto do sócio (IRPFM) não pode passar de{' '}
              <strong>34%</strong> do lucro contábil.
            </p>

            <div className="bg-[#0F4C52] text-white p-4 rounded-lg mb-4">
              <p className="font-bold">Exemplo:</p>
              <p className="text-sm">
                Se sua empresa já paga 30% de imposto efetivo sobre o lucro:
              </p>
              <p className="text-sm mt-2">
                30% (Empresa) + 10% (Sócio) = 40%{' '}
                <span className="text-[#D97D54]">(Ultrapassou)</span>
              </p>
              <p className="text-sm font-bold mt-2 text-[#2E8B94]">
                O sistema devolve 6%. Você paga apenas 4% na PF.
              </p>
            </div>
            <p className="text-sm text-[#D97D54] font-bold">
              ⚠️ Requisito Vital:
            </p>
            <p className="text-sm">
              Para usar o redutor, sua contabilidade precisa ser IMPECÁVEL.
              Misturar contas pessoais e da empresa invalida o cálculo.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal Checklist */}
      <Dialog open={openModal === 'checklist'} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle className="text-2xl font-bold text-[#0F4C52] mb-4 border-l-4 border-[#2E8B94] pl-3">
            Checklist Final 2025
          </DialogTitle>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 accent-[#2E8B94]"
              />
              <p className="text-sm text-[#141414]">
                Verifique se há lucros acumulados até 12/2025.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 accent-[#2E8B94]"
              />
              <p className="text-sm text-[#141414] font-bold">
                Registre Ata de Destinação na Junta Comercial para lucros
                contábeis (mesmo sem caixa).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 accent-[#2E8B94]"
              />
              <p className="text-sm text-[#141414]">
                Planeje distribuições mensais de 2026 abaixo de R$ 50
                mil/sócio.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked
                disabled
                className="mt-1 accent-[#2E8B94]"
              />
              <p className="text-sm text-[#141414]">
                Pare IMEDIATAMENTE de pagar contas pessoais pela empresa (Isso
                mata o Redutor de 34%).
              </p>
            </div>
            <div className="mt-6">
              <Button
                asChild
                className="block w-full text-center bg-[#2E8B94] text-white font-bold py-3 rounded hover:bg-[#2E8B94]/90"
              >
                <a
                  href="https://wa.me/5548991436776"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Plano de Ação Plano A
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
