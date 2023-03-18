import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 50rem;
  aspect-ratio: 1.5 / 1;
  display: flex;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: ${({ currentImage, index }) => `
    translateX(${(index - currentImage) * 100}%)
    `};

  border: 1rem solid #eee;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
