'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

export function TaxSimulatorHelp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-[#2E8B94] hover:text-[#0F4C52] hover:bg-[#2E8B94]/10"
          aria-label="Ajuda sobre o simulador"
        >
          <HelpCircle className="h-4 w-4 mr-2" />
          Como funciona?
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#0F4C52]">
            Como funciona o Simulador de Taxa
          </DialogTitle>
          <DialogDescription>
            Entenda os cálculos e impostos considerados na comparação entre
            Pessoa Física e Pessoa Jurídica
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <section>
            <h3 className="text-lg font-bold text-[#0F4C52] mb-3">
              Parâmetros do Projeto
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  Valor de Aquisição
                </p>
                <p>
                  Valor pago pelo terreno ou imóvel antes da obra. Este valor
                  será usado para calcular o custo total do projeto.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  Custo de Obra (Unitário)
                </p>
                <p>
                  Custo total da construção ou reforma por unidade. Inclui
                  materiais, mão de obra e outros custos diretos.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  Valor de Venda (Unitário)
                </p>
                <p>
                  Preço de venda de cada unidade imobiliária. Este valor deve
                  ser maior que a soma do valor de aquisição e custo de obra
                  para haver lucro.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  Quantidade de Imóveis/Ano
                </p>
                <p>
                  Número de unidades vendidas por ano. Este valor multiplica os
                  valores unitários para calcular a receita total anual.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0F4C52] mb-3">
              Funding & Perfil PF
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  Lucro PF Reinvestido
                </p>
                <p>
                  Valor do lucro de pessoa física que será reinvestido no
                  projeto. Este valor reduz o funding extra necessário e,
                  consequentemente, o IRRF sobre funding.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  PF é Contribuinte Habitual?
                </p>
                <p>
                  Se marcado, indica que a pessoa física é contribuinte habitual
                  de IBS/CBS (Imposto sobre Bens e Serviços / Contribuição
                  sobre Bens e Serviços), o que faz com que estes impostos
                  incidam sobre a receita da PF.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0F4C52] mb-3">
              Cálculos - Pessoa Física (PF)
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-[#D97D54] mb-1">
                  IRRF sobre Funding (10%)
                </p>
                <p>
                  Imposto de Renda Retido na Fonte sobre o funding extra
                  necessário. Calculado como 10% do valor que excede o lucro PF
                  reinvestido.
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">
                  Fórmula: (Custo Total - Lucro PF Reinvestido) × 10%
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#D97D54] mb-1">
                  Ganho de Capital (GC) - 15%
                </p>
                <p>
                  Imposto sobre o ganho de capital na venda do imóvel. Taxa fixa
                  de 15% sobre o lucro bruto (receita total - custo total).
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">
                  Fórmula: (Receita Total - Custo Total) × 15%
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#D97D54] mb-1">
                  IBS/CBS (PF)
                </p>
                <p>
                  Imposto sobre Bens e Serviços / Contribuição sobre Bens e
                  Serviços. Apenas incide se a PF for contribuinte habitual. As
                  taxas variam por ano conforme a transição tributária.
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">
                  Taxas: 2026 (0%), 2027-2028 (4,25%), 2029 (5,175%), 2030
                  (6,1%), 2031 (7,025%), 2032 (7,95%), 2033 (13,5%)
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0F4C52] mb-3">
              Cálculos - Pessoa Jurídica (PJ) - Lucro Presumido
            </h3>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-[#0F4C52] mb-1">
                  Taxa Total PJ
                </p>
                <p>
                  Taxa total de impostos sobre a receita no regime de Lucro
                  Presumido. Inclui IRPJ, CSLL, PIS, COFINS e outros impostos.
                  As taxas variam por ano conforme a transição tributária.
                </p>
                <p className="text-xs text-gray-500 mt-1 italic">
                  Taxas: 2026 (6,73%), 2027-2028 (7,33%), 2029 (8,255%), 2030
                  (9,18%), 2031 (10,105%), 2032 (11,03%), 2033 (16,58%)
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold text-[#0F4C52] mb-3">
              Interpretando os Resultados
            </h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  Custo Tributário Total
                </p>
                <p>
                  Soma de todos os impostos pagos no período de 2026 a 2033.
                  Compare os valores entre PF e PJ para identificar a melhor
                  estratégia.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  Taxa Efetiva
                </p>
                <p>
                  Percentual da receita total que é pago em impostos. Mostra a
                  carga tributária real sobre o negócio.
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#2E8B94] mb-1">
                  Melhor Estratégia
                </p>
                <p>
                  Indica qual regime (PF ou PJ) resulta em menor carga tributária
                  total, mostrando também a economia estimada.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-[#F0F7F7] p-4 rounded-lg">
            <p className="text-xs text-gray-600">
              <strong>Nota:</strong> Este simulador é uma ferramenta de
              estimativa. Os valores reais podem variar conforme legislação
              específica, interpretações fiscais e características particulares
              de cada projeto. Consulte sempre um contador ou consultor
              tributário para análise detalhada do seu caso.
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
