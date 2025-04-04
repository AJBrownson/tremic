import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import FaqAccordion from "@/components/faq-accordion";

export default function ContactUs() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Header */}
      {/* <div className="relative h-[300px] w-full mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 z-0"></div>

       
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <div className="font-kumbh flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Contact Us</span>
          </div>
        </div>
      </div> */}
        <div className="relative h-[300px] w-full mt-10">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/pattern.svg)" }}
        ></div>
        <div className="absolute inset-0 bg-black/30 z-0"></div>
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-center mb-6">
            Contact us
          </h1>
          <div className="font-kumbh flex items-center gap-2 text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>Contact us</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Get In Touch
            </h2>
            <p className="font-kumbh text-xl text-gray-700 max-w-3xl mx-auto">
              Prefer to talk directly? Call, email, or DM us!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-kumbh text-xl font-bold text-blue-800 mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+2348067233304"
                      className="font-kumbh text-gray-700 hover:text-blue-600 transition-colors block"
                    >
                      +234 806 723 3304
                    </a>
                    <a
                      href="tel:+2348061581911"
                      className="font-kumbh text-gray-700 hover:text-blue-600 transition-colors block"
                    >
                      +234 806 158 1911
                    </a>
                    <p className="font-kumbh text-gray-500 text-sm mt-1">
                      Click to call on mobile devices
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:tremictech@gmail.com"
                      className="font-kumbh text-gray-700 hover:text-blue-600 transition-colors block"
                    >
                      tremictech@gmail.com
                    </a>
                    <p className="font-kumbh text-gray-500 text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-1">
                      Address
                    </h3>
                    <address className="font-kumbh text-gray-700 not-italic">
                      43 Clem Rd
                      <br />
                      Off Lagos-Abeokuta Express Way
                      <br />
                      Lagos, Nigeria
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-1">
                      Business Hours
                    </h3>
                    <p className="font-kumbh text-gray-700">Monday - Friday: 8AM–5PM</p>
                    <p className="font-kumbh text-gray-700">Saturday: 9AM–2PM</p>
                    <p className="font-kumbh text-gray-700">Sunday: Closed</p>
                    <p className="font-kumbh text-gray-500 text-sm mt-1">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-1">
                      Social Media
                    </h3>
                    <div className="flex gap-4 mt-2">
                      <a
                        href="#"
                        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    </div>
                    <p className="font-kumbh text-gray-500 text-sm mt-2">
                      Follow us for updates and tips
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.897702041234!2d3.281797614819744!3d6.620850564177069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92eeb7dce4c5%3A0xa9a61e0a60c5cd9e!2s43%20Clem%20Rd%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1712000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tre-Mic Technologies Ltd Location"
                className="w-full h-full font-kumbh"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="container flex flex-col lg:flex-row justify-between px-6 md:px-8 lg:px-20">
          <div className="">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-kumbh text-gray-600">
              Find quick answers to common questions about our services.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Ready for Better Water Systems?
          </h2>
          <p className="font-kumbh text-xl mb-8 text-blue-100">
            Contact us today to discuss your project and discover how we at
            Tre-mic Technologies Ltd can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2348067233304"
              className="font-kumbh bg-white text-blue-900 hover:bg-blue-100 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              CALL NOW
            </a>
            <a
              href="mailto:tremictech@gmail.com"
              className="font-kumbh bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              EMAIL US
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
