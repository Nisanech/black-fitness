import Image from "next/image";

const images = [
  {
    title: "SNACK BAR",
    description: "Disfruta de batidos y snacks saludables que complementan tu nutrición",
    alt: "SNACK BAR",
    image: "/assets/servicios/snack-bar.png"
  },
  {
    title: "DUCHAS Y VESTIER",
    description: "Aprovecha nuestras modernas duchas y vestuarios, diseñados para brindarte la máxima comodidad y privacidad después de cada entrenamiento.",
    alt: "DUCHAS Y VESTIER",
    image: "/assets/servicios/duchas.png"
  },
  {
    title: "PARQUEADERO",
    description: "Black fitness te brinda 1 hora gratuita de parqueadero",
    alt: "PARQUEADERO",
    image: "/assets/servicios/parqueadero.png"
  }
];

const imagesSlider = [
  {
    image: "/assets/servicios/instalacion-1.png"
  },
  {
    image: "/assets/servicios/instalacion-2.png"
  },
  {
    image: "/assets/servicios/instalacion-3.png"
  },
  {
    image: "/assets/servicios/instalacion-4.png"
  },
  {
    image: "/assets/servicios/instalacion-5.png"
  },
  {
    image: "/assets/servicios/instalacion-6.png"
  },
];

export default function ComplementaryServicesPage() {
  return (
    <>
      <div className="relative w-full min-h-[30rem] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/servicios/background.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "rgba(0, 0, 0, 0.60)",
            backdropFilter: "blur(5.45px)",
          }}
        ></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative rounded-3xl group w-full lg:w-1/3 aspect-[4/3] overflow-hidden">
                {/* Imagen */}
                <Image
                  src={image.image}
                  alt={image.alt}
                  fill
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay con degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-600/50 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          flex flex-col justify-end p-6 text-center">
                  {/* Contenido del overlay */}
                  <h3
                    className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                  <p
                    className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      
      </div>

      <div className="relative w-full min-h-[30rem] flex items-center justify-center overflow-hidden mt-8 p-4 md:p-8">
        <Image
          src="/assets/servicios/background-slider.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 grayscale"
        />

        <div className="max-w-6xl mx-auto w-full relative z-20">
        <div className="flex flex-col lg:flex-row gap-4">
            {imagesSlider.map((image, index) => (
              <div key={index} className="relative rounded-3xl group w-full overflow-hidden">
                {/* Imagen */}
                <Image
                  src={image.image}
                  alt="Instalacion"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}