import Image from "next/image";

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-3xl md:text-4xl">Localização • Aldeia do Vale Pirenópolis</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Endereço: Estrada Morro Frota, Pirenópolis – Goiás, Brasil.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              Aos pés do Morro do Frota e a poucos minutos do centro histórico, onde o tempo desacelera e a vida acontece ao ar livre.
            </p>
          </div>
          <div className="h-80 w-full overflow-hidden rounded-2xl shadow-lg lg:h-96">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Mapa aéreo da localização do Aldeia do Vale em Pirenópolis"
              data-ai-hint="aerial map"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
