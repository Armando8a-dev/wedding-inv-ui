import React from 'react';
import DL33 from "../assets/D&L33.jpg";
import QR from '../assets/QR.svg';

const Contact = () => {

    function sendMessage() {
        window.open('https://wa.me/528126307448/?text=%C2%A1Hola+Debanhi+%26+Luis%21%2C+los+he+contactado+por+medio+de+la+p%C3%A1gina+de+su+boda.', '_blank');
    }

    function show() {
        document.getElementById('Attendance').classList.remove('hidden');
        document.getElementById('Attendance').classList.add('flex');
    }

    return (
        <div id="Contact" className="w-full h-screen">
            <div className="max-md:hidden">
                <div className="w-1/2 h-screen inline-block relative">
                    <img className="top-0 left-0 w-full h-screen object-cover" src={DL33} alt="/" loading="lazy"/>
                    <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
                    <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                        <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center text-center">
                            <h1 className="text-3xl uppercase tracking-[.1rem] drop-shadow-2xl">
                                ¡Confirma tu<br/>asistencia!
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-screen inline-block relative">
                    <div className="absolute top-0 w-full h-full flex flex-col justify-center text-black bg-white">
                        <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center text-center">
                            <div
                                className="max-w-[320px] md:max-w-[640px] text-center tracking-[.1rem] drop-shadow-2xl">
                                <h1 className="text-3xl uppercase tracking-[.1rem] drop-shadow-2xl">
                                    Contacta a<br/>Debanhi & Luis
                                </h1>
                                <p className="mt-4 px-8 font-extralight">
                                    Envía un mensaje por Whatsapp escaneando el código o en el botón "Enviar Mensaje"
                                </p>
                            </div>
                            <img className="mt-6 w-40 h-40" src={QR} alt="/" loading="lazy"/>
                            <button className="mt-6 px-10 py-2 hover:text-white hover:bg-black/50" onClick={show}>
                                Confirma Asistencia
                            </button>
                            <button className="mt-6 px-5 py-2 hover:text-white hover:bg-black/50" onClick={sendMessage}>
                                Enviar Mensaje
                            </button>
                            <p className="mt-6 px-8 text-[1.75rem] font-bold uppercase tracking-[.1rem] drop-shadow-2xl">
                                RESPETUOSAMENTE<br/>¡NO NIÑOS!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                <div className="w-full h-[50vh] relative">
                    <img className="top-0 left-0 w-full h-full object-cover" src={DL33} alt="/" loading="lazy"/>
                    <div className="bg-black/30 absolute top-0 left-0 w-full h-full"></div>
                    <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                        <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center text-center">
                            <h1 className="text-3xl uppercase tracking-[.1rem] drop-shadow-2xl">
                                ¡Confirma tu<br/>asistencia!
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[50vh] relative">
                    <div className="absolute top-0 w-full h-full flex flex-col justify-center text-black bg-white">
                        <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center text-center">
                            <div
                                className="max-w-[320px] md:max-w-[640px] text-center tracking-[.1rem] drop-shadow-2xl">
                                <h1 className="text-2xl uppercase tracking-[.1rem] drop-shadow-2xl">
                                    Contacta a<br/>Debanhi & Luis
                                </h1>
                                <p className="mt-1 sm:mt-4 px-1 font-extralight">
                                    Envía un mensaje por Whatsapp escaneando el código o en el botón "Enviar Mensaje"
                                </p>
                            </div>
                            <div
                                className="mt-1 sm:mt-4 max-w-[320px] md:max-w-[640px] grid grid-flow-col gap-x-2 justify-center items-center">
                                <img className="w-24 h-24" src={QR} alt="/" loading="lazy"/>
                                <div className="flex flex-col justify-center items-center">
                                    <button className="w-48 hover:text-white hover:bg-black/50" onClick={show}>
                                        Confirma Asistencia
                                    </button>
                                    <button className="mt-1 w-48 hover:text-white hover:bg-black/50"
                                            onClick={sendMessage}>Enviar Mensaje
                                    </button>
                                </div>
                            </div>
                            <p className="mt-1 sm:mt-4 px-1 text-[1.75rem] font-bold uppercase tracking-[.1rem] drop-shadow-2xl">
                                RESPETUOSAMENTE ¡NO NIÑOS!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;