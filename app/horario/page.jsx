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
            Ainda não é Páscoa
        </div>
    );
}