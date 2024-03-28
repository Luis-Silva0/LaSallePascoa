"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import prayers from "/data/pray"
import easter from "/data/pray28-31"
import { useEffect, useState } from "react";
import cores from "/data/cores"

const prayer = prayers
const braga = easter

function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
  }

export default function ClickToPray() {
    const date = new Date();
    const day = date.getDate();
    const h = date.getHours();
    const dia = date.getDay();
    const countdown = 28 - day;
    const dias = (countdown == 1) ? "dia" : "dias";
    const faltas = (countdown == 1) ? "Falta" : "Faltam";
    const [pray,setPray] = useState("");
    const hora = (countdown > 0 || h <= 16) ? "manhã" : "noite";
    const color = (cores.filter( cor => (cor.dia == dia)))[0];
    const cor = color.cor;
    
    useEffect(() => {
        (countdown > 0) ? (prayer.map((p) => { if (p.dia == day) setPray(p.oracao) && setHora("manhã")})
        ):(braga.map((p) => {
            if (p.dia == day){
                if (h > 16) setPray(p.noite) && setHora("noite")
                else setPray(p.manha) && setHora("manhã")
            }
            }))
    },[])  

    return (countdown > 4) ? (
        <div>
            <BackgroundVideo blur={2}>
                <div className="flex flex-col items-center text-white w-full justify-between px-4 gap-10 items-center gap z-40">
                    <span className="text-6xl md:text-9xl z-40 font-work-sans"> Prepara-te... </span>
                    <span className="text-4xl md:text-7xl z-40 font-work-sans"> {faltas} apenas {countdown} {dias} </span>
                </div>
            </BackgroundVideo>
        </div>
    ) : (
        <div style={{backgroundColor: cor}} className={`in-h-[60vh] flex justify-center`}>
            <div style={{backgroundColor: cor}} className={`flex flex-col w-[80%] md:w-[60%] justify-between gap-[60px]`}>
                <h1 className="pt-[35px] font-bold text-3xl md:text-5xl font-work-sans"> Com Jesus pela {hora} </h1>
                <div className="pt-[20px] flex flex-col justify-start font-work-sans text-2xl md:text-[34px] leading-[2.75rem] gap-3">
                    <NewlineText text={pray} />
                </div>
                <div className="pb-[45px] flex justify-start font-work-sans text-xl">
                    <p> @ClickToPray </p> 
                </div>
            </div>
        </div>
    );
}