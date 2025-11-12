import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import "./globals.css";
import {Footer} from "@/components/footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const geistSans = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export const metadata: Metadata = {
    title:
        "Clariflow – Profesjonalny Autodetailing Gliwice | Polerowanie, Mycie i Zabezpieczenie Lakieru | Detailing Samochodowy",
    description:
        "Clariflow oferuje kompleksowy autodetailing w Gliwicach: mycie auta, polerowanie lakieru, pranie tapicerki, impregnacja skór i materiałów, zabezpieczenie lakieru powłoką ceramiczną i detailing wnętrza oraz karoserii. Przywróć blask swojemu samochodowi!",
    keywords: [
        "autodetailing Gliwice",
        "detailing Gliwice",
        "polerowanie auta Gliwice",
        "mycie detailingowe samochodu",
        "zabezpieczenie lakieru Gliwice",
        "pranie tapicerki samochodowej",
        "impregnacja skór samochodowych",
        "czyszczenie wnętrza auta",
        "Clariflow"
    ],
    openGraph: {
        title: "Clariflow – Profesjonalny Autodetailing Gliwice",
        description:
            "Skorzystaj z usług Clariflow w Gliwicach: mycie, polerowanie, pranie tapicerki, zabezpieczenie lakieru i pełen detailing auta. Odmień wygląd swojego samochodu!",
        url: "https://clariflow.pl",
        siteName: "Clariflow",
        images: [
            {
                url: "/assets/logo.png",
                width: 1200,
                height: 630,
                alt: "Clariflow – Profesjonalny Autodetailing Gliwice",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Clariflow – Profesjonalny Autodetailing Gliwice",
        description:
            "Clariflow – mycie, polerowanie, pranie tapicerki, zabezpieczenie lakieru i detailing auta w Gliwicach. Odmień wygląd swojego samochodu!",
        images: ["/assets/logo.png"],
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pl" className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <meta name="theme-color" content="#ffffff" />
        </head>
        <body className="font-sans bg-white text-gray-900">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
