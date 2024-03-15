"use client"
import Image from "next/image"

export default function Musica(music){
    const musica = music.music
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="overflow-hidden rounded-full flex aspect-square">
                <Image src={musica.url} sizes="(max-width: 768px) 25vw, 10vw" height={0} width={0} className="object-cover w-full h-auto"></Image>
            </div>
            <p className="text-black"> {musica.ativ} </p>
        </div>
    )
}