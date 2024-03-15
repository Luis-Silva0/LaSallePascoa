"use client"

export default function Grupo(grupo){
    const g = grupo.grupo
    return (
       <div className="px-2 flex flex-col 2xl:gap-4 gap-2">
        {g.map((person,index) => (
            <p className="text-lg font-work-sans" key={index}> {person} </p>
        ))}
       </div> 
    )
}