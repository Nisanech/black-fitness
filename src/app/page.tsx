"use client";
import Image from "next/image";
import HeroSlider from "@/presentation/home/HeroSlider";
import ClassSlider from "@/presentation/home/ClassSlider";

interface Planes {
  image: string;
  title: string;
}

const includesPlanes: Planes[] = [
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

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* QR */}
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

      {/* Planes */}
      <div className="container mx-auto px-4 py-8 bg-black-principal">
        <h2 className="text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] text-[#f3f3f3] font-deutschlander text-center mb-8">
          Planes y personalizados
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
          <div className="w-full md:w-1/2 max-w-md">
            <Image
              src="/assets/home/plan-personalizado-1.png"
              alt="Plan 1"
              width={400}
              height={300}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <Image
              src="/assets/home/plan-personalizado-2.png"
              alt="Plan 2"
              width={400}
              height={300}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full min-h-[24rem] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/home/bg-planes.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />

        <div className="relative z-20 flex flex-col lg:flex-row items-center justify-evenly p-8 max-w-[1200px] w-full mx-auto space-y-8 md:space-y-0 md:space-x-8">
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "rgba(0, 0, 0, 0.60)",
              backdropFilter: "blur(5.45px)",
            }}
          ></div>
          <div className="flex-shrink-0 relative z-20">
            <Image
              src="/assets/home/perfil-planes.png"
              alt="Fitness Image"
              width={490}
              height={570}
              className="rounded-full shadow-lg"
            />
          </div>

          <div className="relative z-20 text-center font-deutschlander text-[#f3f3f3] flex flex-col items-center p-8 max-w-5xl w-full mx-auto">
            <h2 className="text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px]">
              Nuestros planes lo incluyen todo
            </h2>
            <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] mt-6">
              Todos nuestros planes incluyen beneficios adaptados a ti. ¡Empieza
              hoy a cuidarte con nosotros!
            </p>
            <div className="grid grid-cols-1 justify-items-start md:grid-cols-2 gap-8 mt-8">
              {includesPlanes.map((plan, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    width={50}
                    height={50}
                    className="w-12 h-12"
                  />
                  <p className="ml-4 text-[24px] xl:text-[30px] tracking-wider leading-[25px]">
                    {plan.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slider de Clases */}
      <ClassSlider />

      {/* Acompanamiento */}
      <div className="relative w-full min-h-[30rem] flex items-center justify-center overflow-hidden p-4 md:p-8">
        <Image
          src="/assets/home/bg-transformacion.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />

        <div className="max-w-6xl mx-auto w-full relative z-20">
          <div className="p-6 text-white flex flex-col lg:flex-row lg:items-stretch lg:gap-8 lg:min-h-[600px]">
            <div className="lg:w-1/2 space-y-4 mb-6 lg:mb-0 flex flex-col justify-between">
              <h1 className="text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] font-deutschlander">
                ¡Te acompañamos en cada paso de tu transformación!
              </h1>
              <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] mt-6 font-deutschlander">
                Somos un gimnasio que combina lo último en tecnología fitness
                con entrenadores altamente capacitados para crear una
                experiencia de entrenamiento única y adaptada a ti.
              </p>
              <div className="mt-4 lg:mt-8 flex-grow">
                <Image
                  src="/assets/home/transformacion-1.png"
                  alt="Gym equipment"
                  width={500}
                  height={400}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-4 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Image
                  src="/assets/home/transformacion-2.png"
                  alt="Trainer 1"
                  width={250}
                  height={300}
                  className="rounded-lg w-full h-[300px] object-cover object-right"
                />
                <Image
                  src="/assets/home/transformacion-3.png"
                  alt="Trainer 2"
                  width={250}
                  height={300}
                  className="rounded-lg w-full h-[300px] object-cover"
                />
              </div>
              <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] mt-6 font-deutschlander">
                Aquí, no solo es cuestión de entrenar: es cuestión de sentirte
                bien, verte mejor y alcanzar tu máximo potencial. Únete a
                nuestra comunidad y comienza tu viaje hacia una vida más
                saludable.
              </p>
              <div className="flex justify-start mt-auto">
                <button
                  type="button"
                  className="py-3 px-6 text-[24px] font-normal font-deutschlander text-[#f3f3f3] bg-black-principal rounded-full border border-[#f3f3f3] focus:ring-4 focus:ring-[#F3F3F3] w-full md:w-[250px] lg:w-[300px]"
                >
                  Todas nuestras clases
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
