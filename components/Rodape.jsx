"use client";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IconContext } from "react-icons";
import Link from "next/link";
import cores from "/data/cores"

const Rodape = () => {
    const date = new Date();
    const dia = date.getDay();
    const color = (cores.filter( cor => (cor.dia == dia)))[0];
    const cor = color.cor;
    const icon = (cor == "#bd2410") ? "icon-active" : "icon-inactive";
    
    return(
        <div className="bg-white flex flex-col grow w-full">
            <div className="flex justify-center">
               <span style={{color: cor}} className=" pt-[45px] font-semibold text-[22px] font-work-sans"> Páscoa Jovem 2024 </span> 
            </div>
            <IconContext.Provider value={{ size: '30px', className: icon }}>
                <div className="flex justify-center gap-2 flex-row py-[19px]">
                    <Link target="_blank" href="https://www.facebook.com/PastoralLaSallePT?locale=pt_PT"> <FaFacebook /> </Link>
                    <Link target="_blank" href="https://www.instagram.com/pastorallasallept/"> <FaInstagram /> </Link>
                </div>
            </IconContext.Provider>
            <div className="flex justify-center pb-[20px]">
                <span style={{color: cor}}> Feito pelo grupo Dois Terços </span>
            </div>
        </div>
    );
}

export default Rodape