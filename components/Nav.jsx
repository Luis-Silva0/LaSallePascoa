"use client"

import { Link } from "@nextui-org/react";

const Nav = () => {
    return (
      <div className="bg-white w-full flex flex-col">
        <div className="w-full pt-3 md:pt-0 flex flex-row justify-between md:justify-end pl-4 md:pl-0">
          <span className="flex pt-1 md:pt-0 items-center justify-center md:w-1/3 w-1/2 h-16 md:mb-0 md:mt-[30px] text-[rgb(1,84,80)] tracking-normal font-bold text-[28px] font-work-sans leading-7 md:leading-[22px]"> Páscoa Jovem 2024 </span>
          <div className="w-1/3 flex justify-center items-center md:pt-0 md:mt-[25px] pt-3 font-proxima font-extralight">
            <Link className="w-[90px] h-[30px] md:w-[142px] md:h-[40px] bg-[#015450] flex font-xs justify-center content-center rounded-lg" href="https://docs.google.com/forms/d/e/1FAIpQLSetJ2tPRpLhiWGG-bjHxysMctuPs5tEzyugp5NoepFxY64nig/viewform?usp=sf_link" > Inscrições </Link>
          </div>
        </div>
        <div className="mt-[25px] h-10 bg-[#f7f7f7] text-black flex justify-center">
          <div className="flex flex-row justify-between items-center font-proxima font-thin text-black">
            <Link className="px-2.5" href="/"> Home </Link>
            <Link className="px-2.5" href="/horario"> Click to Pray </Link>
            <Link className="px-2.5" href="/horario"> Horário </Link>
            <Link className="px-2.5" href="/horario"> Músicas </Link>
          </div>
        </div>
      </div>
    );
}

export default Nav