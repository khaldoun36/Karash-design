const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f9f4ed',
                    100: '#f1e4d0',
                    200: '#e4c9a4',
                    300: '#d4a670',
                    400: '#c68749',
                    500: '#b06f39',
                    600: '#9d5931',
                    700: '#7e432a',
                    800: '#6a3729',
                    900: '#5b3128',
                    950: '#341814',
                },

                secondary: colors.zinc,
            },
        },
    },
    keyframes: {
        slideDown: {
            from: { height: 0 },
            to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: 0 },
        },
    },
    animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    },

    plugins: [],
};
