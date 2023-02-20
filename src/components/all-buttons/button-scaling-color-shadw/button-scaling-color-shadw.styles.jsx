import styled from 'styled-components';
import { StyledButtonScalingDefault } from '../button-scaling-default/button.scaling.default.styles';
import {
  ColorShadowButtonDefault,
  ColorShadowButtonLarge,
  ColorShadowButtonXLarge,
} from '../button.utilities/button.mixins';
import { BUTTON_SIZES } from '../button.utilities/button.types';

export const StyledButtonScalingColorShadow = styled(
  StyledButtonScalingDefault
)`
  ${({ options: { backgroundcolor } }) => `
    box-shadow: 0 2px 8px rgba(${backgroundcolor}, .2);
  `}

  ${({ options: { size } }) => {
    if (size === BUTTON_SIZES.DEFAULT) return ColorShadowButtonDefault;
    if (size === BUTTON_SIZES.LARGE) return ColorShadowButtonLarge;
    if (size === BUTTON_SIZES.X_LARGE) return ColorShadowButtonXLarge;
  }}
`;
