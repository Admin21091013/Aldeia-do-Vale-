import { GaleriaVideo } from "./galeria-video";
import Galeria from "./galeria";
import { GaleriaVideo2 } from "./galeria-video-2";

export function GaleriaCombinada() {
  return (
    <section id="galeria" className="w-full bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl">Galeria</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Explore a beleza natural e o estilo de vida que esperam por você no Aldeia do Vale.
        </p>
      </div>
      <div className="container mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        <Galeria />
        <GaleriaVideo />
        <GaleriaVideo2 />
      </div>
    </section>
  );
}
