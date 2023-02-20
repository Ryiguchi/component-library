import styled from 'styled-components';
import { getShade, getTint } from '../button.utilities/button.mixins';
import { DefaultButtonStyles } from '../button.utilities/button.default.style';
import { BUTTON_COLOR_EFFECTS } from '../button.utilities/button.types';

export const StyledButtonFading = styled(DefaultButtonStyles)`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  ${({ options: { backgroundcolor, textcolor, colorEffect } }) => {
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
