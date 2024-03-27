"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import activities from "/data/atividades";
import Schedule from "./Schedule";
import { useState } from "react";

const atividades = activities;

export default function Horario() {
    const date = new Date();
    const countdown = 28 - date.getDate();
    const dias = (countdown == 1) ? "dia" : "dias";

    const datas = ["27/4","28/4","29/4"];
    const [dia,setDia] = useState("Quinta-Feira");

    const atividadesPorDia = (date) => {
        const atividadesDoDia = atividades.filter((activ) => activ.data === date);
        console.log(atividadesDoDia);
        return atividadesDoDia ? atividadesDoDia.sort((a,b) => a.horaInicial - b.horaInicial) : [];
    };
    
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
                <h1 className="flex text-[#015450] text-6xl font-work-sans md:justify-normal justify-center"> Schedule </h1>
            </div>
            <div className="w-[80%] md:w-[65%] flex flex-col gap-8">
                {datas.map((data,index) => (
                    <div className="flex flex-col gap-1.5">
                        <h2 className="text-[#015450] font-work-sans"> {dia}, {data} </h2>
                        <div className="flex flex-col gap-3" key={index}>
                            {atividadesPorDia(data).map((atividade,i) => (
                                <Schedule key={i} ativ={atividade}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}