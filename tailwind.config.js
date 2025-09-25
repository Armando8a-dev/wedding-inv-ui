/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            primary: ['Cormorant Garamond', 'cursive'],
            secondary: ['Tangerine', 'cursive']
        },
        extend: {
            animation: {
                'top-flip': 'top-flip 1s ease-in',
                'bottom-flip': 'bottom-flip 1s ease-in'
            },
            keyframes: {
                'top-flip': {
                    '0%': { transform: 'rotateX(0deg)' },
                    '100%': { transform: 'rotateX(-180deg)' }
                },
                'bottom-flip': {
                    '0%': { transform: 'rotateX(180deg)' },
                    '100%': { transform: 'rotateX(0deg)' }
                }
            }
        },
    },
    plugins: [],
}

