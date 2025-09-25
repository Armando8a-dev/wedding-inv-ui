import React from 'react';
import Slider from "./gallery/Slider";
import Video from "../video/video.mp4"

const Gallery = () => {
    return (
        <div id="Gallery" className="w-full h-full relative">
            <div className="w-full h-[240px] relative mb-5">
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-black font-primary">
                    <div className="max-w-[320px] md:max-w-[640px] mx-auto flex flex-col justify-center items-center">
                        <h1 className="text-3xl text-center uppercase tracking-[.1rem] drop-shadow-2xl mb-5">
                            Nuestra Galería
                        </h1>
                        <p className="text-[1.3rem] text-center font-extralight">
                            Puedes cerrar los ojos a la realidad pero no a los recuerdos
                        </p>
                    </div>
                </div>
            </div>
            <Slider/>
            <div className="w-full h-[440px] md:h-[640px] relative -z-10">
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-black p-5">
                    <div className="max-w-[320px] md:max-w-[640px] mx-auto flex flex-col justify-center items-center overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <video className="top-0 left-0 object-cover object-center" src={Video} autoPlay muted loop controls/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;