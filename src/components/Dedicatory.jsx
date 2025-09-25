import React from 'react';
import DL from "../assets/D&L.svg";
import BG from "../assets/BG.jpg";

const Dedicatory = () => {
    return (
        <div id="Dedicatory" className="w-full h-screen relative">
            <img className="top-0 left-0 w-full h-screen object-cover" src={BG} alt="/" loading="lazy"/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center">
                    <img className="w-[25vh] h-[25vh] object-cover" src={DL} alt="/" loading="lazy"/>
                    <h1 className="mt-10 text-4xl md:text-6xl drop-shadow-2xl font-primary">27 de Octubre 2023</h1>
                    <div className="mt-10 max-w-[320px] lg:max-w-full text-2xl text-center">
                        <p className="mb-2 lg:mb-4 font-primary">
                            "Solo existen dos días en el año en los que nada puede ser hecho.
                            Uno se llama ayer y el otro mañana.
                            Por lo tanto, hoy es el día ideal para amar, crecer y principalmente vivir."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dedicatory;