/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Rutas de tus archivos en Next.js
    './components/**/*.{js,ts,jsx,tsx}', // Ruta a tus componentes
    './app/**/*.{js,ts,jsx,tsx}', // Ruta a tu carpeta 'src/app'
    './stories/**/*.{js,ts,jsx,tsx}', // Ruta a tus archivos de Storybook
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};