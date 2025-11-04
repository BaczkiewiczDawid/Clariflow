import Car from "../../assets/car.png";
import Image from "next/image";
import {CheckCircle, Star} from "lucide-react";
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

    const reviews = [
        {
            rating: 5,
            text: 'Profesjonalna obsługa i niesamowite efekty! Mój samochód wygląda jak nowy.'
        },
        {
            rating: 5,
            text: 'Profesjonalna obsługa i niesamowite efekty! Mój samochód wygląda jak nowy.'
        },
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
            <div>
                <h4 className={"font-bold text-2xl"}>Opinie klientów</h4>
                <div className={"mt-8 flex flex-col gap-y-4"}>
                    {reviews.map((review, index) => (
                        <div key={index}>
                            <div className={"flex gap-x1"}>
                                {Array.from({length: review.rating}).map((_, i) => (
                                    <Star key={i} fill={"#155dfc"} strokeWidth={0}/>
                                ))}
                            </div>
                            <p className="text-gray-600 mt-1">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-8">
                <div
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-[1100px] mx-auto">
                    {/* Tekst */}
                    <div className="md:w-2/3 text-center md:text-left">
                        <h5 className="font-bold text-3xl text-white leading-snug">
                            Zadbaj o swój samochód już dziś — umów termin w Clariflow
                        </h5>
                        <p className="text-blue-100 mt-3 text-base">
                            Skontaktuj się z nami i przywróć swojemu autu salonowy blask.
                        </p>
                    </div>

                    {/* Przyciski */}
                    <div className="flex flex-col sm:flex-row md:flex-col items-center gap-4 mt-8 md:mt-0">
                        <button
                            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl cursor-pointer">
                            Skontaktuj się z nami
                        </button>
                        <div className="flex items-center gap-6">
                            <button
                                className="text-white font-medium  transition cursor-pointer">Zadzwoń
                            </button>
                            <span className="text-white/40">|</span>
                            <button
                                className="text-white font-medium  transition cursor-pointer">Napisz
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
