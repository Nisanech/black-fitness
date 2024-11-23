import Image from "next/image";

interface Planes {
  image: string;
  title: string;
}

const features: Planes[] = [
  {
    image: "/assets/home/iconos-planes/icono-membresia.svg",
    title: "Membresía",
  },
  {
    image: "/assets/home/iconos-planes/icono-valoracion.svg",
    title: "Valoración",
  },
  {
    image: "/assets/home/iconos-planes/icono-seguimiento.svg",
    title: "Seguimiento",
  },
  {
    image: "/assets/home/iconos-planes/icono-entrenadores.svg",
    title: "Entrenadores de planta",
  },
  {
    image: "/assets/home/iconos-planes/icono-clases.svg",
    title: "Clases grupales",
  },
  {
    image: "/assets/home/iconos-planes/icono-maquinas.svg",
    title: "Acceso ilimitado a nuestras instalaciones",
  },
];

export default function CustomPlans() {
  return (
    <>
      <div className="relative w-full min-h-[30rem] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/planes/bg-planes-personalizados.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        
        <div className="mx-auto w-full relative z-20">
          <div className="mx-auto p-8">
            <div className="flex flex-col items-center justify-around gap-8 lg:flex-row lg:gap-12">
              {/* Left Column - Text Content */}
              <div className="flex flex-col justify-center space-y-6 text-white">
                <h2 className="font-deutschlander text-[#F3F3F3] text-5xl md:text-[70px] mb-2 tracking-wider">
                  Planes Personalizados
                </h2>
                <p
                  className="max-w-xl text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">
                  En BlackFitness, entendemos que cada cuerpo es único, y tu entrenamiento también debería serlo. Por
                  eso, ofrecemos planes personalizados con programas específicos diseñados para ti y ajustados a tus
                  objetivos.
                </p>
                <div></div>
              </div>
              
              {/* Right Column - Cards Grid */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="mx-auto max-w-7xl space-y-16">
                  {/* Semi-personalized Plans */}
                  <div className="relative">
                    <div className="bg-[#454545] rounded-2xl text-white">
                      <div className="md:flex">
                        <div className="md:w-1/3 px-4 py-3 flex flex-col justify-center">
                          <h3
                            className="text-[30px] xl:text-[40px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] mb-5">
                            Planes
                            Semipersonalizados
                          </h3>
                          <p
                            className="text-[24px] xl:text-[30px] tracking-wider leading-[30px] font-deutschlander text-[#f3f3f3]">
                            Plan que se ajuste a tus objetivos sin perder la libertad de entrenar a tu ritmo
                          </p>
                        </div>
                        <div className="md:w-2/3 px-4 py-3 flex flex-col justify-center">
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 relative z-10">
                            {[
                              {sessions: 12, validity: "Vigencia de 1 mes"},
                              {sessions: 4, validity: "Vigencia de 1 mes"},
                              {sessions: 8, validity: "Vigencia de 1 mes"},
                            ].map((plan) => (
                              <div key={plan.sessions}
                                   className="bg-[#E91F25] rounded-2xl text-white transform transition-transform hover:scale-105">
                                <div className="p-6">
                                  <div className="text-center">
                                    <p
                                      className="text-[60px] xl:text-[90px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] mb-2 xl:mb-6 xl:leading-[40px]"
                                      style={{
                                        color: "#E91F25",
                                        textShadow:
                                          "-1px 1px 0 #F3f3f3,1px 1px 0 #F3f3f3, 1px -1px 0 #F3f3f3, -1px -1px 0 #F3f3f3",
                                      }}>{plan.sessions}</p>
                                    <p
                                      className="text-[30px] xl:text-[40px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] xl:leading-[40px]">Sesiones</p>
                                    
                                    <div className=" border-white border bg-white mb-3"></div>
                                    
                                    <p
                                      className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">{plan.validity}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Personalized Plans */}
                  <div className="relative">
                    <div className="bg-[#454545] rounded-2xl text-white">
                      <div className="md:flex">
                        <div className="md:w-1/3 px-4 py-3 flex flex-col justify-center">
                          <h3
                            className="text-[30px] xl:text-[40px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] mb-5">
                            Planes
                            Personalizados
                          </h3>
                          <p
                            className="text-[24px] xl:text-[30px] tracking-wider leading-[30px] font-deutschlander text-[#f3f3f3]">
                            Cada aspecto de tu entrenamiento
                            se adapta a ti. Desde tus objetivos
                            hasta tu nivel físico y preferencias
                          </p>
                        </div>
                        <div className="md:w-2/3 px-4 py-3 flex flex-col justify-center">
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 relative z-10">
                            <div className="bg-[#E91F25] rounded-2xl transform transition-transform hover:scale-105">
                              <div className="p-6">
                                <div className="text-center">
                                  <p
                                    className="text-[40px] xl:text-[50px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] xl:leading-[40px] mb-2">Sesiones</p>
                                  <p
                                    className="text-[40px] xl:text-[50px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] xl:leading-[40px]">Ilimitadas</p>
                                  
                                  <div className=" border-white border bg-white mb-3"></div>
                                  
                                  <p
                                    className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">Vigencia
                                    de 1 mes</p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="bg-[#E91F25] rounded-2xl text-white transform transition-transform hover:scale-105">
                              <div className="p-6">
                                <div className="text-center">
                                  <p
                                    className="text-[60px] xl:text-[90px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] mb-2 xl:mb-6 xl:leading-[40px]"
                                    style={{
                                      color: "#E91F25",
                                      textShadow:
                                        "-1px 1px 0 #F3f3f3,1px 1px 0 #F3f3f3, 1px -1px 0 #F3f3f3, -1px -1px 0 #F3f3f3",
                                    }}>1</p>
                                  <p
                                    className={`text-[40px] xl:text-[50px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] xl:leading-[40px]`}>Rutina</p>
                                  
                                  <div className=" border-white border bg-white mb-3"></div>
                                  <p
                                    className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">Vigencia
                                    de 1 día</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Online Plan */}
                  <div className="bg-[#454545] rounded-2xl text-white">
                    <div className="md:flex">
                      <div className="md:w-1/2 px-4 py-3 flex flex-col justify-center">
                        <h3
                          className="text-[30px] xl:text-[40px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] mb-5">
                          Online
                        </h3>
                        <p
                          className="text-[24px] xl:text-[30px] tracking-wider leading-[30px] font-deutschlander text-[#f3f3f3]">
                          Llevarás tu entrenamiento a otro nivel, sin importar dónde estés. Diseñamos un programa
                          exclusivo para ti, con la flexibilidad de entrenar en casa, en el gimnasio o al aire libre
                        </p>
                      </div>
                      <div className="md:w-1/2 px-4 py-3 flex flex-col justify-center">
                        <div className="grid grid-cols-1 gap-4 relative z-10 w-[280px]">
                          <div
                            className="bg-[#E91F25] rounded-2xl text-white transform transition-transform hover:scale-105">
                            <div className="p-6">
                              <div className="text-center flex justify-center items-center gap-5">
                                <p
                                  className="text-[60px] xl:text-[90px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] mb-2 xl:mb-6 xl:leading-[40px]"
                                  style={{
                                    color: "#E91F25",
                                    textShadow:
                                      "-1px 1px 0 #F3f3f3,1px 1px 0 #F3f3f3, 1px -1px 0 #F3f3f3, -1px -1px 0 #F3f3f3",
                                  }}>5</p>
                                
                                <div className={`flex flex-col justify-start`}>
                                  <p
                                    className="text-[30px] xl:text-[40px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3] xl:leading-[40px]">Rutinas</p>
                                  <div className=" border-white border bg-white mb-3"></div>
                                  
                                  <p
                                    className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">Vigencia
                                    de 1 mes</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-black-principal px-4 py-16">
        <div className="container mx-auto">
          <h2
            className="text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] mb-12 font-deutschlander text-[#f3f3f3] text-center">
            Todos Nuestros Planes Incluyen
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {features.map((Feature, index) => (
              <div key={index} className={`
              flex items-center justify-center
              w-full sm:w-[calc(50%-1rem)]
              ${index < 4 ? 'lg:w-[calc(25%-1.5rem)]' : 'lg:w-[calc(40%-1rem)]'}
              p-4
            `}>
                <Image src={Feature.image} alt={Feature.title} width={32} height={32} className="w-12 h-12 mb-4"/>
                <h3
                  className="ml-4 text-[24px] xl:text-[30px] tracking-wider leading-[25px] text-center text-[#f3f3f3] font-deutschlander">
                  {Feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}