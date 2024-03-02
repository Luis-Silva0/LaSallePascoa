"use client";
import activities from "/data/atividades";
import Schedule from "./Schedule";

const atividades = activities.Atividades;

export default function Horario() {
    const datas = ["27/4/2024","29/4/2024"];

    const atividadesPorDia = (date) => {
        const atividadesDoDia = atividades.filter((activ) => activ.data === date);
        console.log(atividadesDoDia);
        return atividadesDoDia ? atividadesDoDia.sort((a,b) => a.horaInicial - b.horaInicial) : [];
    };

    return (
        <div className="bg-white flex flex-col items-center w-full">
            <div className="w-[40%] py-[50px]">
                <h1 className="text-[#015450] text-6xl font-work-sans"> Schedule </h1>
            </div>
            <div className="w-[30%] flex flex-col gap-6">
                {datas.map((data,index) => (
                    <div className="flex flex-col gap-2 divide-y-2 divide-[#015450]" key={index}>
                        {atividadesPorDia(data).map((atividade,i) => (
                            <Schedule key={i} ativ={atividade}/>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}