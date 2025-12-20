import Image from "next/image"

export function Team() {
  const teamMembers = [
    {
      name: "Selahattin Hacıhasanoğlu",
      role: "Kurucu & Tasarım Direktörü",
      image: "/images/whatsapp-20image-202025-12-15-20at-2010.jpeg",
    },
    {
      name: "Gamze Turan",
      role: "İç Mimar",
      image: "/images/img-2094.jpeg",
    },
    {
      name: "Aleyna Kılınç",
      role: "İç Mimar",
      image: "/images/profil-20foto-c4-9fraf-c4-b1-20kare.jpg",
    },
  ]

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Ekibimiz</h2>
          <div className="w-16 h-1 bg-slate-900 mx-auto mb-6"></div>
          <p className="text-slate-600">
            Profesyonel ekibimizle her projede mükemmelliği hedefliyoruz. Deneyim ve yaratıcılığı bir araya getirerek
            hayalinizdeki mekanları gerçeğe dönüştürüyoruz.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center transition-all hover:transform hover:-translate-y-2 duration-300"
            >
              <div className="relative aspect-square mb-3 md:mb-6 overflow-hidden rounded-sm shadow-md">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-sm md:text-xl font-bold text-slate-900 mb-1 md:mb-2">{member.name}</h3>
              <p className="text-slate-600 text-xs md:text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
