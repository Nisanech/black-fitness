"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubItems {
  name: string;
  href: string;
}

interface MenuItems {
  name: string;
  items: SubItems[];
}

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // Cierra el menú cada vez que cambie la ruta
    setMobileMenuOpen(false);
    setOpenDropdown("");
  }, [pathname]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems: MenuItems[] = [
    {
      name: "Entrenamiento integral",
      items: [
        { name: "Clases", href: "/food/panela-organica" },
        { name: "Planes", href: "/food/miel-yacon" },
        { name: "Personalizados", href: "/raw-materials/miel-invertida" },
      ],
    },
    {
      name: "Cuidado personal",
      items: [
        { name: "Estética y fisioterapia", href: "/food/panela-organica" },
      ],
    },
    {
      name: "Ambientes",
      items: [
        { name: "Snack bar", href: "/food/panela-organica" },
        { name: "Servicios complementarios", href: "/food/panela-organica" },
      ],
    },
  ];

  return (
    <>
      <header className={`w-full bg-black-principal`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <Image
                src="/assets/logo-blackfitness.svg"
                alt="Black Fitness logo"
                width={70}
                height={70}
              />
            </Link>

            <button
              className="lg:hidden text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <nav className="hidden lg:flex items-center justify-between space-x-6">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center m-0 p-0 gap-2 font-jaldi font-bold text-[20px] text-white focus:outline-none"
                    aria-expanded={openDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <Image
                      src="/assets/dropdown-icon.svg"
                      alt=""
                      width={13}
                      height={13}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.name && (
                    <div className="absolute z-10 w-[300px] py-2 mt-2 bg-[#1E1E1E] rounded-md shadow-xl right-0">
                      <div className="flex flex-col">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href || "#"}
                            className="px-6 py-3 font-jaldi text-[20px] text-white hover:bg-black/40 border-b border-white/10 last:border-b-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/quienes-somos"
                className="font-jaldi font-bold text-[20px] text-white"
              >
                Quienes somos
              </Link>
            </nav>
          </div>

          {/* Mobile menu */}
          <div
            className={`lg:hidden fixed inset-0 z-50 bg-black-principal transition-transform duration-300 ease-in-out transform ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center py-4 px-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/assets/logo-blackfitness.svg"
                  alt="Black Fitness logo"
                  width={70}
                  height={70}
                />
              </Link>
              <button
                className="text-white"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="mt-8 px-4">
              {menuItems.map((item) => (
                <div key={item.name} className="mb-4">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center w-full m-0 p-0 gap-2 font-jaldi font-bold text-[20px] text-white focus:outline-none"
                    aria-expanded={openDropdown === item.name}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <Image
                      src="/assets/dropdown-icon.svg"
                      alt=""
                      width={13}
                      height={13}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.name && (
                    <div className="mt-2 bg-[#1E1E1E] rounded-md">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href || "#"}
                          className="block px-6 py-3 font-jaldi text-[20px] text-white hover:bg-black/40 border-b border-white/10 last:border-b-0"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/quienes-somos"
                className="block font-jaldi font-bold text-[20px] text-white mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quienes somos
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
