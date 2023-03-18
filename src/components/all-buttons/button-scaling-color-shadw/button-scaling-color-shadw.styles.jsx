import styled from 'styled-components';
import { StyledButtonScalingDefault } from '../button-scaling-default/button.scaling.default.styles';
import { DefaultButtonStyles } from '../button.utilities/button.default.style';
import {
  ColorShadowButtonDefault,
  ColorShadowButtonLarge,
  ColorShadowButtonXLarge,
  getColor,
} from '../button.utilities/button.mixins';
import { BUTTON_SIZES, BUTTON_COLORS } from '../button.utilities/button.types';

export const StyledButtonScalingColorShadow = styled(
  StyledButtonScalingDefault
)`
  box-shadow: 0 2px 8px
    rgba(${({ backgroundColor }) => getColor(backgroundColor)}, 0.2);

  ${({ size }) => {
    if (size === BUTTON_SIZES.DEFAULT) return ColorShadowButtonDefault;
    if (size === BUTTON_SIZES.LARGE) return ColorShadowButtonLarge;
    if (size === BUTTON_SIZES.X_LARGE) return ColorShadowButtonXLarge;
  }}
`;
