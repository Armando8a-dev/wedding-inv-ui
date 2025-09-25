import React from 'react';
import BG from "../assets/BG4.jpg";

const Family = () => {
    return (
        <div id="Family" className="w-full h-screen relative">
            <img className="top-0 left-0 w-full h-screen object-cover" src={BG} alt="/" loading="lazy"/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white font-secondary">
                <div className="max-w-[1100px] md:w-[550px] mx-auto flex flex-col justify-center items-center rounded-3xl">
                    <div className="max-w-[320px] md:max-w-[640px] text-3xl text-center tracking-[.1rem] drop-shadow-2xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold">
                            Con la Bendición de Nuestros Padres
                        </h1>
                    </div>
                    <div className="mt-10 max-w-[320px] md:max-w-[640px] text-[1.3rem] text-center">
                        <h1 className="mb-2 text-3xl md:text-5xl font-[600]">
                            Padres de ella:
                        </h1>
                        <p className="mb-1 text-3xl">
                            M. Verónica González Castro
                        </p>
                        <p className="mb-6 text-3xl">
                            Heriberto Mendoza Serrato
                        </p>
                        <h1 className="mb-2 text-3xl md:text-5xl font-[600]">
                            Padres de él:
                        </h1>
                        <p className="mb-1 text-3xl">
                            Leticia Ferretiz Hernández
                        </p>
                        <p className="mb-6 text-3xl">
                            Jose Luis Alvarado Garcia <span className="font-extrabold">†</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Family;