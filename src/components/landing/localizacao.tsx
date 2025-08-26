import Image from "next/image";
import { CheckCircle } from "lucide-react";

const infrastructureItems = [
    { name: "Decks Lagos", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Pet Place", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Quadra de Esportes", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Quadras de Tênis", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Casa na Árvore", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Playground", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Espaço Gourmet", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Crossfit", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Campo de Futebol", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Vestiários", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Piscina Natural", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Quadras Beach Tennis", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Fire Place", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Pier", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { name: "Teatro de Arena", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="bg-accent text-accent-foreground pt-0 sm:pt-0 pb-16 sm:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Coluna da Esquerda: Localização e Mapa */}
          <div className="flex flex-col gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-headline text-3xl md:text-4xl">Localização • Aldeia do Vale Pirenópolis</h2>
              <p className="mt-4 text-lg text-accent-foreground/80">
                Endereço: Estrada Morro Frota, Pirenópolis – Goiás, Brasil.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-accent-foreground">
                Aos pés do Morro do Frota e a poucos minutos do centro histórico, onde o tempo desacelera e a vida acontece ao ar livre.
              </p>
            </div>
            <div className="h-80 w-full overflow-hidden rounded-2xl shadow-lg lg:h-96">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15353.474273904394!2d-48.96939489115632!3d-15.837214507076427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935c690055edc069%3A0x83edd2c0d89d5cce!2sAldeia%20Do%20Vale%20Piren%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1755448506574!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
              ></iframe>
            </div>
          </div>

          {/* Coluna da Direita: Infraestrutura */}
          <div className="lg:pt-4">
            <div className="text-center lg:text-left">
                <h3 className="font-headline text-3xl md:text-4xl">Infraestrutura Completa para sua Família</h3>
                <div className="mx-auto mt-8 grid grid-cols-1 gap-x-8 gap-y-4 text-left sm:grid-cols-2">
                    {infrastructureItems.map((item) => (
                        <div key={item.name} className="flex items-center gap-3">
                            {item.icon}
                            <span className="text-base md:text-lg">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
