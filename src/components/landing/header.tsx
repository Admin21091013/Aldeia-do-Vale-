"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, MessageSquare, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#localizacao", label: "Localização" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
];

const WHATSAPP_LINK = "https://wa.me/5561991145666?text=Tenho%20interesse%20no%20Aldeia%20do%20Vale%20%E2%80%93%20Piren%C3%B3polis.";

export default function Header({ onReserveClick }: { onReserveClick: () => void; }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-background text-foreground shadow-md transition-all duration-300"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
            <Link href="#inicio" className="flex items-center gap-2" onClick={handleLinkClick}>
                <span className="font-headline text-2xl">Aldeia do Vale</span>
            </Link>
        </div>
        
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
            <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
            >
                <Link href={WHATSAPP_LINK} target="_blank">
                <MessageSquare className="mr-2 h-4 w-4" />
                WhatsApp
                </Link>
            </Button>
            <Button
              onClick={onReserveClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Reservar Interesse
            </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-foreground hover:bg-black/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background text-foreground">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border pb-4">
                    <Link href="#inicio" className="flex items-center gap-2" onClick={handleLinkClick}>
                         <span className="font-headline text-2xl">Aldeia do Vale</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-1 flex-col items-center justify-center gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 py-4">
                    <Button
                    onClick={() => { onReserveClick(); handleLinkClick(); }}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                    >
                    Reservar Interesse
                    </Button>
                    <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    size="lg"
                    asChild
                    >
                    <Link href={WHATSAPP_LINK} target="_blank">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        WhatsApp
                    </Link>
                    </Button>
                </div>
              </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
