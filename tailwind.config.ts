import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'azul': '#162755',
        'preto': '#333333',
        'azul-claro': '#7BBCFE',
        'azul-bg': '#BEDDFF',
        'cinza': '#737373',
        'cinza-borda': '#E7E7E6'
      },
      fontFamily: {
        'poppins': ['"Poppins", sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
