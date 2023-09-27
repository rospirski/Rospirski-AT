/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        1: ['Montserrat'],
        2: ['Inter'],
      },
      colors: {
        black1: 'var(--color-black1)',
        black2: 'var(--color-black2)',
        black3: 'var(--color-black3)',
        golden: 'var(--color-golden)',
        golden2: 'var(--color-golden2)',
        green: 'var(--color-green)',
        white: 'var(--color-white)',
        indigo: 'var(--color-indigo)',
        amber: 'var(--color-amber)',
      },
    },
  },
  plugins: [],
}
