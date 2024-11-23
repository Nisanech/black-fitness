import Image from "next/image";

const products = [
  "/assets/productos/producto-1.png", "/assets/productos/producto-2.png", "/assets/productos/producto-3.png",
  "/assets/productos/producto-4.png", "/assets/productos/producto-5.png", "/assets/productos/producto-6.png",
  "/assets/productos/producto-7.png", "/assets/productos/producto-8.png", "/assets/productos/producto-9.png",
  "/assets/productos/producto-10.png", "/assets/productos/producto-11.png", "/assets/productos/producto-12.png",
  "/assets/productos/producto-13.png", "/assets/productos/producto-14.png", "/assets/productos/producto-15.png",
  "/assets/productos/producto-16.png", "/assets/productos/producto-17.png", "/assets/productos/producto-18.png",
  "/assets/productos/producto-19.png", "/assets/productos/producto-20.png", "/assets/productos/producto-21.png",
  "/assets/productos/producto-22.png", "/assets/productos/producto-23.png", "/assets/productos/producto-24.png",
  "/assets/productos/producto-25.png", "/assets/productos/producto-26.png", "/assets/productos/producto-27.png",
  "/assets/productos/producto-28.png", "/assets/productos/producto-29.png", "/assets/productos/producto-30.png",
  "/assets/productos/producto-31.png", "/assets/productos/producto-32.png", "/assets/productos/producto-33.png",
  "/assets/productos/producto-34.png", "/assets/productos/producto-35.png", "/assets/productos/producto-36.png",
  "/assets/productos/producto-37.png",
]

export default function ProductsPage() {
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
                    src="/assets/productos/banner-snack.png"
                    alt="Image 1"
                    fill
                    className="w-full h-full object-cover "
                  />
                </div>
                
                {/* Content Section */}
                <div className="flex-1 text-center lg:text-left">
                  <h2
                    className={`font-deutschlander text-[#F3F3F3] text-5xl py-2 md:text-[70px] md:py-7 font-bold mb-2 tracking-wider`}
                  >
                    La mejor zona de snacks
                  </h2>
                  
                  <p
                    className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px]">
                    ¡Prepárate para disfrutar de los mejores protein snacks del mundo a tu manera! Personaliza tu
                    batido eligiendo entre:
                  </p>
                  
                  <p
                    className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px]">
                    - Base: Agua, leche deslactosada o de almendras.
                  </p>
                  
                  <p
                    className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px]">
                    - Proteína: Whey de chocolate, vainilla, cookies and cream, vegana de vainilla o soya de vainilla.
                  </p>
                  
                  <p
                    className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px]">
                    - Frutas: Banano, mora, fresa, mango, piña, kiwi, entre otras.
                  </p>
                  
                  <p
                    className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px]">
                    - Toppings: Avena, mantequilla de maní, semillas de chía, café, y más.
                  </p>
                  
                  <p
                    className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px]">
                    - Salsas: Chocolate, arequipe, piña, mora o fresa.
                  </p>
                  
                  <p
                    className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px]">
                    ¡Crea tu combinación perfecta y disfruta!
                  </p>
                  <div className="border w-[90%] h-2 rounded-full bg-[#585858] border-transparent"></div>
                </div>
                
                {/* Desktop: Image on right */}
                <div className="hidden lg:block w-full max-w-xl aspect-square relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/assets/productos/banner-snack.png"
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
      
      <div className="relative w-full min-h-[30rem] flex items-center justify-center overflow-hidden py-7">
        <Image
          src="/assets/productos/background.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        
        <div className="mx-auto w-full relative z-20">
          <h1
            className="text-center m-0 text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">
            Nuestros Productos
          </h1>
          
          <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-7 px-7 mt-8">
            {products.map(product => (
              <div key={product} className="relative aspect-[2/3] w-full h-auto md:w-[280px] md:h-[370px]">
                <Image
                  src={product}
                  alt="producto"
                  className="h-full object-cover rounded-lg"
                  fill
                />
              </div>
            ))}
          
          </div>
        </div>
      </div>
    </>
  )
}