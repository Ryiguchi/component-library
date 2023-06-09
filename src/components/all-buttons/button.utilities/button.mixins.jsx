import { css } from 'styled-components';
import { BUTTON_COLORS } from './button.types';

export const Small = css`
  font-size: 10px;
  padding: 12px 16px;
`;

export const Default = css`
  font-size: 16px;
  padding: 16px 24px;
`;

export const Large = css`
  font-size: 24px;
  padding: 24px 36px;
`;

export const XLarge = css`
  font-size: 36px;
  padding: 32px 48px;
`;

// SCALING
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

// GHOST
export const GhostSmall = css`
  transition: all 0.3s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
    inset 1px -3px 6px rgba(0, 0, 0, 0.3),
    inset -1px -3px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
      inset 1px -3px 6px rgba(0, 0, 0, 0.3),
      inset -1px -3px 6px rgba(0, 0, 0, 0.3),
      inset 1px -1px 1px rgba(0, 0, 0, 0.2),
      inset -1px -1px 1px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
      inset 1px -3px 4px rgba(0, 0, 0, 0.3),
      inset -1px -3px 4px rgba(0, 0, 0, 0.3),
      inset 1px -1px 1px rgba(0, 0, 0, 0.3),
      inset -1px -1px 1px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const GhostDefault = css`
  transition: all 0.4s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
    inset 1px -3px 6px rgba(0, 0, 0, 0.3),
    inset -1px -3px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
      inset 1px -3px 6px rgba(0, 0, 0, 0.3),
      inset -1px -3px 6px rgba(0, 0, 0, 0.3),
      inset 1px -1px 1px rgba(0, 0, 0, 0.3),
      inset -1px -1px 1px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.4);
    transform: translateY(-4px) scale(1.02);
  }

  &:active {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
      inset 1px -3px 4px rgba(0, 0, 0, 0.3),
      inset -1px -3px 4px rgba(0, 0, 0, 0.3),
      inset 1px -1px 1px rgba(0, 0, 0, 0.4),
      inset -1px -1px 1px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.4);

    transform: translateY(-2px) scale(1.01);
  }
`;

export const GhostLarge = css`
  transition: all 0.5s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
    inset 2px -5px 8px rgba(0, 0, 0, 0.3),
    inset -2px -5px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
      inset 3px -7px 8px rgba(0, 0, 0, 0.3),
      inset -3px -7px 8px rgba(0, 0, 0, 0.3),
      inset 1px -1px 1px rgba(0, 0, 0, 0.3),
      inset -1px -1px 1px rgba(0, 0, 0, 0.3), 0 15px 30px rgba(0, 0, 0, 0.4);
    transform: translateY(-6px) scale(1.04);
  }

  &:active {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
      inset 3px -7px 11px rgba(0, 0, 0, 0.3),
      inset -3px -7px 11px rgba(0, 0, 0, 0.3),
      inset 1px -1px 1px rgba(0, 0, 0, 0.4),
      inset -1px -1px 1px rgba(0, 0, 0, 0.4), 0 6px 12px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px) scale(1.02);
  }
`;

export const GhostXLarge = css`
  transition: all 0.6s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2),
    inset 5px -10px 12px rgba(0, 0, 0, 0.2),
    inset -5px -10px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
      inset 5px -10px 10px rgba(0, 0, 0, 0.2),
      inset -5px -10px 10px rgba(0, 0, 0, 0.2),
      inset 1px -1px 1px rgba(0, 0, 0, 0.15),
      inset -1px -1px 1px rgba(0, 0, 0, 0.15), 0 30px 60px rgba(0, 0, 0, 0.4);
    transform: translateY(-8px) scale(1.06);
  }

  &:active {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2),
      inset 5px -10px 15px rgba(0, 0, 0, 0.2),
      inset -5px -10px 15px rgba(0, 0, 0, 0.2),
      inset 1px -1px 1px rgba(0, 0, 0, 0.2),
      inset -1px -1px 1px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.4);
    transform: translateY(-3px) scale(1.02);
  }
`;

// DARK MODE GLOW

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
  ${({ backgroundColor }) => `
    &:hover {
        box-shadow: 0 8px 16px rgba(${getColor(backgroundColor)}, .6);
    }
    &:active {
        box-shadow: 0 4px 8px rgba(${getColor(backgroundColor)}, .6);
    ]
  `}
`;

export const ColorShadowButtonLarge = css`
  ${({ backgroundColor }) => `
    &:hover {
        box-shadow: 0 16px 32px rgba(${getColor(backgroundColor)}, .6);
    }
    &:active {
        box-shadow: 0 6px 12px rgba(${getColor(backgroundColor)}, .6);
    }
  `}
`;

export const ColorShadowButtonXLarge = css`
  ${({ backgroundColor }) => `
    &:hover {
        box-shadow: 0 24px 48px rgba(${getColor(backgroundColor)}, .6);
    }
    &:active {
        box-shadow: 0 12px 24px rgba(${getColor(backgroundColor)}, .6);
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
  ${({ backgroundColor }) => `
    &:hover {
      box-shadow: ${` 0 6px 0 rgba(${getTint(
        getColor(backgroundColor)
      )}), 0 8px 0 rgba(0, 0, 0, .2), 2px -2px 4px  rgba(0, 0, 0, .15), 0 7px 0 rgba(0, 0, 0, .9)`};
      transform: translateY(-3px);
    }
    `}
`;
export const Default3DButton = css`
  ${({ backgroundColor }) => `
    &:hover {
      box-shadow: ${` 0 8px 0 rgba(${getTint(
        getColor(backgroundColor)
      )}), 0 10px 0 rgba(0, 0, 0, .2), 3px -3px 8px rgba(0, 0, 0, .2), 0 9px 0 rgba(0, 0, 0, .9) `};
      transform: translateY(-5px);
    }
    `}
`;
export const large3DButton = css`
  ${({ backgroundColor }) => `
    &:hover {
      box-shadow: ${` 0 11px 0 rgba(${getTint(
        getColor(backgroundColor)
      )}), 0 13px 0 rgba(0, 0, 0, .2), 4px -4px 12px rgba(0, 0, 0, .2), 0 12px 0 rgba(0, 0, 0, .9)`};
      transform: translateY(-8px);
    }
    `}
`;

export const XLarge3DButton = css`
  ${({ backgroundColor }) => `
    &:hover {
      box-shadow: ${` 0 15px 0 rgba(${getTint(
        getColor(backgroundColor)
      )}), 0 17px 0 rgba(0, 0, 0, .2), 6px -6px 15px rgba(0, 0, 0, .2), 0 16px 0 rgba(0, 0, 0, .9)`};
      transform: translateY(-12px); 
      }
    `}
`;

export const getColor = name => {
  if (name === BUTTON_COLORS.DARK_BLUE) return '60, 64, 198';
  if (name === BUTTON_COLORS.LIGHT_BLUE) return '75, 207, 250';
  if (name === BUTTON_COLORS.MINT_GREEN) return '11, 232, 129';
  if (name === BUTTON_COLORS.GREEN) return '5, 196, 107';
  if (name === BUTTON_COLORS.HIGHLIGHTER_PINK) return '239, 87, 119';
  if (name === BUTTON_COLORS.SIZZLING_RED) return '245, 59, 87';
  if (name === BUTTON_COLORS.DARK_PERIWINKLE) return '87, 95, 207';
  if (name === BUTTON_COLORS.MEGAMAN_BLUE) return '75, 207, 250';
  if (name === BUTTON_COLORS.TURQUOISE) return '52, 231, 228';
  if (name === BUTTON_COLORS.CHROME_YELLOW) return '55, 168, 1';
  if (name === BUTTON_COLORS.VIBRANT_YELLOW) return '255, 211, 42';
  if (name === BUTTON_COLORS.SUNSET_ORANGE) return '255, 94, 87';
  if (name === BUTTON_COLORS.DARK_GREY) return '72, 84, 96';
  if (name === BUTTON_COLORS.MIDNIGHT_GREY) return '30, 39, 46';
  if (name === BUTTON_COLORS.LIGHT_GREY) return '210, 218, 226';
  if (name === BUTTON_COLORS.ORANGE) return '246, 104, 0';
  if (name === BUTTON_COLORS.WHITE) return '255, 255, 255';
  if (name === BUTTON_COLORS.BLACK) return '0, 0, 0';
};
