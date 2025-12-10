# Análise Jurisprudencial CARF

Aplicação web interativa para análise e consulta de jurisprudência do CARF (Conselho Administrativo de Recursos Fiscais) sobre **Confusão Patrimonial e Remuneração Indireta**.

## Sobre o Projeto

Este projeto consolida e apresenta de forma interativa a jurisprudência recente do CARF sobre a utilização de recursos corporativos para fins particulares. O foco está na reclassificação fiscal de despesas "operacionais" para **Remuneração Indireta** ou **Distribuição Disfarçada de Lucros (DDL)**, impactando IRPF (sócios), IRPJ e Contribuições Previdenciárias.

### Funcionalidades

- **Dashboard Interativo**: Visualizações gráficas (Chart.js) mostrando tipos de despesas reclassificadas e consequências tributárias
- **KPIs e Estatísticas**: Cards informativos sobre risco de autuação, teses predominantes e foco da fiscalização
- **Critérios de Caracterização**: Explicação dos três pilares utilizados pelo CARF para reclassificação
- **Banco de Acórdãos**: Navegação por casos representativos com filtros por categoria
- **Modal de Detalhes**: Visualização completa de cada acórdão com argumentos do fisco, defesa e decisão

## Stack Tecnológica

- **Next.js 16** (App Router) - Framework React para sites estáticos
- **React 19** com **React Compiler (React Forget)** - Otimização automática de re-renders
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Chart.js** + **react-chartjs-2** - Visualizações gráficas interativas
- **ESLint** - Linting de código

## Estrutura do Projeto

```
frontend/
├── app/
│   ├── layout.tsx          # Layout raiz com fontes Inter e Merriweather
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais e customizações
├── components/
│   ├── layout/              # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── dashboard/           # Componentes do dashboard
│   │   ├── KPICards.tsx
│   │   ├── AssetsChart.tsx
│   │   └── OutcomeChart.tsx
│   ├── criteria/            # Seção de critérios legais
│   │   └── CriteriaPillars.tsx
│   ├── cases/               # Componentes de casos jurisprudenciais
│   │   ├── CasesSection.tsx
│   │   ├── CaseFilters.tsx
│   │   ├── CasesGrid.tsx
│   │   └── CaseModal.tsx
│   └── ui/                  # Componentes reutilizáveis
│       └── StatCard.tsx
├── types/
│   └── index.ts            # Definições de tipos TypeScript
└── lib/
    └── data/
        └── casesData.ts    # Dados dos casos jurisprudenciais
```

## Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build de Produção

```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção
npm start
```

### Linting

```bash
# Verificar código com ESLint
npm run lint
```

## Características Técnicas

- **Server Components**: Maioria dos componentes são Server Components para melhor performance
- **Client Components**: Apenas onde necessário (gráficos, filtros, modais)
- **Code Splitting**: Gráficos carregados dinamicamente com `next/dynamic`
- **TypeScript Strict**: Tipagem forte em todo o projeto
- **React Compiler**: Otimizações automáticas sem necessidade de `useMemo`/`useCallback`
- **Responsivo**: Design mobile-first com Tailwind CSS

## Fontes

O projeto utiliza:
- **Inter** (sans-serif) - Para textos gerais
- **Merriweather** (serif) - Para títulos e cabeçalhos

## Licença

Este projeto foi desenvolvido para fins de pesquisa jurídica e análise tributária.
