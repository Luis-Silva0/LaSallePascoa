"use client";

import BackgroundVideo from "@/components/BackgroundVideo";

export default function Music() {
    const date = new Date();
    const countdown = 27 - date.getDate();
    
    return (countdown > 0) ? (
        <div>
            <BackgroundVideo blur={2}>
                <div className="flex flex-col items-center w-full justify-between px-4 gap-10 items-center gap z-40">
                    <span className="text-9xl z-40 font-work-sans"> Prepara-te... </span>
                    <span className="text-7xl z-40 font-work-sans"> Faltam apenas {countdown} dias </span>
                </div>
            </BackgroundVideo>
        </div>
    ) : (
        <div className="bg-white flex flex-col items-center w-full">
            Olá
        </div>
    );
}