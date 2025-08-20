import Link from "next/link";
import { Instagram } from "lucide-react";

interface FooterProps {
    onIndicationClick: () => void;
}

export default function Footer({ onIndicationClick }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="font-headline text-xl">Aldeia do Vale Pirenópolis</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">Um novo capítulo em Pirenópolis.</p>
             <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <p className="font-bold">Aldeia do Vale</p>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-xl">Realização</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">Duprime Imobiliária – CRECI-DF 25.435</p>
            <p className="mt-1 text-sm text-primary-foreground/70">Sede: Lago Sul – Brasília/DF</p>
          </div>
          <div>
            <h3 className="font-headline text-xl">Contato</h3>
            <p className="mt-2 text-sm text-primary-foreground/70">E-mail: contato@duprimeimob.com.br</p>
            <p className="mt-1 text-sm text-primary-foreground/70">WhatsApp: (62) 99999-9999</p>
            <div className="mt-4 flex justify-center md:justify-start">
              <Link href="https://www.instagram.com/duprimeimobiliaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-primary-foreground/70 transition-colors hover:text-primary-foreground" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>&copy; {new Date().getFullYear()} Aldeia do Vale & Duprime Imobiliária. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <button onClick={onIndicationClick} className="hover:underline">Indicação Privada</button>
              <Link href="#" className="hover:underline">Política de Privacidade</Link>
              <Link href="#" className="hover:underline">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
