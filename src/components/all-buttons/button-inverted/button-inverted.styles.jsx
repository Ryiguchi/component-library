import styled from 'styled-components';
import { StyledButtonFading } from '../button-fading/button-fading.styles';
import { getColor } from '../button.utilities/button.mixins';

export const StyledButtonInverted = styled(StyledButtonFading)`
  ${({ backgroundColor, textColor }) => `
    background-color: rgba(${getColor(textColor)});
    color: rgba(${getColor(backgroundColor)});


    color: #333;
    &:hover {
      background-color: rgba(${getColor(backgroundColor)});
      color: rgba(${getColor(textColor)});
      color: #888;
    }
  `}
`;
