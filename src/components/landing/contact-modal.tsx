"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Reservar Interesse</DialogTitle>
          <DialogDescription>
            Preencha o formulário para receber em primeira mão a tabela de preços e o masterplan do Aldeia do Vale.
          </DialogDescription>
        </DialogHeader>
        <ContactForm onFormSubmit={onClose} />
      </DialogContent>
    </Dialog>
  );
}
