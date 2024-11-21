"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      {/* Contenedor de los slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out md:h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slide 1 */}
        <div
          className="w-full flex-shrink-0 h-full"
          style={{
            background: "linear-gradient(to bottom, #01204F 0%, #212121 100%)",
          }}
        >
          <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="flex flex-col md:items-center lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Mobile: Image on top, Text below */}
              <div className="lg:hidden w-full md:md:w-1/2 lg:w-full aspect-square relative overflow-hidden">
                <Image
                  src="/assets/home/banner/banner-1.png"
                  alt="Image 1"
                  fill
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <h2
                  className={`font-deutschlander text-5xl py-2 md:text-[70px] md:py-7 lg:text-[96px] font-bold mb-2 tracking-wider lg:py-12`}
                  style={{
                    background: "linear-gradient(to right, #FF1100, #FF844D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: "20px",
                  }}
                >
                  Equipos de
                </h2>

                <h3
                  className={`font-kanit text-[#F3F3F3] font-black text-4xl uppercase border-b-4 border-[#FF7F00] md:text-5xl md:w-[500px] lg:text-6xl mb-6`}
                >
                  alta tecnología
                </h3>

                <p className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px] xl:text-[30px]">
                  Elige el plan que mejor se ajuste a tus objetivos y estilo de
                  vida, con opciones que se adaptan a ti
                </p>

                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-[20px] font-normal font-deutschlander text-[#f3f3f3] focus:outline-none bg-gradient-to-r from-[#FF7F00] to-[#FB5F22] rounded-full border border-[#FB5F22] hover:bg-[#FF7F00] focus:z-10 focus:ring-4 focus:ring-[#FF7F00]"
                >
                  Conoce nuestros planes
                </button>
              </div>

              {/* Desktop: Image on right */}
              <div className="hidden lg:block w-full max-w-xl aspect-square relative">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/home/banner/banner-1.png"
                    alt="Image 1"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="w-full flex-shrink-0 h-full"
          style={{
            background: "linear-gradient(to bottom, #CBB07F 0%, #9A8152 100%)",
          }}
        >
          <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="flex flex-col md:items-center lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Mobile: Image on top, Text below */}
              <div className="lg:hidden md:w-1/2 w-full aspect-square relative overflow-hidden">
                <Image
                  src="/assets/home/banner/banner-2.png"
                  alt="Image 2"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <h2
                  className={`font-courgette text-[#FFFAD6] leading-[40px] text-4xl md:text-5xl md:leading-[50px] md:ml-[20px] lg:text-[64px] lg:leading-[70px] lg:ml-[30px] xl:ml-[50px] font-normal mb-2 tracking-wider`}
                >
                  Estética & Fisioterapia
                </h2>

                <h3
                  className={`font-kanit text-[#FFFAD6] font-normal text-2xl md:text-4xl xl:text-5xl mb-6`}
                >
                  ¡Luce tan bien como te sientes!
                </h3>

                <p className="text-[#FFFAD6] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px] xl:text-[30px]">
                  Completa tu transformación con nuestros servicios de Estética,
                  tu salud es nuestra prioridad. Fisioterapia profesional para
                  que entrenes sin límites y sin preocupaciones.
                </p>

                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-[20px] font-normal font-deutschlander text-[#9A8152] focus:outline-none bg-[#FFFAD6] rounded-full border border-[#FFFAD6] hover:bg-[#FFFAD6] focus:z-10 focus:ring-4 focus:ring-[#FFFAD6]"
                >
                  Conoce nuestros planes
                </button>
              </div>

              {/* Desktop: Image on right */}
              <div className="hidden lg:block w-full max-w-xl aspect-square relative">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/home/banner/banner-2.png"
                    alt="Image 1"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="w-full flex-shrink-0 h-full"
          style={{
            background: "linear-gradient(to bottom, #212121 0%, #212121 100%)",
          }}
        >
          <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="flex flex-col md:items-center lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Mobile: Image on top, Text below */}
              <div className="lg:hidden md:w-1/2 w-full lg:w-full aspect-square relative overflow-hidden">
                <Image
                  src="/assets/home/banner/banner-3.png"
                  alt="Image 3"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <h2
                  className={`font-kanit text-[#F3F3F3] text-4xl md:text-5xl xl:text-[64px] font-black mb-2`}
                >
                  PLANES VARIABLES
                </h2>

                <h3
                  className={`font-kanit font-black uppercase text-[40px] md:text-[53px] xl:text-[78px] mb-2`}
                  style={{
                    color: "#212121",
                    textShadow:
                      "-1px 1px 0 #9E2317,1px 1px 0 #9E2317, 1px -1px 0 #9E2317, -1px -1px 0 #9E2317",
                  }}
                >
                  Flexibilidad
                </h3>

                <h3
                  className={`font-kanit font-black uppercase text-[40px] md:text-[36px] xl:text-[48px] xl:pb-[10px] mb-6 xl:mb-2`}
                  style={{
                    color: "#212121",
                    textShadow:
                      "-1px 1px 0 #CDCDCD,1px 1px 0 #CDCDCD, 1px -1px 0 #CDCDCD, -1px -1px 0 #CDCDCD",
                  }}
                >
                  para todos
                </h3>

                <p className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px] xl:text-[30px]">
                  Escoge el plan que mejor se adapte a tus objetivos y estilo de
                  vida, con opciones diseñadas especialmente para ti.
                </p>

                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-[20px] font-normal font-deutschlander text-white-principal focus:outline-none bg-[#9E2317] rounded-full border border-[#9E2317] hover:bg-[#9E2317] focus:z-10 focus:ring-4 focus:ring-[#9E2317]"
                >
                  Conoce nuestros planes
                </button>
              </div>

              {/* Desktop: Image on right */}
              <div className="hidden lg:block w-full max-w-xl aspect-square relative">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/home/banner/banner-3.png"
                    alt="Image 1"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          className="w-full flex-shrink-0 h-full"
          style={{
            background: "linear-gradient(to bottom, #E1BBE7 0%, #E1BBE7 100%)",
          }}
        >
          <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="flex flex-col md:items-center lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Mobile: Image on top, Text below */}
              <div className="lg:hidden w-full md:w-1/2 lg:w-full aspect-square relative overflow-hidden">
                <Image
                  src="/assets/home/banner/banner-4.png"
                  alt="Image 4"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <h2
                  className={`font-kanit uppercase text-5xl md:text-[70px] lg:text-[96px] font-black mb-2`}
                  style={{
                    color: "#E1BBE7",
                    textShadow:
                      "-2px 2px 0 #664671, 2px 2px 0 #664671, 2px -2px 0 #664671, -2px -2px 0 #664671, " +
                      "-2px 0px 0 #664671, 2px 0px 0 #664671",
                  }}
                >
                  Snack Bar
                </h2>

                <h3
                  className={`font-kanit text-[#FFFAD6] font-black uppercase text-3xl md:text-4xl lg:text-5xl mb-2`}
                  style={{
                    color: "#FFFFFF",
                    textShadow:
                      "-3px 3px 5px #E1BBE7, 3px -3px 5px #E1BBE7, -3px -3px 5px #E1BBE7, 3px 3px 5px #E1BBE7, " +
                      "5px 5px 20px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  ¡Recarga tu energía!
                </h3>

                <h3
                  className={`font-inter text-[#664671] font-black uppercase text-[20px] xl:text-[32px] mb-6 xl:mb-2`}

                >
                  Nutrición al alcance de tu mano
                </h3>

                <p className="text-[#664671] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px] xl:text-[30px]">
                Disfruta de opciones saludables en nuestro Snack Bar diseñado para complementar
                tu entrenamiento y mantengas tu rendimiento al máximo.
                </p>

                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-[14px] lg:text-[20px] font-normal font-deutschlander text-white-principal focus:outline-none bg-[#664671] rounded-full border border-[#664671] hover:bg-[#664671] focus:z-10 focus:ring-4 focus:ring-[#664671]"
                >
                  Conoce todos nuestros productos de nuestro SNACK BAR
                </button>
              </div>

              {/* Desktop: Image on right */}
              <div className="hidden lg:block w-full max-w-xl aspect-square relative">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/home/banner/banner-4.png"
                    alt="Image 1"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5 */}
        <div
          className="w-full flex-shrink-0 h-full"
          style={{
            background: "linear-gradient(to bottom, #273737 0%, #0F2121 100%)",
          }}
        >
          <div className="container mx-auto px-4 py-12 lg:py-20">
            <div className="flex flex-col md:items-center lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Mobile: Image on top, Text below */}
              <div className="lg:hidden w-full md:w-1/2 lg:w-full aspect-square relative overflow-hidden">
                <Image
                  src="/assets/home/banner/banner-5.png"
                  alt="Image 5"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex gap-3 py-2">
                  <div className="w-[100px] h-1 border bg-white-principal border-transparent mb-3 rounded-full"></div>

                  <div className="w-[20px] h-1 border bg-green-support border-transparent mb-3 rounded-full"></div>
                </div>

                <h2
                  className={`font-anta uppercase text-green-support text-4xl md:text-[70px] lg:text-[75px] font-black mb-2`}
                  style={{
                    
                    textShadow:
                    
                      "5px 5px 20px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  Entrenamiento
                </h2>

                <h3
                  className={`font-kanit font-black uppercase text-4xl md:text-[70px] lg:text-[75px] mb-2 md:mt-9`}
                  style={{
                    color: "#1A2B2B",
                    textShadow:
                      "-1px 1px 0 #FFFFFF,1px 1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px -1px 0 #FFFFFF",
                  }}
                >
                  personalizado
                </h3>

                <div className="flex gap-3 flex-row-reverse py-2 mt-5">
                  <div className="w-[100px] h-1 border bg-white-principal border-transparent  rounded-full"></div>

                  <div className="w-[20px] h-1 border bg-green-support border-transparent rounded-full"></div>
                </div>

                <p className="text-white-principal font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px] xl:text-[30px]">
                  Diseñamos un plan de entrenamiento personalizado, adaptado a tus objetivos y necesidades. Desde principiantes hasta atletas, contamos con el plan perfecto para cada etapa de tu progreso.
                </p>

                <button
                  type="button"
                  className="py-2.5 px-5 me-2 mb-2 text-[20px] lg:text-[20px] font-normal font-deutschlander text-[#172828] focus:outline-none bg-[#B2ED00] rounded-full border border-[#B2ED00] hover:bg-[#B2ED00] focus:z-10 focus:ring-4 focus:ring-[#B2ED00]"
                >
                  Planes de entrenamiento personalizado
                </button>
              </div>

              {/* Desktop: Image on right */}
              <div className="hidden lg:block w-full max-w-xl aspect-square relative">
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src="/assets/home/banner/banner-5.png"
                    alt="Image 1"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots de navegación */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-red-500" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
          />
        ))}
      </div>
    </div>
  );
}
