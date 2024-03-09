"use client"

import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const path = usePathname()
  let n = 0
  if (path == "/musicas") n = 3
  else if (path == "/horario") n = 2
  else if (path == "/clicktopray") n = 1
  else if (path == "/grupos") n = 4
  else n = 0

    return (
      <div className="bg-white w-full flex flex-col">
        <div className="w-full pt-3 md:pt-0 flex flex-row justify-between md:justify-end pl-4 md:pl-0">
          <Link href="/" className="flex pt-1 md:pt-0 items-center justify-center md:w-1/3 w-1/2 h-16 md:mb-0 md:mt-[30px] text-[#ee7f34] tracking-normal font-bold text-[28px] font-work-sans leading-7 md:leading-[22px]"> Páscoa Jovem 2024 </Link>
          <div className="w-1/3 flex justify-center items-center md:pt-0 md:mt-[25px] pt-3 font-proxima font-extralight">
            <Link className="w-[90px] h-[30px] md:w-[142px] md:h-[40px] bg-[#ee7f34] flex text-sm md:text-lg justify-center content-center" href="https://docs.google.com/forms/d/e/1FAIpQLSetJ2tPRpLhiWGG-bjHxysMctuPs5tEzyugp5NoepFxY64nig/viewform?usp=sf_link" > Inscrições </Link>
          </div>
        </div>
        <div className="mt-[25px] h-10 bg-[#f7f7f7] text-black flex justify-center">
          <div className="flex flex-row justify-between items-center font-proxima font-thin text-black md:text-base text-sm">
            <Link className={n != 1 ? "px-1" : "text-[#ee7f34] px-1"} href="/clicktopray"> Click to Pray </Link>
            <Link className={n != 0 ? "px-1" : "text-[#ee7f34] px-1"} href="/horario"> Horário </Link>
            <Link className={n != 3 ? "px-1" : "text-[#ee7f34] px-1"} href="/musicas"> Músicas </Link>
            <Link className={n != 4 ? "px-1" : "text-[#ee7f34] px-1"} href="/grupos"> Grupos de Serviço </Link>
          </div>
        </div>
      </div>
    );
}

export default Nav