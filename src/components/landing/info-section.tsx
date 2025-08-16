import Image from "next/image";

export default function InfoSection() {
  return (
    <section className="bg-accent py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/oMt2kcj.png"
              alt="Luxo e natureza em perfeita harmonia"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="https://i.imgur.com/SsiDE98.png"
              alt="Um novo capítulo na história de Pirenópolis"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
