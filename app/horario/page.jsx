"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import horarios from "/data/horarios"
import Schedule from "./Schedule"
import cores from "/data/cores"

export default function Horario() {
    const schedules = horarios;
    const date = new Date();
    const countdown = 1 - date.getUTCDate();
    const dias = (countdown == 1) ? "dia" : "dias";
    const faltas = (countdown == 1) ? "Falta" : "Faltam";
    const day = date.getUTCDay();
    const [dia,setDia] = useState("");
    const [cor,setCor] = useState("");
    const chooseColor = () => {
        const color = (cores.filter( cor => (cor.dia == day)))[0];
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
    const quinta = (dia == "Quinta-feira") ? {backgroundColor: 'white',borderColor:cor, color: cor } : {backgroundColor: cor,borderColor:cor}
    const sexta = (dia == "Sexta-Feira") ? {backgroundColor: 'white',borderColor:cor,color: cor } : {backgroundColor: cor,borderColor:cor}
    const sabado = (dia == "Sábado") ? {backgroundColor: 'white',borderColor:cor,color: cor } : {backgroundColor: cor,borderColor:cor}

    
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
        <div className="bg-white flex flex-col items-center w-full">
            <div className="w-[65%] md:w-[70%] py-[50px]">
                <h1 style={{color: cor}} className={`flex text-6xl font-work-sans  justify-center`}> Horário </h1>
            </div>
            <div className="flex justify-between w-[90%] md:w-[60%]">
                <Button style={quinta} disableRipple={true} onClick={() => setDia("Quinta-feira")} className={dia != "Quinta-feira" ? `md:w-[25%] w-1/3 max-w-[240px] py-2 text-base md:text-2xl font-work-sans border hover:bg-white hover:text-[${cor}] transition ease-in-out delay-150` : `md:w-[25%] w-1/3 max-w-[240px] border text-[${cor}] py-2 text-base md:text-2xl font-work-sans`}> Quinta-Feira </Button>
                <Button style={sexta} disableRipple={true} onClick={() => setDia("Sexta-Feira")} className={dia != "Sexta-Feira" ? `md:w-[25%] w-1/3 max-w-[240px] py-2 text-base md:text-2xl font-work-sans border hover:bg-white hover:text-[${cor}] transition ease-in-out delay-150` : `md:w-[25%] w-1/3 max-w-[240px] border text-[${cor}] py-2 text-base md:text-2xl font-work-sans`}> Sexta-Feira </Button>
                <Button style={sabado} disableRipple={true} onClick={() => setDia("Sábado")} className={dia != "Sábado" ? `md:w-[25%] w-1/3 max-w-[240px] py-2 text-base md:text-2xl font-work-sans border hover:bg-white hover:text-[${cor}] transition ease-in-out delay-150` : `md:w-[25%] w-1/3 max-w-[240px] border text-[${cor}] py-2 text-base md:text-2xl font-work-sans`}> Sábado </Button>
            </div>
            <div className="justify-between flex w-[90%] md:w-[60%]">
                {schedules.map((schedule,index) => (
                    <div key={index} className={(schedule.dia != dia) ? "hidden md:flex md:opacity-0 md:w-[25%] w-1/3 max-w-[240px]" : "md:w-[25%] w-1/3 max-w-[240px] overflow-visible text-nowrap"}>
                        <Schedule schedule={schedule}/>
                    </div>
                ))}
            </div>
        </div>
    );
}