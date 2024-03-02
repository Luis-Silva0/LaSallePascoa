"use client";
import activities from "/data/atividades";
import Schedule from "./Schedule";

const atividades = activities.Atividades;

export default function Schedule() {

    return (
        <div className="bg-white flex flex-col">
            <div className="flex pl-[30%] py-[50px] text-[#015450]">
                Schedule
            </div>
            <Schedule />
        </div>
    );
}