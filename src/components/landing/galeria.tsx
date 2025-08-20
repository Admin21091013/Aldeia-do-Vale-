"use client";

import Image from "next/image";

const galleryImages = [
  { src: "https://i.imgur.com/HpuHqk3.jpeg", alt: "Entrada do condomínio Aldeia do Vale", hint: "condominium entrance" },
];

export default function Galeria() {
  return (
    <div className="w-full">
        {galleryImages.map((image, index) => (
            <div key={index} className="aspect-[9/16] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                width={900}
                height={1600}
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
            </div>
        ))}
    </div>
  );
}
