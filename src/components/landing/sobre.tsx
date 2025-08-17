import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 lg:pr-12">
            <div className="text-center lg:text-left">
                <Image
                  src="https://i.imgur.com/LXxMZPH.png"
                  alt="Logo da Duprime Imobiliária"
                  data-ai-hint="company logo"
                  width={200}
                  height={100}
                  className="mx-auto mb-6 h-auto w-48 object-contain lg:mx-0"
                />
              <h2 className="font-headline text-3xl text-primary md:text-4xl">
                Duprime Imobiliária
              </h2>
              <h3 className="font-headline text-2xl md:text-3xl">Expertise no Mercado de Luxo</h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Referência em imóveis de alto padrão desde 2016, com sede no Lago Sul (Brasília–DF). Portfólio de mansões e imóveis premium, atendimento personalizado, rede de clientes qualificados e parcerias sólidas. Foco em exclusividade e alto valor agregado.
              </p>
            </div>
          </div>
          <div className="order-1 h-96 w-full overflow-hidden rounded-2xl shadow-lg lg:order-2 lg:h-[500px]">
            <Image
              src="https://placehold.co/800x1000.png"
              alt="Consultor imobiliário apresentando projeto"
              data-ai-hint="real estate"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
