import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#05d686' },
          clovagreen: { value: '#06CC80' },
          clovapink: { value: '#FF5C76' },
          clovablue: { value: '#3894FF' },
          gray: {
            100: { value: '#F7F7F7' },
            200: { value: '#CCCCCC' },
            300: { value: '#BEBEBE' },
            400: { value: '#999999' },
            500: { value: '#666666' },
            600: { value: '#333333' },
            700: { value: '#000000' },
          },
        },
      },
      keyframes: {
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
