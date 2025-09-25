import React from 'react';
import DL43 from '../assets/D&L43.jpg';
import Sound from "./sound/Sound";

const Home = () => {

    function show() {
        document.getElementById('Attendance').classList.remove('hidden');
        document.getElementById('Attendance').classList.add('flex');
    }

    return (
        <div id="Home" className="w-full h-screen relative">
            <img className="top-0 left-0 w-full h-screen object-cover" src={DL43} alt="/" loading="lazy"/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-end text-white">
                <div className="md:left-[10%] max-w-[1100px] mx-auto absolute p-4">
                    <h1 className="text-5xl md:text-9xl font-bold drop-shadow-2xl font-secondary">Debanhi & Luis</h1>
                    <p className="mt-4 text-3xl md:text-5xl font-secondary">Octubre 27, 2023</p>
                </div>
            </div>
            <Sound/>
            <div className="absolute top-0 w-full h-full flex flex-col justify-start text-white">
                <div className="right-[10%] max-w-[1100px] mx-auto absolute p-4">
                    <button className="hover:text-black hover:bg-white/50" onClick={show}>
                        Asistencia
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;