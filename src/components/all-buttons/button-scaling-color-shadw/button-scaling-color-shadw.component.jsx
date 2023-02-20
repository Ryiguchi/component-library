import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButtonScalingColorShadow } from './button-scaling-color-shadw.styles';

const ButtonScalingColorShadow = ({
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
    <StyledButtonScalingColorShadow options={options}>
      {children}
    </StyledButtonScalingColorShadow>
  );
};

export default ButtonScalingColorShadow;
