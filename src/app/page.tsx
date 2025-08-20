"use client";

import { useState } from "react";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import CopySection from "@/components/landing/copy-section";
import InfoSection from "@/components/landing/info-section";
import Localizacao from "@/components/landing/localizacao";
import Sobre from "@/components/landing/sobre";
import Footer from "@/components/landing/footer";
import FloatingWhatsapp from "@/components/landing/floating-whatsapp";
import { ContactModal } from "@/components/landing/contact-modal";
import { GaleriaCombinada } from "@/components/landing/galeria-combinada";
import { type HeroFormData } from "@/app/actions";
import { IndicationModal } from "@/components/landing/indication-modal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isIndicationModalOpen, setIsIndicationModalOpen] = useState(false);
  const [indicatorData, setIndicatorData] = useState<HeroFormData | null>(null);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  const closeIndicationModal = () => {
    setIsIndicationModalOpen(false);
    setIndicatorData(null);
  };
  
  const handleSuccessfulSubmit = (data: HeroFormData) => {
    closeContactModal();
    // Open the indication modal after a short delay
    setTimeout(() => {
      setIndicatorData(data);
      setIsIndicationModalOpen(true);
    }, 500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header onReserveClick={openContactModal} />
      <main className="flex-1">
        <Hero onSuccessfulSubmit={handleSuccessfulSubmit} />
        <CopySection />
        <InfoSection />
        <Localizacao />
        <GaleriaCombinada />
        <Sobre />
      </main>
      <FloatingWhatsapp />
      <Footer />
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
        onSuccessfulSubmit={handleSuccessfulSubmit} 
      />
      {indicatorData && (
        <IndicationModal
          isOpen={isIndicationModalOpen}
          onClose={closeIndicationModal}
          indicator={indicatorData}
        />
      )}
    </div>
  );
}
