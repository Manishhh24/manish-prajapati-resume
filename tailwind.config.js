/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx, ts, mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        libreBaskerVille: ['Libre Baskerville', 'serif'],
        sourceCodePro: ['Source Code Pro', 'monospace'],
        ysabeauOffice: ['Ysabeau Office', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif']
      },
      screens:{
        xxs:'343px',
        xs:'576px',
        smd:'824px'
      }
    },
  },
  plugins: [],
}
