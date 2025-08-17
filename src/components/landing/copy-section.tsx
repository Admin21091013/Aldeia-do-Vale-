import { WistiaPlayer } from "./wistia-player";

export default function CopySection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-12 max-w-5xl">
            <WistiaPlayer />
        </div>
        <div className="space-y-6 text-left text-lg text-foreground/80">
          <p>
            Viver no Aldeia do Vale Pirenópolis é experimentar um novo conceito de bem-estar e exclusividade.
            Com a mesma qualidade que já é referência, este novo projeto chega com ainda mais benefícios para transformar a vida de quem busca conforto, lazer e contato com a natureza.
          </p>
          <p>
            No Aldeia do Vale Pirenópolis, você terá acesso a experiências únicas:
            um SPA completo para relaxar corpo e mente, um deck exclusivo para pesca em meio à natureza, além de uma deslumbrante piscina de borda infinita que conecta você a paisagens inesquecíveis.
          </p>
          <p>
            E não para por aí. Este projeto traz diferenciais inéditos, como a parceria com um hotel de alto padrão ao lado do condomínio, agregando ainda mais comodidade, sofisticação e valorização ao empreendimento.
          </p>
          <p>
            Qual é o tamanho da sua liberdade?
            Aqui, liberdade significa poder desfrutar do melhor que a vida pode oferecer: tranquilidade, lazer, segurança e um estilo de vida elevado a outro patamar.
          </p>
        </div>
        <div className="mt-8 border-l-4 border-accent pl-6">
            <p className="font-headline text-2xl italic text-foreground">
                Aldeia do Vale Pirenópolis — um lugar único, para quem deseja viver o extraordinário todos os dias.
            </p>
        </div>
      </div>
    </section>
  );
}
