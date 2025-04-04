import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight, Clock, PenToolIcon as Tool, Settings, Wrench, ShoppingCart } from "lucide-react"
import { ChevronRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full mt-10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-teal-800 z-0"></div>
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
      <section className="py-12 px-4 md:px-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Comprehensive Industrial Solutions</h2>
          <p className="text-lg text-gray-700">
            At Tre-Mic Technologies Ltd, we offer end-to-end industrial services tailored to your specific needs. With
            over two decades of experience since 2001, we deliver quality, reliability, and excellence in every project.
          </p>
        </div>
      </section>

      {/* Custom Metal Fabrication */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Custom Metal Fabrication"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Tool className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-blue-900">Custom Metal Fabrication</h2>
              </div>
              <p className="text-gray-700 mb-6">
                From blueprints to finished products – we craft durable solutions for industrial, commercial, and
                residential clients.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Structural Steel Fabrication</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Architectural Metalwork</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Precision Sheet Metal Components</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Welding & Machining Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Installation */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Professional Installation Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-blue-900">Professional Installation</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Flawless execution, on-time delivery – our certified installers handle projects of any scale.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Industrial Equipment Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Structural Steel Erection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Mechanical System Setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Turnkey Project Management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sales of Premium Materials & Parts */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Premium Materials & Parts"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ShoppingCart className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-blue-900">Sales of Premium Materials & Parts</h2>
              </div>
              <p className="text-gray-700 mb-6">
                We supply top-tier materials – paired with expert advice to match your project needs.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">High-Grade Metals & Alloys</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Replacement Parts & Components</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Custom-Order Fabrication Materials</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Programs */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Maintenance Programs"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-blue-900">Maintenance Programs</h2>
              </div>
              <p className="text-gray-700 mb-6">Proactive care to extend equipment life and reduce costly downtime.</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Preventive Maintenance Plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Industrial System Inspections</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Lubrication & Calibration Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Repair & Emergency Services */}
      <section className="py-16 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Repair & Emergency Services"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-blue-900">Repair & Emergency Services</h2>
              </div>
              <p className="text-gray-700 mb-6">
                When time is critical, our rapid-response team gets you back online FAST.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">24/7 Emergency Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Structural Damage Repair</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Equipment Refurbishment</span>
                </li>
              </ul>
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
  )
}