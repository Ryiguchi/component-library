import styled from 'styled-components';
import {
  Default3DButton,
  getTint,
  large3DButton,
  Small3DButton,
  XLarge3DButton,
} from '../button.utilities/button.mixins';
import { DefaultButtonStyles } from '../button.utilities/button.default.style';
import { BUTTON_COLORS, BUTTON_SIZES } from '../button.utilities/button.types';

export const StyledButton3D = styled(DefaultButtonStyles)`
  ${({ options: { size } }) => {
    if (size === BUTTON_SIZES.SMALL) return Small3DButton;
    if (size === BUTTON_SIZES.DEFAULT) return Default3DButton;
    if (size === BUTTON_SIZES.LARGE) return large3DButton;
    if (size === BUTTON_SIZES.X_LARGE) return XLarge3DButton;
  }}

  ${({ options: { backgroundcolor } }) => `
    box-shadow: ${` 0 3px 0 rgba(${getTint(backgroundcolor)}), 0 5px 0 rgba(${
      BUTTON_COLORS.MIDNIGHT_GREY
    })`};

    &:active {
      box-shadow: ${` 0 3px 0 rgba(${getTint(backgroundcolor)}), 0 5px 0 rgba(${
        BUTTON_COLORS.MIDNIGHT_GREY
      })`};
      transform: translateY(0);
    }
    
    `}
`;
