import Image from "next/image"

export default function AboutUsPage() {
    return (
        <div className="flex justify-between gap-8 w-full">

            <div className="flex flex-col gap-4 ">
                <div>
                    <h1>¡Te acompañamos en cada paso de tu transformación!</h1>
                    <p>Somos un gimnasio que combina lo último en tecnología fitness con entrenadores altamente capacitados para crear una experiencia de entrenamiento única y adaptada a ti</p>
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
            
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div>

                <Image
                src="/assets/Nosotros/nosotros_2.jpg"
                alt="Plan 2"
                width={600}
                height={100}
                className="rounded-xl shadow-md"
                />

                </div>

                <div className="col-start-1 row-start-2">Juan Román Oficial Pet @juanromanelbulldog</div>

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
    )
}