import { ContactForm } from "./contact-form";

export default function Contato() {
  return (
    <section id="contato" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-headline text-3xl md:text-4xl">Seja um dos escolhidos.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
            Vagas limitadas — lotes exclusivos, natureza protagonista e valorização real. Preencha o formulário abaixo e garanta sua prioridade.
            </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-card p-8 shadow-lg">
            <ContactForm />
        </div>
      </div>
    </section>
  );
}
