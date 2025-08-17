"use client";

import { useState } from "react";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import CopySection from "@/components/landing/copy-section";
import InfoSection from "@/components/landing/info-section";
import Localizacao from "@/components/landing/localizacao";
import Galeria from "@/components/landing/galeria";
import Sobre from "@/components/landing/sobre";
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
        <CopySection />
        <InfoSection />
        <Localizacao />
        <Galeria />
        <Sobre />
        <Contato />
      </main>
      <FloatingWhatsapp />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
