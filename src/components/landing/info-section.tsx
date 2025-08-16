import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="bg-accent py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/oMt2kcj.png"
              alt="Luxo e natureza em perfeita harmonia"
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
          <div className="relative flex h-96 items-center justify-center overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/SsiDE98.png"
              alt="Um novo capítulo na história de Pirenópolis"
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
