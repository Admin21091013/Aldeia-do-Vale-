"use client";

import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

const WHATSAPP_LINK = "https://wa.me/5562999999999?text=Tenho%20interesse%20no%20Aldeia%20do%20Vale%20%E2%80%93%20Piren%C3%B3polis.";

export default function FloatingWhatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button asChild size="icon" className="h-14 w-14 rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600">
        <Link href={WHATSAPP_LINK} target="_blank" aria-label="Falar no WhatsApp">
          <MessageSquare className="h-7 w-7" />
        </Link>
      </Button>
    </div>
  );
}
