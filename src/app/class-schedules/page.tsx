import ClassCard from "@/presentation/class/ClassCard";
import Image from "next/image";

interface Class {
  day: string;
  background: string;
  color: string;
  classes: ClassInfo[];
}

interface ClassInfo {
  image: string;
  icono: string;
  name: string;
  time: string;
  duration: string;
  description: string;
  background: string;
  type: "general" | "bfx";
  color: string;
}

const classesData: Class[] = [
  {
    day: "Lunes",
    background: "bg-[#FEF101]",
    color: "text-[#FEF101]",
    classes: [
      {
        image: "/assets/clases/clases-detalle/yoga.png",
        icono: "/assets/clases/clases-detalle/iconos/yoga.svg",
        name: "Yoga",
        time: "08:00 a.m",
        duration: "60 min",
        description:
          "Fortalece cuerpo y mente con posturas y respiración consciente",
        background: "bg-[#FEF101]",
        type: "general",
        color: "text-black-principal",
      },
      {
        image: "/assets/clases/clases-detalle/pilates.png",
        icono: "/assets/clases/clases-detalle/iconos/pilates.svg",
        name: "Pilates",
        time: "05:00 p.m",
        duration: "60 min",
        description:
          "Mejora flexibilidad y tonificación mediante ejercicios controlados",
        background: "bg-[#FEF101]",
        type: "general",
        color: "text-black-principal",
      },
      {
        image: "/assets/clases/clases-detalle/rumba.png",
        icono: "/assets/clases/clases-detalle/iconos/rumba.svg",
        name: "Rumba",
        time: "06:30 p.m",
        duration: "90 min",
        description:
          "Baila al ritmo de música latina para quemar calorías y divertirte",
        background: "bg-[#AC208E]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/bfx-pierna.png",
        icono: "/assets/clases/clases-detalle/iconos/bfx.svg",
        name: "Clase de Pierna",
        time: "05:00 a.m",
        duration: "08:00 p.m",
        description: "",
        background: "bg-[#FFFFFF]",
        type: "bfx",
        color: "text-black-principal",
      },
    ],
  },
  {
    day: "Martes",
    background: "bg-[#AC208E]",
    color: "text-[#AC208E]",
    classes: [
      {
        image: "/assets/clases/clases-detalle/rumba.png",
        icono: "/assets/clases/clases-detalle/iconos/rumba.svg",
        name: "Rumba",
        time: "06:00 a.m",
        duration: "90 min",
        description:
          "Baila al ritmo de música latina para quemar calorías y divertirte",
        background: "bg-[#AC208E]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/yoga.png",
        icono: "/assets/clases/clases-detalle/iconos/yoga.svg",
        name: "Yoga",
        time: "05:00 p.m",
        duration: "60 min",
        description:
          "Fortalece cuerpo y mente con posturas y respiración consciente",
        background: "bg-[#AC208E]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/reggaeton.png",
        icono: "/assets/clases/clases-detalle/iconos/reggaeton.svg",
        name: "Reggaetón",
        time: "06:30 p.m",
        duration: "90 min",
        description: "Quema calorías con ritmos urbanos y movimientos intensos",
        background: "bg-[#AC208E]",
        type: "general",
        color: "text-[#f3f3f3]",
      },

      {
        image: "/assets/clases/clases-detalle/bfx-tren-superior.png",
        icono: "/assets/clases/clases-detalle/iconos/bfx.svg",
        name: "Tren Superior",
        time: "05:00 a.m",
        duration: "08:00 p.m",
        description: "",
        background: "bg-[#FFFFFF]",
        type: "bfx",
        color: "text-black-principal",
      },
    ],
  },
  {
    day: "Miércoles",
    background: "bg-[#05ACEC]",
    color: "text-[#05ACEC]",
    classes: [
      {
        image: "/assets/clases/clases-detalle/pilates.png",
        icono: "/assets/clases/clases-detalle/iconos/pilates.svg",
        name: "Pilates",
        time: "08:00 a.m",
        duration: "60 min",
        description:
          "Mejora flexibilidad y tonificación mediante ejercicios controlados",
        background: "bg-[#05ACEC]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/tiktok.png",
        icono: "/assets/clases/clases-detalle/iconos/tiktok.svg",
        name: "TikTok Trends",
        time: "05:00 p.m",
        duration: "60 min",
        description:
          "Fortalece cuerpo y mente con  posturas y respiración consciente",
        background: "bg-[#05ACEC]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/rumba.png",
        icono: "/assets/clases/clases-detalle/iconos/rumba.svg",
        name: "Rumba",
        time: "06:30 p.m",
        duration: "90 min",
        description:
          "Baila al ritmo de música latina para quemar calorías y divertirte",
        background: "bg-[#05ACEC]",
        type: "general",
        color: "text-[#f3f3f3]",
      },

      {
        image: "/assets/clases/clases-detalle/bfx-cardio.png",
        icono: "/assets/clases/clases-detalle/iconos/bfx.svg",
        name: "Cardio ABS",
        time: "05:00 a.m",
        duration: "08:00 p.m",
        description: "",
        background: "bg-[#FFFFFF]",
        type: "bfx",
        color: "text-black-principal",
      },
    ],
  },
  {
    day: "Jueves",
    background: "bg-[#E15E35]",
    color: "text-[#E15E35]",
    classes: [
      {
        image: "/assets/clases/clases-detalle/rumba.png",
        icono: "/assets/clases/clases-detalle/iconos/rumba.svg",
        name: "Rumba",
        time: "06:00 a.m",
        duration: "90 min",
        description:
          "Baila al ritmo de música latina para quemar calorías y divertirte",
        background: "bg-[#E15E35]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/yogalates.png",
        icono: "/assets/clases/clases-detalle/iconos/yogalates.svg",
        name: "Yogalates",
        time: "08:00 a.m",
        duration: "60 min",
        description:
          "Combina lo mejor del yoga y pilates para fuerza y equilibrio",
        background: "bg-[#E15E35]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/champeta.png",
        icono: "/assets/clases/clases-detalle/iconos/champeta.svg",
        name: "Champeta",
        time: "06:30 p.m",
        duration: "90 min",
        description:
          "Cardio vibrante con movimientos caribeños para quemar calorías",
        background: "bg-[#E15E35]",
        type: "general",
        color: "text-[#f3f3f3]",
      },

      {
        image: "/assets/clases/clases-detalle/bfx-pierna.png",
        icono: "/assets/clases/clases-detalle/iconos/bfx.svg",
        name: "Clase de Pierna",
        time: "05:00 a.m",
        duration: "08:00 p.m",
        description: "",
        background: "bg-[#FFFFFF]",
        type: "bfx",
        color: "text-black-principal",
      },
    ],
  },
  {
    day: "Viernes",
    background: "bg-[#EA028B]",
    color: "text-[#EA028B]",
    classes: [
      {
        image: "/assets/clases/clases-detalle/rumba.png",
        icono: "/assets/clases/clases-detalle/iconos/rumba.svg",
        name: "Rumba",
        time: "07:00 a.m",
        duration: "60 min",
        description:
          "Baila al ritmo de música latina para quemar calorías y divertirte",
        background: "bg-[#EA028B]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/bfx-tren-superior.png",
        icono: "/assets/clases/clases-detalle/iconos/bfx.svg",
        name: "Tren Superior",
        time: "05:00 a.m",
        duration: "08:00 p.m",
        description: "",
        background: "bg-[#FFFFFF]",
        type: "bfx",
        color: "text-black-principal",
      },
    ],
  },
	{
    day: "Sábado",
    background: "bg-[#8FC647]",
    color: "text-[#8FC647]",
    classes: [
      {
        image: "/assets/clases/clases-detalle/gap.png",
        icono: "/assets/clases/clases-detalle/iconos/gap.svg",
        name: "GAP",
        time: "08:00 a.m",
        duration: "60 min",
        description:
          "Tonificación intensa enfocada en la zona inferior del cuerpo",
        background: "bg-[#8FC647]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
      {
        image: "/assets/clases/clases-detalle/box.png",
        icono: "/assets/clases/clases-detalle/iconos/box.svg",
        name: "Técnica Box",
        time: "09:00 a.m",
        duration: "60 min",
        description:
          "Aprende movimientos de boxeo mientras mejoras tu condición física",
        background: "bg-[#8FC647]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
			{
        image: "/assets/clases/clases-detalle/kick-boxing.png",
        icono: "/assets/clases/clases-detalle/iconos/kick-boxing.svg",
        name: "Kick Boxing",
        time: "10:00 a.m",
        duration: "60 min",
        description:
          "Combina golpes y patadas en un entrenamiento explosivo y dinámico",
        background: "bg-[#8FC647]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
    ],
  },
	{
    day: "Domingo",
    background: "bg-[#E91F25]",
    color: "text-[#E91F25]",
    classes: [
      {
        image: "/assets/clases/clases-detalle/body.png",
        icono: "/assets/clases/clases-detalle/iconos/body.svg",
        name: "Full Body",
        time: "10:00 a.m",
        duration: "60 min",
        description:
          "Entrenamiento total que trabaja todos los grupos musculares",
        background: "bg-[#E91F25]",
        type: "general",
        color: "text-[#f3f3f3]",
      },
    ],
  },
];

export default function ClassSchedulesPage() {
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
                    src="/assets/clases/banner-clase.png"
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
                    Nuestras Clases
                  </h2>

                  <p className="text-[#F3F3F3] font-deutschlander text-[20px] my-8 max-w-xl tracking-wider md:text-[24px] xl:text-[30px]">
                    Ofrecemos una amplia gama de clases diseñadas para todos los
                    niveles, creadas pensando en tu bienestar, entretenimiento y
                    en ayudarte a lograr resultados efectivos.
                  </p>

                  <div className="border w-[90%] h-2 rounded-full bg-[#585858] border-transparent"></div>
                </div>

                {/* Desktop: Image on right */}
                <div className="hidden lg:block w-full max-w-xl aspect-square relative">
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src="/assets/clases/banner-clase.png"
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

      {/* Clases */}
      <ClassCard data={classesData} />
    </>
  );
}
