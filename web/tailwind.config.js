module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
        }
      },
      borderRadius: {
        md: '4px',
      },
      fontFamily:{ 
        Inter: ['Inter'], 
      },
    },
  },
  plugins: [
    require ( '@tailwindcss/forms' ),
    require ( 'tailwind-scrollbar' )
  ],
}
