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
  { href: "#infraestrutura", label: "Infraestrutura" },
  { href: "#localizacao", label: "Localização" },
  { href: "#galeria", label: "Galeria" },
  { href: "#lotes", label: "Lotes" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

const WHATSAPP_LINK = "https://wa.me/5562999999999?text=Tenho%20interesse%20no%20Aldeia%20do%20Vale%20%E2%80%93%20Piren%C3%B3polis.";

export default function Header({ onReserveClick }: { onReserveClick: () => void; }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const NavMenu = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={handleLinkClick}
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
            <Link href="#inicio" className="flex items-center gap-2" onClick={handleLinkClick}>
                <Image src="https://i.imgur.com/YDS2Ge3.png" alt="Aldeia do Vale Logo" width={150} height={40} className="object-contain" />
            </Link>
        </div>
        
        <nav className="hidden items-center gap-6 lg:flex">
          <NavMenu />
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
              className="bg-[#C7A45B] text-black hover:bg-[#C7A45B]/90"
            >
              Reservar Interesse
            </Button>
        </div>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full bg-background">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                    <Link href="#inicio" className="flex items-center gap-2" onClick={handleLinkClick}>
                        <Image src="https://i.imgur.com/YDS2Ge3.png" alt="Aldeia do Vale Logo" width={150} height={40} className="object-contain" />
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                    </Button>
                </div>
                <nav className="flex flex-1 flex-col items-center justify-center gap-6">
                    <NavMenu />
                </nav>
                <div className="mt-auto flex flex-col gap-4 py-4">
                    <Button
                    onClick={() => { onReserveClick(); handleLinkClick(); }}
                    className="w-full bg-[#C7A45B] text-black hover:bg-[#C7A45B]/90"
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
