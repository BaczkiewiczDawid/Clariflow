import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Poppins} from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
})

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata: Metadata = {
    title: 'Clariflow – Autodetailing Gliwice | Profesjonalne czyszczenie i polerowanie',
    description: 'Clariflow oferuje kompleksowe usługi autodetailingu w Gliwicach: mycie, polerowanie, pranie tapicerki, zabezpieczenia lakieru i więcej. Zadbaj o swój samochód.',
    keywords: ['autodetailing gliwice', 'polerowanie auta gliwice', 'mycie detailingowe', 'clariflow', 'czyszczenie wnętrza auta'],
    openGraph: {
        title: 'Clariflow – Autodetailing Gliwice',
        description: 'Profesjonalne czyszczenie i pielęgnacja aut w Gliwicach',
        url: 'https://clariflow.pl',
        siteName: 'Clariflow',
        images: [
            {
                url: "../../assets/logo.png",
                width: 1200,
                height: 630,
                alt: 'Clariflow – Autodetailing Gliwice',
            },
        ],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pl" className={poppins.variable}>
        <body className="font-sans">{children}</body>
        </html>
    )
}
