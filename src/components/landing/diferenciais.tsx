import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Scaling, Mountain, MapPin } from "lucide-react";

const diferenciais = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Exclusividade Real",
    description: "Apenas 152 unidades cuidadosamente planejadas.",
  },
  {
    icon: <Scaling className="h-8 w-8 text-primary" />,
    title: "Terrenos Amplos",
    description: "A partir de 1.250 m² para projetos autorais.",
  },
  {
    icon: <Mountain className="h-8 w-8 text-primary" />,
    title: "Natureza Protagonista",
    description: "Vista para o Morro do Frota e ecossistema preservado.",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Localização Privilegiada",
    description: "5 min da Igreja Matriz e do centro histórico.",
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((item, index) => (
            <Card key={index} className="transform border-0 bg-card text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <CardHeader className="items-center">
                {item.icon}
                <CardTitle className="pt-4 font-headline text-2xl text-card-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
