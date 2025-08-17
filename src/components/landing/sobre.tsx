import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
              <Image
                src="https://i.imgur.com/LXxMZPH.png"
                alt="Logo da Duprime Imobiliária"
                data-ai-hint="company logo"
                width={200}
                height={100}
                className="mx-auto mb-6 h-auto w-48 object-contain"
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
      </div>
    </section>
  );
}
