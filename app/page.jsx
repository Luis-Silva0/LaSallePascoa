"use client"
import Image from "next/image";

export default function Home() {
  const image = { 
    objectPosition: 'center',
    display: 'flex', 
  }

  return (
    <main className="bg-white w-full overflow-hidden md:oveflow-auto h-[60vh] md:h-svh md:max-h-[751px]">
      <div className="bg-[#f7f7f7] w-full flex h-[100%]">
        <div className="flex grow items-center relative bg-cover overflow-hidden bg-no-repeat bg-center bg-[url('/Pascoacartaz.jpg')]">
        </div>
      </div>
    </main>
  );
}
