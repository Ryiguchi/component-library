import {
  BORDER_RADIUS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButtonScalingDarkMode } from './button-scaling-dark-mode.styles';

const ButtonScalingDarkMode = ({
  children,
  size = BUTTON_SIZES.DEFAULT,
  width = BUTTON_WIDTH.FIT,
  borderRadius = BORDER_RADIUS.DEFAULT,
  textStyle = BUTTON_TEXT_STYLE.UPPERCASE,
}) => {
  return (
    <StyledButtonScalingDarkMode
      size={size}
      width={width}
      borderRadius={borderRadius}
      textStyle={textStyle}
    >
      {children}
    </StyledButtonScalingDarkMode>
  );
};

export default ButtonScalingDarkMode;
