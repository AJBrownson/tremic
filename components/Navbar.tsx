"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about-us" },
    { name: "Services", link: "/our-services" },
    // { name: "Contact us", link: "/contact-us" },
  ];

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-30 flex flex-col justify-center items-center">
      <div className="w-full mx-auto p-3 lg:p-4 bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center h-full">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/tremic-logo.svg"
              alt="Logo"
              width={45}
              height={24}
              className="lg:w-[60px] lg:h-[32px]"
            />
            <h1 className="font-kumbh text-gray-700 hover:text-[#0884c6] text-sm lg:text-lg">
              Tre-Mic Technologies Ltd
            </h1>
          </div>

          {/* Desktop Navigation */}
          <>
            <div className="hidden lg:flex space-x-16 text-gray-700">
              {menuItems.map((item) => (
                <div key={item.name} className="text-sm">
                  <a
                    href={item.link}
                    className={`transition font-kumbh ${
                      pathname === item.link
                        ? "text-[#0884c6]"
                        : "hover:text-[#0884c6]"
                    }`}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Buttons & Mobile Menu Toggle */}
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="hidden text-sm lg:flex space-x-2">
                <button
                  className="cursor-pointer font-kumbh px-3 py-1 lg:px-4 lg:py-2 text-[#0884c6] font-bold border border-[#0884c6]"
                  onClick={() => router.push("/contact-us")}
                >
                  Contact us
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <X size={28} color="black" />
                ) : (
                  <Menu size={28} color="black" />
                )}
              </button>
            </div>
          </>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 transition-all ease-in-out duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-4/5 max-w-[280px] h-screen bg-white shadow-lg p-6 flex flex-col space-y-6 transform transition-all ease-in-out duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button className="self-end" onClick={() => setMenuOpen(false)}>
              <X size={28} color="black" />
            </button>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`font-kumbh block text-gray-700 text-base ${
                  pathname === item.link
                    ? "text-[#0884c6]"
                    : "hover:text-[#0884c6]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div className=" text-sm lg:flex space-x-2">
              <button
                className="cursor-pointer font-kumbh px-3 py-1 text-[#0884c6] font-bold border border-[#0884c6]"
                onClick={() => router.push("/contact-us")}
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
