import Image from "next/image";
import {galleryItems} from "@/data/galleryItems";
import Link from "next/link";

export const Gallery = () => {
    return (
        <div>
            <h3 className={"font-bold text-2xl 2xl:text-3xl"}>Galeria efektów</h3>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
                {galleryItems.map((item, i) => (
                    <Link
                        key={i}
                        href="/galeria"
                        className="flex flex-col items-center md:max-w-[30%] md:min-w-[250px] hover:scale-105 transition-transform duration-200"
                    >
                        <div className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                            <Image
                                src={item.src}
                                alt="Auto"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <p className="mt-3 text-center text-gray-600 text-sm 2xl:text-lg">
                            {item.desc}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}