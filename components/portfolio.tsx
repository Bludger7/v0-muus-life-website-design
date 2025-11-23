import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Exterior",
    image: "/modern-luxury-villa-exterior-architecture.jpg",
  },
  {
    id: 2,
    title: "Open Office",
    category: "Interior",
    image: "/modern-office-interior-sunlight.jpg",
  },
  {
    id: 3,
    title: "Luxury Bedroom",
    category: "Interior",
    image: "/luxury-bedroom.png",
  },
  {
    id: 4,
    title: "Fine Dining",
    category: "Commercial",
    image: "/upscale-restaurant-interior-dark-moody.jpg",
  },
  {
    id: 5,
    title: "Glass Façade",
    category: "Exterior",
    image: "/modern-commercial-building-glass-facade.jpg",
  },
  {
    id: 6,
    title: "Public Atrium",
    category: "Public",
    image: "/bright-modern-public-building-atrium.jpg",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Portfolyo</h2>
          <div className="h-1 w-20 bg-slate-800" />
          <p className="text-slate-500 text-lg">Son Projelerimizi Keşfedin</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white aspect-4/3"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900 shadow-sm z-10">
                muus.life
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
