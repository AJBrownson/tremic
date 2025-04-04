import { Divide } from "lucide-react"
import Link from "next/link"

export default function ServicesCard() {
  const cards = [
    {
      id: 1,
      title: "Custom Metal Fabrication",
      imageUrl: "/image1.jpg",
      link: "/our-services",
    },
    {
      id: 2,
      title: "Professional Installation",
      imageUrl: "/about2.jpg",
      link: "/our-services",
    },
    {
      id: 3,
      title: "Sales of Premium Materials & Parts",
      imageUrl: "/about3.jpg",
      link: "/our-services",
    },
    {
      id: 4,
      title: "Maintenance & Repair",
      imageUrl: "/services1.jpg",
      link: "/our-services",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <section key={card.id} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={card.imageUrl || "/placeholder.svg"}
                alt={card.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
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

