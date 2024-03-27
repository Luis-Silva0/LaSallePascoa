"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import Grupo from "./Grupo"
import group from "/data/grupos"

const grupos = group

export default function Groups() {
    const date = new Date();
    const countdown = 8 - date.getDate();
    const dias = (countdown == 1) ? "dia" : "dias";
    
    return (countdown > 0) ? (
        <div>
            <BackgroundVideo blur={2}>
                <div className="flex flex-col items-center text-white w-full justify-between px-4 gap-10 items-center gap z-40">
                    <span className="text-6xl md:text-9xl z-40 font-work-sans"> Prepara-te... </span>
                    <span className="text-4xl md:text-7xl z-40 font-work-sans"> Faltam apenas {countdown} {dias} </span>
                </div>
            </BackgroundVideo>
        </div>
    ) : (
        <div className="bg-white w-full flex items-center justify-center">
            <div className="flex w-[75%] md:w-[65%] 2xl:w-[60%] mt-4 flex flex-col gap-5">
                <h1 className="text-[#ee7f34] font-work-sans text-[38px]"> Grupos de Serviço </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {grupos.map((group,index) => (
                        <div className="flex flex-col bg-[#ee7f34] aspect-square 2xl:py-5 pt-3 2xl:px-5 px-4 gap-3 md:gap-1 2xl:gap-3">
                            <p className="text-3xl font-bold font-work-sans"> {group.grupo} </p>
                            <Grupo key={index} grupo={group}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}