"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import Musica from "./Musica";
import musics from "/data/musicas";
import cores from "/data/cores"
import { useEffect, useState } from "react";

const musicas = musics

export default function Music() {
    const date = new Date();
    const countdown = 1 - date.getUTCDate();
    const dia = date.getUTCDay();
    const dias = (countdown == 1) ? "dia" : "dias";
    const faltas = (countdown == 1) ? "Falta" : "Faltam";
    const [cor,setCor] = useState("");
    const chooseColor = () => {
        const color = (cores.filter( cor => (cor.dia == dia)))[0];
        if(color === undefined) {
            setCor("#ee7f34")
        }
        else {
            setCor(color.cor)  
        } 
    }
    useEffect(() => {
        chooseColor();
    },[])

    return (countdown > 0) ? (
        <div>
            <BackgroundVideo blur={2}>
                <div className="flex flex-col items-center text-white w-full justify-between px-4 gap-10 items-center gap z-40">
                    <span className="text-6xl md:text-9xl z-40 font-work-sans"> Prepara-te... </span>
                    <span className="text-4xl md:text-7xl z-40 font-work-sans"> {faltas} apenas {countdown} {dias} </span>
                </div>
            </BackgroundVideo>
        </div>
    ) : (
        <div className="bg-white flex flex-col items-center w-full gap-16 mt-8">
            <h1 style={{color: cor }} className={`font-work-sans text-6xl`}> Músicas </h1>
            <div className="flex flex-row gap-16 flex-wrap w-[80%] md:w-[50%] justify-evenly items-start">
                {musicas.map((m,index) => (
                    <Musica key={index} music={m}/>
                ))}
            </div>
        </div>
    );
}