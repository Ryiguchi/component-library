import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../button.utilities/button.types';
import { StyledButton3D } from './button-3d.styles';

const Button3D = ({
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
  return <StyledButton3D options={options}>press here</StyledButton3D>;
};

export default Button3D;
