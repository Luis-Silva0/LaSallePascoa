"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import horarios from "/data/horarios"
import Schedule from "./Schedule"

const schedules = horarios;

export default function Horario() {
    const date = new Date();
    const countdown = 8 - date.getDate();
    const dias = (countdown == 1) ? "dia" : "dias";

    const [dia,setDia] = useState("");
    console.log(schedules)


    
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
        <div className="bg-white flex flex-col items-center w-full">
            <div className="w-[65%] md:w-[70%] py-[50px]">
                <h1 className="flex text-[#ee7f34] text-6xl font-work-sans  justify-center"> Horário </h1>
            </div>
            <div className="flex justify-between w-[90%] md:w-[50%]">
                <Button disableRipple={true} onClick={() => setDia("Quinta-feira")} className={dia != "Quinta-feira" ? "md:w-[25%] w-1/3 max-w-[240px] bg-[#ee7f34] py-2 text-base md:text-2xl font-work-sans border border-[#ee7f34] hover:bg-white hover:text-[#ee7f34] transition ease-in-out delay-150" : "md:w-[25%] w-1/3 max-w-[240px] bg-white border border-[#ee7f34] text-[#ee7f34] py-2 text-base md:text-2xl font-work-sans"}> Quinta-Feira </Button>
                <Button disableRipple={true} onClick={() => setDia("Sexta-Feira")} className={dia != "Sexta-Feira" ? "md:w-[25%] w-1/3 max-w-[240px] bg-[#ee7f34] py-2 text-base md:text-2xl font-work-sans border border-[#ee7f34] hover:bg-white hover:text-[#ee7f34] transition ease-in-out delay-150" : "md:w-[25%] w-1/3 max-w-[240px] bg-white border border-[#ee7f34] text-[#ee7f34] py-2 text-base md:text-2xl font-work-sans"}> Sexta-Feira </Button>
                <Button disableRipple={true} onClick={() => setDia("Sábado")} className={dia != "Sábado" ? "md:w-[25%] w-1/3 max-w-[240px] bg-[#ee7f34] py-2 text-base md:text-2xl font-work-sans border border-[#ee7f34] hover:bg-white hover:text-[#ee7f34] transition ease-in-out delay-150" : "md:w-[25%] w-1/3 max-w-[240px] bg-white border border-[#ee7f34] text-[#ee7f34] py-2 text-base md:text-2xl font-work-sans"}> Sábado </Button>
            </div>
            <div className="justify-between flex w-[90%] md:w-[50%]">
                {schedules.map((schedule,index) => (
                    <div key={index} className={(schedule.dia != dia) ? "opacity-0 md:w-[25%] w-1/3 max-w-[240px]" : "md:w-[25%] w-1/3 max-w-[240px] overflow-visible text-nowrap"}>
                        <Schedule schedule={schedule}/>
                    </div>
                ))}
            </div>
        </div>
    );
}