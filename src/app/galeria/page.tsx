"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import Audi1 from "../../../assets/gallery/audi-rs-etron-1.jpg"
import Audi2 from "../../../assets/gallery/audi-rs-etron-2.jpg"
import Audi3 from "../../../assets/gallery/audi-rs-etron-3.png"
import Audi4 from "../../../assets/gallery/audi-rs-etron-4.jpg"
import HyundaiBayon1 from "../../../assets/gallery/hyundai-bayon-1.jpg"
import HyundaiBayon2 from "../../../assets/gallery/hyundai-bayon-2.jpg"
import HyundaiBayon3 from "../../../assets/gallery/hyundai-bayon-3.jpg"
import Golf7Gti1 from "../../../assets/gallery/golf-7-gti-1.jpg"
import Golf7Gti2 from "../../../assets/gallery/golf-7-gti-2.jpg"
import Golf7Gti3 from "../../../assets/gallery/golf-7-gti-3.jpg"
import OpelInsignia1 from "../../../assets/gallery/opel-insignia-1.jpg"
import OpelInsignia2 from "../../../assets/gallery/opel-insignia-2.jpg"
import OpelInsignia3 from "../../../assets/gallery/opel-insignia-3.jpg"
import OpelInsignia4 from "../../../assets/gallery/opel-insignia-4.jpg"
import VwTouareg1 from "../../../assets/gallery/vw-touareg-1.jpg"
import VwTouareg2 from "../../../assets/gallery/vw-touareg-2.jpg"
import VwTouareg3 from "../../../assets/gallery/vw-touareg-3.jpg"

const cars = [
    {
        name: "Audi RS E-Tron GT",
        description: "Pełny detailing wnętrza i nadwozia w elektrycznym superaucie Audi RS E-Tron GT. Auto przeszło kompleksowe czyszczenie i odświeżenie każdego detalu – od dokładnego mycia nadwozia z deironizacją i dekontaminacją, po renowację wnętrza z pielęgnacją tapicerki skórzanej. Celem realizacji było przywrócenie fabrycznego blasku i ochrona powierzchni przed codziennymi zabrudzeniami.",
        services: [
            "Detailing wnętrza",
            "Mycie detailingowe",
            "Deironizacja lakieru",
            "Czyszczenie skór",
        ],
        images: [
            Audi1, Audi3, Audi2, Audi4
        ],
    },
    {
        name: "Hyundai Bayon",
        description:
            "Kompleksowy detailing Hyundaia Bayon obejmujący pełne czyszczenie wnętrza i nadwozia. Auto przeszło dokładne mycie detailingowe z deironizacją lakieru oraz pranie tapicerki i pielęgnację wnętrza. Efekt – świeżość, głębia koloru i perfekcyjna czystość w każdym zakamarku",
        services: [
            "Detailing wnętrza",
            "Mycie detailingowe",
            "Deironizacja lakieru",
            "Pranie tapicerki",
        ],
        images: [HyundaiBayon3, HyundaiBayon2, HyundaiBayon1],
    },
    {
        name: "Golf 7 GTI",
        description:
            "Golf 7 GTI przeszedł kompleksowy detailing wnętrza i nadwozia. Lakier został dokładnie oczyszczony i poddany pełnej korekcie, a wnętrze starannie wyczyszczono i zabezpieczono tapicerkę skórzaną. Dodatkowo zadbano o impregnację plastików, co zapewnia świeży wygląd i ochronę detali. Efekt – perfekcyjna czystość, głębia koloru i eleganckie wykończenie każdego elementu auta.",
        services: [
            "Detailing wnętrza",
            "Mycie detailingowe",
            "Pełna korekta lakieru",
            "Czyszczenie oraz zabezpieczenie tapicerki skórzanej",
            "Impregnacja plastików wewnętrznych",
        ],
        images: [Golf7Gti1, Golf7Gti2, Golf7Gti3],
    },
    {
        name: "Opel Insignia",
        description:
            "Opel Insignia przeszedł kompleksowy detailing wnętrza i nadwozia. Auto zostało dokładnie umyte, wnętrze starannie oczyszczone, a tapicerka skórzana wyczyszczona i zabezpieczona. Dodatkowo przeprowadzono mycie silnika i pielęgnację detali, co zapewnia świeży wygląd, głębię koloru i perfekcyjną czystość w każdym zakamarku.",
        services: [
            "Detailing wnętrza",
            "Mycie detailingowe",
            "Mycie silnika",
            "Czyszczenie oraz zabezpieczenie tapicerki skórzanej",
        ],
        images: [OpelInsignia1, OpelInsignia4, OpelInsignia2, OpelInsignia3],
    },
    {
        name: "Volkswagen Touareg",
        description:
            "Opel Insignia przeszedł kompleksowy detailing wnętrza i nadwozia. Auto zostało dokładnie umyte, wnętrze starannie oczyszczone, a tapicerka skórzana wyczyszczona i zabezpieczona. Dodatkowo przeprowadzono mycie silnika i pielęgnację detali, co zapewnia świeży wygląd, głębię koloru i perfekcyjną czystość w każdym zakamarku.",
        services: [
            "Detailing wnętrza",
            "Mycie silnika",
        ],
        images: [VwTouareg3, VwTouareg2, VwTouareg1],
    },
];

export default function GalleryPage() {
    const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!selectedCar) return;
            if (e.key === "ArrowLeft") {
                setCurrentImage((prev) =>
                    prev === 0 ? selectedCar.images.length - 1 : prev - 1
                );
            } else if (e.key === "ArrowRight") {
                setCurrentImage((prev) =>
                    prev === selectedCar.images.length - 1 ? 0 : prev + 1
                );
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedCar]);


    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl font-semibold mb-10 text-center">
                    Galeria Realizacji
                </h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car, i) => (
                        <div
                            key={i}
                            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
                            onClick={() => {
                                setSelectedCar(car);
                                setCurrentImage(0);
                            }}
                        >
                            <Image
                                src={car.images[0]}
                                alt={car.name}
                                width={600}
                                height={400}
                                className="object-cover w-full h-64 group-hover:scale-105 transition-transform"
                            />
                            <div
                                className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h3 className="text-white font-medium text-lg">{car.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedCar && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-4 relative overflow-hidden">
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-black z-50 cursor-pointer"
                                onClick={() => setSelectedCar(null)}
                            >
                                ✕
                            </button>

                            <div className="grid md:grid-cols-2">
                                <div
                                    className="relative bg-black flex flex-col items-center justify-center overflow-hidden">
                                    <Image
                                        src={selectedCar.images[currentImage]}
                                        alt={selectedCar.name}
                                        width={800}
                                        height={600}
                                        className="object-cover max-h-[80vh] rounded-lg transition-all duration-300"
                                    />

                                    <button
                                        onClick={() =>
                                            setCurrentImage((prev) =>
                                                prev === 0
                                                    ? selectedCar.images.length - 1
                                                    : prev - 1
                                            )
                                        }
                                        className="absolute left-0 top-0 h-full w-1/4 flex items-center justify-start bg-gradient-to-r from-black/40 hover:from-black/50 to-transparent transition duration-300 cursor-pointer"
                                    >
                    <span className="text-white text-3xl font-light pl-4 select-none">
                      ‹
                    </span>
                                    </button>

                                    <button
                                        onClick={() =>
                                            setCurrentImage((prev) =>
                                                prev === selectedCar.images.length - 1
                                                    ? 0
                                                    : prev + 1
                                            )
                                        }
                                        className="absolute right-0 top-0 h-full w-1/4 flex items-center justify-end bg-gradient-to-l from-black/40 hover:from-black/50 to-transparent transition duration-300 cursor-pointer"
                                    >
                    <span className="text-white text-3xl font-light pr-4 select-none">
                      ›
                    </span>
                                    </button>

                                    <div className="absolute bottom-4 flex justify-center gap-2">
                                        {selectedCar.images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImage(idx)}
                                                className={`w-3 h-3 rounded-full transition cursor-pointer ${
                                                    idx === currentImage
                                                        ? "bg-white"
                                                        : "bg-gray-400/60 hover:bg-gray-300"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col justify-start">
                                    <h2 className="text-2xl font-semibold mb-3">
                                        {selectedCar.name}
                                    </h2>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {selectedCar.description}
                                    </p>
                                    <h3 className="text-lg font-medium mb-2">Zakres usług:</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                                        {selectedCar.services.map((service, idx) => (
                                            <li key={idx}>{service}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
