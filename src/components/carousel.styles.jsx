import styled, { css } from 'styled-components';

const getAngle = rot => {
  let angle = rot;
  while (angle >= 90) {
    angle -= 90;
  }
  return angle;
};

const createCss = (count, angle, width) => {
  let rot = 0;

  let styles = '';
  for (let i = 1; i <= count; i++) {
    const value = getAngle(rot);
    const a = width / 2;
    const b = width / 6;
    const x = a * b;
    const y = Math.sqrt(
      Math.pow(a, 2) * Math.pow(Math.cos(value), 2) +
        Math.pow(b, 2) * Math.pow(Math.sin(value), 2)
    );
    const rad = x / y;

    // const y = rad * Math.sin(rot);
    // const x = Math.sqrt(rad ** 2 - y ** 2);
    styles += `
      &:nth-child(${i}) {
        transform: ${`rotate(${rot * 1}deg)`}
                   ${`translateX(${rad}px)`}
                   ${`rotate(${rot * -1}deg)`};
      }
    `;

    rot = rot + angle;
  }
  return styles;
};

export const CarouselContainer = styled.div`
  background-color: #aaa;
  position: relative;
  width: ${({ size }) => size.carouselSize.width};
  /* width: --width; */
  height: ${({ size }) => size.carouselSize.height};
  --count: ${({ count }) => {
    count;
  }};
  --angle: 360 / --count;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${({ size }) => size.itemSize.width};
    height: ${({ size }) => size.itemSize.height};
    margin: ${({ size }) => -size.itemSize.width / 2};
    ${createCss(10, 360 / 10, 300)}
  }
  margin: 5em auto 0;
  max-width: 100%;
`;

export const ImgContainer = styled.div``;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
