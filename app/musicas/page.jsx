"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import Musica from "./Musica";

const m = {
    pdf: "/music/Músicas.pdf",
    url: "/Pascoa25.jpg",
    ativ: "Músicas",
}

export default function Music() {
    const date = new Date();
    const countdown = 17 - date.getDate();
    const dias = (countdown == 1) ? "dia" : "dias";
    const faltas = (countdown == 1) ? "Falta" : "Faltam";

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
            <h1 style={{color: "#3a90bc" }} className={`font-work-sans text-6xl`}> Músicas </h1>
            <div className="flex flex-row gap-16 flex-wrap w-[80%] md:w-[50%] justify-evenly items-start">
                <Musica music={m}/>
            </div>
        </div>
    );
}