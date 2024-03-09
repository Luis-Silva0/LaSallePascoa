"use client";

import BackgroundVideo from "@/components/BackgroundVideo";

export default function ClickToPray() {
    const date = new Date();
    const countdown = 27 - date.getDate();
    
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
        <div className="bg-white">
            <div className="bg-[#015450] flex flex-col">
                <div className="py-[70px] flex justify-center">
                    Olá e funcionares dava um jeitaço
                </div>
                <div className="py-[70px] flex justify-center">
                    <p> Click To Pray </p> 
                </div>
            </div>
        </div>
    );
}