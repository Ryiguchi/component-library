import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: ${({ width }) => `${width}px;`};
  height: 100%;
  overflow: hidden;
`;

export const ControllerContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CarouselElementContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const CarouselElements = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const CarouselElementLeft = styled(CarouselElements)`
  transform: translateX(-100%);
  ${({ animating }) => {
    if (animating === 'slide-left') {
      return `animation: leftSlideLeft .5s ease-in-out forwards;`;
    }

    if (animating === 'slide-right') {
      return `animation: leftSlideRight .5s ease-in-out forwards;`;
    }

    if (animating === 'false') {
      return `animation: none;`;
    }
  }}

  @keyframes leftSlideLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(-200%);
    }
  }

  @keyframes leftSlideRight {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
export const CarouselElementCenter = styled(CarouselElements)`
  transform: translateX(0);
  ${({ animating }) => {
    if (animating === 'slide-left') {
      return `animation: centerSlideLeft .5s ease-in-out forwards;`;
    }

    if (animating === 'slide-right') {
      return `animation: centerSlideRight .5s ease-in-out forwards;`;
    }

    if (animating === 'false') {
      return `animation: none;`;
    }
  }}
  @keyframes centerSlideLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @keyframes centerSlideRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
export const CarouselElementRight = styled(CarouselElements)`
  transform: translateX(100%);
  ${({ animating }) => {
    if (animating === 'slide-left') {
      return `animation: rightSlideLeft .5s ease-in-out forwards;`;
    }

    if (animating === 'slide-right') {
      return `animation: rightSlideRight .5s ease-in-out forwards;`;
    }

    if (animating === 'false') {
      return `animation: none;`;
    }
  }}
  @keyframes rightSlideLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes rightSlideRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;

export const ThumbsContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${({ width }) => `${width / 5}px`};
`;

export const ThumbsImagesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: max-content;
  display: flex;
  gap: 5px;
  /* height: ${({ width }) => `${width / 5}px`}; */
`;

export const ThumbsImgContainer = styled.div`
  width: ${({ width }) => `${width / 5}px`};
  height: ${({ width }) => `${width / 5}px`};
  object-fit: cover;
`;

export const Thumbs = styled.img`
  width: 100%;
  height: 100%;
`;
