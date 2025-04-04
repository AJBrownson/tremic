import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 z-0"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-center mb-6">
            About Us
          </h1>
          <div className="font-kumbh flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Story
            </h2>
            <p className="font-kumbh text-gray-600 max-w-3xl mx-auto">
              Two Decades of Craftsmanship, Innovation & Trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about1.jpg"
                alt="two men working on a fabrication project"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-montserrat text-2xl font-bold text-blue-800 mb-4">
                Excellence in Fabrication, Installation & Beyond
              </h3>
              <p className="font-kumbh text-gray-700">
                Since 2001, we’ve been a trusted name in precision fabrication,
                seamless installation, and reliable maintenance—delivering
                top-tier solutions. Officially registered in 2019, we bring over
                two decades of hands-on expertise, blending time-tested
                craftsmanship with cutting-edge technology. Whether it’s custom
                metalwork, industrial installations, or long-term maintenance
                plans, we don’t just meet expectations—we redefine them.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 md:grid-flow-dense">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg md:order-2">
              <Image
                src="/about3.jpg"
                alt="three men working on a fabrication job"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="font-montserrat text-2xl font-bold text-blue-800 mb-4">
                Built to Last – Sales, Service & Support You Can Depend On
              </h3>
              <p className="font-kumbh text-gray-700 mb-4">
                From sales of premium materials to expert repair services, we’re
                committed to keeping your operations running smoothly. Our
                clients rely on us for end-to-end solutions—no project is too
                complex, no deadline too tight. With a focus on durability and
                efficiency, we ensure every product we sell and every system we
                install stands the test of time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about4.jpg"
                alt="an installation project in progress"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-montserrat text-2xl font-bold text-blue-800 mb-4">
                Your Partner for the Long Haul – Two Decades of Trust
              </h3>
              <p className="font-kumbh text-gray-700 mb-4">
                Our longevity speaks for itself: 20+ years in business means 20+
                years of problem-solving, innovation, and client satisfaction.
                We don’t just deliver services—we build partnerships. When you
                work with us, you gain a team that’s invested in your success,
                offering tailored solutions and unmatched reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values and Mission */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-blue-600"
                  fill="currentColor"
                  width="48"
                  height="48"
                >
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5zm7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-3">
                Craftsmanship
              </h3>
              <p className="font-kumbh text-gray-600">
                With over two decades in the industry, we don't cut corners—we
                perfect them. Every weld, installation, and repair reflects our
                uncompromising standards for precision and durability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 text-blue-600"
                  fill="currentColor"
                  width="48"
                  height="48"
                >
                  <path d="M12 1L3 5v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V5l-9-4zm0 10.9h7c-.5 4.5-4 8.1-7 9.6-3-1.5-6.5-5.1-7-9.6h7V6.9l5-2.2-5-2.2v9.4z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-3">
                Reliability
              </h3>
              <p className="font-kumbh text-gray-600">
                From emergency repairs to scheduled maintenance, we deliver
                solutions built to last. When we say it's done right, it stays
                right.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-handshake-icon lucide-handshake text-blue-600"
                >
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-3">
                Partnership
              </h3>
              <p className="font-kumbh text-gray-600">
                We don't just complete projects—we build relationships. Your
                success is our measure of excellence, today and for decades to
                come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="font-kumbh text-xl mb-8 text-blue-100">
            Contact our team today to discuss your fabrication, installation, or
            repair needs – let's build your solution together
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
