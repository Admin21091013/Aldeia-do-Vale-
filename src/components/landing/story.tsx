import Image from "next/image";

export default function Story() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-card p-8 text-center shadow-lg md:p-12">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <div className="flex-shrink-0">
               <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <p className="text-lg leading-relaxed text-foreground/80 md:text-left md:text-xl">
              Depois de quase 30 anos do primeiro Aldeia do Vale, o tempo amadureceu um desejo. O novo capítulo começa agora: mesma assinatura, novo destino — Pirenópolis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
