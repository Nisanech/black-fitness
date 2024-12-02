import Image from "next/image";
import MultiInstructorCarousel from "@/presentation/components/Instructorswiper";

interface ImageData {
  image: string;
  name: string;
  position: string;
  id: number;
}

export default function AboutUsPage() {
  const teamMember: ImageData[] = [
    {
      image: "/assets/Nosotros/persona 1.png",
      name: "Paola Martínez",
      position: "Instructora de yoga y pilates",
      id: 1,
    },
    {
      image: "/assets/Nosotros/persona 2.png",
      name: "Mariel Paredes",
      position: "Esteticista y cosmetólga",
      id: 2,
    },
    {
      image: "/assets/Nosotros/persona 3.png",
      name: "Julián ramirez",
      position: "Entrenador",
      id: 3,
    },
    {
      image: "/assets/Nosotros/persona 4.png",
      name: "Jefferson Chávez",
      position: "Entrenador",
      id: 4,
    },
    {
      image: "/assets/Nosotros/persona 5.png",
      name: "David Méndez",
      position: "Entrenador",
      id: 5,
    },
    {
      image: "/assets/Nosotros/persona 6.png",
      name: "Alfredo Reyes",
      position: "Entrenador Sábados",
      id: 6,
    },
    {
      image: "/assets/Nosotros/persona 7.png",
      name: "María Ramírez",
      position: "Entrenadora",
      id: 7,
    },
    {
      image: "/assets/Nosotros/persona 9.png",
      name: "José Martinez",
      position: "Entrenador",
      id: 8,
    },
    {
      image: "/assets/Nosotros/persona 14.png",
      name: "David Obando",
      position: "Entrenador",
      id: 9,
    },
    {
      image: "/assets/Nosotros/persona 8.png",
      name: "Andrea Romero",
      position: "",
      id: 10,
    },
    {
      image: "/assets/Nosotros/persona 10.png",
      name: "Diego Herrera",
      position: "Rumba",
      id: 11,
    },
    {
      image: "/assets/Nosotros/persona 11.png",
      name: "Luz Mendoza",
      position: "Servicios generales",
      id: 12,
    },
    {
      image: "/assets/Nosotros/persona 12.png",
      name: "Mónica Vela",
      position: "Recepción",
      id: 13,
    },
    {
      image: "/assets/Nosotros/persona 13.png",
      name: "Michelle Castellanos",
      position: "Recepción",
      id: 14,
    },
  ];

  return (
    <>
      <div className="relative w-full min-h-[30rem] flex items-center justify-center overflow-hidden p-4 md:p-8">
        <Image
          src="/assets/Nosotros/background-main.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 grayscale"
        />

        <div className="mx-auto w-full relative z-20 max-w-screen-2xl">
          <div className="p-6 text-white flex flex-col lg:flex-row lg:items-stretch lg:gap-8 lg:min-h-[600px]">
            <div className="lg:w-1/2 space-y-4 mb-6 lg:mb-0 flex flex-col justify-between">
              <h1 className="text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[45px] font-deutschlander">
                ¡Te acompañamos en cada paso de tu transformación!
              </h1>
              <p className="text-[24px] xl:text-[30px] tracking-wider leading-[35px] mt-6 font-deutschlander">
                Somos un gimnasio que combina lo último en tecnología fitness
                con entrenadores altamente capacitados para crear una
                experiencia de entrenamiento única y adaptada a ti.
              </p>
              <div className="mt-4 lg:mt-8 flex-grow">
                <Image
                  src="/assets/home/transformacion-1.png"
                  alt="Gym equipment"
                  width={400}
                  height={100}
                  className="rounded-lg w-full lg:w-[70%] object-cover"
                />

                <p className="text-[20px] tracking-wider leading-[35px] font-deutschlander">
                  Lorena Betancur / Co-Founder / @lorenabetancurm
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-4 flex flex-col justify-between">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <Image
                    src="/assets/home/transformacion-2.png"
                    alt="Trainer 1"
                    width={250}
                    height={300}
                    className="rounded-lg w-full h-[300px] object-cover object-right"
                  />

                  <p className="text-[20px] tracking-wider leading-[35px] font-deutschlander">
                    Juan Betancur Co-Founder
                  </p>
                </div>

                <div className="flex flex-col">
                  <Image
                    src="/assets/home/transformacion-3.png"
                    alt="Trainer 2"
                    width={250}
                    height={300}
                    className="rounded-lg w-full h-[300px] xl:h-[500px] object-cover"
                  />

                  <p className="text-[20px] tracking-wider leading-[35px] font-deutschlander">
                    Juan Román Oficial Pet @juanromanelbulldog
                  </p>
                </div>
              </div>
              <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] mt-6 font-deutschlander">
                Aquí, no solo es cuestión de entrenar: es cuestión de sentirte
                bien, verte mejor y alcanzar tu máximo potencial. Únete a
                nuestra comunidad y comienza tu viaje hacia una vida más
                saludable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 bg-black-principal">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
          <div className="w-full md:w-1/2 max-w-md">
            <Image
              src="/assets/Nosotros/nosotros_describe.jpg"
              alt="Plan 1"
              width={400}
              height={300}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <Image
              src="/assets/Nosotros/nosotros_describe_2.jpg"
              alt="Plan 2"
              width={400}
              height={300}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-[url('/assets/Nosotros/fondo-2.png')] flex flex-col items-center justify-center">
        <h2 className="text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] text-[#f3f3f3] font-deutschlander text-center my-8">
          Nuestro equipo operativo
        </h2>
        <MultiInstructorCarousel teamMembers={teamMember} />
      </div>
    </>
  );
}
