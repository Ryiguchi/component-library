import {
  DefaultScaling,
  GhostButtonScaling,
  ColorShadowButtonScaling,
  DarkModeScaling,
  DarkModeGlowScaling,
  DefaultButtonFading,
  DefaultButtonInvert,
  Button3D,
} from './button-scaling.style';

import {
  BUTTON_SIZES,
  BUTTON_WIDTH,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BORDER_RADIUS,
  BUTTON_TEXT_STYLE,
} from './button.types';

const options = {
  size: BUTTON_SIZES.LARGE,
  textcolor: BUTTON_COLORS.WHITE,
  backgroundcolor: BUTTON_COLORS.MEGAMAN_BLUE,
  width: BUTTON_WIDTH.FIT,
  colorEffect: BUTTON_COLOR_EFFECTS.INVERTED,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const Button = () => {
  return (
    <div>
      <Button3D options={options}>press here</Button3D>
    </div>
  );
};

export default Button;
