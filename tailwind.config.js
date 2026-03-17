/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        saffron: '#C17817',
        maroon: '#6B1F2A',
        chai: '#8B5E3C',
        cream: '#F7F1E8',
      },
      boxShadow: {
        glow: '0 10px 30px rgba(193, 120, 23, 0.25)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 10%, rgba(193,120,23,0.25), transparent 35%), radial-gradient(circle at 80% 15%, rgba(107,31,42,0.2), transparent 30%), linear-gradient(145deg, #2e1d12 0%, #1a120c 60%, #120d09 100%)',
      },
    },
  },
  plugins: [],
}
