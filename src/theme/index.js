import { css } from 'styled-components';

export const fonts = css`-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif`;

const pallete = {
  alabaster: '#fafafa',
  dustyGray: '#999',
  gallery: '#efefef',
  mineShaft: '#262626',
  silver: '#c7c7c7',
  white: '#fff',
};

const values = {
  maxWidth: '1010px',
  maxSecondaryWidth: '935px',
  breakpoints: {
    small: '768px',
    big: '1024px',
  },
};

export default {
  pallete,
  values,
};
