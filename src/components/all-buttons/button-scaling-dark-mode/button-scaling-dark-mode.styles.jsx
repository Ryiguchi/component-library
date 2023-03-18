import styled, { css } from 'styled-components';
import { DefaultButtonStyles } from '../button.utilities/button.default.style';
import { getColor } from '../button.utilities/button.mixins';
import { BUTTON_COLORS, BUTTON_SIZES } from '../button.utilities/button.types';

export const Small = css`
  transition: all 0.3s;
  box-shadow: inset 2px -6px 4px rgba(0, 0, 0), inset -2px 0 4px rgba(0, 0, 0),
    inset 2px 6px 4px rgb(100, 100, 100);

  &:hover {
    transform: translateY(-2px) scale(1.01);
    box-shadow: inset 2px -6px 4px rgba(0, 0, 0), inset -2px 0 4px rgba(0, 0, 0),
      inset 2px 6px 4px rgb(100, 100, 100), 0px 10px 20px rgba(0, 0, 0, 0.25),
      0px 6px 6px rgba(0, 0, 0, 0.22);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const Default = css`
  transition: all 0.4s;
  box-shadow: inset 3px -10px 8px rgba(0, 0, 0), inset -3px 0 8px rgba(0, 0, 0),
    inset 3px 10px 8px rgb(100, 100, 100);

  &:hover {
    box-shadow: inset 3px -10px 8px rgba(0, 0, 0),
      inset -3px 0 6px rgba(0, 0, 0), inset 3px 10px 8px rgb(100, 100, 100),
      0px 14px 28px rgba(0, 0, 0, 0.25), 0px 10px 10px rgba(0, 0, 0, 0.22);

    transform: translateY(-4px) scale(1.02);
  }

  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px) scale(1.01);
  }
`;

export const Large = css`
  transition: all 0.5s;
  box-shadow: inset 5px -20px 15px rgba(0, 0, 0),
    inset -5px 0 15px rgba(0, 0, 0), inset 5px 20px 12px rgb(100, 100, 100);

  &:hover {
    box-shadow: inset 5px -20px 15px rgba(0, 0, 0),
      inset -5px 0 15px rgba(0, 0, 0), inset 5px 20px 12px rgb(100, 100, 100),
      0 16px 32px rgba(0, 0, 0, 0.25), 0 16px 16px rgba(0, 0, 0, 0.22);
    transform: translateY(-6px) scale(1.04);
  }

  &:active {
    box-shadow: inset 5px -20px 15px rgba(0, 0, 0),
      inset -5px 0 15px rgba(0, 0, 0), inset 5px 20px 12px rgb(100, 100, 100),
      0 6px 12px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.22);
    transform: translateY(-3px) scale(1.02);
  }
`;

export const XLarge = css`
  transition: all 0.6s;
  box-shadow: inset 8px -20px 15px rgba(0, 0, 0),
    inset -8px 0 15px rgba(0, 0, 0), inset 8px 20px 12px rgb(100, 100, 100);

  &:hover {
    box-shadow: inset 8px -20px 15px rgba(0, 0, 0),
      inset -8px 0 15px rgba(0, 0, 0), inset 8px 20px 12px rgb(100, 100, 100),
      0 24px 48px rgba(0, 0, 0, 0.25), 0 24px 24px rgba(0, 0, 0, 0.22);
    transform: translateY(-8px) scale(1.06);
  }

  &:active {
    box-shadow: inset 8px -20px 15px rgba(0, 0, 0),
      inset -8px 0 15px rgba(0, 0, 0), inset 8px 20px 12px rgb(100, 100, 100),
      0 12px 24px rgba(0, 0, 0, 0.25), 0 12px 24px rgba(0, 0, 0, 0.22);
    transform: translateY(-3px) scale(1.02);
  }
`;

export const StyledButtonScalingDarkMode = styled(DefaultButtonStyles)`
  background-color: rgb(50, 50, 50);
  color: ${`rgb(${getColor(BUTTON_COLORS.WHITE)})`};

  ${({ size }) => {
    if (size === BUTTON_SIZES.SMALL) return Small;
    if (size === BUTTON_SIZES.DEFAULT) return Default;
    if (size === BUTTON_SIZES.LARGE) return Large;
    if (size === BUTTON_SIZES.X_LARGE) return XLarge;
  }};
`;
