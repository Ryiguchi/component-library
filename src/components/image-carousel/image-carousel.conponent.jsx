import { useState } from 'react';
import { BUTTON_COLORS } from '../all-buttons/button.utilities/button.types';

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
import {
  BORDER_STYLES,
  BORDER_WIDTH,
  CARET_POSITION,
  CARET_SIZE,
  CARET_STYLE,
} from './image-carousel.types';
import { data } from '../../assets/test-data/images';

const ImageCarousel = ({
  images = data,
  width = 400,
  numthumbs = 6,
  hasBorder = true,
  borderColor = BUTTON_COLORS.MIDNIGHT_GREY,
  borderStyle = BORDER_STYLES.GAP,
  borderWidth = BORDER_WIDTH.DEFAULT,
  caretPosition = CARET_POSITION.MIDDLE,
  caretSize = CARET_SIZE.DEFAULT,
  caretStyle = CARET_STYLE.CIRCLE,
  caretBorder = true,
}) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isAnimating, setIsAnimating] = useState('false');
  const lastImgIndex = images.length - 1;

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
    <BorderWrapper
      hasBorder={hasBorder}
      borderColor={borderColor}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      width={width}
    >
      <CarouselContainer>
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
            caretPosition={caretPosition}
            caretSize={caretSize}
            caretStyle={caretStyle}
            caretBorder={caretBorder}
          />
          <CaretRightIcon
            src={CaretRight}
            alt="Next Image"
            onClick={() => changeSlide('right')}
            caretPosition={caretPosition}
            caretSize={caretSize}
            caretStyle={caretStyle}
            caretBorder={caretBorder}
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
                  borderColor={borderColor}
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
