import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quais as metragens disponíveis?",
    answer: "Os terrenos no Aldeia do Vale Pirenópolis partem de 1.250 metros quadrados, oferecendo amplo espaço para projetos residenciais autorais e exclusivos."
  },
  {
    question: "Há financiamento ou condições especiais?",
    answer: "Sim, oferecemos planos de financiamento direto com a construtora e condições especiais de lançamento. Entre em contato com nosso time para saber mais."
  },
  {
    question: "O empreendimento é fechado e seguro?",
    answer: "Sim, o Aldeia do Vale é um condomínio fechado com portaria e segurança 24 horas, garantindo total privacidade e tranquilidade para sua família."
  },
  {
    question: "Qual a proximidade do centro histórico e principais atrações?",
    answer: "O empreendimento está localizado a apenas 5 minutos de carro da Igreja Matriz e do charmoso centro histórico de Pirenópolis, unindo o melhor dos dois mundos."
  },
  {
    question: "Animais de estimação são permitidos?",
    answer: "Com certeza! O projeto conta inclusive com um 'Pet Place' e vastas áreas verdes para que seu animal de estimação possa aproveitar tanto quanto você."
  },
  {
    question: "Como agendar uma visita guiada?",
    answer: "Para agendar uma visita e conhecer pessoalmente este paraíso, basta preencher nosso formulário de interesse ou nos chamar diretamente no WhatsApp."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Perguntas Frequentes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Tudo o que você precisa saber sobre o seu futuro refúgio em Pirenópolis.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
