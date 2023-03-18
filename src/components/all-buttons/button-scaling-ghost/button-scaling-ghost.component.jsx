import {
  BORDER_RADIUS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButtonScalingGhost } from './button-scaling-ghost.styles';

const ButtonScalingGhost = ({
  children,
  size = BUTTON_SIZES.DEFAULT,
  width = BUTTON_WIDTH.FIT,
  borderRadius = BORDER_RADIUS.DEFAULT,
  textStyle = BUTTON_TEXT_STYLE.UPPERCASE,
}) => {
  return (
    <StyledButtonScalingGhost
      size={size}
      width={width}
      borderRadius={borderRadius}
      textStyle={textStyle}
    >
      {children}
    </StyledButtonScalingGhost>
  );
};

export default ButtonScalingGhost;
