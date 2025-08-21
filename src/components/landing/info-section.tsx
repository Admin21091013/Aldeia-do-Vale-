import Image from "next/image";

function LeafSeparator() {
  return (
    <div className="flex items-center justify-center text-primary/50" aria-hidden="true">
      <svg className="h-6 w-auto rotate-180" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10C45 10 42.5 15 40 15C37.5 15 35 10 30 10C25 10 22.5 15 20 15C17.5 15 15 10 10 10C5 10 2.5 15 0 15" stroke="currentColor" strokeWidth="2"/>
        <path d="M40 15C42.5 12.5 45 10 50 10" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 15C22.5 12.5 25 10 30 10" stroke="currentColor" strokeWidth="2"/>
        <path d="M0 15C2.5 12.5 5 10 10 10" stroke="currentColor" strokeWidth="2"/>
      </svg>
      <span className="mx-4 font-headline text-2xl text-primary/60">
        &#x2766;
      </span>
      <svg className="h-6 w-auto" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 10C5 10 7.5 15 10 15C12.5 15 15 10 20 10C25 10 27.5 15 30 15C32.5 15 35 10 40 10C45 10 47.5 15 50 15" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 15C7.5 12.5 5 10 0 10" stroke="currentColor" strokeWidth="2"/>
        <path d="M30 15C27.5 12.5 25 10 20 10" stroke="currentColor" strokeWidth="2"/>
        <path d="M50 15C47.5 12.5 45 10 40 10" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </div>
  );
}

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
      <div className="container mx-auto px-4 pt-16 sm:pt-24 pb-12 sm:pb-16">
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
       <div className="container mx-auto max-w-5xl px-4">
          <LeafSeparator />
      </div>
    </section>
  );
}
