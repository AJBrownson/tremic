import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Header */}
      <div className="relative h-[300px] w-full mt-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 z-0"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-center mb-6">About Us</h1>
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Story</h2>
            <p className="font-kumbh text-gray-600 max-w-3xl mx-auto">
              Discover how Tre-Mic became a leader in water systems installation and management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tre-Mic Founding Team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-montserrat text-2xl font-bold text-blue-800 mb-4">From Humble Beginnings to Industry Leaders</h3>
              <p className="font-kumbh text-gray-700 mb-4">
                Founded in 2008 by a team of water engineers with a vision to revolutionize water management systems,
                Tre-Mic began as a small residential service provider in Clearwater, Florida. What started as a
                three-person operation has grown into a nationwide company with over 150 skilled professionals dedicated
                to delivering exceptional water solutions.
              </p>
              <p className="font-kumbh text-gray-700">
                Our journey has been defined by a relentless commitment to innovation, quality, and sustainability.
                Through economic challenges and changing industry landscapes, we've maintained our core values while
                continuously evolving our technologies and approaches to meet the growing demands of our diverse
                clientele.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 md:grid-flow-dense">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg md:order-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tre-Mic Technology and Innovation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="font-montserrat text-2xl font-bold text-blue-800 mb-4">Our Approach to Water Systems</h3>
              <p className="font-kumbh text-gray-700 mb-4">
                At Tre-Mic, we believe that water management is both a science and an art. Our approach combines
                cutting-edge technology with decades of practical experience to create systems that are efficient,
                reliable, and environmentally responsible. We understand that each client has unique needs, which is why
                we prioritize customization in every project we undertake.
              </p>
              <p className="font-kumbh text-gray-700">
                Our team of engineers, technicians, and water quality experts work collaboratively to design integrated
                solutions that address not only immediate water needs but also anticipate future challenges. By staying
                ahead of industry trends and regulatory changes, we ensure that our clients receive systems that remain
                compliant and effective for years to come.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tre-Mic Sustainability Initiatives"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-montserrat text-2xl font-bold text-blue-800 mb-4">Commitment to Sustainability</h3>
              <p className="font-kumbh text-gray-700 mb-4">
                Water is our most precious resource, and we take our responsibility as stewards of this resource
                seriously. Tre-Mic is at the forefront of developing and implementing water conservation technologies
                that reduce waste while maintaining performance. Our water recycling systems have helped industrial
                clients reduce their water consumption by up to 60%, resulting in significant environmental and economic
                benefits.
              </p>
              <p className="font-kumbh text-gray-700">
                Beyond our technical solutions, we're actively involved in community water education programs and
                conservation initiatives. We partner with local schools, businesses, and government agencies to promote
                responsible water usage and protect natural water sources for future generations. Our commitment to
                sustainability isn't just good business—it's our contribution to a more water-secure world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values and Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-12">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-3">Quality Excellence</h3>
              <p className="font-kumbh text-gray-600">
                We never compromise on quality. From the materials we select to the techniques we employ, excellence is
                our standard at every stage of the process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-3">Innovation</h3>
              <p className="font-kumbh text-gray-600">
                We continuously explore new technologies and methodologies to improve efficiency, sustainability, and
                performance in water management systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="font-montserrat text-xl font-bold text-blue-800 mb-3">Sustainability</h3>
              <p className="font-kumbh text-gray-600">
                We design systems that minimize environmental impact while maximizing resource efficiency, creating a
                better future for our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Leadership Team</h2>
          <p className="font-kumbh text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the experts who guide our vision and ensure we deliver exceptional service to every client.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=256&width=256" alt="CEO Portrait" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">Michael Anderson</h3>
              <p className="text-blue-600 mb-4">CEO & Founder</p>
              <p className="text-gray-600">
                With over 25 years in water engineering, Michael leads our company with vision and expertise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=256&width=256" alt="CTO Portrait" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-blue-800">Dr. Sarah Chen</h3>
              <p className="text-blue-600 mb-4">Chief Technology Officer</p>
              <p className="text-gray-600">
                Sarah drives our innovation, bringing cutting-edge solutions to complex water challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Operations Director Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-blue-800">Robert Martinez</h3>
              <p className="text-blue-600 mb-4">Director of Operations</p>
              <p className="text-gray-600">
                Robert ensures flawless execution of every project, maintaining our high standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="font-kumbh text-xl mb-8 text-blue-100">
            Contact our team today to discuss your water system needs and discover how we can help.
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
  )
}
