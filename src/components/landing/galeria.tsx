"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  { src: "https://placehold.co/1200x800.png", alt: "Vista do morro ao amanhecer", hint: "mountain sunrise" },
  { src: "https://placehold.co/1200x800.png", alt: "Trilha em meio à natureza", hint: "forest trail" },
  { src: "https://placehold.co/1200x800.png", alt: "Lago cristalino cercado de verde", hint: "clear lake" },
  { src: "https://placehold.co/1200x800.png", alt: "Pôr do sol visto do condomínio", hint: "sunset view" },
  { src: "https://placehold.co/1200x800.png", alt: "Família aproveitando a área de lazer", hint: "family outdoors" },
  { src: "https://placehold.co/1200x800.png", alt: "Pessoas praticando esportes aquáticos no lago", hint: "water sports" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl">Galeria de Imagens</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Explore a beleza natural e o estilo de vida que esperam por você no Aldeia do Vale.
        </p>
      </div>
      <div className="mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                   <div className="aspect-video w-full overflow-hidden rounded-2xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      data-ai-hint={image.hint}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16 hidden sm:flex" />
          <CarouselNext className="mr-16 hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
