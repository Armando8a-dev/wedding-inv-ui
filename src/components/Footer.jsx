import React from 'react';
import {Link} from 'react-scroll';
import {GrUp} from 'react-icons/gr';

const Footer = () => {
    return (
        <div id="Footer" className="w-full h-[240px] bg-gray-50">
            <div className="w-full h-full relative">
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-black">
                    <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center text-center">
                        <Link to="Home" activeClass="active" spy={true} smooth={true} duration={500}
                              className="text-6xl cursor-pointer">
                            <GrUp/>
                        </Link>
                        <Link to="Home" activeClass="active" spy={true} smooth={true} duration={500}
                              className="mt-5 text-2xl uppercase tracking-[.1rem] drop-shadow-2xl cursor-pointer">
                            BACK TO TOP
                        </Link>
                        <p className="mt-10 text-[1rem] font-extralight drop-shadow-2xl">
                            © 2023 by Caissas | <a href="https://caissas.com" target="_blank"
                                                    rel="noopener noreferrer">caissas.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;