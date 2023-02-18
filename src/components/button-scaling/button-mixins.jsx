import styled, { css } from 'styled-components';
import { BUTTON_COLORS } from './button.types';

export const Small = css`
  font-size: 10px;
  padding: 12px 16px;
`;

export const ScalingSmall = css`
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const Default = css`
  font-size: 16px;
  padding: 16px 24px;
`;

export const ScalingDefault = css`
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    transform: translateY(-4px) scale(1.02);
  }

  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px) scale(1.01);
  }
`;

export const Large = css`
  font-size: 24px;
  padding: 24px 36px;
`;

export const ScalingLarge = css`
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
    transform: translateY(-6px) scale(1.04);
  }

  &:active {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px) scale(1.02);
  }
`;

export const XLarge = css`
  font-size: 36px;
  padding: 32px 48px;
`;

export const ScalingXLarge = css`
  transition: all 0.6s;

  &:hover {
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.4);
    transform: translateY(-8px) scale(1.06);
  }

  &:active {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px) scale(1.02);
  }
`;

export const DarkModeGlowScalingSmall = css`
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.4);
  }

  &:active {
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
  }
`;

export const DarkModeGlowScalingDefault = css`
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  &:hover {
    box-shadow: 0 0 24px rgba(255, 255, 255, 0.6);
    transform: scale(1.04);
    color: #fff;
  }

  &:active {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    transform: scale(1.01);
  }
`;
export const DarkModeGlowScalingLarge = css`
  box-shadow: 0 0 16px rgba(255, 255, 255, 0.2);
  &:hover {
    box-shadow: 0 0 32px rgba(255, 255, 255, 0.6);
    transform: scale(1.08);
  }

  &:active {
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
    transform: scale(1.04);
  }
`;
export const DarkModeGlowScalingXLarge = css`
  box-shadow: 0 0 32px rgba(255, 255, 255, 0.2);
  &:hover {
    box-shadow: 0 0 48px rgba(255, 255, 255, 0.6);
    transform: scale(1.12);
  }

  &:active {
    box-shadow: 0 0 24px rgba(255, 255, 255, 0.4);
    transform: scale(1.04);
  }
`;

export const ColorShadowButtonDefault = css`
  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    &:hover {
        box-shadow: 0 8px 16px rgba(${backgroundcolor}, .6);
    }
    &:active {
        box-shadow: 0 4px 8px rgba(${backgroundcolor}, .6);
    ]
  `}
`;

export const ColorShadowButtonLarge = css`
  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    &:hover {
        box-shadow: 0 16px 32px rgba(${backgroundcolor}, .6);
    }
    &:active {
        box-shadow: 0 6px 12px rgba(${backgroundcolor}, .6);
    }
  `}
`;

export const ColorShadowButtonXLarge = css`
  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    &:hover {
        box-shadow: 0 24px 48px rgba(${backgroundcolor}, .6);
    }
    &:active {
        box-shadow: 0 12px 24px rgba(${backgroundcolor}, .6);
    ]
  `}
`;

export const getTint = color =>
  color
    .split(',')
    .map(num => Math.trunc(+num / 1.2))
    .join(',');

export const getShade = color =>
  color
    .split(',')
    .map(num => Math.trunc((255 - +num) * 0.25 + +num))
    .join(',');

export const Small3DButton = css`
  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    &:hover {
      box-shadow: ${` 0 6px 0 rgba(${getTint(backgroundcolor)}), 0 8px 0 rgba(${
        BUTTON_COLORS.MIDNIGHT_GREY
      }), 2px -2px 4px  rgba(${BUTTON_COLORS.BLACK}, .15)`};
      transform: translateY(-3px)
    }
    `}
`;
export const Default3DButton = css`
  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    &:hover {
      box-shadow: ${` 0 8px 0 rgba(${getTint(
        backgroundcolor
      )}), 0 10px 0 rgba(${BUTTON_COLORS.MIDNIGHT_GREY}), 3px -3px 8px rgba(${
        BUTTON_COLORS.BLACK
      }, .2)`};
      transform: translateY(-5px)
    }
    `}
`;
export const large3DButton = css`
  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    &:hover {
      box-shadow: ${` 0 11px 0 rgba(${getTint(
        backgroundcolor
      )}), 0 13px 0 rgba(${BUTTON_COLORS.MIDNIGHT_GREY}), 4px -4px 12px rgba(${
        BUTTON_COLORS.BLACK
      }, .2)`};
      transform: translateY(-8px)
    }
    `}
`;

export const XLarge3DButton = css`
  ${({ options: { backgroundcolor = BUTTON_COLORS.MEGAMAN_BLUE } }) => `
    &:hover {
      box-shadow: ${` 0 15px 0 rgba(${getTint(
        backgroundcolor
      )}), 0 17px 0 rgba(${BUTTON_COLORS.MIDNIGHT_GREY}), 6px -6px 15px rgba(${
        BUTTON_COLORS.BLACK
      }, .2)`};
      transform: translateY(-12px) 
    `}
`;
