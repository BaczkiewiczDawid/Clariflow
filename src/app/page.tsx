import Car from "../../assets/car.png";
import Image from "next/image";
import {CheckCircle} from "lucide-react";
import Golf7 from "../../assets/golf7.jpg";

export default function Home() {
    const features = [
        "Indywidualne podejście do klienta",
        "Praca tylko na markowych produktach",
        "Pasja, doświadczenie i precyzja",
        "Dbałość o każdy detal",
        "Terminowość i rzetelność",
        "Bezpieczna pielęgnacja lakieru",
        "Komfortowa lokalizacja - Gliwice",
    ];

    const galleryItems = [
        {
            src: Golf7,
            desc: "Golf VII GTI - Korekta lakieru, powłoka ceramiczna, kompleksowe czyszczenie wnętrza"
        },
        {src: Golf7, desc: "BMW Seria 3 - Odświeżenie lakieru i detailing wnętrza"},
        {src: Golf7, desc: "Audi A4 - Pełna korekta i aplikacja powłoki ceramicznej"},
    ]

    return (
        <div className="flex flex-col mx-auto justify-center gap-12 max-w-[70%]">
            <div className="flex flex-col md:flex-row mx-auto items-center justify-center gap-12 mt-20">
                <div className="text-center md:text-left md:w-1/2">
                    <h1 className="font-bold text-3xl mb-4">Przywracamy blask Twojemu samochodowi</h1>
                    <p className="text-gray-600 mb-6">
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
            </div>
            <div>
                <h2 className={"font-bold text-2xl"}>Dlaczego Clariflow?</h2>
                <div className={"mt-8"}>
                    <ul className="space-y-3 grid grid-cols-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3 text-gray-600">
                                <CheckCircle className="text-blue-600 w-5 h-5 flex-shrink-0"/>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <h3 className={"font-bold text-2xl"}>Galeria efektów</h3>
                <div className="mt-10 flex flex-wrap justify-center gap-8">
                    {galleryItems.map((item, i) => (
                        <div key={i} className="flex flex-col items-center max-w-[30%] min-w-[250px]">
                            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                                <Image
                                    src={item.src}
                                    alt="Auto"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <p className="mt-3 text-center text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
