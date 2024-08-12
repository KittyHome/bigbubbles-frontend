/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #9378F3 0%, #5A4AD2 100%)',
        'stress-gradient': 'linear-gradient(to bottom, #4EC6DD 0%, #4285F4 100%)',
        'salt-card-gradient': 'linear-gradient(to bottom, #333956 0%, #8B72EE 100%)',
      },
      colors: {
        primary: {
          background: '#282D44',
          placeholder: '#485076',
          border: '#525C88',
          text: '#9378F3',
          avatar: '#FEC578',
          badge: '#61CAFF',
          saltcard: '#2C324D',
        },
        secondary: {
          background: '#383E5E',
        },
        dark: {
          background: '#1F2336',
          light: '#424A6E',
        },
      },
      dropShadow: {
        button: '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        saltcard: '0px 0px 32px -9px #8B71EEC4',
      },
      fontFamily: {
        Poppins: 'Poppins',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};
