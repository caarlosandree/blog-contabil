
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-[#082D31] text-[#F0F7F7] mt-auto border-t border-[#0F4C52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#0F4C52] pb-8 mb-8">
          
          {/* Coluna 1: Marca */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Plano A Contabilidade</h4>
            <p className="text-sm leading-relaxed">
              Especializada em negócios digitais. Ajudamos você a crescer com segurança, economia e inteligência.
            </p>
          </div>

          {/* Coluna 2: Acesso Rápido */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Acesso Rápido</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#2E8B94] transition">
                  App do Cliente
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#2E8B94] transition">
                  Envio de Documentos
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5548991436776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E8B94] transition"
                >
                  Whatsapp Suporte
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Canais */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Canais</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.897.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.516-.173-.009-.371-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <a
                  href="https://wa.me/5548991436776"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2E8B94] transition"
                >
                  (48) 99143-6776
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="text-center text-xs text-[#2E8B94]">
          &copy; {currentYear} Plano A Contabilidade. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}