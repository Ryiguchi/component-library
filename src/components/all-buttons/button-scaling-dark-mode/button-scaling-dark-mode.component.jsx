import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButtonScalingDarkMode } from './button-scaling-dark-mode.styles';

const ButtonScalingDarkMode = ({
  children,
  options,
  options: {
    size = BUTTON_SIZES.DEFAULT,
    width = BUTTON_WIDTH.FIT,
    borderRadius = BORDER_RADIUS.DEFAULT,
    uppercase = BUTTON_TEXT_STYLE.UPPERCASE,
  },
}) => {
  return (
    <StyledButtonScalingDarkMode options={options}>
      {children}
    </StyledButtonScalingDarkMode>
  );
};

export default ButtonScalingDarkMode;
