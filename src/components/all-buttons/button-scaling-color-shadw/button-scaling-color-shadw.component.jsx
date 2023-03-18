import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButtonScalingColorShadow } from './button-scaling-color-shadw.styles';

const ButtonScalingColorShadow = ({
  children,
  size = BUTTON_SIZES.DEFAULT,
  textColor = BUTTON_COLORS.WHITE,
  backgroundColor = BUTTON_COLORS.MEGAMAN_BLUE,
  width = BUTTON_WIDTH.FIT,
  borderRadius = BORDER_RADIUS.DEFAULT,
  textStyle = BUTTON_TEXT_STYLE.UPPERCASE,
}) => {
  return (
    <StyledButtonScalingColorShadow
      size={size}
      textColor={textColor}
      backgroundColor={backgroundColor}
      width={width}
      borderRadius={borderRadius}
      textStyle={textStyle}
    >
      {children}
    </StyledButtonScalingColorShadow>
  );
};

export default ButtonScalingColorShadow;
