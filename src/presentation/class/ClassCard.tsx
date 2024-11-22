import ClassTitle from "./ClassTitle";
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

interface CardProps {
  data: ClassInfo[];
}

interface ClassCardProps {
  data: Class[];
}

function Card({ data }: CardProps) {
  return (
    <>
      {data.map((item, index) => (
        <div
          className="w-full max-w-sm overflow-hidden text-white rounded-[30px] bg-black-principal border-2 border-white"
          key={index}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover"
              fill
            />
          </div>

          {/* Yellow banner with icon and title */}
          <div
            className={`flex items-center justify-center gap-2 ${item.background} py-2 text-white flex-1`}
          >
            <Image src={item.icono} alt={item.name} width={30} height={24} />
            <span className={`text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander ${item.color}`}>{item.name}</span>
          </div>

          {/* Add white border to the sides and bottom */}
          {item.type === "bfx" && (
            <>
              <div className="p-4">
                <div className="rounded border border-white p-3">
                  <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">
                    Cada hora en punto
                  </p>
                  <div className="flex justify-between mt-5">
                    <div>
                      <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">Primera clase</p>
                      <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">{item.time}</p>
                    </div>
                    <div className="">
                      <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">Última clase</p>
                      <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">{item.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {item.type === "general" && (
            <div className="p-4">
            {/* Time and duration section */}
            <div className="flex items-center justify-center gap-4">
              <div className="rounded bg-white px-3 py-1 text-sm text-black">
                {item.time}
              </div>
              <div className="h-6 w-px bg-gray-600"></div>
              <div className="flex flex-col items-center gap-1 text-sm">
                <span className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">Duración</span>
                <div className="flex items-center gap-1">
                  <Image
                    src="/assets/clases/clases-detalle/iconos/reloj.svg"
                    alt="Clock icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">{item.duration}</span>
                </div>
              </div>
            </div>

            <div className="my-4 h-px bg-gray-600"></div>

            {/* Description */}
            <p className="text-[24px] xl:text-[30px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">
              {item.description}
            </p>
          </div>
          )}
          
        </div>
      ))}
    </>
  );
}

export default function ClassCard({ data }: ClassCardProps) {
  return (
    <>
      <div className="text-center">
        <h1 className="m-0 text-[30px] md:text-[40px] xl:text-[45px] tracking-wider leading-[25px] font-deutschlander text-[#f3f3f3]">
          Nuestros horarios de clase
        </h1>

        {data.map((item, index) => (
          <div key={index}>
            <ClassTitle
              background={item.background}
              colorText={item.color}
              title={item.day}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-0 p-4 justify-items-center">
              <Card data={item.classes} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
