import styled from 'styled-components';
import { getColor } from '../../all-buttons/button.utilities/button.mixins';

export const getShade = color =>
  color
    .split(',')
    .map(num => Math.trunc(+num / 1.15))
    .join(',');

export const getTint = color =>
  color
    .split(',')
    .map(num => Math.trunc((255 - +num) * 0.4 + +num))
    .join(',');

export const OuterCircle = styled.div`
  border-radius: 50%;
  ${({ size }) => `height: ${size}px; width: ${size}px;`}
  background: ${({ color }) => {
    const rgbColor = getColor(color);
    const tint = getTint(rgbColor);
    const shade = getShade(rgbColor);
    return `linear-gradient(to top, rgb(${tint}), rgb(${shade}))`;
  }};

  clip-path: ${({ percent, size }) => {
    let angle = 3.6 * percent;
    const quadrent = Math.ceil(angle / 45);

    const getAngle = angle => {
      if (angle <= 45 || (angle % 90 <= 45 && angle % 90 !== 0)) {
        return Math.abs(angle - (quadrent - 1) * 45);
      } else {
        return Math.abs(angle - quadrent * 45);
      }
    };
    angle = getAngle(angle);

    const oppSide = (size / 2) * Math.tan((angle * Math.PI) / 180);

    if (quadrent === 1) {
      const x = ((size / 2 + oppSide) / size) * 100;
      return `polygon(50% 0, 100% 0, ${x}% 0, 50% 50%)`;
    }
    if (quadrent === 2) {
      const y = Math.round(((size / 2 - oppSide) / size) * 100);
      return `polygon(50% 0, 100% 0, 100% ${y}%, 50% 50%)`;
    }
    if (quadrent === 3) {
      const y = Math.round(((size / 2 + oppSide) / size) * 100);
      return `polygon(50% 0, 100% 0, 100% ${y}%, 50% 50%)`;
    }
    if (quadrent === 4) {
      const x = Math.round(((size / 2 + oppSide) / size) * 100);
      return `polygon(50% 0, 100% 0, 100% 100%, ${x}% 100%, 50% 50%)`;
    }
    if (quadrent === 5) {
      const x = Math.round(((size / 2 - oppSide) / size) * 100);
      return `polygon(50% 0, 100% 0, 100% 100%, ${x}% 100%, 50% 50%)`;
    }
    if (quadrent === 6) {
      const y = Math.round(((size / 2 + oppSide) / size) * 100);
      return `polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 ${y}%, 50% 50%)`;
    }
    if (quadrent === 7) {
      const y = Math.round(((size / 2 - oppSide) / size) * 100);
      return `polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 ${y}%, 50% 50%)`;
    }
    if (quadrent === 8) {
      const x = Math.round(((size / 2 - oppSide) / size) * 100);
      return `polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 0, ${x}% 0, 50% 50%)`;
    }
  }};
`;

export const InnerCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  letter-spacing: 0.4px;
  font-family: inherit;
  padding-top: 0.5rem;

  border-radius: 50%;
  ${({ size }) => `width: ${size * 0.8}px; height: ${size * 0.8}px;`};
  ${({ size }) => `font-size: ${size / 30}rem;`};
  color: rgb(${({ color }) => getColor(color)});
  /* font-size: 2rem; */
  background-color: #fff;
`;

export const Container = styled.div`
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: #eee;
  border-radius: 50%;
`;
