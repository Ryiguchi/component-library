import {
  BORDER_RADIUS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';

import { StyledButtonScalingDarkModeGlow } from './button-scaling-dark-mode-glow.styles';

const ButtonScalingDarkModeGlow = ({
  children,
  size = BUTTON_SIZES.DEFAULT,
  width = BUTTON_WIDTH.FIT,
  borderRadius = BORDER_RADIUS.DEFAULT,
  textStyle = BUTTON_TEXT_STYLE.UPPERCASE,
}) => {
  return (
    <StyledButtonScalingDarkModeGlow
      size={size}
      width={width}
      borderRadius={borderRadius}
      textStyle={textStyle}
    >
      {children}
    </StyledButtonScalingDarkModeGlow>
  );
};

export default ButtonScalingDarkModeGlow;
