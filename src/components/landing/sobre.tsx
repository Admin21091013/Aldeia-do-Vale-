import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="h-96 w-full overflow-hidden rounded-2xl shadow-lg lg:h-[500px]">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="Sede da Duprime Imobiliária em Brasília"
              data-ai-hint="modern building facade"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-3xl text-primary md:text-4xl">
              Duprime Imobiliária
            </h2>
            <h3 className="font-headline text-2xl md:text-3xl">Expertise no Mercado de Luxo</h3>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Referência em imóveis de alto padrão desde 2016, com sede no Lago Sul (Brasília–DF). Portfólio de mansões e imóveis premium, atendimento personalizado, rede de clientes qualificados e parcerias sólidas. Foco em exclusividade e alto valor agregado.
            </p>
            <div className="mt-8 border-l-4 border-accent pl-6">
              <p className="font-headline text-xl italic text-foreground">
                “Alguns lugares não são apenas construídos, são concedidos pela própria natureza. Cadastre-se agora e garanta seu lugar no exclusivo Aldeia do Vale – Pirenópolis.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
