"use client"

export default function Grupo(grupo){
    console.log(grupo)
    const g = grupo.grupo.elementos
    return (
       <div className="px-2 flex flex-col justify-evenly grow gap-2">
        {g.map((person,index) => (
            <p className="text-lg md:text-2xl font-work-sans" key={index}> {person} </p>
        ))}
       </div> 
    )
}