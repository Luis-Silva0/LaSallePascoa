import { IoMdMusicalNote } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
"use client";
import cores from "/data/cores"

export default function Schedule({ativ}) {
    console.log(ativ)
    if (ativ) return(
        <div className="flex flex-row text-black font-work-sans border-t-[1px] border-[#015450] justify-between pt-3">
            <span className="w-[30%] md:max-w-[170px] px-1"> {ativ.nome} </span>
            <div className="flex flex-row w-[64px]">
                <IoMdMusicalNote/>
                <MdLocationPin/>
            </div>
            <div className="flex flex-row justify-center px-1">
                <span className="w-[42px] flex justify-end"> {ativ.horaInicial} </span>
                <span className="px-1.5"> - </span>
                <span className="w-[42px] flex justify-start"> {ativ.horaFinal} </span>    
            </div>
export default function Schedule({schedule}) {
    const date = new Date();
    const dia = date.getDay();
    const color = (cores.filter( cor => (cor.dia == dia)))[0];
    const cor = color.cor;
    if (schedule) return(
        <div className="flex flex-col text-black font-work-sans justify-start pt-3 gap-3">
            {schedule.ativ.map((ativ,index) => (
                <div key={index} className="flex flex-row gap-2 text-2xl">
                    <h1 style={{color: cor}}> {ativ.hora}: </h1>
                    <h2> {ativ.nome} </h2>
                </div>
            ))}
        </div>
        );
}