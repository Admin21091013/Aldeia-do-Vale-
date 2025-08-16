import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  "Metragens: a partir de 1.250 m²",
  "Total de unidades: 152",
  "Topografia: privilegiada, vista para o Morro do Frota",
  "Vocação: residências autorais de alto padrão",
];

export default function Lotes({ onReserveClick }: { onReserveClick: () => void; }) {
  return (
    <section id="lotes" className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline text-3xl md:text-4xl">Terrenos para viver o essencial</h2>
            <p className="mt-4 text-lg text-accent-foreground/80">
              Projetado para quem valoriza espaço, privacidade e uma conexão genuína com a natureza, sem abrir mão da sofisticação.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                  <span className="text-lg text-accent-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={onReserveClick}
              size="lg"
              className="mt-10 bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-primary/90"
            >
              Quero receber a Tabela e o Masterplan
            </Button>
          </div>
          <div className="order-1 h-80 w-full overflow-hidden rounded-2xl shadow-lg lg:order-2 lg:h-[450px]">
            <Image
              src="https://placehold.co/800x900.png"
              alt="Planta do loteamento com áreas verdes"
              data-ai-hint="masterplan blueprint"
              width={800}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
