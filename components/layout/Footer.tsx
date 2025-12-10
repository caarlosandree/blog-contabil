import Link from 'next/link';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Coluna 1: Marca */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white text-lg font-bold mb-4">Plano A Contabilidade</h3>
            <p className="text-sm text-slate-500 mb-4 max-w-xs">
              Soluções contábeis inteligentes para o crescimento do seu negócio.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/planoacontabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* Adicione outros sociais aqui se houver */}
            </div>
          </div>

          {/* Coluna 2: Links Rápidos (Exemplo) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>
                  Rod. José Carlos Daux, 4633, sala 112 torre A, Saco Grande,
                  Florianópolis-SC
                  <br />
                  CEP: 88032-005
                </span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-slate-500" />
                <a href="mailto:contato@planoacontabilidade.com.br" className="hover:text-white">contato@planoacontabilidade.com.br</a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-slate-500" />
                <a href="tel:+5548991436776" className="hover:text-white">(48) 99143-6776</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior (Separador) */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>
            CNPJ: 35.828.406/0001-41
          </p>
          <p>
            &copy; {currentYear} Plano A Contabilidade. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}