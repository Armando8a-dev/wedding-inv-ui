import { useEffect, useState } from 'react';

const useTimer = (date) => {
    const countdownDate = new Date(date).getTime();

    const [countdown, setCountdown] = useState(
        Math.max(countdownDate - new Date().getTime(), 0)
    );

    useEffect(() => {
        const interval = setInterval(() => {
            const timeLeft = countdownDate - new Date().getTime();
            setCountdown(Math.max(timeLeft, 0)); // Evitar valores negativos
        }, 1000);

        return () => clearInterval(interval);
    }, [countdownDate]);

    return getValues(countdown);
};

const getValues = (countdown) => {
    if (countdown <= 0) {
        // Si el tiempo ha terminado, devolver ceros
        return ['00', '00', '00', '00'];
    }

    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    return [
        leftPadZero(days, 2),
        leftPadZero(hours, 2),
        leftPadZero(minutes, 2),
        leftPadZero(seconds, 2),
    ];
};

const leftPadZero = (num, length) => {
    return String(num).padStart(length, '0');
};

export default useTimer;
