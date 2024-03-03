"use client";
import activities from "/data/atividades";
import Schedule from "./Schedule";
import { useState } from "react";

const atividades = activities;

export default function Horario() {
    const datas = ["27/4","28/4","29/4"];
    const [dia,setDia] = useState("Quinta-Feira");

    const atividadesPorDia = (date) => {
        const atividadesDoDia = atividades.filter((activ) => activ.data === date);
        console.log(atividadesDoDia);
        return atividadesDoDia ? atividadesDoDia.sort((a,b) => a.horaInicial - b.horaInicial) : [];
    };

    return (
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