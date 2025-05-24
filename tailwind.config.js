// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Or any paths where you use Tailwind classes
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        textColorFade: {
          '0%': { color: '#ef4444' },     // red-500
          '50%': { color: '#3b82f6' },    // blue-500
          '100%': { color: '#ef4444' },   // back to red
        },
      },
      animation: {
        textColorFade: 'textColorFade 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
