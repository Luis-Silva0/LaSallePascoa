"use client";
import cores from "/data/cores"


export default function Schedule({schedule}) {
    const date = new Date();
    const dia = date.getUTCDay();
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