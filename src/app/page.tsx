import Image from "next/image";
import Logo from "../../assets/logo.png"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Witaj, tu powstaje strona</h1>
            <Image
                src={Logo}
                alt="Clariflow"
                width={300}
                height={300}
                priority
            />
        </div>
    );
}
