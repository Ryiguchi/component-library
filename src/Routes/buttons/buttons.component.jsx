import { useEffect } from 'react';
import Button3D from '../../components/all-buttons/button-3d/button-3d.component';
import ButtonFading from '../../components/all-buttons/button-fading/button-fading.component';
import ButtonInverted from '../../components/all-buttons/button-inverted/button-inverted.component';
import ButtonScalingColorShadow from '../../components/all-buttons/button-scaling-color-shadw/button-scaling-color-shadw.component';
import ButtonScalingDarkModeGlow from '../../components/all-buttons/button-scaling-dark-mode-glow/button-scaling-dark-mode-glow,component';
import ButtonScalingDarkMode from '../../components/all-buttons/button-scaling-dark-mode/button-scaling-dark-mode.component';
import ButtonScalingDefault from '../../components/all-buttons/button-scaling-default/button-scaling-default.component';
import ButtonScalingGhost from '../../components/all-buttons/button-scaling-ghost/button-scaling-ghost.component';

import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../../components/all-buttons/button.utilities/button.types';
import Container from '../../components/container/container.component';
import { ButtonContainer, ButtonGlowContainer } from './buttons.styles';

const optionsButton3D = {
  size: BUTTON_SIZES.DEFAULT,
  textcolor: BUTTON_COLORS.WHITE,
  backgroundcolor: BUTTON_COLORS.MEGAMAN_BLUE,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const optionsDefaultScaling = {
  size: BUTTON_SIZES.DEFAULT,
  textcolor: BUTTON_COLORS.WHITE,
  backgroundcolor: BUTTON_COLORS.MEGAMAN_BLUE,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const optionsButtonScalingGhost = {
  size: BUTTON_SIZES.DEFAULT,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const optionsButtonScalingColorShadow = {
  size: BUTTON_SIZES.DEFAULT,
  textcolor: BUTTON_COLORS.WHITE,
  backgroundcolor: BUTTON_COLORS.MEGAMAN_BLUE,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const optionsButtonScalingDarkMode = {
  size: BUTTON_SIZES.DEFAULT,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const optionsButtonScalingDarkModeGlow = {
  size: BUTTON_SIZES.DEFAULT,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const optionsButtonFading = {
  size: BUTTON_SIZES.DEFAULT,
  textcolor: BUTTON_COLORS.WHITE,
  backgroundcolor: BUTTON_COLORS.MEGAMAN_BLUE,
  width: BUTTON_WIDTH.FIT,
  colorEffect: BUTTON_COLOR_EFFECTS.DARKER,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const optionsButtonInverted = {
  size: BUTTON_SIZES.DEFAULT,
  textcolor: BUTTON_COLORS.WHITE,
  backgroundcolor: BUTTON_COLORS.MEGAMAN_BLUE,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  uppercase: BUTTON_TEXT_STYLE.UPPERCASE,
};

const Buttons = () => {
  return (
    <Container gap="5rem">
      <ButtonContainer>
        <Button3D options={optionsButton3D}>press me</Button3D>
        <ButtonScalingDefault options={optionsDefaultScaling}>
          press me
        </ButtonScalingDefault>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonScalingGhost options={optionsButtonScalingGhost}>
          press me
        </ButtonScalingGhost>
        <ButtonScalingColorShadow options={optionsButtonScalingColorShadow}>
          press me
        </ButtonScalingColorShadow>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonScalingDarkMode options={optionsButtonScalingDarkMode}>
          press me
        </ButtonScalingDarkMode>
        <ButtonGlowContainer>
          <ButtonScalingDarkModeGlow options={optionsButtonScalingDarkModeGlow}>
            press me
          </ButtonScalingDarkModeGlow>
        </ButtonGlowContainer>
      </ButtonContainer>
      <ButtonContainer>
        <ButtonFading options={optionsButtonFading}>press me</ButtonFading>
        <ButtonInverted options={optionsButtonInverted}>
          press me
        </ButtonInverted>
      </ButtonContainer>
      <ButtonContainer></ButtonContainer>
    </Container>
  );
};

export default Buttons;
