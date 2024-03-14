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
  console.log(imageList)

  return (
    <main className="bg-white flex flex-col gap-0 w-full overflow-hidden md:oveflow-auto h-[60vh] md:h-auto items-center">
      <div className="bg-[#f7f7f7] w-full flex grow h-[100%] md:h-auto">
        <div className="md:hidden flex grow items-center relative bg-cover overflow-visible bg-no-repeat bg-center bg-[url('/Pascoacartaz.jpg')]"></div>
        <div className="md:flex hidden grow items-center relative overflow-visible">
          <Image src={'/Pascoacartaz.jpg'} sizes="100vw" height={0} width={0} className="hidden md:flex w-full h-auto"/>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] h-[40vh] overflow-hidden">
        <Carousel breakPoints={breakPoints} itemsToShow={2} renderArrow={myArrow} itemPadding={[10,2.5]} pagination={false} className="h-[100%]">
          {imageList.map((imge,index) => (
            <div className="relative z-2">
                <Image key={index} src={imge.default} sizes="(max-width: 768px) 80vw, 25vw" height={0} width={0} className="w-full h-auto" style={{objectFit: 'fit'}}/>
            </div> 
          ))}
        </Carousel>
      </div>
    </main>
  );
}
