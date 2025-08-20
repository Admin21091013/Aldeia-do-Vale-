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
  { src: "https://i.imgur.com/HpuHqk3.jpeg", alt: "Entrada do condomínio Aldeia do Vale", hint: "condominium entrance" },
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
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                   <div className="aspect-[9/16] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      data-ai-hint={image.hint}
                      width={900}
                      height={1600}
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
