import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{html,js,ts,vue}',
    './components/**/*.{html,js,ts,vue}',
    './layouts/**/*.{html,js,ts,vue}',
    './lms-runtime/**/*.{html,js,ts,vue}',
  ],
  theme: {
    extend: {
      screens: {
        '6xl': '2560px',
      },
    },
  },
} satisfies Config;
