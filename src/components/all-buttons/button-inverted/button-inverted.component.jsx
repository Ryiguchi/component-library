import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButtonInverted } from './button-inverted.styles';

const ButtonInverted = ({
  children,
  size = BUTTON_SIZES.DEFAULT,
  textColor = BUTTON_COLORS.WHITE,
  backgroundColor = BUTTON_COLORS.MEGAMAN_BLUE,
  width = BUTTON_WIDTH.FIT,
  colorEffect = BUTTON_COLOR_EFFECTS.INVERTED,
  borderRadius = BORDER_RADIUS.DEFAULT,
  textStyle = BUTTON_TEXT_STYLE.UPPERCASE,
}) => {
  return (
    <StyledButtonInverted
      size={size}
      textColor={textColor}
      backgroundColor={backgroundColor}
      width={width}
      borderRadius={borderRadius}
      textStyle={textStyle}
      colorEffect={colorEffect}
    >
      {children}
    </StyledButtonInverted>
  );
};

export default ButtonInverted;
