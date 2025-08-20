"use client";

import Image from "next/image";
import { HeroForm } from "./hero-form";
import { type HeroFormData } from "@/app/actions";

interface HeroProps {
  onSuccessfulSubmit: (data: HeroFormData) => void;
}

export default function Hero({ onSuccessfulSubmit }: HeroProps) {
  return (
    <section id="inicio" className="relative w-full">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="https://i.imgur.com/ZB3OgJJ.jpeg"
          alt="Paisagem natural exuberante do Aldeia do Vale em Pirenópolis"
          data-ai-hint="nature lake sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:py-32 lg:py-40">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="text-center text-white lg:text-left">
            <h1 className="font-headline text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Viver no Aldeia do Vale é um privilégio que a natureza concede a poucos.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-sand-200 md:text-xl lg:mx-0">
              Apenas 152 terrenos, a 5 minutos da Igreja Matriz. Cadastre-se e seja um dos escolhidos.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <HeroForm onSuccessfulSubmit={onSuccessfulSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}
