"use client"

import { Link } from "@nextui-org/react";

const Nav = () => {
    return (
      <div className="bg-white w-full flex flex-col">
        <div className="w-full flex flex-row justify-between">
          <div className="w-1/3"></div>
          <span className="items-center h-10 mt-[20px] md:mt-[30px] text-[rgb(1,84,80)] tracking-normal font-bold text-center text-[28px] font-work-sans leading-7 md:leading-[22px]"> Páscoa Jovem 2024 </span>
          <div className="w-1/3 flex justify-center items-center pt-3 font-proxima font-extralight">
            <Link className="w-[90px] h-[30px] md:w-[142px] md:h-[40px] bg-[#015450] flex font-xs justify-center content-center rounded-lg" href="https://docs.google.com/forms/d/e/1FAIpQLSetJ2tPRpLhiWGG-bjHxysMctuPs5tEzyugp5NoepFxY64nig/viewform?usp=sf_link" > Inscrições </Link>
          </div>
        </div>
        <div className="mt-[25px] h-10 bg-[#f7f7f7] text-black flex justify-center">
          <div className="flex flex-row justify-between items-center font-proxima font-thin text-black">
            <Link className="px-2.5" href="/"> Home </Link>
            <Link className="px-2.5" href="/clicktopray"> Click to Pray </Link>
            <Link className="px-2.5" href="/horario"> Horário </Link>
            <Link className="px-2.5" href="/musicas"> Músicas </Link>
          </div>
        </div>
      </div>
    );
}

export default Nav