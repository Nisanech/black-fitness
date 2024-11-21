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
        { name: "Clases", href: "/class-schedules" },
        { name: "Planes", href: "/plans" },
        { name: "Personalizados", href: "/custom-plans" },
      ],
    },
    {
      name: "Cuidado personal",
      items: [
        { name: "Estética y fisioterapia", href: "/packages" },
      ],
    },
    {
      name: "Ambientes",
      items: [
        { name: "Snack bar", href: "/products" },
        { name: "Servicios complementarios", href: "/complementary-services" },
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
                    className="flex items-center m-0 p-0 gap-2 font-jaldi font-bold text-[16px] text-white focus:outline-none"
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
                            className="px-6 py-3 font-jaldi text-[16px] text-white hover:bg-black/40 border-b border-white/10 last:border-b-0"
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
                href="/about-us"
                className="font-jaldi font-bold text-[16px] text-white"
              >
                Quienes somos
              </Link>

              <div className="w-[32px] h-[32px]">
                <svg
                  fill="#ffffff"
                  height="32px"
                  width="32px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-143 145 512 512"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>{" "}
                      <path d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>

              <div className="w-[32px] h-[32px]">
                <Image
                  src="/assets/logo-instagram.svg"
                  alt="User icon"
                  width={32}
                  height={32}
                />
              </div>
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
                    className="flex items-center w-full m-0 p-0 gap-2 font-jaldi font-bold text-[16px] text-white focus:outline-none"
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
                          className="block px-6 py-3 font-jaldi text-[16px] text-white hover:bg-black/40 border-b border-white/10 last:border-b-0"
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
                href="/about-us"
                className="block font-jaldi font-bold text-[16px] text-white mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quienes somos
              </Link>

              <div className="flex gap-5 mt-5">
              <div className="w-[32px] h-[32px] cursor-pointer">
                <svg
                  fill="#ffffff"
                  height="32px"
                  width="32px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-143 145 512 512"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>{" "}
                      <path d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>

              <div className="w-[32px] h-[32px] cursor-pointer">
                <Image
                  src="/assets/logo-instagram.svg"
                  alt="User icon"
                  width={32}
                  height={32}
                />
              </div>

              </div>
              
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
