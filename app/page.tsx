import Image from "next/image";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  Download,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";

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
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Tre-Mic Technolgies Ltd
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Your Partner in Excellence for Advanced Water System Installations
            and Sustainable Solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md flex items-center gap-2 transition-colors">
            Get a Quote
          </button>
        </div>
      </section>

      {/* About Section */}
      <div className="py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div className="relative h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Water System Installation"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-blue-600 font-medium mb-2">About Tre-Mic Technologies Ltd</div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Delivering Excellence in Water Systems Worldwide
          </h2>
          <p className="text-gray-700 mb-6">
            With over 15 years of experience, Tre-Mic specializes in
            designing, installing, and maintaining advanced water systems for
            residential, commercial, and industrial applications. Our commitment
            to quality, innovation, and sustainability has made us a trusted
            partner for clients across the nation.
          </p>
          <p className="text-gray-700 mb-8">
            We pride ourselves on delivering customized water solutions that
            meet the unique needs of each client, ensuring efficient water
            usage, reduced environmental impact, and long-term reliability.
          </p>
          <Link
            href="/about-us"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors self-start"
          >
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-medium mb-2">
              // OUR SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Comprehensive Water System Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Residential Water Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Residential Water Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete water solutions for homes including filtration,
                  softening, purification, and efficient distribution systems.
                </p>
                <Link
                  href="/services/residential"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Commercial Water Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Commercial Water Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Scalable water management solutions for businesses, offices,
                  and retail establishments with focus on efficiency.
                </p>
                <Link
                  href="/services/commercial"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Industrial Water Systems"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Industrial Water Systems
                </h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty water treatment, recycling, and distribution
                  systems for manufacturing and industrial facilities.
                </p>
                <Link
                  href="/services/industrial"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade Your Water System?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our team of experts today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact-us"
              className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-md font-medium transition-colors"
            >
              CONTACT US
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
