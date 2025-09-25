import React from 'react';
import DL84 from '../assets/D&L84.jpg';

const Event = () => {
    return (
        <div id="Event" className="w-full h-[400px]">
            <div className="w-full h-[400px] relative">
                <img className="top-0 left-0 w-full h-full object-cover object-bottom" src={DL84} alt="/" loading="lazy"/>
                <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white font-primary">
                    <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center text-center">
                        <h1 className="text-3xl uppercase tracking-[.1rem] drop-shadow-2xl">
                            Código de vestimenta
                        </h1>
                        <p className="mt-20 text-3xl font-extralight uppercase tracking-[1.5rem] drop-shadow-2xl">
                            Riguroso Formal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;