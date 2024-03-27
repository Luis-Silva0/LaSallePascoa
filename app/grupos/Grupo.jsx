"use client"

export default function Grupo(grupo){
    const g = grupo.grupo.elementos
    return (
       <div className="px-2 flex flex-col justify-evenly grow gap-2 pb-4 md:pb-0">
        {g.map((person,index) => (
            <p className="text-lg md:text-2xl font-work-sans" key={index}> {person} </p>
        ))}
       </div> 
    )
}