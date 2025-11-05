"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/logo-no-text.png";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={Logo} alt="Clariflow" width={40} height={40} className="rounded-full"/>
                    <span className="text-2xl font-semibold text-[#00a2de]">Clariflow</span>
                </Link>
                <div className="hidden md:flex space-x-10 text-gray-700 font-medium">
                    <Link href="/" className="hover:text-blue-600 transition">Główna</Link>
                    <Link href="/cennik" className="hover:text-blue-600 transition">Cennik</Link>
                    <Link href="/galeria" className="hover:text-blue-600 transition">Galeria</Link>
                    <Link href="/kontakt" className="hover:text-blue-600 transition">Kontakt</Link>
                </div>
                <button onClick={toggleMenu} className="md:hidden">
                    {isOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-6 text-gray-700 font-medium">
                        <Link href="/" onClick={toggleMenu} className="hover:text-blue-600">Główna</Link>
                        <Link href="#cennik" onClick={toggleMenu} className="hover:text-blue-600">Cennik</Link>
                        <Link href="#galeria" onClick={toggleMenu} className="hover:text-blue-600">Galeria</Link>
                        <Link href="#kontakt" onClick={toggleMenu} className="hover:text-blue-600">Kontakt</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
