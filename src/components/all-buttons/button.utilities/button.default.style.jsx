import styled from 'styled-components';

import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from './button.types';

export const DefaultButtonStyles = styled.button`
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  height: fit-content;

  ${({
    options: {
      backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE,
      textcolor = BUTTON_COLORS.WHITE,
      uppercase = BUTTON_TEXT_STYLE.UPPERCASE,
      width = BUTTON_WIDTH.FIT,
      borderRadius = BORDER_RADIUS.DEFAULT,
      size = BUTTON_SIZES.DEFAULT,
    },
  }) => `
    background-color: rgba(${backgroundcolor});
    color: rgba(${textcolor});
    text-transform: ${uppercase};
    width: ${width};
    border-radius: ${borderRadius};
    ${size};
  `}
`;
