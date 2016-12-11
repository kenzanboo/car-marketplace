import {
  white,
  red200,
  grey50,
  grey100,
  grey200,
  cyan500,
  green500,
  teal600,
  grey600,
  grey900,
  grey300,
  blueGrey400,
  blueGrey800,
} from '../node_modules/material-ui/styles/colors';
const BLACK = 'rgb(29,31,31)';

export const V = { // Variables
  colors: {
    primary: cyan500,
    secondary: green500,
    white,
    fontLight: grey600,
    fontPrimary: grey900,
    fontPrimaryDarkBG: grey100,
    fontLightDarkBG: grey600,
    borderColor: grey300,
    darkBackground: blueGrey800,
    lessDarkBackground: blueGrey400,
    lightBackground: teal600,
    whiteGreyBackground: grey50,
    lightGreyBackground: grey200,
    red: red200,
    black: BLACK,
  },
  filterWidth: 300,
  filterMargin: 32,
  maxWidth: 1040,
  mainContentWidth: 640,
  fontSmall: 14,
  fontMed: 16,
  fontLarge: 20,
  fontXLarge: 26,
  fontHuge: 36,
  spacingTiny: 6,
  spacingSmall: 12,
  spacing: 24,
  spacingLarge: 48,
  spacingHuge: 96,
  fontWeightHeavy: 700,
  fontWeightMedium: 500,
  fontWeightLight: 300,
  listImageHeight: 180,
  listImageWidth: 240,
  listImageHeightSmall: 135,
  listImageWidthSmall: 180,
};

export const S = { // styles
  inlineBlock: {
    display: 'inline-block',
  },
  container: {
    margin: '0 auto',
    maxWidth: V.maxWidth,
  },
  lineThrough: { textDecoration: 'line-through' },
  bordered: { border: `1px solid ${V.colors.borderColor}` },
  materialUICard: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: '#ffffff',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    boxSizing: 'border-box',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12)',
    borderRadius: 2,
    zIndex: 1,
  },
};

export const M = { // Media queries
  smallMin: '@media (min-width: 480px)',
  smallMax: '@media (max-width: 480px)',
  mediumMin: '@media (min-width: 768px)',
  mediumMax: '@media (max-width: 768px)', // 768 is default ipad width in vertical hold
};
