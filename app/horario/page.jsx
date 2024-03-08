"use client";

import BackgroundVideo from "@/components/BackgroundVideo";

export default function Placeholder() {
    const date = new Date();
    const countdown = 27 - date.getDate();

    return (
        <BackgroundVideo blur={2} videoSource={"/PascoaJovem2024.mp4"}>
            <div className="flex flex-col items-center w-full justify-between px-4 gap-10 items-center gap">
                <span className="text-4xl"> Ainda não começou a Páscoa Jovem </span>
                <span className="text-4xl"> Inscreve-te e volta daqui a {countdown} dias. </span>
            </div>
        </BackgroundVideo>
    );
}