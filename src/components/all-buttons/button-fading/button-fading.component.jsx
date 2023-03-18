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
  size = BUTTON_SIZES.DEFAULT,
  textColor = BUTTON_COLORS.WHITE,
  backgroundColor = BUTTON_COLORS.MEGAMAN_BLUE,
  width = BUTTON_WIDTH.FIT,
  colorEffect = BUTTON_COLOR_EFFECTS.DARKER,
  borderRadius = BORDER_RADIUS.DEFAULT,
  textStyle = BUTTON_TEXT_STYLE.UPPERCASE,
}) => {
  return (
    <StyledButtonFading
      size={size}
      textColor={textColor}
      backgroundColor={backgroundColor}
      width={width}
      borderRadius={borderRadius}
      colorEffect={colorEffect}
      textStyle={textStyle}
    >
      {children}
    </StyledButtonFading>
  );
};

export default ButtonFading;
