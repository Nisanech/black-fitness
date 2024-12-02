"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  name: string;
  carge: string;
}

interface CarouselProps {
  images: ImageData[];
}

const ResponsiveCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determina cuántas imágenes mostrar según el tamaño de la pantalla
  const getVisibleImages = () => {
    if (typeof window === "undefined") return 4; // Renderizado del servidor
    if (window.innerWidth >= 1024) return 4; // Escritorio
    if (window.innerWidth >= 768) return 3; // Tablet
    if (window.innerWidth >= 640) return 2; // Pantallas pequeñas
    return 1; // Móviles
  };

  const visibleCount = getVisibleImages();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleCount < 0 ? images.length - visibleCount : prevIndex - visibleCount
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCount >= images.length ? 0 : prevIndex + visibleCount
    );
  };

  return (
    <div className="flex justify-center items-center w-full">
      {/* Botón anterior */}
      <button
        className="absolute left-0 bg-gray-800 text-white rounded-full w-10 h-10 flex justify-center items-center z-10"
        onClick={handlePrev}
      >
        &lt;
      </button>

      {/* Carrusel de imágenes */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentIndex / images.length) * 165}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-none w-1/${visibleCount} p-4`}
              style={{ flex: `0 0 ${10 / visibleCount}%` }}
            >
              <div className="w-[200px] p-4 rounded-lg text-center">
                <Image
                  src={image.src}
                  alt={image.name}
                  width={300}
                  height={150}
                  className="rounded-full mx-auto"
                />

                <div>
                <p className="mt-2 font-deutschlander text-white">{image.name}</p>
                <p className="mt-2 font-deutschlander text-white">{image.carge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón siguiente */}
      <button
        className="absolute right-0 bg-gray-800 text-white rounded-full w-10 h-10 flex justify-center items-center z-10"
        onClick={handleNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default ResponsiveCarousel;
