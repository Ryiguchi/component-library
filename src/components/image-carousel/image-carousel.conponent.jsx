import { useState } from 'react';
import { StyledButton3D } from '../all-buttons/button-3d/button-3d.styles';
import {
  BUTTON_COLORS,
  BUTTON_WIDTH,
} from '../all-buttons/button.utilities/button.types';

import {
  CarouselContainer,
  CarouselElementContainer,
  CarouselElementLeft,
  CarouselElementCenter,
  CarouselElementRight,
  ThumbsContainer,
  ThumbsImgContainer,
  Thumbs,
  ThumbsImagesContainer,
  BorderWrapper,
  CaretRightIcon,
  CaretLeftIcon,
} from './imagecarousel-styles';

import CaretLeft from '../../assets/caret-left.svg';
import CaretRight from '../../assets/caret-right.svg';
import { CARET_STYLE } from './image-carousel.types';

const ImageCarousel = ({
  options: {
    images,
    width = 400,
    numthumbs = 0,
    border,
    caret = CARET_STYLE.CIRCLE,
  },
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isAnimating, setIsAnimating] = useState('false');
  const lastImgIndex = images.length - 1;
  const { color } = border;

  const changeSlide = direction => {
    direction === 'right' && setIsAnimating('slide-left');
    direction === 'left' && setIsAnimating('slide-right');

    setTimeout(() => {
      setIsAnimating('false');
      if (currentImg === 0 && direction === 'left') {
        setCurrentImg(lastImgIndex);
      } else if (currentImg === lastImgIndex && direction === 'right') {
        setCurrentImg(0);
      } else if (direction === 'right') {
        setCurrentImg(currentImg + 1);
      } else setCurrentImg(currentImg - 1);
    }, 500);
  };

  const getPreviousImg = () => {
    return currentImg === 0 ? lastImgIndex : currentImg - 1;
  };

  const getNextImg = () => {
    return currentImg === lastImgIndex ? 0 : currentImg + 1;
  };

  const goToImage = i => {
    setCurrentImg(i);
  };

  return (
    <BorderWrapper border={border}>
      <CarouselContainer width={width}>
        <CarouselElementContainer width={width}>
          <CarouselElementLeft
            src={images[getPreviousImg()]}
            position="left"
            animating={isAnimating}
            alt="Gallery Picture"
          />
          <CarouselElementCenter
            src={images[currentImg]}
            position="center"
            animating={isAnimating}
            alt="Gallery Picture"
          />
          <CarouselElementRight
            src={images[getNextImg()]}
            position="right"
            animating={isAnimating}
            alt="Gallery Picture"
          />
          <CaretLeftIcon
            src={CaretLeft}
            alt="Previous Image"
            onClick={() => changeSlide('left')}
            options={caret}
          />
          <CaretRightIcon
            src={CaretRight}
            alt="Next Image"
            onClick={() => changeSlide('right')}
            options={caret}
          />
        </CarouselElementContainer>

        {numthumbs > 0 && (
          <ThumbsContainer width={width} numthumbs={numthumbs}>
            <ThumbsImagesContainer
              currentimage={currentImg}
              lastimage={lastImgIndex}
              width={width}
              numthumbs={numthumbs}
            >
              {images.map((image, i) => (
                <ThumbsImgContainer
                  width={width}
                  numthumbs={numthumbs}
                  key={image}
                  displaying={i === currentImg ? true : false}
                  color={color}
                  onClick={() => goToImage(i)}
                >
                  <Thumbs
                    displaying={i === currentImg ? true : false}
                    src={image}
                    alt={`Image ${i}`}
                  />
                </ThumbsImgContainer>
              ))}
            </ThumbsImagesContainer>
          </ThumbsContainer>
        )}
      </CarouselContainer>
    </BorderWrapper>
  );
};

export default ImageCarousel;
