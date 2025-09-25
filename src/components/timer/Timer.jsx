import React from 'react';

const Timer = ({value, name}) => (
    <div className="flex flex-col items-center gap-[1.5rem]">
        <div
            className="relative inline-flex flex-col h-[1.85em] w-full min-w-[75px] sm:min-w-[100px] md:min-w-[150px] text-[1.75rem] sm:text-[3rem] md:text-[5rem]">
            <div className="relative h-[50%] bg-white/20 rounded-lg">
                <div
                    className="relative h-full px-[.25em] pb-[0em] pt-[.425em] brightness-[83%] overflow-hidden leading-none rounded-t-[.25rem] sm:rounded-t-md text-center w-full">
                    {value}
                </div>
                <div
                    className="absolute text-white top-0 inset-x-0 h-full px-[.25em] pb-[0em] pt-[.425em] brightness-[83%] overflow-hidden leading-none rounded-t-[.25rem] sm:rounded-t-md text-center w-full">
                    {value}
                </div>
            </div>
            <div className="h-[50%] bg-white/20 rounded-lg">
                <div
                    className="relative flex justify-center items-end h-full px-[.25em] pt-[0em] pb-[.425em] overflow-hidden leading-none rounded-b-[.25rem] sm:rounded-b-md text-center w-full">
                    {value}
                </div>
                <div
                    className="absolute text-white top-0 inset-x-0 flex justify-center items-end h-full px-[.25em] pt-[0em] pb-[.425em]  overflow-hidden leading-none rounded-b-[.25rem] sm:rounded-b-md text-center w-full">
                    {value}
                </div>
            </div>
        </div>
        <h2 className="text-white font-semibold uppercase tracking-[.1rem] text-[.8rem] lg:text-[1.6rem] font-primary">
            {name}
        </h2>
    </div>
);

export default Timer;
