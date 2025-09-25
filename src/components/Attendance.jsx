import React, {useState} from 'react';

const Attendance = () => {

    const data = [{
        code: 'BDYLQRTY',
        url: 'https://gforms.app/r/PPjNG0J'
    }, {
        code: 'BDYLKHTF',
        url: 'https://gforms.app/r/Y7Rb8Bk'
    }, {
        code: 'BDYLZFWU',
        url: 'https://gforms.app/Ie9P4vA'
    }, {
        code: 'BDYLSHTX',
        url: 'https://gforms.app/DkRFgwQ'
    }, {
        code: 'BDYLPVXF',
        url: 'https://gforms.app/TeVJejG'
    }, {
        code: 'BDYLKSQN',
        url: 'https://gforms.app/bB8AePy'
    }, {
        code: 'BDYLQASD',
        url: 'https://gforms.app/Y7Rb8Bk'
    }, {
        code: 'BDYLJHGF',
        url: 'https://gforms.app/DkMJAhu'
    }, {
        code: 'BDYLCBHU',
        url: 'https://gforms.app/z2D1hG3'
    }, {
        code: 'BDYLXDFA',
        url: 'https://gforms.app/r/Vctr9VB'
    }, {
        code: 'BDYLPQKH',
        url: 'https://gforms.app/tN8yhnp'
    }];

    const [code, setCode] = useState('');

    function change(event) {
        setCode(event.target.value.replace(/[^a-zA-Z\d]/ig, '').toUpperCase());
    }

    function close() {
        document.getElementById('Attendance').classList.add('hidden');
        document.getElementById('Attendance').classList.remove('flex');
    }

    function confirm() {
        var confirm = data.find(element => {
            return element.code === code;
        })
        if (confirm == null) {
            alert('El código proporcionado es incorrecto, favor de ingresar un código válido');
        } else {
            setCode('');
            window.location.href = confirm.url;
        }
    }

    return (
        <div id="Attendance" className="hidden fixed w-full h-full z-20">
            <div className="top-0 left-0 w-screen h-screen bg-black/70 justify-center items-center">
                <div className="fixed top-6 right-8 text-white text-5xl font-bold cursor-pointer z-30" onClick={close}>
                    &times;
                </div>
                <div className="fixed top-0 w-full h-full flex flex-col justify-center text-black z-20">
                    <div
                        className="max-w-[1100px] md:w-[550px] bg-white/60 p-3 mx-auto flex flex-col justify-center items-center rounded-3xl">
                        <div
                            className="max-w-[320px] md:max-w-[640px] text-3xl text-center tracking-[.1rem] drop-shadow-2xl p-10">
                            <p className="mb-2 lg:mb-4 text-[1.3rem] lg:text-2xl">
                                ¡Favor de ingresar el código proporcionado, para confirmar tu asistencia!
                            </p>
                            <div className="flex flex-col justify-center items-center">
                                <input className="w-52 mb-2 lg:mb-4 text-center" type="text" minLength="8"
                                       maxLength="8" placeholder="D3BWML1U" value={code}
                                       onChange={event => change(event)}/>
                                <button className="w-52 py-0 px-0 hover:text-black hover:bg-white/50" onClick={confirm}>
                                    Aceptar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;