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
        sourceCodePro: ['SourceCodePro', 'monospace']
      },
      screens:{
        xxs:'343px',
        smd:'824px'
      }
    },
  },
  plugins: [],
}
