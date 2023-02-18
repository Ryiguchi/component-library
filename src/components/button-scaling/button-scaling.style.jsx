import styled, { css } from 'styled-components';

import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from './button.types';

import {
  ScalingSmall,
  ScalingLarge,
  ScalingXLarge,
  DarkModeGlowScalingSmall,
  DarkModeGlowScalingDefault,
  DarkModeGlowScalingLarge,
  DarkModeGlowScalingXLarge,
  ScalingDefault,
  ColorShadowButtonLarge,
  ColorShadowButtonXLarge,
  ColorShadowButtonDefault,
  getTint,
  getShade,
  Small3DButton,
  Default3DButton,
  large3DButton,
  XLarge3DButton,
} from './button-mixins';

export const DefaultButtonStyles = styled.button`
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  ${({
    options: {
      backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE,
      textcolor = BUTTON_COLORS.WHITE,
      uppercase = BUTTON_TEXT_STYLE.UPPERCASE,
      width = BUTTON_WIDTH.FIT,
      borderRadius = BORDER_RADIUS.DEFAULT,
      size = BUTTON_SIZES.DEFAULT,
    },
  }) => `
    background-color: rgba(${backgroundcolor});
    color: rgba(${textcolor});
    text-transform: ${uppercase};
    width: ${width};
    border-radius: ${borderRadius};
    ${size};
  `}
`;

export const DefaultScaling = styled(DefaultButtonStyles)`
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.6);
  ${({ options: { size = BUTTON_SIZES.DEFAULT } }) => {
    if (size === BUTTON_SIZES.SMALL) return ScalingSmall;
    if (size === BUTTON_SIZES.DEFAULT) return ScalingDefault;
    if (size === BUTTON_SIZES.LARGE) return ScalingLarge;
    if (size === BUTTON_SIZES.X_LARGE) return ScalingXLarge;
  }}
`;

export const GhostButtonScaling = styled(DefaultScaling)`
  background-color: ${`rgba(${BUTTON_COLORS.WHITE})`};
  color: ${`rgba(${BUTTON_COLORS.BLACK})`};
  border: ${`1px solid rgba(${BUTTON_COLORS.BLACK})`};
`;

export const ColorShadowButtonScaling = styled(DefaultScaling)`
  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    box-shadow: 0 2px 8px rgba(${backgroundcolor}, .2);
  `}

  ${({ options: { size = BUTTON_SIZES.DEFAULT } }) => {
    if (size === BUTTON_SIZES.DEFAULT) return ColorShadowButtonDefault;
    if (size === BUTTON_SIZES.LARGE) return ColorShadowButtonLarge;
    if (size === BUTTON_SIZES.X_LARGE) return ColorShadowButtonXLarge;
  }}
`;

export const DarkModeScaling = styled(DefaultScaling)`
  background-color: ${`rgb(${BUTTON_COLORS.MIDNIGHT_GREY})`};
  color: ${`rgb(${BUTTON_COLORS.WHITE})`};
`;

export const DarkModeGlowScaling = styled(DarkModeScaling)`
  ${({ options: { size = BUTTON_SIZES.DEFAULT } }) => {
    if (size === BUTTON_SIZES.SMALL) return DarkModeGlowScalingSmall;
    if (size === BUTTON_SIZES.DEFAULT) return DarkModeGlowScalingDefault;
    if (size === BUTTON_SIZES.LARGE) return DarkModeGlowScalingLarge;
    if (size === BUTTON_SIZES.X_LARGE) return DarkModeGlowScalingXLarge;
  }}
`;

// FADING BUTTON

export const DefaultButtonFading = styled(DefaultButtonStyles)`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  ${({
    options: {
      backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE,
      textcolor = BUTTON_COLORS.WHITE,
      colorEffect = BUTTON_COLOR_EFFECTS.DARKER,
    },
  }) => {
    const darker = getTint(backgroundcolor);
    const lighter = getShade(backgroundcolor);
    let effect = '';

    if (colorEffect === BUTTON_COLOR_EFFECTS.LIGHTER)
      effect = `background-color: rgba(${lighter})`;
    if (colorEffect === BUTTON_COLOR_EFFECTS.DARKER)
      effect = `background-color: rgba(${darker})`;
    if (colorEffect === BUTTON_COLOR_EFFECTS.INVERTED)
      effect = `
      color: rgba(${backgroundcolor});
      background-color: rgba(${textcolor});
      box-shadow: inset 1px 1px 0  rgba(${backgroundcolor}), inset -1px -1px 0 rgba(${backgroundcolor})
      `;

    return `
      &:hover {
      ${effect}
      }

      &:active {
      background-color: ${`rgba(${backgroundcolor})`}
  `;
  }}
`;

export const DefaultButtonInvert = styled(DefaultButtonFading)`
  ${({
    options: {
      backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE,
      textcolor = BUTTON_COLORS.WHITE,
    },
  }) => `
    background-color: rgba(${textcolor});
    color: rgba(${backgroundcolor});
    border: 2px solid rgba(${backgroundcolor});

    &:hover {
      background-color: rgba(${backgroundcolor});
      color: rgba(${textcolor});
    }
  `}
`;

export const Button3D = styled(DefaultButtonStyles)`
  ${({ options: { size = BUTTON_SIZES.DEFAULT } }) => {
    if (size === BUTTON_SIZES.SMALL) return Small3DButton;
    if (size === BUTTON_SIZES.DEFAULT) return Default3DButton;
    if (size === BUTTON_SIZES.LARGE) return large3DButton;
    if (size === BUTTON_SIZES.X_LARGE) return XLarge3DButton;
  }}

  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    box-shadow: ${` 0 3px 0 rgba(${getTint(backgroundcolor)}), 0 5px 0 rgba(${
      BUTTON_COLORS.MIDNIGHT_GREY
    })`};

    &:active {
      box-shadow: ${` 0 3px 0 rgba(${getTint(backgroundcolor)}), 0 5px 0 rgba(${
        BUTTON_COLORS.MIDNIGHT_GREY
      })`};
      transform: translateY(0);
    }
    
    `}
`;
