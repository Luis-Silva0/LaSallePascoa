"use client"
import Image from "next/image"
import Link from "next/link";

export default function Musica(music){
    const musica = music.music;
    const pdf = musica.pdf;
    return (
        <div className="flex flex-col justify-center items-center w-[60%] md:w-[25%] gap-3">
            <div className="overflow-hidden rounded-full flex aspect-square">
                <Image src={musica.url} sizes="(max-width: 768px) 25vw, 15vw" height={0} width={0} className="max-w-[150px] object-cover w-full h-auto"></Image>
            </div>
            <Link href={pdf} target="_blank" className="flex text-[#ee7f34] text-center text-lg"> {musica.ativ} </Link>
        </div>
    )
}