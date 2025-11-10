import Image from "next/image";
import Car from "../../assets/car.png";
import {CtaButton} from "@/components/cta-button";

export const Header = () => {
    return (
        <header className="flex flex-col md:flex-row mx-auto items-center justify-center w-full mt-20">
            <div className="text-center md:text-left md:w-1/2">
                <h1 className="font-bold text-3xl mb-4 2xl:text-5xl">Przywracamy blask Twojemu samochodowi w
                    Gliwicach</h1>
                <p className="text-gray-600 mb-6 2xl:text-lg 2xl:mt-8 2xl:mb-8">
                    Profesjonalny autodetailing w Gliwicach — mycie i polerowanie lakieru, czyszczenie wnętrza,
                    impregnacja tapicerki oraz powłoka ceramiczna. Specjalizujemy się w autach osobowych i sportowych,
                    przywracając połysk i głębię koloru, zabezpieczając felgi, plastiki i elementy chromowane.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <CtaButton type={"contact"} color={"whiteBg"}/>
                    <CtaButton type={"gallery"} color={"black"}/>
                </div>
            </div>

            <div className="flex justify-center md:w-1/2">
                <Image src={Car} alt="Auto" width={400} height={300} className="mx-auto"/>
            </div>
        </header>
    )
}