"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import Musica from "./Musica";
import musics from "/data/musicas";

const musicas = musics

export default function Music() {
    const date = new Date();
    const countdown = 8 - date.getDate();
    var musicA = [];

    while (musicas.length > 0){
        musicA.push(musicas.splice(0,3));
    }
    console.log(musicA)

    return (countdown > 0) ? (
        <div>
            <BackgroundVideo blur={2}>
                <div className="flex flex-col items-center text-white w-full justify-between px-4 gap-10 items-center gap z-40">
                    <span className="text-6xl md:text-9xl z-40 font-work-sans"> Prepara-te... </span>
                    <span className="text-4xl md:text-7xl z-40 font-work-sans"> Faltam apenas {countdown} dias </span>
                </div>
            </BackgroundVideo>
        </div>
    ) : (
        <div className="bg-white flex flex-col items-center w-full">
            <h1 className="text-[#ee7f34] font-work-sans text-[38px]"> Músicas </h1>
            <div className="flex flex-col w-full h-[30vh]">
                {musicA.map((arr,index) =>(
                    <div key={index} className="flex w-full">
                        {arr.map((musica,iex) =>(
                            <Musica key={iex} music={musica}/>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}