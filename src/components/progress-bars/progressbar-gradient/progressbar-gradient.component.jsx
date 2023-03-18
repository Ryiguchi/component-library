import { BUTTON_COLORS } from '../../all-buttons/button.utilities/button.types';
import {
  Chevrons,
  ChevronsContainer,
  ProgressBarContainer,
} from './progressbar-gradient.styles';

const ProgressBarGradient = ({
  percent = 100,
  color = BUTTON_COLORS.GREEN,
  numCheverons = 20,
  width = '400px',
}) => {
  const chevronArray = [];
  for (let i = 0; i < numCheverons; i++) {
    chevronArray.push(
      <Chevrons
        percent={percent}
        color={color}
        num={i}
        totalNum={numCheverons}
        key={i}
      />
    );
  }

  return (
    <ProgressBarContainer width={width}>
      <ChevronsContainer>{chevronArray}</ChevronsContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBarGradient;
