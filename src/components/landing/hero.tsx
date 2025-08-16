"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/5562999999999?text=Tenho%20interesse%20no%20Aldeia%20do%20Vale%20%E2%80%93%20Piren%C3%B3polis.";

export default function Hero({ onReserveClick }: { onReserveClick: () => void; }) {
  return (
    <section id="inicio" className="relative h-screen min-h-[700px] w-full">
      <Image
        src="https://i.imgur.com/4L5xqmo.jpeg"
        alt="Paisagem natural exuberante do Aldeia do Vale em Pirenópolis"
        data-ai-hint="nature lake sunrise"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
            Viver no Aldeia do Vale é um privilégio que a natureza concede a poucos.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sand-200 md:text-xl">
            Apenas 152 terrenos, a 5 minutos da Igreja Matriz. Cadastre-se e seja um dos escolhidos.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={onReserveClick}
              size="lg"
              className="w-full bg-accent text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent/90 sm:w-auto"
            >
              Reservar Interesse
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-black sm:w-auto"
              asChild
            >
                <Link href={WHATSAPP_LINK} target="_blank">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-sand-300">
            Resposta em até 15 minutos • Atendimento personalizado Duprime
          </p>
        </div>
      </div>
    </section>
  );
}
