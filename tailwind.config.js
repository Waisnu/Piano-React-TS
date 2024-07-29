/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // You can define additional custom colors here if needed
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      'sunset',
      'dracula',
      'cupcake',
    ],
  },
};
