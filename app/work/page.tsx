import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Work() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        {/* Hero Header */}
        <div className="relative h-[300px] w-full mt-10">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url(/pattern.svg)" }}
          ></div>
          <div className="absolute inset-0 bg-black/30 z-0"></div>
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-center mb-6">
              Our Work
            </h1>
            <div className="font-kumbh flex items-center gap-2 text-lg">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span>Our Work</span>
            </div>
          </div>
        </div>

        <section className="py-16 px-4 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Our Proof of Work
              </h2>
              <p className="font-kumbh text-gray-600 max-w-3xl mx-auto">
                See some of our recent projects that showcase our expertise in
                water system solutions and fabrication.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
