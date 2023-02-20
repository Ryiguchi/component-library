import styled from 'styled-components';
import { BORDER_STYLES, CARET_POSITION } from './image-carousel.types';

export const BorderWrapper = styled.div`
  ${({ border: { hasBorder, color, style, width } }) => {
    if (!hasBorder) return `border: none;`;
    if (style === BORDER_STYLES.GAP)
      return `
    border: ${width} solid rgba(${color});
    padding: ${width};
    `;
  }}
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: ${({ width }) => `${width}px;`};
  height: 100%;
  overflow: hidden;
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
  height: ${({ width, numthumbs }) => `${width / numthumbs}px`};
`;

export const ThumbsImagesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: max-content;
  display: flex;

  ${({ currentimage, lastimage, width, numthumbs }) => {
    const imageWidth = width / numthumbs;
    if (currentimage < numthumbs / 2) {
      return `
        left: 0;
      `;
    }

    if (
      currentimage >= numthumbs / 2 &&
      currentimage < lastimage - numthumbs / 2 + 1
    ) {
      const left = (currentimage - numthumbs / 2) * imageWidth + imageWidth / 2;
      return `
        left: -${left}px;
      `;
    }

    if (currentimage > lastimage - numthumbs / 2) {
      const left =
        (lastimage - numthumbs) * (imageWidth + 6) + (imageWidth + 6) / 2;
      return `
        left: -${left}px;
      `;
    }
  }}
`;

export const ThumbsImgContainer = styled.div`
  width: ${({ width, numthumbs }) => `${width / numthumbs - 6}px`};
  height: ${({ width, numthumbs }) => `${width / numthumbs - 6}px`};
  object-fit: cover;
  ${({ displaying, color }) =>
    displaying
      ? `border: 3px solid rgba(${color}); transform: translateY(-5px);`
      : `border: 3px solid #fff;`};
`;

export const Thumbs = styled.img`
  width: 100%;
  height: 100%;

  filter: ${({ displaying }) => displaying && `brightness(50%);`};
`;

export const ControllerContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CaretIcon = styled.img`
  position: absolute;
  cursor: pointer;
  ${({ options: { position } }) =>
    position === CARET_POSITION.MIDDLE ? `top: 50%;` : `bottom: 0; `}
  background-color: rgba(255, 255, 255, 0.8);

  ${({ options: { size } }) => {
    if (size === 'small')
      return `
      height: 16px;
      padding: 4px;
    `;

    if (size === 'default')
      return `
      height: 20px;
      padding: 8px;
    `;

    if (size === 'large')
      return `
      height: 24px;
      padding: 10px;
    `;

    if (size === 'xLarge')
      return `
      height: 36px;
      padding: 12px;
    `;
  }}

  border-radius: ${({ options: { style } }) => style};
  border: ${({ options: { border } }) => border && `1px solid #000;`};
`;

export const CaretLeftIcon = styled(CaretIcon)`
  left: 0;
  transform: translate(50%, -50%);
`;

export const CaretRightIcon = styled(CaretIcon)`
  right: 0;
  transform: translate(-50%, -50%);
`;
