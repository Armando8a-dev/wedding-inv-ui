import React from 'react';
import T1 from "../assets/T1.svg";
import T3 from "../assets/T3.svg";
import T4 from "../assets/T4.svg";
import T5 from "../assets/T5.svg";
import T6 from "../assets/T6.svg";
import T7 from "../assets/T7.svg";
import T8 from "../assets/T8.svg";
import T9 from "../assets/T9.svg";
import BG from "../assets/BG.jpg";

const Timeline = () => {
    return (
        <div id="Timeline" className="w-full h-[1200px] relative">
            <img className="top-0 left-0 w-full h-full object-cover" src={BG} alt="/" loading="lazy"/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-full"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white font-primary">
                <div className="max-w-[1100px] mt-16 mb-10 mx-auto flex flex-col justify-center items-center">
                    <div className="max-w-[320px] text-4xl text-center tracking-[.1rem] drop-shadow-2xl">
                        <h1>
                            Minuto a Minuto
                        </h1>
                    </div>
                </div>
                <div className="mb-16 text-[1.25rem] md:text-2xl grid grid-cols-2 text-center justify-center items-center">
                    <div className="grid grid-rows-1">
                        <div className="flex flex-row justify-end items-center gap-2 pr-3 sm:pr-10">
                            <img className="w-14 h-14" src={T3} alt="/" loading="lazy"/>
                            <div className="w-20 lg:w-40">
                                <h1>Ceremonia Civil</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 border-l-4 border-black">
                        <div className="flex flex-row justify-start items-center gap-2 pl-3 sm:pl-10 pt-40">
                            <img className="w-14 h-14" src={T1} alt="/" loading="lazy"/>
                            <div className="w-20 lg:w-40">
                                <h1>Ceremonia Religiosa</h1>
                                <p className="mt-2">07:00 p.m.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1">
                        <div className="flex flex-row justify-end items-center gap-2 pr-3 sm:pr-10">
                            <img className="w-14 h-14" src={T4} alt="/" loading="lazy"/>
                            <div className="w-20 lg:w-40">
                                <h1>Evento Social</h1>
                                <p className="mt-2">08:30 p.m.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 border-l-4 border-black">
                        <div className="flex flex-row justify-start items-center gap-2 pl-3 sm:pl-10 pt-40">
                            <img className="w-14 h-14" src={T5} alt="/" loading="lazy"/>
                            <div className="w-20 lg:w-40">
                                <h1>Cena</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1">
                        <div className="flex flex-row justify-end items-center gap-2 pr-3 sm:pr-10">
                            <img className="w-14 h-14" src={T6} alt="/" loading="lazy"/>
                            <div className="w-20 lg:w-40">
                                <h1>Primer Baile</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 border-l-4 border-black">
                        <div className="flex flex-row justify-start items-center gap-2 pl-3 sm:pl-10 pt-40">
                            <img className="w-14 h-14" src={T7} alt="/" loading="lazy"/>
                            <div className="w-20 lg:w-40">
                                <h1>Ronda de Shots</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1">
                        <div className="flex flex-row justify-end items-center gap-2 pr-3 sm:pr-10">
                            <img className="w-14 h-14" src={T8} alt="/" loading="lazy"/>
                            <div className="w-20 lg:w-40">
                                <h1>Ramo & Liga</h1>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 border-l-4 border-black">
                        <div className="flex flex-row justify-start items-center gap-2 pl-3 sm:pl-10 pt-40">
                            <img className="w-14 h-14" src={T9} alt="/" loading="lazy"/>
                            <div className="w-20 lg:w-40">
                                <h1>Fin del Evento</h1>
                                <p className="mt-2">01:30 a.m.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1">
                        <div className="flex flex-row justify-end items-center gap-2 pr-3 sm:pr-10">
                            <div className="w-20 lg:w-40">
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 border-l-4 border-black">
                        <div className="flex flex-row justify-start items-center gap-2 pl-3 sm:pl-10 pt-40">
                            <div className="w-20 lg:w-40">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;