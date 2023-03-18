import styled from 'styled-components';
import { StyledButtonScalingDarkMode } from '../button-scaling-dark-mode/button-scaling-dark-mode.styles';
import {
  DarkModeGlowScalingDefault,
  DarkModeGlowScalingLarge,
  DarkModeGlowScalingSmall,
  DarkModeGlowScalingXLarge,
} from '../button.utilities/button.mixins';
import { BUTTON_SIZES } from '../button.utilities/button.types';

export const StyledButtonScalingDarkModeGlow = styled(
  StyledButtonScalingDarkMode
)`
  ${({ size }) => {
    if (size === BUTTON_SIZES.SMALL) return DarkModeGlowScalingSmall;
    if (size === BUTTON_SIZES.DEFAULT) return DarkModeGlowScalingDefault;
    if (size === BUTTON_SIZES.LARGE) return DarkModeGlowScalingLarge;
    if (size === BUTTON_SIZES.X_LARGE) return DarkModeGlowScalingXLarge;
  }}
`;
