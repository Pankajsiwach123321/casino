/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        'anten': 'Anton',
        'inter': 'Inter'
      },
      backgroundSize: {
        '100%': '100% 100%'
      },
      backgroundColor: {
        'radial': 'radial-gradient(48.51% 51.68% at 50.39% 55.02%, #B8B8B8 0%, #BCBCBC 23%, #C9C9C9 47%, #DEDEDE 72%, #FCFCFC 98%, #FFFFFF 100%)'
      },
      animation: {
        'coin': 'spin 30s linear infinite'
      }
    },
  },
  plugins: [],
}

