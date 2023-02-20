import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButtonScalingDefault } from './button.scaling.default.styles';

const ButtonScalingDefault = ({
  children,
  options,
  options: {
    size = BUTTON_SIZES.DEFAULT,
    textcolor = BUTTON_COLORS.WHITE,
    backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE,
    width = BUTTON_WIDTH.FIT,
    borderRadius = BORDER_RADIUS.DEFAULT,
    uppercase = BUTTON_TEXT_STYLE.UPPERCASE,
  },
}) => {
  return (
    <StyledButtonScalingDefault options={options}>
      {children}
    </StyledButtonScalingDefault>
  );
};

export default ButtonScalingDefault;
