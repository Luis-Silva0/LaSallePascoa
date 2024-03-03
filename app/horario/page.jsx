"use client";

export default function Placeholder() {
    const date = new Date();
    const countdown = 27 - date.getDate();

    return (
        <div className="bg-[#015450] flex flex-col items-center w-full h-[50%] justify-between px-4 gap-10 items-center gap">
            <div></div>
            <span className="text-4xl"> Ainda não começou a Páscoa Jovem </span>
            <span className="text-4xl"> Inscreve-te e volta daqui a {countdown} dias. </span>
            <div></div>
        </div>
    );
}