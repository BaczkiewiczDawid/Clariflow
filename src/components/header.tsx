import Image from "next/image";
import Car from "../../assets/car.png";

export const Header = () => {
    return (
        <header className="flex flex-col md:flex-row mx-auto items-center justify-center w-full mt-20">
            <div className="text-center md:text-left md:w-1/2">
                <h1 className="font-bold text-3xl mb-4 2xl:text-5xl">Przywracamy blask Twojemu samochodowi</h1>
                <p className="text-gray-600 mb-6 2xl:text-lg 2xl:mt-8 2xl:mb-8">
                    Profesjonalny autodetailing w Gliwicach — polerowanie lakieru, czyszczenie wnętrza, impregnacja
                    tapicerki i ochrona ceramiczna.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition cursor-pointer">
                        Umów wizytę
                    </button>
                    <button
                        className="text-gray-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">
                        Zobacz efekty
                    </button>
                </div>
            </div>

            <div className="flex justify-center md:w-1/2">
                <Image src={Car} alt="Auto" width={400} height={300} className="mx-auto"/>
            </div>
        </header>
    )
}