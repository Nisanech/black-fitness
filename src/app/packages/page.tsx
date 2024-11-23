import Image from "next/image";

const paquetes = [
  {
    title: "REHAB",
    image: "/assets/paquetes/rehab.png",
  },
  {
    title: "Kinesio taping",
    image: "/assets/paquetes/kinesio.png",
  },
  {
    title: "Limpieza facial",
    image: "/assets/paquetes/limpieza.png",
  },
  {
    title: "Drenaje linfatico",
    image: "/assets/paquetes/drenaje.png",
  },
  {
    title: "Reducir",
    image: "/assets/paquetes/reducir.png",
  },
  {
    title: "Deportivo",
    image: "/assets/paquetes/deportivo.png",
  },
  {
    title: "Relajante",
    image: "/assets/paquetes/relajante.png",
  }
]
export default function PackagesPage() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Contenedor de los slides */}
        <div className="flex transition-transform duration-500 ease-in-out md:h-full">
          {/* Slide 1 */}
          <div
            className="w-full flex-shrink-0 h-full"
            style={{
              background:
                "linear-gradient(to bottom, #212121 0%, #212121 100%)",
            }}
          >
            <div className="container mx-auto px-4 py-12 lg:py-20">
              <div className="flex flex-col md:items-center lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Mobile: Image on top, Text below */}
                <div className="lg:hidden w-full md:md:w-1/2 lg:w-full aspect-square relative overflow-hidden">
                  <Image
                    src="/assets/paquetes/paquetes.png"
                    alt="Image 1"
                    fill
                    className="w-full h-full object-cover "
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <h2
                    className={`font-deutschlander text-[#F3F3F3] text-5xl py-2 md:text-[70px] md:py-7 font-bold mb-2 tracking-wider lg:py-12`}
                  >
                    Bienestar Total para
                    Cuerpo y Mente
                  </h2>
                  
                  <p
                    className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px] xl:text-[30px]">
                    En nuestra área de estética y fisioterapia, cuidamos de ti de manera integral. Combinamos
                    tratamientos estéticos avanzados con terapias de rehabilitación para que te sientas y te veas mejor
                    que nunca
                  </p>
                  
                  <div className="border w-[90%] h-2 rounded-full bg-[#585858] border-transparent"></div>
                </div>
                
                {/* Desktop: Image on right */}
                <div className="hidden lg:block w-full max-w-xl aspect-square relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/assets/paquetes/paquetes.png"
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
      </div>
      
      <div className="text-center">
        <h1
          className="m-0 text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">
          Nuestros Paquetes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 justify-items-center mt-5">
          {paquetes.map((item) => (
            <div key={item.title}
                 className="w-full max-w-sm overflow-hidden text-white bg-black-principal"
            >
              <div className="relative aspect-[2/3] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  fill
                
                />
              </div>
            
            </div>
          ))}
        </div>
      </div>
    </>
  )
}