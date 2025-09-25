import React from 'react';
import DL64 from "../assets/D&L64.jpg";
import DL67 from "../assets/D&L67.jpg";

const Places = () => {

    function redirect() {
        window.open('https://goo.gl/maps/DmBVCyLyLa7n4QE39', '_blank');
    }

    return (
        <div id="Family" className="w-full h-full relative">
            <div className="w-full h-[640px] relative">
                <img className="top-0 left-0 w-full h-full object-cover" src={DL67} alt="/" loading="lazy"/>
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-black font-primary">
                    <div className="max-w-[1100px] bg-white/80 px-3 py-3 mx-auto flex flex-col justify-center items-center rounded-3xl">
                        <div className="max-w-[320px] md:max-w-[640px] text-3xl text-center tracking-[.1rem] drop-shadow-2xl">
                            <h1>
                                Ceremonia Religiosa
                            </h1>
                        </div>
                        <div className="mt-10 max-w-[320px] md:max-w-[640px] text-[1.3rem] text-center tracking-[.1rem] font-extralight">
                            <p className="text-2xl font-[400]">
                                07:00 p.m.
                            </p>
                            <h1 className="mt-5 text-2xl font-[400] uppercase">
                                Capilla Sagrada Familia
                            </h1>
                            <p className="mt-5">
                                Av. Las Huertas #951 Ote, Santa Cataria, Nuevo León, México
                            </p>
                        </div>
                        <button className="mt-5 border-black hover:text-black hover:bg-black/20 uppercase"
                                onClick={redirect}>
                            Cómo Llegar
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-[160px] relative">
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-black font-secondary">
                    <div className="max-w-[320px] md:max-w-[640px] mx-auto flex flex-col justify-center items-center">
                        <p className="text-2xl md:text-4xl text-center font-extralight">
                            Los momentos más importantes de la vida se convierten en
                            inolvidables cuando los compartes con quienes más amas.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full h-[640px] relative">
                <img className="top-0 left-0 w-full h-full object-cover" src={DL64} alt="/" loading="lazy"/>
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-black font-primary">
                    <div className="max-w-[1100px] bg-white/80 p-3 mx-auto flex flex-col justify-center items-center rounded-3xl">
                        <div className="max-w-[320px] md:max-w-[640px] text-3xl text-center tracking-[.1rem] drop-shadow-2xl">
                            <h1>
                                Evento Social
                            </h1>
                        </div>
                        <div className="mt-10 max-w-[320px] md:max-w-[640px] text-[1.3rem] text-center tracking-[.1rem] font-extralight">
                            <p className="text-2xl font-[400]">
                                08:30 p.m.
                            </p>
                            <h1 className="mt-5 text-2xl font-[400] uppercase">
                                Salón Jardín Legado Eventos
                            </h1>
                            <p className="mt-5">
                                Av. Las Huertas #951 Ote, Santa Cataria, Nuevo León, México
                            </p>
                        </div>
                        <button className="mt-5 border-black hover:text-black hover:bg-black/20 uppercase"
                                onClick={redirect}>
                            Cómo Llegar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Places;