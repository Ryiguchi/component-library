import {
  Bar,
  BarContainer,
  Dots,
  DotsContainer,
  MainContainer,
} from './progressbar-crumbs.styles';

const ProgressBarCrumbs = ({
  numItems = 10,
  numCompleted = 7,
  currentItem = 4,
  barColor = 'green',
  width = '600px',
}) => {
  const percentCompleted = (numCompleted / (numItems - 1)) * 100;

  const dots = [];
  for (let i = 0; i < numItems; i++) {
    dots.push(
      <Dots
        current={currentItem === i + 1 ? true : false}
        numitems={numItems}
        key={i}
      ></Dots>
    );
  }

  return (
    <MainContainer width={width}>
      <DotsContainer>{dots}</DotsContainer>
      <BarContainer>
        <Bar percentCompleted={percentCompleted} barColor={barColor} />
      </BarContainer>
    </MainContainer>
  );
};

export default ProgressBarCrumbs;
