import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-[#F0F7F7] overflow-hidden relative">
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-[#2E8B94] rounded-full opacity-20 blur-xl"></div>
      <div className="p-8 md:p-12 relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-[#2E8B94] text-white text-xs font-bold uppercase tracking-wide mb-4">
          Infoprodutores
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0F4C52] mb-4 leading-tight">
          Organização fiscal, contábil e financeira <br />
          para escalar com segurança.
        </h1>
        <p className="text-[#082D31] text-lg max-w-3xl mb-8">
          Este guia interativo transforma as diretrizes da Plano A em ações
          práticas. Evite a confusão patrimonial, emita notas corretamente e
          utilize a contabilidade estratégica para pagar menos impostos
          legalmente.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            className="bg-[#0F4C52] text-white hover:bg-[#082D31] shadow-lg hover:shadow-xl"
          >
            <a href="#guia">Explorar o Guia</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#0F4C52] text-[#0F4C52] hover:bg-[#F0F7F7]"
          >
            <a
              href="https://wa.me/5548991436776"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.897.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.516-.173-.009-.371-.009-.57-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              WhatsApp Plano A
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
