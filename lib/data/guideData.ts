import type { GuideItem } from '@/types';

export const guideData: GuideItem[] = [
  {
    id: 1,
    title: 'Separação PF x PJ',
    category: 'organização',
    excerpt:
      'A regra de ouro: nunca misture contas pessoais com as da empresa para evitar confusão patrimonial.',
    content: `
      <p class="font-bold text-red-600 mb-2">Evite confusão patrimonial!</p>
      <p>Sua empresa e você são entidades diferentes. Quando você mistura suas contas com a da empresa, a lei entende que vocês são uma coisa só. E, quando isso acontece, se a empresa tiver um problema, a justiça pode atingir seus bens pessoais.</p>
      <ul class="list-disc pl-5 space-y-2 mt-4">
        <li>Use uma <strong>conta bancária exclusiva no CNPJ</strong>.</li>
        <li>Despesas da empresa = pague com dinheiro da empresa.</li>
        <li>Despesas pessoais = retire por pró-labore ou distribuição de lucros.</li>
      </ul>
      <div class="bg-blue-50 border-l-4 border-blue-900 p-4 mt-4">
        <p class="text-blue-900 font-semibold">Regra:</p>
        <p class="italic text-slate-600">"Não pague despesas pessoais com a empresa, nem despesas da empresa com o seu dinheiro."</p>
      </div>
    `,
  },
  {
    id: 2,
    title: 'Envio Mensal de Documentos',
    category: 'organização',
    excerpt:
      'Checklist do que enviar todo início de mês para garantir a contabilidade em dia.',
    content: `
      <p>A Plano A compartilha com você uma pasta no Google Drive. Todo início de mês, envie:</p>
      <ul class="list-disc pl-5 space-y-2 mt-4 marker:text-blue-900">
        <li><strong>Extratos bancários</strong> do mês anterior.</li>
        <li><strong>Notas fiscais</strong> de fornecedores (CNPJ).</li>
        <li><strong>Controle financeiro</strong> com descrição e motivo de cada despesa.</li>
        <li>Comprovantes de pagamento e Contratos de parceria.</li>
        <li>Planilha de produtos vendidos e modelos de parcerias.</li>
      </ul>
      <p class="mt-4 text-xs text-slate-600">Isso ajuda a classificar corretamente e gerar relatórios para sua tomada de decisão.</p>
    `,
  },
  {
    id: 3,
    title: 'Emissão de Notas Fiscais',
    category: 'fiscal',
    excerpt:
      'Emita sempre na data da venda e pelo valor total. Evite o principal erro dos infoprodutores.',
    content: `
      <p class="mb-3">Se você deixar de emitir notas fiscais, sua empresa estará no risco. Bancos e plataformas informam seu faturamento ao fisco.</p>
      <h4 class="font-bold text-blue-900 mt-4 mb-2">Boas Práticas:</h4>
      <ul class="list-disc pl-5 space-y-2">
        <li>Emita sempre na <strong>data da venda</strong>, não após a garantia.</li>
        <li>Use o <strong>valor total pago pelo comprador</strong>, incluindo taxas.</li>
        <li>Configure corretamente o emissor (ex: eNotas) com auxílio da Plano A.</li>
        <li>Recebeu por fora da plataforma? Emita nota manualmente.</li>
      </ul>
      <div class="bg-red-50 border border-red-200 rounded p-3 mt-4 text-red-600 text-sm">
        🚨 <strong>Alerta:</strong> Notas emitidas fora do mês ou com valores divergentes geram riscos altos de autuação.
      </div>
    `,
  },
  {
    id: 4,
    title: 'Precificação Inteligente',
    category: 'financeiro',
    excerpt:
      'O imposto incide sobre o valor total. Aprenda a calcular o preço para garantir lucro real.',
    content: `
      <p>Muitos infoprodutores erram ao olhar apenas a comissão líquida. Lembre-se:</p>
      <ul class="list-disc pl-5 space-y-2 mt-2">
        <li>No Simples Nacional, <strong>quanto maior o faturamento, maior a alíquota</strong>.</li>
        <li>O imposto incide sobre o <strong>valor TOTAL pago pelo cliente</strong>.</li>
        <li>Taxas de parcelamento e comissões aumentam a base de cálculo.</li>
      </ul>
      <p class="mt-4">Simule cenários considerando todos os custos da operação para garantir margem de lucro real.</p>
    `,
  },
  {
    id: 5,
    title: 'Parcerias e Coprodução',
    category: 'financeiro',
    excerpt:
      'Como dividir despesas com sócios e parceiros sem gerar impostos indevidos.',
    content: `
      <p>Se você tem sócios ou coprodutores, formalize tudo em <strong>contrato de parceria</strong>.</p>
      <ul class="list-disc pl-5 space-y-2 mt-4">
        <li>Use <strong>Nota de Débito</strong> para reembolsos (não é nota fiscal!).</li>
        <li>Mantenha planilha mensal de controle (Quem pagou, quanto, percentual).</li>
        <li>Envie tudo para a contabilidade mensalmente.</li>
      </ul>
      <p class="mt-4 font-semibold text-green-600">🛡️ Isso evita impostos indevidos e protege todos em caso de fiscalização.</p>
    `,
  },
  {
    id: 6,
    title: 'Contratação de Pessoa Física',
    category: 'riscos',
    excerpt:
      'Contratou freelancer sem CNPJ? É obrigatório registrar na folha de pagamento.',
    content: `
      <p>Sempre que contratar uma PF, é <strong>obrigatório</strong> registrar o pagamento na folha, com retenção de INSS e IR.</p>
      <h4 class="font-bold text-blue-900 mt-4 mb-2">O Processo:</h4>
      <ol class="list-decimal pl-5 space-y-2">
        <li>Envie contrato e docs do prestador para a Plano A.</li>
        <li>Informe valor e data.</li>
        <li>Nós registramos na folha e enviamos o recibo líquido.</li>
        <li>Enviamos boletos dos encargos retidos para a empresa pagar.</li>
      </ol>
    `,
  },
  {
    id: 7,
    title: 'Pró-labore vs. Lucros',
    category: 'financeiro',
    excerpt:
      'Entenda a diferença tributária: um paga INSS/IR, o outro é isento (se houver contabilidade).',
    content: `
      <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg mb-4">
        <table class="min-w-full divide-y divide-gray-300">
          <thead class="bg-gray-50">
            <tr>
              <th class="py-2 px-3 text-left text-xs font-semibold text-gray-900">Tipo</th>
              <th class="py-2 px-3 text-left text-xs font-semibold text-gray-900">Quando retirar</th>
              <th class="py-2 px-3 text-left text-xs font-semibold text-gray-900">Tributação</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr>
              <td class="whitespace-nowrap py-2 px-3 text-sm font-medium text-gray-900">Pró-labore</td>
              <td class="whitespace-nowrap py-2 px-3 text-sm text-gray-500">Mensalmente</td>
              <td class="whitespace-nowrap py-2 px-3 text-sm text-gray-500">INSS e IR</td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-2 px-3 text-sm font-medium text-gray-900">Lucro</td>
              <td class="whitespace-nowrap py-2 px-3 text-sm text-gray-500">Após fechamento</td>
              <td class="whitespace-nowrap py-2 px-3 text-sm text-green-600 font-bold">Isento*</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-slate-600">*Distribuição de lucros sem contabilidade regular ou antecipada pode gerar imposto de até <strong>53,84%</strong>.</p>
    `,
  },
  {
    id: 8,
    title: 'Compra de Veículos no CNPJ',
    category: 'riscos',
    excerpt:
      'Não recomendamos. Entenda a depreciação contábil e o ganho de capital na venda.',
    content: `
      <p class="font-bold text-red-600 mb-2">Não recomendamos, exceto se essencial à atividade.</p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Uso Pessoal:</strong> Se usado para fins pessoais, caracteriza remuneração disfarçada (risco de INSS/IR).</li>
        <li><strong>Depreciação:</strong> A contabilidade deprecia 20% ao ano. O valor contábil cai rápido.</li>
        <li><strong>Venda:</strong> Se vender por valor acima do contábil, paga-se imposto sobre Ganho de Capital (aprox. 15% a 20% sobre o lucro da venda).</li>
      </ul>
      <p class="mt-4 text-sm">Na Pessoa Física, o veículo mantém o valor de aquisição, evitando tributação na revenda na maioria dos casos.</p>
    `,
  },
  {
    id: 9,
    title: 'Aportes e Empréstimos',
    category: 'financeiro',
    excerpt:
      'Colocou dinheiro do bolso na empresa? Avise a contabilidade para registrar corretamente.',
    content: `
      <p>Todo valor que entra na conta da empresa precisa de justificativa.</p>
      <ul class="space-y-3 mt-4">
        <li class="bg-slate-50 p-3 rounded border border-slate-200">
          <strong>1. Aporte de Capital:</strong> Valor "guardado" para futuro aumento de capital. Não pode ser devolvido como lucro.
        </li>
        <li class="bg-slate-50 p-3 rounded border border-slate-200">
          <strong>2. Empréstimo (Mútuo):</strong> Se a empresa vai devolver o dinheiro a você. Exige contrato simples e registro contábil.
        </li>
      </ul>
    `,
  },
];
