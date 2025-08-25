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
  
  const openIndicationModal = () => setIsIndicationModalOpen(true);
  const closeIndicationModal = () => {
    setIsIndicationModalOpen(false);
    // Keep indicatorData so the form can be reopened with the same data
  };
  
  const handleSuccessfulSubmit = (data: HeroFormData) => {
    setIndicatorData(data);
    // It doesn't close the contact modal anymore, just prepares data for indication
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header onReserveClick={openContactModal} />
      <main className="flex-1">
        <Hero onSuccessfulSubmit={handleSuccessfulSubmit} onIndicationClick={openIndicationModal} />
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
        onIndicationClick={openIndicationModal}
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
