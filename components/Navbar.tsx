"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isDesktopAboutOpen, setIsDesktopAboutOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/our-services" },
    { name: "Work", link: "/work" },
    { name: "About", link: "/about-us" },
  ];

  const submenuItems = [
    { name: "About Us", link: "/about-us" },
    { name: "Our Team", link: "/team" },
    { name: "Registered with the CAC", link: "/cac" },
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
              Tre-Mic Technology Ltd
            </h1>
          </div>

          {/* Desktop Navigation */}
          <>
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) =>
                item.name === "About" ? (
                  // Dropdown for About menu item
                  <DropdownMenu
                    key={index}
                    onOpenChange={(open) => setIsDesktopAboutOpen(open)}
                  >
                    <DropdownMenuTrigger asChild>
                      <button className="cursor-pointer flex items-center gap-1 text-gray-700 hover:text-gray-900">
                        About
                        {isDesktopAboutOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {submenuItems.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link
                            href={subItem.link}
                            className="w-full cursor-pointer"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  // Regular menu items
                  <Link
                    key={index}
                    href={item.link}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                )
              )}
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
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className="self-end" onClick={() => setMenuOpen(false)}>
              <X size={28} color="black" />
            </button>

            {/* Mobile Menu Items */}
            {menuItems.map((item) => {
              if (item.name === "About") {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                      className="flex items-center justify-between w-full font-kumbh text-gray-700 text-base hover:text-[#0884c6]"
                    >
                      {item.name}
                      {submenuOpen ? (
                        <ChevronUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      )}
                    </button>

                    {/* Submenu items */}
                    {submenuOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {submenuItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.link}
                            className={`block font-kumbh text-sm text-gray-600 ${
                              pathname === subItem.link
                                ? "text-[#0884c6]"
                                : "hover:text-[#0884c6]"
                            }`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
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
              );
            })}

            <div className="text-sm lg:flex space-x-2">
              <button
                className="cursor-pointer font-kumbh px-3 py-1 text-[#0884c6] font-bold border border-[#0884c6]"
                onClick={() => {
                  router.push("/contact-us");
                  setMenuOpen(false);
                }}
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
