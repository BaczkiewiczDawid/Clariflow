import { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Kontakt | Clariflow Detailing Gliwice",
    description:
        "Skontaktuj się z Clariflow – profesjonalny autodetailing w Gliwicach. Umów termin detailingu, korekty lakieru, powłoki ceramicznej lub czyszczenia wnętrza.",
};

export default function KontaktPage() {
    return (
        <main className="min-h-screen bg-neutral-50">
            <section className="relative py-16 px-6 lg:px-20">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Skontaktuj się z nami
                    </h1>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl">
                        Masz pytania dotyczące detailingu, chcesz umówić termin lub wycenić
                        usługę? Wypełnij formularz lub skontaktuj się z nami bezpośrednio.
                    </p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <form className="bg-white shadow-md rounded-2xl p-8 space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Imię i nazwisko
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Adres e-mail
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Wiadomość
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-lg py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition cursor-pointer"
                            >
                                Wyślij wiadomość
                            </button>
                        </form>

                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Dane kontaktowe</h2>
                                <ul className="space-y-4 text-gray-700">
                                    <li className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-blue-600" />
                                        <span>+48 669 994 490</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                        <span>kontakt@clariflow.pl</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-blue-600" />
                                        <span>Gliwice, ul. Brzozowa 67</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Godziny otwarcia</h2>
                                <ul className="text-gray-700 space-y-1">
                                    <li>Poniedziałek – Piątek: 9:00 – 21:00</li>
                                    <li>Sobota: 9:00 – 21:00</li>
                                    <li>Niedziela: 9:00 – 21:00</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Lokalizacja</h2>
                                <div className="rounded-2xl overflow-hidden shadow-md h-64">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.837191379452!2d18.698651376622027!3d50.299757471557404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47113134b49b2dbd%3A0x5bb9d50b6d598b8!2sBrzozowa%2067%2C%2044-100%20Gliwice!5e0!3m2!1spl!2spl!4v1731422700000!5m2!1spl!2spl"
                                        width="100%"
                                        height="100%"
                                        loading="lazy"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-600 text-white py-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Umów termin detailingu już dziś!
                </h2>
                <p className="text-lg mb-6">
                    Skontaktuj się z nami telefonicznie lub przez formularz — odpowiemy w
                    ciągu 24 godzin.
                </p>
                <a
                    href="tel:+48500123456"
                    className="inline-block bg-white text-blue-700 font-semibold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition"
                >
                    Zadzwoń teraz
                </a>
            </section>
        </main>
    );
}
