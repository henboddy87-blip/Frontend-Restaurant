tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#ff9d42',
        'primary-light': '#ffc98d',
        accent: '#ffb76b',
        'bg-dark': '#0b0b0b',
        'bg-card': '#181818',
      },
      fontFamily: {
        battambang: ['Battambang', 'Noto Serif Khmer', 'serif'],
        'noto-khmer': ['Noto Serif Khmer', 'Battambang', 'serif'],
      },
      animation: {
        'loader-hide': 'loaderHide 2.5s ease forwards',
        'page-intro': 'pageIntro 0.9s ease 0.4s forwards',
        'ring-spin': 'ringSpin 1.5s linear infinite',
      },
      keyframes: {
        loaderHide: {
          '0%, 70%': { opacity: '1', visibility: 'visible' },
          '90%, 100%': { opacity: '0', visibility: 'hidden' },
        },
        pageIntro: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        ringSpin: {
          to: { transform: 'rotate(360deg)' },
        },
        heroSlide: {
          '0%': { opacity: '0', transform: 'scale(1.08)' },
          '8%': { opacity: '1' },
          '20%': { opacity: '1', transform: 'scale(1)' },
          '28%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
}
