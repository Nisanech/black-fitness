"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const classes = [
  {
    title: "Yoga",
    description:
      "Fortalece cuerpo y mente con posturas y respiración consciente",
    image: "/assets/clases/yoga.png",
    icon: "/assets/clases/iconos/icono-yoga.svg",
  },
  {
    title: "Pilates",
    description:
      "Mejora flexibilidad y tonificación mediante ejercicios controlados",
    image: "/assets/clases/pilates.png",
    icon: "/assets/clases/iconos/icono-pilates.svg",
  },
  {
    title: "Yogalates",
    description: "Combina lo mejor del yoga y pilates para fuerza y equilibrio",
    image: "/assets/clases/yogalates.png",
    icon: "/assets/clases/iconos/icono-yogalates.svg",
  },
  {
    title: "Rumba",
    description:
      "Baila al ritmo de música latina para quemar calorías y divertirte",
    image: "/assets/clases/rumba.png",
    icon: "/assets/clases/iconos/icono-rumba.svg",
  },
  {
    title: "GAP",
    description:
      "Tonificación intensa enfocada en la zona inferior del cuerpo",
    image: "/assets/clases/gap.png",
    icon: "/assets/clases/iconos/icono-gap.svg",
  },
  {
    title: "Técnica Box",
    description:
      "Aprende movimientos de boxeo mientras mejoras tu condición física",
    image: "/assets/clases/box.png",
    icon: "/assets/clases/iconos/icono-box.svg",
  },
  {
    title: "Full Body",
    description:
      "Entrenamiento total que trabaja todos los grupos musculares",
    image: "/assets/clases/body.png",
    icon: "/assets/clases/iconos/icono-body.svg",
  },
  {
    title: "TikTok Trends",
    description:
      "Baila las últimas coreografías virales y diviértete al máximo",
    image: "/assets/clases/tiktok.png",
    icon: "/assets/clases/iconos/icono-tiktok.svg",
  },
  {
    title: "Kick Box",
    description:
      "Combina golpes y patadas en un entrenamiento explosivo y dinámico",
    image: "/assets/clases/kick-box.png",
    icon: "/assets/clases/iconos/icono-kick-box.svg",
  },
  {
    title: "Champeta",
    description:
      "Cardio vibrante con movimientos caribeños para quemar calorías",
    image: "/assets/clases/champeta.png",
    icon: "/assets/clases/iconos/icono-champeta.svg",
  },
  {
    title: "Reggaetón",
    description:
      "Quema calorías con ritmos urbanos y movimientos intensos",
    image: "/assets/clases/reggaeton.png",
    icon: "/assets/clases/iconos/icono-reggaeton.svg",
  },
  {
    title: "TRX",
    description:
      "Quema calorías con ritmos urbanos y movimientos intens",
    image: "/assets/clases/trx.png",
    icon: "/assets/clases/iconos/icono-trx.svg",
  },
];

export default function ClassSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  const router = useRouter();

 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? classes.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === classes.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  const handleRedirect = () => {
    router.push("/class-schedules");
  };

  return (
    <div className="bg-black-principal text-[#f3f3f3] p-4 lg:px-12 lg:py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 md:max-w-[60%]">
          <h2 className="text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] font-deutschlander mb-4">Nuestras Clases</h2>
          <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander"> 
            Contamos con una variedad de clases diseñadas para todos los
            niveles, enfocadas en tu bienestar, diversión y resultados.
          </p>
        </div>

        <button
          type="button"
          className="py-3 px-6 text-[24px] font-normal font-deutschlander text-[#f3f3f3] bg-black-principal rounded-full border border-[#f3f3f3] focus:ring-4 focus:ring-[#F3F3F3] w-full md:w-[250px] lg:w-[300px]"
          onClick={handleRedirect}
        >
          Todas nuestras clases
        </button>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {classes.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 transition-opacity duration-500 ${
                  index >= currentIndex && index < currentIndex + visibleCards
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
              >
                <div className="relative flex flex-col h-full pb-32">
                  {" "}
                  {/* Update 1 & 2 */}
                  <div className="relative w-full pt-[66.67%] rounded-[30px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="absolute top-0 left-0 w-full h-full lg:grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="absolute bottom-[60px] left-0 xl:left-[20%] right-0 mx-[25px] bg-[#3E3E3E] p-4 rounded-[20px] transform xl:w-[320px] translate-y-1/3">
                    {" "}
                    {/* Update 3 */}
                    <div className="flex items-start">
                      <div className="w-10 h-10 mr-3 mt-1 flex-shrink-0">
                        <Image
                          src={`${item.icon}`}
                          alt={`${item.title} icon`}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <h3 className="font-deutschlander text-[24px] text-[#f3f3f3] tracking-wider leading-[25px] mb-2">
                          {item.title}
                        </h3>
                        <p className="font-deutschlander text-[20px] text-[#f3f3f3] tracking-wider leading-[25px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          aria-label="Previous class"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
          aria-label="Next class"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
