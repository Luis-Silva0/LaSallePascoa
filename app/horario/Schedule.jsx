"use client";


export default function Schedule({schedule}) {
    if (schedule) return(
        <div className="flex flex-col text-black font-work-sans justify-start pt-3 gap-3">
            {schedule.ativ.map((ativ,index) => (
                <div key={index} className="flex flex-row gap-2 text-2xl">
                    <h1 style={{color: "#3a90bc"}}> {ativ.hora}: </h1>
                    <h2> {ativ.nome} </h2>
                </div>
            ))}
        </div>
    );
}