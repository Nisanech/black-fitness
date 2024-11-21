"use client";
import Image from "next/image";
import HeroSlider from "@/presentation/home/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <div className="relative w-full min-h-[190px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/home/bg-banner-qr.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
       
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center p-4 max-w-5xl w-full mx-auto space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left text-[#f3f3f3] md:w-2/3">
            <p className="text-sm font-deutschlander text-[24px]  tracking-wider leading-[25px]">
              Bienvenido a BLACK FITNESS! Juntos cumpliremos todas tus metas y
              objetivos, ya sea bajar de peso, aumentar de masa muscular,
              acondicionamiento, mejorar tu salud o simplemente pasarla bien.
              Contamos con profesionales en áreas de acondicionamiento físico,
              fisioterapia, nutrición, estética y baile que se complementan de
              forma perfecta para lograr el objetivo.
            </p>
          </div>
          <div className="w-44 h-44 md:w-1/3 flex justify-center">
            <Image
              src="/assets/home/qr.png"
              alt="QR Code"
              width={172}
              height={172}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
