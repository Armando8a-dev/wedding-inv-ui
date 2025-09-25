import React, {useState} from 'react';
import Music from '../../music/music.mp3';
import {BsPauseBtn, BsPlayBtn} from "react-icons/bs";

const Sound = () => {
    const [audio] = useState(new Audio(Music));

    function playSound() {
        audio.load();
        audio.play();
        audio.loop = true;
        audio.volume = 0.1;
        document.getElementById('play').classList.add('hidden');
        document.getElementById('pause').classList.remove('hidden');
    }

    function pauseSound() {
        audio.pause();
        document.getElementById('play').classList.remove('hidden');
        document.getElementById('pause').classList.add('hidden');
    }

    return (
        <div id="Sound" className="absolute top-3 left-[10%] z-10 text-white text-5xl">
            <div id="play" className="cursor-pointer" onClick={playSound}>
                <BsPlayBtn className='hover:text-white/50'/>
            </div>
            <div id="pause" className="cursor-pointer hidden" onClick={pauseSound}>
                <BsPauseBtn className='hover:text-white/50'/>
            </div>
        </div>
    );
};

export default Sound;