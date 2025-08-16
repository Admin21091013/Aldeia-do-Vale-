import { Waves, Dog, Goal, ToyBrick, UtensilsCrossed, Dumbbell, Shirt, Droplets, Flame, Anchor, Theater } from "lucide-react";

const infraestruturaItens = [
  { icon: <Waves />, name: "Decks Lagos" },
  { icon: <Dog />, name: "Pet Place" },
  { icon: <Goal />, name: "Quadra de Esportes" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.67 19.52c-3.13 2.33-7.21 2.33-10.34 0"/><path d="M5.33 4.48c-3.13-2.33 7.21-2.33 10.34 0"/><path d="M12 2v20"/><path d="M22 12H2"/></svg>, name: "Quadras de Tênis" },
  { icon: <ToyBrick />, name: "Casa na Árvore & Playground" },
  { icon: <UtensilsCrossed />, name: "Espaço Gourmet" },
  { icon: <Dumbbell />, name: "Crossfit" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sircle"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 0-10 10h20a10 10 0 0 0-10-10zM7 9l-2 4h14l-2-4H7zm5 13l2-4H10l2 4zM3.42 15.42l3.12-6.24m10.94 0l3.12 6.24"/></svg>, name: "Campo de Futebol" },
  { icon: <Shirt />, name: "Vestiários" },
  { icon: <Droplets />, name: "Piscina Natural" },
  { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.67 19.52c-3.13 2.33-7.21 2.33-10.34 0"/><path d="M5.33 4.48c-3.13-2.33 7.21-2.33 10.34 0"/></svg>, name: "Quadras Beach Tennis" },
  { icon: <Flame />, name: "Fire Place" },
  { icon: <Anchor />, name: "Píer" },
  { icon: <Theater />, name: "Teatro de Arena" },
];

export default function Infraestrutura() {
  return (
    <section id="infraestrutura" className="bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl">Infraestrutura Completa para sua Família</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Cada detalhe foi pensado para proporcionar momentos inesquecíveis, integrando lazer, esporte e convívio com a natureza.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {infraestruturaItens.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
