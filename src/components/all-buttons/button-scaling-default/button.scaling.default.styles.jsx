import styled from 'styled-components';
import { DefaultButtonStyles } from '../button.utilities/button.default.style';
import {
  ScalingDefault,
  ScalingLarge,
  ScalingSmall,
  ScalingXLarge,
} from '../button.utilities/button.mixins';
import { BUTTON_SIZES } from '../button.utilities/button.types';

export const StyledButtonScalingDefault = styled(DefaultButtonStyles)`
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
  ${({ options: { size } }) => {
    if (size === BUTTON_SIZES.SMALL) return ScalingSmall;
    if (size === BUTTON_SIZES.DEFAULT) return ScalingDefault;
    if (size === BUTTON_SIZES.LARGE) return ScalingLarge;
    if (size === BUTTON_SIZES.X_LARGE) return ScalingXLarge;
  }}
`;
