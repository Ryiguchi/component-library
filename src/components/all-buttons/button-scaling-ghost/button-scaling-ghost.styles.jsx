import styled from 'styled-components';
import { DefaultButtonStyles } from '../button.utilities/button.default.style';
import {
  GhostDefault,
  GhostLarge,
  GhostSmall,
  GhostXLarge,
} from '../button.utilities/button.mixins';
import { BUTTON_COLORS, BUTTON_SIZES } from '../button.utilities/button.types';

export const StyledButtonScalingGhost = styled(DefaultButtonStyles)`
  background-color: ${`rgba(${BUTTON_COLORS.WHITE})`};
  color: ${`rgba(${BUTTON_COLORS.BLACK})`};
  border: ${`1px solid rgba(${BUTTON_COLORS.BLACK})`};
  border: none;

  ${({ size }) => {
    if (size === BUTTON_SIZES.SMALL) return GhostSmall;
    if (size === BUTTON_SIZES.DEFAULT) return GhostDefault;
    if (size === BUTTON_SIZES.LARGE) return GhostLarge;
    if (size === BUTTON_SIZES.X_LARGE) return GhostXLarge;
  }}
`;
