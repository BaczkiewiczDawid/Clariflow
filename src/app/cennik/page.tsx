import { Sparkles, ShieldCheck, Droplets, SprayCan, Settings } from "lucide-react";
import {CtaButton} from "@/components/cta-button";

export default function PriceList() {
    const sections = [
        {
            title: "Pakiety detailingowe",
            icon: <Sparkles className="w-7 h-7 text-blue-500" />,
            description:
                "Kompleksowa pielęgnacja auta — od podstawowego czyszczenia po pełny detailing i ochronę lakieru.",
            items: [
                { name: "Basic Clean", details: "Mycie karoserii, felg, szyb, odkurzanie wnętrza", price: "od 179 zł" },
                { name: "Premium Detail", details: "Dekontaminacja lakieru, pełne czyszczenie wnętrza, pranie tapicerki", price: "od 399 zł" },
                { name: "Clariflow Signature 💎", details: "Jednoetapowa korekta lakieru, zabezpieczenie woskiem, pełny detailing", price: "od 1200 zł" },
            ],
        },
        {
            title: "Korekta lakieru",
            icon: <SprayCan className="w-7 h-7 text-blue-500" />,
            description:
                "Przywróć głębię koloru i połysk lakieru. Usuwanie zarysowań i mikrorys, polerowanie reflektorów.",
            items: [
                { name: "One Step Correction", details: "Korekta jednoetapowa (60–70% mikrorys), wosk", price: "od 599 zł" },
                { name: "Full Correction", details: "Wieloetapowa korekta, maksymalny połysk, wosk", price: "od 1200 zł" },
                { name: "Pełna korekta + ceramika", details: "Ochrona i połysk po korekcie", price: "od 2000 zł" },
            ],
        },
        {
            title: "Powłoki ceramiczne",
            icon: <ShieldCheck className="w-7 h-7 text-blue-500" />,
            description:
                "Długotrwała ochrona lakieru, odporność na zabrudzenia i promieniowanie UV. Różne warianty trwałości.",
            items: [
                { name: "Ceramic Lite", details: "Trwałość do 12 miesięcy", price: "od 700 zł" },
                { name: "Ceramic Pro", details: "Trwałość 2–3 lata", price: "od 900 zł" },
                { name: "Ceramic Elite", details: "Trwałość do 5 lat", price: "od 1200 zł" },
            ],
        },
        {
            title: "Detailing wnętrza",
            icon: <Droplets className="w-7 h-7 text-blue-500" />,
            description:
                "Detailing wnętrza, czyszczenie tapicerki, impregnacja skór i ozonowanie – komfort i świeżość w środku.",
            items: [
                { name: "Pranie tapicerki materiałowej", details: "Kompleksowe pranie całego wnętrza", price: "od 199 zł" },
                { name: "Czyszczenie i impregnacja skór", details: "Delikatna pielęgnacja z ochroną", price: "od 299 zł" },
                { name: "Detailing wnętrza", details: "Czystość całego wnętrza", price: "od 119 zł" },
            ],
        },
        {
            title: "Zabezbieczenia i dodatki",
            icon: <Settings className="w-7 h-7 text-blue-500" />,
            description:
                "Dodatkowe zabezpieczenia i szczegóły, które robią różnicę w wyglądzie auta.",
            items: [
                { name: "Aplikacja wosku premium", details: "Dodatkowy połysk i ochrona", price: "od 199 zł" },
                { name: "Zabezpieczenie felg", details: "Ochrona przed pyłem i brudem", price: "od 149 zł" },
                { name: "Niewidzialna wycieraczka", details: "Zabezpieczenie szyb", price: "od 99 zł" },
                { name: "Zabezpieczenie plastików", details: "Przywrócenie głębi koloru i ochrona przed blaknięciem", price: "od 159 zł" },
                { name: "Zabezpieczenie pojedyńczego elementu ceramiką", details: "Zabezpieczenie elementu", price: "od 199 zł" },
            ],
        },
    ];

    return (
        <section id="pricing" className="bg-gradient-to-b from-white via-blue-50/30 to-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    Cennik usług Clariflow
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Kompleksowa pielęgnacja samochodów w Gliwicach. Ceny orientacyjne — finalna wycena po konsultacji
                    i ocenie stanu pojazdu.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {sections.map((section) => (
                    <div
                        key={section.title}
                        className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-50 p-3 rounded-xl">
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-blue-600">{section.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-6">{section.description}</p>

                            <ul className="space-y-4 border-t-2 border-gray-200 py-6">
                                {section.items.map((item) => (
                                    <li key={item.name} className="border-b border-gray-100 pb-3">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-gray-800">{item.name}</span>
                                            <span className="font-semibold text-blue-600">{item.price}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl mt-16 p-8 text-center">
                <h4 className="text-2xl font-semibold text-blue-600 mb-3">💬 Uwagi</h4>
                <p className="text-gray-700 mb-3">
                    Ceny mają charakter orientacyjny i mogą różnić się w zależności od stanu oraz wielkości pojazdu.
                </p>
                <p className="text-gray-700 mb-3">
                    Każdy samochód traktujemy indywidualnie — po konsultacji przygotujemy dokładną wycenę i zakres usług.
                </p>
                <p className="text-gray-700">
                    Umów termin i przywróć blask swojemu samochodowi z <strong>Clariflow Gliwice</strong>.
                </p>
            </div>
            <div className="text-center mt-16">
                <a
                    href="/kontakt"
                    className="inline-block bg-blue-600 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-blue-700 transition-transform hover:scale-105"
                >
                    Umów wizytę
                </a>
            </div>
        </section>
    );
}
