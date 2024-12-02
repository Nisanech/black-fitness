import Image from "next/image"
import MultiInstructorCarousel from "@/presentation/components/Instructorswiper"

export default function AboutUsPage() {


    const images = [
        { src: "/assets/Nosotros/persona 1.png", name: "Paola Martínez", carge: "Instructora de yoga y pilates" },
        { src: "/assets/Nosotros/persona 2.png", name: "Mariel Paredes", carge: "Esteticista y cosmetólga" },
        { src: "/assets/Nosotros/persona 3.png", name: "Julián ramirez", carge: "Entrenador" },
        { src: "/assets/Nosotros/persona 4.png", name: "Jefferson Chávez", carge: "Entrenador" },
        { src: "/assets/Nosotros/persona 5.png", name: "David Méndez", carge: "Entrenador" },
        { src: "/assets/Nosotros/persona 6.png", name: "Alfredo Reyes", carge: "Entrenador Sábados" },
        { src: "/assets/Nosotros/persona 7.png", name: "María Ramírez", carge: "Entrenadora" },
        { src: "/assets/Nosotros/persona 9.png", name: "José Martinez", carge: "Entrenador" },
        { src: "/assets/Nosotros/persona 14.png", name: "David Obando", carge: "Entrenador" },
        { src: "/assets/Nosotros/persona 8.png", name: "Andrea Romero"},
        { src: "/assets/Nosotros/persona 10.png", name: "Diego Herrera", carge: "Rumba" },
        { src: "/assets/Nosotros/persona 11.png", name: "Luz Mendoza", carge: "Servicios generales" },
        { src: "/assets/Nosotros/persona 12.png", name: "Mónica Vela", carge: "Recepción" },
        { src: "/assets/Nosotros/persona 13.png", name: "Michelle Castellanos", carge: "Recepción" },

      ];

    return (

        <>
        <div className="flex  justify-center gap-8 w-full font-deutschlander text-white mt-8">

            <div className="flex flex-col gap-4 ">
                <div>
                    <h1>¡Te acompañamos en cada paso de tu transformación!</h1>
                    <p>Somos un gimnasio que combina lo último en tecnología fitness con entrenadores <br></br> altamente capacitados para crear una experiencia de entrenamiento única y adaptada a ti</p>
                </div>

                <div>

                <Image
                    src="/assets/Nosotros/nosotros_1.jpg"
                    alt="Plan 2"
                    width={400}
                    height={100}
                    className="rounded-xl shadow-md"
                    />

                </div>
            </div>

        <div className="flex">
            
            <div className="flex gap-4">
                <div>

                <Image
                src="/assets/Nosotros/nosotros_2.jpg"
                alt="Plan 2"
                width={300}
                height={100}
                className="rounded-xl shadow-md"
                />

                <div className="col-start-1 row-start-2">Juan Román Oficial Pet @juanromanelbulldog</div>

                </div>

                

                <div className="row-span-2 col-start-2 row-start-1 w-[200px]">

                <Image
                src="/assets/Nosotros/nosotros_3.jpg"
                alt="Plan 2"
                width={200}
                height={100}
                className="rounded-xl shadow-md"
                />

                </div>
            </div>
    
        </div>

        </div>

        <div className="flex justify-center gap-8 pb-6 mt-12 pt-12 pb-11">
        <Image
                src="/assets/Nosotros/nosotros_describe.jpg"
                alt="Plan 2"
                width={400}
                height={100}
                className="rounded-xl shadow-md"
        />

        <Image
                src="/assets/Nosotros/nosotros_describe_2.jpg"
                alt="Plan 2"
                width={400}
                height={100}
                className="rounded-xl shadow-md"
            />
        </div>

  
        <div className="bg-[url('/assets/Nosotros/fondo-2.png')] flex flex-col items-center justify-center">
            <h3 className="font-deutschlander text-white text-[30px] text-center mt-7">Nuestro equipo operativo</h3>
            <MultiInstructorCarousel images={images} />
        </div>

        </>

    )
}