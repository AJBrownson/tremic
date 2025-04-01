import Image from "next/image"
import { cn } from "@/lib/utils"

interface TestimonialProps {
  quote: string
  name: string
  image: string
  className?: string
}

export function Testimonial({ quote, name, image, className }: TestimonialProps) {
  return (
    <div className={cn("bg-white rounded-2xl shadow-sm p-6 flex flex-col h-full", className)}>
      {/* Quote mark */}
      <div className="text-5xl font-serif text-blue-600 leading-none mb-4">&ldquo;</div>

      {/* Testimonial text */}
      <p className="text-gray-700 flex-grow mb-6">{quote}</p>

      {/* Customer info */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="relative w-12 h-12 overflow-hidden rounded-full">
          <Image src={image || "/placeholder.svg"} alt={name} width={48} height={48} className="object-cover" />
        </div>
        <span className="font-medium text-blue-600">{name}</span>
      </div>
    </div>
  )
}

export function TestimonialSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-blue-600 font-medium mb-2">What Our Clients Say</div>
          {/* <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Trusted by Homeowners and Businesses</h2> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial
            quote="Tre-Mic's residential water system installation was flawless. Their team was professional, knowledgeable, and completed the job ahead of schedule. The water quality improvement has been remarkable. Highly recommended!"
            name="Michael Thompson"
            image="/placeholder.svg?height=48&width=48"
          />

          <Testimonial
            quote="As a restaurant owner, water quality is critical to our business. Tre-Mic designed a custom filtration system that has improved our water taste and reduced maintenance costs. Their ongoing support has been exceptional."
            name="Sarah Johnson"
            image="/placeholder.svg?height=48&width=48"
          />

          <Testimonial
            quote="We contracted Tre-Mic for our manufacturing facility's water recycling system. Their innovative solution has reduced our water consumption by 40% and paid for itself within a year. Their expertise is unmatched in the industry."
            name="David Chen"
            image="/placeholder.svg?height=48&width=48"
          />
        </div>
      </div>
    </section>
  )
}
