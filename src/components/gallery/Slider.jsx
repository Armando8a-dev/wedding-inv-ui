import React from 'react';
import DL4 from '../../assets/D&L4.jpg';
import DL7 from '../../assets/D&L7.jpg';
import DL33 from '../../assets/D&L33.jpg';
import DL35 from '../../assets/D&L35.jpg';
import DL37 from '../../assets/D&L37.jpg';
import DL38 from '../../assets/D&L38.jpg';
import DL50 from '../../assets/D&L50.jpg';
import DL51 from '../../assets/D&L51.jpg';
import DL79 from '../../assets/D&L79.jpg';
import DL112 from '../../assets/D&L112.jpg';

const Slider = () => {
    const data = [{
        id: 1,
        url: DL4
    }, {
        id: 2,
        url: DL7
    }, {
        id: 3,
        url: DL33
    }, {
        id: 4,
        url: DL35
    }, {
        id: 5,
        url: DL37
    }, {
        id: 6,
        url: DL38
    }, {
        id: 7,
        url: DL50
    }, {
        id: 8,
        url: DL51
    }, {
        id: 9,
        url: DL79
    }, {
        id: 10,
        url: DL112
    }];

    function show(src) {
        document.getElementById('modal').classList.remove('hidden');
        document.getElementById('modal').classList.add('flex');
        document.getElementById('image').src = src;
    }

    function close() {
        document.getElementById('modal').classList.add('hidden');
        document.getElementById('modal').classList.remove('flex');
    }

    return (
        <div className="w-full h-full">
            <div className="flex overflow-x-scroll pb-10 hidden-scroll-bar">
                <div className="flex flex-nowrap">
                    {
                        data.map((item) => (
                            <div key={item.id} className="inline-block px-3">
                                <div
                                    className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                    <img className="w-64 h-64 object-cover object-center cursor-pointer" src={item.url}
                                         alt="/" onClick={() => show(item.url)} loading="lazy"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id="modal"
                 className="hidden fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 justify-center items-center">
                <div className="fixed top-6 right-8 text-white text-5xl font-bold cursor-pointer" onClick={close}>
                    &times;
                </div>
                <img id="image" className="max-w-[800px] max-h-[600px] object-cover" alt="/" loading="lazy"/>
            </div>
        </div>
    );
};

export default Slider;