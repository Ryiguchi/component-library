import styled from 'styled-components';
import { StyledButtonScalingDefault } from '../button-scaling-default/button.scaling.default.styles';
import { BUTTON_COLORS } from '../button.utilities/button.types';

export const StyledButtonScalingDarkMode = styled(StyledButtonScalingDefault)`
  background-color: ${`rgb(${BUTTON_COLORS.MIDNIGHT_GREY})`};
  color: ${`rgb(${BUTTON_COLORS.WHITE})`};
`;
