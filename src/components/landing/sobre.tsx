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
            <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
              <h3 className="font-headline text-2xl md:text-3xl text-primary">O que é o Luxo?</h3>
              <p>O luxo pode ser definido como os momentos mais especiais que compartilhamos com quem amamos! E é sempre tempo de criar momentos especiais com as pessoas que são importantes para nós.</p>
              <p>Porque no final das contas, o que importa não é o que temos, mas o que somos! O verdadeiro luxo está em momentos e vivências. Está relacionado ao que somos e não ao que temos.</p>
              <p>O luxo é uma experiência! Quais experiências você tem vivido?</p>
              <blockquote className="border-l-4 border-accent pl-4 italic">
                “Luxo não é o quanto você investe, e sim a experiência que se vive”.
              </blockquote>
              <p className="font-bold">Luxo é experiência.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
