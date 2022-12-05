/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './modules/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'royal-blue': '#002BE7',
                'hot-pink': '#FF1C5B',
                'ice-blue': '#19D5FE',
                'zing-green': '#D4FA52',
                'light-royal-blue': '#5776FF',
                'light-hot-pink': '#EF5571',
                'light-ice-blue': '#69CAF0',
                'light-zing-green': '#E2FC89',
                'ice-blue-tone': '#C6F4FF'
            }
        }
    },
    plugins: [require('@tailwindcss/forms')],
    darkMode: 'class'
}
