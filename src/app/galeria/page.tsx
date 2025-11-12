"use client";

import {useEffect, useState} from "react";
import Image, {StaticImageData} from "next/image";
import {mainGalleryList} from "@/data/mainGalleryList";

type GalleryItem = {
    name: string;
    description: string;
    services: string[];
    images: (string | StaticImageData)[];
};

export default function GalleryPage() {
    const [selectedCar, setSelectedCar] = useState<GalleryItem | null>(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [imageLoading, setImageLoading] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (selectedCar) {
            selectedCar.images.forEach((src) => {
                const imgSrc = typeof src === "string" ? src : src.src;
                if (!loadedImages.has(imgSrc)) {
                    const img = new window.Image();
                    img.src = imgSrc;
                    img.onload = () => {
                        setLoadedImages((prev) => new Set(prev).add(imgSrc));
                    };
                }
            });
        }
    }, [selectedCar]);

    useEffect(() => {
        if (selectedCar) {
            const current = selectedCar.images[currentImage];
            const currentSrc = typeof current === "string" ? current : current.src;

            if (!loadedImages.has(currentSrc)) {
                setImageLoading(true);
                const img = new window.Image();
                img.src = currentSrc;
                img.onload = () => {
                    setImageLoading(false);
                    setLoadedImages((prev) => new Set(prev).add(currentSrc));
                };
            } else {
                setImageLoading(false);
            }
        }
    }, [currentImage, selectedCar, loadedImages]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!selectedCar) return;
            if (e.key === "Escape") {
                setSelectedCar(null);
            } else if (e.key === "ArrowLeft") {
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

    useEffect(() => {
        if (selectedCar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedCar]);


    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl font-semibold mb-10 text-center">
                    Galeria Realizacji
                </h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mainGalleryList.map((car, i) => (
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
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
                        onClick={() => setSelectedCar(null)}
                    >
                        <div
                            className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full my-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-700 hover:text-black z-50 bg-white/90 hover:bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg text-xl md:text-2xl"
                                onClick={() => setSelectedCar(null)}
                            >
                                ✕
                            </button>

                            <div
                                className="grid md:grid-cols-2 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
                                <div
                                    className="relative bg-black flex flex-col items-center justify-center overflow-hidden min-h-[50vh] md:min-h-0">
                                    {imageLoading && (
                                        <div
                                            className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                                            <div
                                                className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    <Image
                                        src={selectedCar.images[currentImage]}
                                        alt={selectedCar.name}
                                        width={800}
                                        height={600}
                                        className={`object-cover w-full h-full max-h-[50vh] md:max-h-[80vh] transition-opacity duration-300 ${
                                            imageLoading ? 'opacity-0' : 'opacity-100'
                                        }`}
                                        priority
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