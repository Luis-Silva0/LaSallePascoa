"use client";

import BackgroundVideo from "@/components/BackgroundVideo";
import prayers from "/data/pray"
import { useEffect, useState } from "react";

const prayer = prayers

function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
  }

export default function ClickToPray() {
    const date = new Date();
    const day = date.getDate();
    const countdown = 28 - day;
    const [pray,setPray] = useState("");
    console.log(day)
    
    useEffect(() => {
        prayer.map((p,index) => {
            if (p.dia == day) setPray(p.oracao);
        })
    },[])  

    return (countdown > 4) ? (
        <div>
            <BackgroundVideo blur={2}>
                <div className="flex flex-col items-center text-white w-full justify-between px-4 gap-10 items-center gap z-40">
                    <span className="text-6xl md:text-9xl z-40 font-work-sans"> Prepara-te... </span>
                    <span className="text-4xl md:text-7xl z-40 font-work-sans"> Faltam apenas {countdown} dias </span>
                </div>
            </BackgroundVideo>
        </div>
    ) : (
        <div className="bg-[#ee7f34] min-h-[60vh] flex justify-center">
            <div className="bg-[#ee7f34] flex flex-col w-[60%] justify-between gap-[60px]">
                <h1 className="pt-[35px] font-bold text-5xl font-work-sans"> Com Jesus pela manhã </h1>
                <div className="pt-[20px] flex flex-col justify-start font-work-sans text-[34px] leading-[2.75rem] gap-3">
                    <NewlineText text={pray} />
                </div>
                <div className="pb-[45px] flex justify-start font-work-sans text-xl">
                    <p> @ClickToPray </p> 
                </div>
            </div>
        </div>
    );
}