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
import { IndicationModal } from "@/components/landing/indication-modal";
import { type HeroFormData } from "@/app/actions";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isIndicationModalOpen, setIsIndicationModalOpen] = useState(false);
  const [indicatorData, setIndicatorData] = useState<HeroFormData | null>(null);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  
  const openIndicationModal = (data: HeroFormData) => {
    setIndicatorData(data);
    setIsIndicationModalOpen(true);
    // Logic to control frequency can be added here using localStorage
    localStorage.setItem('indicationLastShown', new Date().toISOString());
  };
  const closeIndicationModal = () => {
    setIsIndicationModalOpen(false);
    setIndicatorData(null);
  }

  const handleSuccessfulSubmit = (data: HeroFormData) => {
    closeContactModal();
    // Use a timeout to make the transition smoother
    setTimeout(() => openIndicationModal(data), 500);
  };
  
  // This allows the footer link to open the modal
  const handleIndicationLinkClick = () => {
      // For this simple case, we'll open it without indicator data
      // A more complex app would require session/auth to get this data
      setIsIndicationModalOpen(true);
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
      <Footer onIndicationClick={handleIndicationLinkClick}/>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
        onSuccessfulSubmit={handleSuccessfulSubmit} 
      />
      <IndicationModal 
        isOpen={isIndicationModalOpen}
        onClose={closeIndicationModal}
        indicatorData={indicatorData}
      />
    </div>
  );
}
