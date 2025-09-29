import React from 'react';

const Gift = () => {

    const data = [{
        id: 1,
        img: 'https://static.wixstatic.com/media/64c796_24460aa1e75e4f069ed04d2a40935053~mv2.png/v1/fill/w_184,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2560px-Amazon_logo.png',
        content: [{
            id: 1,
            text: 'Número de Mesa de Regalos:'
        }, {
            id: 2,
            text: 'Debanhi & Luis'
        }],
        site: {
            active: true,
            link: 'https://www.amazon.com.mx/'
        }
    }, {
        id: 2,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_de_Banregio.svg/1600px-Logo_de_Banregio.svg.png',
        content: [{
            id: 1,
            text: 'Luis Fernando Alvarado Ferretiz'
        }, {
            id: 2,
            text: 'Clabe: 000000000000000000'
        }],
        site: {
            active: false,
            link: ''
        }
    }];

    function redirect(url) {
        window.open(url, '_blank');
    }

    return (
        <div id="Gift" className="w-full h-full relative bg-[url('assets/D&L48.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="top-0 w-full h-full flex flex-col justify-center text-black">
                <div className="mt-20 mb-20 max-w-[640px] md:w-[550px] mx-auto flex flex-col justify-center items-center bg-white/80 p-8 rounded-3xl">
                    <div className="max-w-[240px] md:max-w-[320px] justify-center text-center">
                        <h1 className="text-3xl drop-shadow-2xl">
                            Mesa de Regalos
                        </h1>
                        <p className="mt-5 text-1xl font-extralight drop-shadow-2xl">
                            El regalo es opcional, pero lo más importante para nosotros, es tu compañía
                        </p>
                    </div>
                    {
                        data.map((item) => (
                            <div key={item.id}
                                 className="mt-20 max-w-[260px] md:max-w-[320px] flex flex-col justify-center items-center text-center">
                                <img className="w-36 h-10" src={item.img} alt="" loading="lazy"/>
                                {
                                    item.content.map((content) => (
                                        <p key={content.id}
                                           className="mt-1 font-light tracking-[.1rem] drop-shadow-2xl">
                                            {content.text}
                                        </p>
                                    ))
                                }
                                {
                                    item.site.active ?
                                        <button onClick={() => redirect(item.site.link)}
                                            className="mt-4 w-44 font-extralight border-black hover:text-black hover:bg-black/20 uppercase">
                                            Ir al sitio
                                        </button>
                                        : null
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Gift;