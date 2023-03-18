import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 30rem;
  aspect-ratio: 1.5 / 1;
  display: flex;
  /* overflow: hidden; */
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${({ currentImage, index }) =>
    currentImage === index ? 'rotate(-6deg)' : 'rotate(6deg)'};
  z-index: ${({ currentImage, index }) =>
    `${1000 - 10 * Math.abs(currentImage - index)}`};
  border: 1rem solid #eee;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
