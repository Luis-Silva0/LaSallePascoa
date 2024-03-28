"use client"
import Image from "next/image"
import Link from "next/link";
import cores from "/data/cores"

export default function Musica(music){
    const date = new Date();
    const musica = music.music;
    const pdf = musica.pdf;
    const dia = date.getDay();
    const color = (cores.filter( cor => (cor.dia == dia)))[0];
    const cor = color.cor;
    return (
        <div className="flex flex-col justify-center items-center w-[60%] md:w-[25%] gap-3">
            <div className="overflow-hidden rounded-full flex aspect-square">
                <Image src={musica.url} sizes="(max-width: 768px) 25vw, 15vw" height={0} width={0} className="max-w-[150px] object-cover w-full h-auto"></Image>
            </div>
            <Link href={pdf} target="_blank" style={{color: cor }} className={`flex text-center text-lg`}> {musica.ativ} </Link>
        </div>
    )
}