/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wonderdogs: {
          primary: '#0047AB',      // 진한 파랑
          secondary: '#00A3E0',    // 밝은 파랑  
          accent: '#FFD700',       // 골드/노랑
          dark: '#001F3F',         // 다크 네이비
          light: '#E6F2FF',        // 연한 파랑
        },
      },
      backgroundImage: {
        'wonderdogs-gradient': 'linear-gradient(135deg, #0047AB 0%, #00A3E0 100%)',
      },
    },
  },
  plugins: [],
}
