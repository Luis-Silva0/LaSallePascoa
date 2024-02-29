"use client";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IconContext } from "react-icons";
import Link from "next/link";

const Rodape = () => {
    return(
        <div className="bg-white flex flex-col grow w-full grid content-end">
            <div className="flex justify-center">
               <span className="text-[#015450] pt-[45px] font-semibold text-[22px] font-work-sans"> pascoajovem2024 </span> 
            </div>
            <IconContext.Provider value={{ size: '30px', className:"icon" }}>
                <div className="flex justify-center gap-2 flex-row py-[19px]">
                    <Link href="https://www.facebook.com/PastoralLaSallePT?locale=pt_PT"> <FaFacebook /> </Link>
                    <Link href="https://www.instagram.com/pastorallasallept/"> <FaInstagram /> </Link>
                </div>
            </IconContext.Provider>
            <div className="flex justify-center pb-[20px]">
                <span className="text-[#015450]"> Feito pelo grupo Dois Terços </span>
            </div>
        </div>
    );
}

export default Rodape