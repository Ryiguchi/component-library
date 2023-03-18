import styled from 'styled-components';
import { getColor, getShade, getTint } from '../button.utilities/button.mixins';
import { DefaultButtonStyles } from '../button.utilities/button.default.style';
import { BUTTON_COLOR_EFFECTS } from '../button.utilities/button.types';

export const StyledButtonFading = styled(DefaultButtonStyles)`
  box-shadow: 0px 14px 28px rgba(0, 0, 0, 0.25),
    0px 10px 10px rgba(0, 0, 0, 0.22), inset 2px -6px 6px rgba(0, 0, 0, 0.22),
    inset -2px 0 6px rgba(0, 0, 0, 0.22);
  ${({ backgroundColor, textColor, colorEffect }) => {
    const darker = getTint(getColor(backgroundColor));
    const lighter = getShade(getColor(backgroundColor));
    let effect = '';

    if (colorEffect === BUTTON_COLOR_EFFECTS.LIGHTER)
      effect = `background-color: rgba(${lighter})`;
    if (colorEffect === BUTTON_COLOR_EFFECTS.DARKER)
      effect = `background-color: rgba(${darker})`;
    if (colorEffect === BUTTON_COLOR_EFFECTS.INVERTED)
      effect = `
      color: rgba(${getColor(backgroundColor)});
      background-color: rgba(${getColor(textColor)});
      box-shadow: inset 1px 1px 0  rgba(${getColor(
        backgroundColor
      )}), inset -1px -1px 0 rgba(${getColor(backgroundColor)})
      `;

    return `
      &:hover {
      ${effect}
      }

      &:active {
      background-color: ${`rgba(${getColor(backgroundColor)})`}
  `;
  }}
`;
