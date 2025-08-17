import Image from "next/image";

export default function InfoSection() {
  return (
    <section id="diferenciais" className="bg-accent pt-0 sm:pt-0">
       <div className="w-full">
            <Image 
                src="https://i.imgur.com/CooAy3V.jpeg"
                alt="Detalhe da arquitetura do Aldeia do Vale"
                width={1920}
                height={600}
                className="h-auto w-full rounded-none object-cover shadow-lg md:rounded-none"
            />
        </div>
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center text-accent-foreground">
          <h2 className="font-headline text-3xl md:text-4xl">Está pensando em investir?</h2>
          <p className="mt-4 text-lg text-accent-foreground/80">
            São 152 terrenos únicos, com uma proposta de exclusividade, requinte e alto padrão de viver bem.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-2">
          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/0w1peBx.jpeg"
              alt="Planta do terreno 1"
              width={800}
              height={600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/6mvYsLW.jpeg"
              alt="Planta do terreno 2"
              width={800}
              height={600}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
