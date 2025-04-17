"use client"

import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Nav = () => {
  const path = usePathname();
  const[n, setN] = useState(0);

  useEffect(() => {
    if (path == "/") {
      setN(0);
    }
    if (path == "/horario") {
      setN(1);
    }
    if (path == "/musicas") {
      setN(2);
    }
    if (path == "/grupos") {
      setN(3);
    }
  }
  , [path]);

    return (
      <div className="bg-white w-full flex flex-col outline-none">
        <div className="w-full pt-3 md:pt-0 flex flex-row justify-center pl-4 md:pl-0">
          <Link href="/" style={{color: "#3a90bc" }} className={`flex pt-1 md:pt-0 items-center justify-center md:w-1/3 w-1/2 h-16 md:mb-0 md:mt-[30px] tracking-normal font-bold text-[28px] font-work-sans leading-7 md:leading-[22px]`}> Páscoa Jovem 2024 </Link>
        </div>
        <div className="mt-[25px] h-10 bg-[#f7f7f7] text-black flex justify-center">
          <div className="flex flex-row justify-between items-center font-proxima font-thin text-black md:text-base text-sm">
            <Link style={{color: (n==1) ? "#be2523" : '#3a90bc'}} className={n != 2 ? "px-1 md:px-2.5" : `px-1 md:px-2.5`} href="/horario"> Horário </Link>
            <Link style={{color: (n==2) ? "#be2523" : '#3a90bc'}} className={n != 3 ? "px-1 md:px-2.5" : `px-1 md:px-2.5`} href="/musicas"> Músicas </Link>
            <Link style={{color: (n==3) ? "#be2523" : '#3a90bc'}} className={n != 4 ? "px-1 md:px-2.5" : `px-1 md:px-2.5`} href="/grupos"> Grupos de Serviço </Link>
          </div>
        </div>
      </div>
    );
}

export default Nav