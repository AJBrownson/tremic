import Link from "next/link"
import Image from "next/image"

export default function ServicesCard() {
  const cards = [
    {
      id: 1,
      title: "Installation of Fibre Glass",
      imageUrl: "/image1.jpg",
      link: "/our-services",
    },
    {
      id: 2,
      title: "Installation of Steel Water Tanks",
      imageUrl: "/about2.jpg",
      link: "/our-services",
    },
    {
      id: 3,
      title: "Maintenance / Repairs",
      imageUrl: "/about3.jpg",
      link: "/our-services",
    },
    {
      id: 4,
      title: "Sales of Water Solutions Materials",
      imageUrl: "/services1.jpg",
      link: "/our-services",
    },
    {
      id: 5,
      title: "Advanced Fabrication",
      imageUrl: "/services1.jpg",
      link: "/our-services",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <section key={card.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={card.imageUrl || "/placeholder.svg"}
                alt={card.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                width="20"
                height="20"
              />
            </div>
            <div>
              <div className="text-gray-700">{card.title}</div>
            </div>
            <div>
              <Link href={card.link} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                Learn more →
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

