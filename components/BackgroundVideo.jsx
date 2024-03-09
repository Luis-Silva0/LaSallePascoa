"use client";
import React from 'react';

const BackgroundVideo = ({children}) => {
  return (
    <>
      <div className='relative overflow-hidden w-full h-[60vh] md:h-[70vh] items-center flex'>
        {children}
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
  )
}

export default BackgroundVideo