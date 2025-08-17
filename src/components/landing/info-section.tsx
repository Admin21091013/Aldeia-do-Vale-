import Image from "next/image";

export default function InfoSection() {
  return (
    <section id="diferenciais" className="bg-accent py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-accent-foreground">
          <h2 className="font-headline text-3xl md:text-4xl">Está pensando em investir?</h2>
          <p className="mt-4 text-lg text-accent-foreground/80">
            São 152 terrenos únicos, com uma proposta de exclusividade, requinte e alto padrão de viver bem.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-3">
          <div className="w-full max-w-xs overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/oMt2kcj.png"
              alt="Luxo e natureza em perfeita harmonia"
              width={275}
              height={192}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="w-full max-w-xs overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/SsiDE98.png"
              alt="Um novo capítulo na história de Pirenópolis"
              width={275}
              height={192}
              className="h-auto w-full rounded-2xl"
            />
          </div>
          <div className="w-full max-w-xs overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/FC328r1.png"
              alt="Vista para o Morro do Frota"
              width={275}
              height={192}
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
