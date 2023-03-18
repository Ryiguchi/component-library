import styled from 'styled-components';
import { Default, getColor, Large, Small, XLarge } from './button.mixins';

import {
  BORDER_RADIUS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from './button.types';

export const DefaultButtonStyles = styled.button`
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  height: fit-content;

  ${({ textStyle = BUTTON_TEXT_STYLE.UPPERCASE, width = BUTTON_WIDTH.FIT }) => `
    text-transform: ${textStyle};
    width: ${width};
  `}

  ${({ size }) => {
    if (size === BUTTON_SIZES.SMALL) return Small;
    if (size === BUTTON_SIZES.DEFAULT) return Default;
    if (size === BUTTON_SIZES.LARGE) return Large;
    if (size === BUTTON_SIZES.X_LARGE) return XLarge;
  }};

  border-radius: ${({ borderRadius }) => {
    if (borderRadius === BORDER_RADIUS.NONE) return 'none';
    if (borderRadius === BORDER_RADIUS.SMALL) return '5px';
    if (borderRadius === BORDER_RADIUS.DEFAULT) return '15px';
    if (borderRadius === BORDER_RADIUS.LARGE) return '25px';
    if (borderRadius === BORDER_RADIUS.MAX) return '100px';
  }};

  background-color: rgba(${({ backgroundColor }) => getColor(backgroundColor)});

  color: rgba(${({ textColor }) => getColor(textColor)});
`;
