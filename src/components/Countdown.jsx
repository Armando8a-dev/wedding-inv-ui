import React from 'react';
import DL110 from "../assets/D&L110.jpg";
import Timer from './timer/Timer';
import useTimer from './timer/useTimer';

const Countdown = () => {
    const [days, hours, minutes, seconds] = useTimer(new Date(2023, 9, 27, 19, 0, 0, 0).getTime());
    return (
        <div id="Countdown" className="w-full h-screen relative">
            <img className="top-0 left-0 w-full h-screen object-cover" src={DL110} alt="/" loading="lazy"/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
            <div className="absolute top-0 pb-44 lg:pb-40 w-full h-screen flex space-x-2 lg:space-x-7 justify-center items-center">
                <Timer value={days} name="Días"/>
                <Timer value={hours} name="Horas"/>
                <Timer value={minutes} name="Minutos"/>
                <Timer value={seconds} name="Segundos"/>
            </div>
        </div>
    );
};

export default Countdown;