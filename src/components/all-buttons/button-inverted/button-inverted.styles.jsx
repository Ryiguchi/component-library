import styled from 'styled-components';
import { StyledButtonFading } from '../button-fading/button-fading.styles';

export const StyledButtonInverted = styled(StyledButtonFading)`
  ${({ options: { backgroundcolor, textcolor } }) => `
    background-color: rgba(${textcolor});
    color: rgba(${backgroundcolor});
    border: 2px solid rgba(${backgroundcolor});

    &:hover {
      background-color: rgba(${backgroundcolor});
      color: rgba(${textcolor});
    }
  `}
`;
