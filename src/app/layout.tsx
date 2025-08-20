import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Aldeia do Vale – Pirenópolis | Terrenos de luxo na natureza (152 unidades)",
  description: "Terrenos a partir de 1.250 m² aos pés do Morro do Frota, a 5 minutos da Igreja Matriz. Infraestrutura completa, exclusividade real. Cadastre-se e receba tabela e masterplan.",
  openGraph: {
    title: "Aldeia do Vale – Pirenópolis | Terrenos de luxo na natureza (152 unidades)",
    description: "Terrenos a partir de 1.250 m² aos pés do Morro do Frota, a 5 minutos da Igreja Matriz. Infraestrutura completa, exclusividade real. Cadastre-se e receba tabela e masterplan.",
    images: [{
      url: "https://placehold.co/1200x630/0F3D3E/E9E4DA?text=Aldeia+do+Vale",
      width: 1200,
      height: 630,
      alt: "Aldeia do Vale Pirenópolis",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldeia do Vale – Pirenópolis | Terrenos de luxo na natureza (152 unidades)",
    description: "Terrenos a partir de 1.250 m² aos pés do Morro do Frota, a 5 minutos da Igreja Matriz. Infraestrutura completa, exclusividade real. Cadastre-se e receba tabela e masterplan.",
    images: ["https://placehold.co/1200x630/0F3D3E/E9E4DA?text=Aldeia+do+Vale"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Aldeia do Vale – Pirenópolis",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Estrada Morro Frota",
      "addressLocality": "Pirenópolis",
      "addressRegion": "GO",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-15.852",
      "longitude": "-48.958"
    },
    "image": ["https://placehold.co/1200x630.png"],
    "description": "Terrenos de luxo na natureza com infraestrutura completa. 152 unidades a partir de 1.250 m².",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "BRL",
      "url": "https://example.com/aldeia-do-vale"
    }
  };

  return (
    <html lang="pt-BR" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '806929624992649');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=806929624992649&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
