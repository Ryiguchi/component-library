import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButtonFading } from './button-fading.styles';

const ButtonFading = ({
  children,
  options,
  options: {
    size = BUTTON_SIZES.DEFAULT,
    textcolor = BUTTON_COLORS.WHITE,
    backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE,
    width = BUTTON_WIDTH.FIT,
    colorEffect = BUTTON_COLOR_EFFECTS.DARKER,
    borderRadius = BORDER_RADIUS.DEFAULT,
    uppercase = BUTTON_TEXT_STYLE.UPPERCASE,
  },
}) => {
  return <StyledButtonFading options={options}>{children}</StyledButtonFading>;
};

export default ButtonFading;
