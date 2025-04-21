import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";


export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full mt-10">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/pattern.svg)" }}
        ></div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-center mb-6">
            Our Services
          </h1>
          <div className="font-kumbh flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Our Services</span>
          </div>
        </div>
      </div>

      {/* Services Introduction */}
      <section className="py-4 md:py-8 lg:py-12 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Comprehensive Industrial Solutions
          </h2>
          <p className="text-lg text-gray-700">
            At Tre-Mic Technologies Ltd, we offer end-to-end industrial services
            tailored to your specific needs. With over two decades of experience
            since 2001, we deliver quality, reliability, and excellence in every
            project.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/image1.jpg"
                alt="FRP Water Tank Installation"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold font-montserrat text-blue-900">
                  FRP Water Tank Installation
                </h2>
              </div>
              <p className="text-gray-700 font-kumbh">
                Fiberglass Reinforced Plastics (FRP) water tank panels are
                designed with special shapes for maximizing safety against
                stress and deformation. GRP water panels are manufactured by the
                oil-hydraulic press under high temperatures and high pressure.
                They maintain top water pressure strength and there is no
                dimensional deviation by temperature change
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/steel.jpg"
                alt="steel water tank installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold font-montserrat text-blue-900">
                  Steel Water Tank Installation
                </h2>
              </div>
              <p className="text-gray-700 font-kumbh">
                Galvanized steel water tanks are made from corrugated sheets,
                offering strength, durability and longevity. They can withstand
                high pressures, extreme temperatures and impacts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/services1.jpg"
                alt="maintenance and repairs"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold font-montserrat text-blue-900">
                  Maintenance / Repairs
                </h2>
              </div>
              <p className="text-gray-700 font-kumbh">
                We offer professional maintenance and repairs of FRP and steel
                water tanks; coating and recoating of tanks and general
                consultancy in water technology solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about3.jpg"
                alt="Sales"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold font-montserrat text-blue-900">
                  Sales
                </h2>
              </div>
              <p className="text-gray-700 font-kumbh">
                We sell quality water solutions materials such as FRP and steel
                plates, tank installation accessories, bolts and nuts, among
                others.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/fabrication.jpg"
                alt="Advanced Fabrication"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold font-montserrat text-blue-900">
                  Advanced Fabrication
                </h2>
              </div>
              <p className="text-gray-700 font-kumbh">
                From blueprints to finished products – we craft durable
                materials such as iron skids, internal and external
                reinforcements, ladders etc, for our industrial, commercial, and
                residential clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="font-kumbh text-xl mb-8 text-blue-100">
            Contact our team today to discuss your fabrication, installation, or
            repair needs – let&lsquo;s build your solution together
          </p>
          <Link
            href="/contact-us"
            className="bg-white font-kumbh font-semibold text-blue-900 hover:bg-blue-100 px-8 py-3 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
