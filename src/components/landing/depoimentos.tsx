import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Família Andrade",
    occupation: "Investidores",
    text: "A localização é simplesmente imbatível. Estar tão perto do centro histórico e ao mesmo tempo imerso na tranquilidade da natureza é um privilégio. A Duprime conduziu tudo com maestria.",
  },
  {
    name: "Mariana Costa",
    occupation: "Arquiteta",
    text: "O masterplan é genial, respeitando a topografia e valorizando as vistas. Como arquiteta, vejo um potencial incrível para projetos únicos. Ansiosa para começar o nosso.",
  },
  {
    name: "Roberto Martins",
    occupation: "Empresário",
    text: "Buscávamos um refúgio do agito de Brasília, e encontramos no Aldeia do Vale o equilíbrio perfeito entre luxo, privacidade e natureza. O atendimento da imobiliária foi impecável.",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">O que nossos clientes dizem</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A satisfação de quem escolhe viver ou investir conosco é a nossa maior conquista.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col border-0 bg-card shadow-lg">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="flex text-[#C7A45B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-base text-muted-foreground">"{testimonial.text}"</p>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.occupation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
