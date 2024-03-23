"use client"
import Image from "next/image"
import Carousel, { consts } from '@itseasy21/react-elastic-carousel';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { IconContext } from "react-icons";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
]

function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ? "l" : "r"
  return(pointer == "l") ? (
    <Button disableRipple={true} disableAnimation={true} className="opacity-100 md:opacity-0 hover:opacity-100 flex justify-center -mr-16 z-40" onClick={onClick} disabled={isEdge}>
      <IconContext.Provider value={{color: 'white', size:'50px'}}>
        <MdKeyboardArrowLeft/>
      </IconContext.Provider> 
    </Button>
  ) : (
    <Button disableRipple={true} disableAnimation={true} className="opacity-100 md:opacity-0 hover:opacity-100 flex justify-center -ml-16 z-40" onClick={onClick} disabled={isEdge}>
      <IconContext.Provider value={{color: 'white', size:'50px'}}>
        <MdKeyboardArrowRight/>
      </IconContext.Provider>
    </Button>
  )
}



export default function Home() {
  const images = require.context('/public/images', true);
  const imageList = images.keys().map(image => images(image));
  const date = new Date();
  const day = date.getDate();
  const countdown = 28 - day;
  console.log(countdown)

  return (
    <main className="bg-white flex flex-col gap-0 w-full overflow-hidden md:oveflow-auto h-[75vh] md:h-auto items-center">
      {(countdown <= 0) ?
        <div className="bg-[#f7f7f7] w-full flex grow h-[100%] md:h-auto">
          <div className="md:hidden flex grow items-center relative bg-cover overflow-visible bg-no-repeat bg-center bg-[url('/Pascoacartaz.png')]"></div>
          <div className="md:flex hidden grow items-center relative overflow-visible">
            <Image src={'/Pascoacartaz.png'} sizes="100vw" height={0} width={0} className="hidden md:flex w-full h-auto"/>
          </div>
        </div>
        :
        <>
          <div className='relative overflow-hidden w-full h-[60vh] md:h-[70vh] items-center flex'>
            <div className="flex flex-col items-center w-full justify-between px-4 gap-10 items-center gap z-40">
              <span className="text-6xl md:text-9xl z-40 font-work-sans"> Prepara-te... </span>
              <span className="text-4xl md:text-7xl z-40 font-work-sans"> Faltam apenas {countdown} dias </span>
            </div>
            <video width={1080} height={1920} autoPlay="autoplay" loop="loop" muted id="video-id" className='z-0 top-0 absolute w-full flex md:hidden grow md:h-auto' >
              <source src={"/PascoaJovem2024(90º).mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video width={1920} height={1080} autoPlay="autoplay" loop="loop" muted id="video-id" className='z-0 top-0 absolute w-full md:flex hidden grow md:h-auto' >
              <source src={"/PascoaJovem2024.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
          <span id="video-bottom"></span>
        </>
      }
      <div className="w-[90%] md:w-[80%] md:h-[40vh]">
        <Carousel breakPoints={breakPoints} itemsToShow={2} renderArrow={myArrow} itemPadding={[10,0]} pagination={false} className="outline-none h-[100%]">
          {imageList.map((imge,index) => (
            <div className="relative">
                <Image key={index} src={imge} sizes="(max-width: 768px) 80vw, 40vw" height={0} width={0} className="w-full h-auto" style={{objectFit: 'fit'}}/>
            </div> 
          ))}
        </Carousel>
      </div>
    </main>
  );
}
