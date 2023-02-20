import {
  Chevrons,
  ChevronsContainer,
  ProgressBarContainer,
} from './progressbar-gradient.styles';

const ProgressBarGradient = ({
  width = 400,
  numItems = 10,
  percent = 100,
  currentItem = 4,
  color = 'green',
}) => {
  const numCheverons = 20;
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
    <ProgressBarContainer>
      <ChevronsContainer>{chevronArray}</ChevronsContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBarGradient;
