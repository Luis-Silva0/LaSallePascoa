"use client"
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="bg-[#f7f7f7] w-[1000px] md:w-full overflow-hidden flex">
        <div className="flex grow items-center relative object-cover overflow-hidden md:h-[700px]">
          <Image src={"/Pascoacartaz.jpg"} width={3200} height={1800} className="object-center -ml-[280px] md:m-0"/>
        </div>
      </div>
    </main>
  );
}
