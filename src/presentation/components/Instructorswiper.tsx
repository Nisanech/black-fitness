"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface ImageData {
  image: string;
  name: string;
  position: string;
  id: number;
}

interface CarouselProps {
  teamMembers: ImageData[];
}

const ResponsiveCarousel: React.FC<CarouselProps> = ({ teamMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= teamMembers.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const previousIndex = prevIndex - 1;
      return previousIndex < 0 ? teamMembers.length - 1 : previousIndex;
    });
  };

  const visibleMembers = () => {
    const wrappedMembers = [
      ...teamMembers,
      ...teamMembers.slice(0, itemsToShow - 1),
    ];
    return wrappedMembers.slice(currentIndex, currentIndex + itemsToShow);
  };

  return (
    <>
      <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-12 overflow-hidden">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out">
            {visibleMembers().map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className={`flex-shrink-0 px-2 flex justify-center ${
                  itemsToShow === 1
                    ? "w-full"
                    : itemsToShow === 2
                    ? "w-1/2"
                    : "w-1/3"
                }`}
              >
                <div className="relative group">
                  <div className="relative w-[290px] h-[290px] rounded-full overflow-hidden mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3E3E3E]/90 to-[#D9D9D9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-[30px] left-0 right-0 p-6 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-[24px] tracking-wider leading-[20px] font-deutschlander writing-mode-vertical">
                          {member.name}
                        </p>
                        <p className="text-[24px] tracking-wider leading-[20px] font-deutschlander mt-2 writing-mode-vertical">
                          {member.position}
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
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          aria-label="Previous slide"
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
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          aria-label="Next slide"
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
    </>
  );
};

export default ResponsiveCarousel;
