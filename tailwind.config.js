/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            scale: {
                98: ".98",
            },
            maxHeight: {
                fmin: "calc(100vh - 17.6rem)",
                fmax: "calc(100vh - 4.6rem)",
            },
            boxShadow: {
                xs: "0 8px 8px rgba(0, 0, 0, 0.3)",
            },
        },
    },
    plugins: [],
};
