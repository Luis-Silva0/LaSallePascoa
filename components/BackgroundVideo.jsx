import React from 'react';

const BackgroundVideo = ({ videoSource, children}) => {
  return (
    <>
      <div className='relative overflow-hidden w-full h-[50%]'>
        <video width={1920} height={1080} autoPlay="autoplay" loop="loop" muted id="video-id" className='w-full' >
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        {children}
      </div>
      <span id="video-bottom"></span>
    </>
  )
}

export default BackgroundVideo