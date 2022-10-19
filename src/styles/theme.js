export const theme = Object.freeze({
  colors: {
    white: '#fff',
    accent: '#F08080',
    blue: '#24478f',
    grey: '#A9A9A9',
    lightgreen: '#8FBC8F',
    green: '#2F4F4F',
    darkgreen: '#2F4F4F',
    mainBackground: ['linear-gradient(to left, #2F4F4F, #8FBC8F)'],
  },
  fontSizes: {
    small: '10px',
    medium: '14px',
    large: '18px',
    xl: '26px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});