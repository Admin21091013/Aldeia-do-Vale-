"use client";

import { useState } from "react";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Infraestrutura from "@/components/landing/infraestrutura";
import Localizacao from "@/components/landing/localizacao";
import Galeria from "@/components/landing/galeria";
import Lotes from "@/components/landing/lotes";
import Sobre from "@/components/landing/sobre";
import Depoimentos from "@/components/landing/depoimentos";
import Faq from "@/components/landing/faq";
import Contato from "@/components/landing/contato";
import Footer from "@/components/landing/footer";
import FloatingWhatsapp from "@/components/landing/floating-whatsapp";
import { ContactModal } from "@/components/landing/contact-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header onReserveClick={openModal} />
      <main className="flex-1">
        <Hero onReserveClick={openModal} />
        <Infraestrutura />
        <Localizacao />
        <Galeria />
        <Lotes onReserveClick={openModal} />
        <Sobre />
        <Depoimentos />
        <Faq />
        <Contato />
      </main>
      <FloatingWhatsapp />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
