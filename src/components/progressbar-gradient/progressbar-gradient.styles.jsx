import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 300px;
  height: 30px;
`;

export const ChevronsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 140%;
  height: 30px;
  display: flex;
  align-items: center;
`;

export const Chevrons = styled.div`
  height: 24px;
  width: 24px;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 100%, 50% 50%, 0% 0%);
  transform: ${({ num }) => `translateX(-${num * 30}%)`};
  background-image: linear-gradient(#eee, #eee);

  ${({ color, num, totalNum, percent }) => {
    const numCompleted = Math.trunc((totalNum * percent) / 100) - 1;
    if (num > numCompleted) return;
    const half = totalNum / 2;
    if (num < half) {
      // increase x to lighten the lightest light:  x - (num * 0.8) / half
      const lighterValue = 0.9 - (num * 0.8) / half;
      const darkerValue = 0.8 - ((num + 1) * 0.8) / half;
      const lighterTint = getLighterTint(color, lighterValue);
      const darkerTint = getLighterTint(color, darkerValue);
      return `background-image: linear-gradient(to right, rgb(${lighterTint}), rgb(${darkerTint}))`;
    }
    if (num > half) {
      // increase x to increase the darkest dark: 1 + ((num - half) * x) / half
      const lighterValue = 1 + ((num - half) * 0.6) / half;
      const darkerValue = 1 + ((num - half + 1) * 0.6) / half;
      const lighterShade = getDarkerShade(color, lighterValue);
      const darkerShade = getDarkerShade(color, darkerValue);
      return `background-image: linear-gradient(to right, rgb(${lighterShade}), rgb(${darkerShade}))`;
    }
    if (num === half)
      return `
      background-image: linear-gradient(to right, rgb(${color}), rgb(${color}))
    `;
  }};
`;

export const getDarkerShade = (color, value) =>
  color
    .split(',')
    .map(num => Math.trunc(+num / value))
    .join(',');

export const getLighterTint = (color, value) =>
  color
    .split(',')
    .map(num => Math.trunc((255 - +num) * value + +num))
    .join(',');
