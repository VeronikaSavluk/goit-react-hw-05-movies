export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    white: '#fff',
    blue: '#24478f',
    light: '#f2f2f2',
    dark: '#212121',
    primary: '#49a09d',
    mainBackground: ['linear-gradient(to top, #abbaab, #fff)'],
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