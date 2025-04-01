import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Mail, Download, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
   <>
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/tremic-logo.svg"
                  alt="Tremic Logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-white font-bold text-xl">Tre-Mic Technologies Ltd</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for advanced water systems installation and maintenance.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/residential" className="text-gray-400 hover:text-white">
                  Fabrication
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-gray-400 hover:text-white">
                  Welding Work
                </Link>
              </li>
              <li>
                <Link href="/services/industrial" className="text-gray-400 hover:text-white">
                  Sales
                </Link>
              </li>
              <li>
                <Link href="/services/consultation" className="text-gray-400 hover:text-white">
                  Tanks Maintenance & Repairs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">43 Clem Rd, Off Lagos-Abeokuta Express way, Lagos State</p>
              <p className="mb-2">
                <PhoneCall className="h-4 w-4 inline mr-2" />
                +2348067233304
              </p>
              <p className="mb-2">
                <PhoneCall className="h-4 w-4 inline mr-2" />
                +2348061581911
              </p>
              <p>
                <Mail className="h-4 w-4 inline mr-2" />
                tremictech@gmail.com
              </p>
            </address>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Tremic Technologies Ltd. All rights reserved.</p>
        </div>
      </footer>
   </>
  );
};

export default Footer;
