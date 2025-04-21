import ScrollFadeIn from "@/components/ScrollFadeIn"
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  className?: string;
}

export function Testimonial({
  quote,
  name,
  className,
}: TestimonialProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-sm p-6 flex flex-col h-full",
        className
      )}
    >
      {/* Quote mark */}
      <div className="text-5xl font-kumbh text-blue-600 leading-none">
        &ldquo;
      </div>

      {/* Testimonial text */}
      <p className="font-kumbh text-gray-700 flex-grow mb-6">{quote}</p>

      {/* Customer info */}
      <div className="flex items-center gap-3 mt-auto">
        <span className="font-kumbh font-medium text-blue-600">{name}</span>
      </div>
    </div>
  );
}

export function TestimonialSection() {
  return (
    <ScrollFadeIn className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="font-montserrat text-blue-600 font-medium mb-2">
            What Our Clients Say
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial
            quote="Tre-Mic’s custom fabrication work exceeded our expectations. Their team delivered precision welding and installation ahead of deadline, and the structure has held up perfectly under heavy industrial use. True professionals!"
            name="Oludare Jimoh"
          />

          <Testimonial
            quote="We hired Tre-Mic to design and install steel supports for our commercial facility. Their expertise saved us 30% on material costs, and their maintenance team keeps everything running smoothly. Five-star service!"
            name="Iyke Ogbonna"
          />

          <Testimonial
            quote="From emergency repairs to preventive maintenance, Tre-Mic is our go-to partner. They have saved us thousands in downtime costs. You won’t find more reliable technicians."
            name="Kareem Ismaila"
          />
        </div>
      </div>
    </ScrollFadeIn>
  );
}
