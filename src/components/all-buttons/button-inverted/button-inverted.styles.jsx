import styled from 'styled-components';
import { StyledButtonFading } from '../button-fading/button-fading.styles';
import { getShade, getTint } from '../button.utilities/button.mixins';

export const StyledButtonInverted = styled(StyledButtonFading)`
  ${({ options: { backgroundcolor, textcolor } }) => `
    background-color: rgba(${textcolor});
    color: rgba(${backgroundcolor});


    &:hover {
      background-color: rgba(${backgroundcolor});
      color: rgba(${textcolor});
    }
  `}
`;
