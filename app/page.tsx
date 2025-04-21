import Image from "next/image";
import Link from "next/link";
import ServicesCard from "@/components/services-card";
import { TestimonialSection } from "@/components/testimonials";
import ScrollFadeIn from "@/components/ScrollFadeIn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/70 z-10"></div>
        <Image
          src="/hero.png"
          alt="a collage of 3 water tanks installation"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
          <div className="mb-6 relative h-24 w-24">
            <Image
              src="/tremic-logo.svg"
              alt="Tremic Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-center mb-4">
            Tre-Mic Technology Ltd
          </h1>
          <p className="font-kumbh text-xl md:text-2xl text-center max-w-3xl mb-8">
            {/* Your Partner in Excellence for Advanced Fabrication, Installations
            and Sustainable Solutions. */}
            Your Partner in Excellence for Advanced Fabrication, Water System
            Solution and Sustainability.
          </p>
          <button className="cursor-pointer font-kumbh bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 flex items-center gap-2 transition-colors">
            Contact us
          </button>
        </div>
      </section>

      {/* About Section */}
      <ScrollFadeIn className="bg-white py-16 px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="relative h-[400px]">
          <Image
            src="/image13.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-2">
            Who We Are
          </div>
          <p className="font-kumbh text-gray-700 mb-6">
            Tre-Mic is your partner in excellence for sustainable water
            solutions, fiberglass and steel tank installations, maintenance &
            repairs; advanced fabrications and sales of high quality water
            solutions materials.
          </p>
          <p className="font-kumbh text-gray-700 mb-6">
            With over 20 years of experience, Tre-Mic specializes in the
            installation and maintenance of advanced water tanks for
            residential, commercial, and industrial settings. Our commitment to
            quality, innovation, and sustainability has made us a trusted
            partner to our clients across Africa.
          </p>
          <p className="font-kumbh text-gray-700 mb-8">
            We pride ourselves in delivering cutting-edge water tank
            installations as advanced fabrications that meet the needs of each
            of our clients, ensuring efficient water usage, reduced
            environmental impact and long-term reliability.
          </p>
        </div>
      </ScrollFadeIn>

      {/* Services Preview */}
      <ScrollFadeIn className="bg-gray-100 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="font-montserrat text-blue-600 font-medium mb-2">
              What We Do
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900">
              Comprehensive Fabrication and Installation Solutions
            </h2>
          </div>

          <ServicesCard />
        </div>
      </ScrollFadeIn>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <ScrollFadeIn className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Need Precision Fabrication or Reliable Repairs?
          </h2>
          <p className="font-kumbh text-xl mb-8 text-blue-100">
            Contact our team of experts today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="cursor-pointer font-kumbh bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 font-medium transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </ScrollFadeIn>
    </main>
  );
}
