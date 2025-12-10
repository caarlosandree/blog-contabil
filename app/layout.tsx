import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

const merriweather = Merriweather({
  variable: '--font-merriweather',
  subsets: ['latin'],
  weight: ['300', '700'],
});

export const metadata: Metadata = {
  title: 'Análise Jurisprudencial CARF: Confusão Patrimonial e Remuneração Indireta',
  description:
    'Relatório interativo consolidando a jurisprudência recente do CARF sobre a utilização de recursos corporativos para fins particulares.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased bg-slate-50 text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
