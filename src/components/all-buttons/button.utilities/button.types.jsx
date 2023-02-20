import { Small, Default, Large, XLarge } from './button.mixins';

export const BUTTON_SIZES = {
  SMALL: Small,
  DEFAULT: Default,
  LARGE: Large,
  X_LARGE: XLarge,
};

export const BUTTON_WIDTH = {
  FIT: 'fit-content',
  STRETCH: '100%',
};

export const BORDER_RADIUS = {
  NONE: 'none',
  SMALL: '5px',
  DEFAULT: '15px',
  LARGE: '25px',
  MAX: '100px',
};

export const BUTTON_COLORS = {
  DARK_BLUE: '60, 64, 198', // rgb(60, 64, 198)
  LIGHT_BLUE: '75, 207, 250', // rgb(75, 207, 250)
  MINT_GREEN: '11, 232, 129', // rgb(11, 232, 129)
  GREEN: '5, 196, 107', // rgb(5, 196, 107)
  HIGHLIGHTER_PINK: '239, 87, 119', // rgb(239, 87, 119)
  SIZZLING_RED: '245, 59, 87', // rgb(245, 59, 87)
  DARK_PERIWINKLE: '87, 95, 207', // rgb(87, 95, 207)
  MEGAMAN_BLUE: '75, 207, 250', //rgb(75, 207, 250)
  TURQUOISE: '52, 231, 228', // rgb(52, 231, 228)
  CHROME_YELLOW: '255, 168, 1', // rgb(255, 168, 1)
  VIBRANT_YELLOW: '255, 211, 42', // rgb(255, 211, 42)
  SUNSET_ORANGE: '255, 94, 87', // rgb(255, 94, 87)
  DARK_GREY: '72, 84, 96', // rgb(72, 84, 96)
  MIDNIGHT_GREY: '30, 39, 46', // rgb(30, 39, 46)
  LIGHT_GREY: '210, 218, 226', // rgb(210, 218, 226)
  ORANGE: '246, 104, 0', // rgb(246, 104, 0)
  WHITE: '255, 255, 255',
  BLACK: '0, 0, 0',
};

export const BUTTON_COLOR_EFFECTS = {
  DARKER: 'darker',
  LIGHTER: 'lighter',
  INVERTED: 'inverted',
};

export const BUTTON_TEXT_STYLE = {
  UPPERCASE: 'uppercase',
  NONE: 'none',
};
