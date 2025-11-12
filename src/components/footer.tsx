import Image from "next/image";
import Logo from "../../assets/logo-no-text.png";
import {CtaButton} from "@/components/cta-button";

export const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-200 mt-12">
            <div
                className="mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="flex flex-col justify-start">
                    <div className="flex items-center gap-2 mb-4">
                        <Image src={Logo} width={70} alt="Clariflow"/>
                        <span className="text-xl font-semibold text-gray-800">Clariflow</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Clariflow to skoordynowane technicznie centrum detailingu
                        samochodowego, tworzone z pasji i dbałości o każdy detal.
                    </p>
                    <div className="flex gap-3 mt-5">
                        <CtaButton type={"phone"} color={"whiteBg"}/>
                        <CtaButton type={"message"} color={"black"}/>
                    </div>
                </div>
                <div className="flex flex-col justify-start">
                    <div className="h-[70px] flex items-center">
                        <h4 className="text-gray-800 font-semibold text-lg">O nas</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>
                            <a href="/" className="hover:text-blue-600 cursor-pointer">
                                O nas
                            </a>
                        </li>
                        <li>
                            <a href="/kontakt" className="hover:text-blue-600 cursor-pointer">
                                Kontakt
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/search?sca_esv=50541b30f97a7e32&sxsrf=AE3TifOa6v9m4eVofyce9EuQwfz0S_30BQ:1762964820012&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwA3k7ymxmSigVdWbbNpu2OkEAI_wx21Ih04BOQFnk5wWoIKm4gNAEMU7lCqNRWr76C6LHnKITMQRDJ5iZ35YvZERUg4nwQiWAyYNaTqc5fjVi8y0A%3D%3D&q=Clariflow+Autodetailing+Gliwice+Reviews&sa=X&ved=2ahUKEwjGreTeg-2QAxXnRPEDHehWHPAQ0bkNegQINxAE&biw=1366&bih=633&dpr=1" className="hover:text-blue-600 cursor-pointer">
                                Opinie
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="flex flex-col justify-start">
                    <div className="h-[70px] flex items-center">
                        <h4 className="text-gray-800 font-semibold text-lg">Skontaktuj się</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Email: kontakt@clariflow.pl</li>
                        <li>Telefon: +48 669 994 490</li>
                        <li>Gliwice, Polska</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-200 mt-8 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Clariflow. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    )
}