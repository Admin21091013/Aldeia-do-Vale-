"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { HeroForm } from "./hero-form";
import { HeroFormData } from "@/app/actions";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessfulSubmit: (data: HeroFormData) => void;
  onIndicationClick: () => void;
}

export function ContactModal({ isOpen, onClose, onSuccessfulSubmit, onIndicationClick }: ContactModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Fale Conosco</DialogTitle>
          <DialogDescription>
            Preencha o formulário para receber em primeira mão a tabela de preços e o masterplan do Aldeia do Vale.
          </DialogDescription>
        </DialogHeader>
        <HeroForm onSuccessfulSubmit={onSuccessfulSubmit} onIndicationClick={onIndicationClick} />
      </DialogContent>
    </Dialog>
  );
}
