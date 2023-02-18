import uniqid from 'uniqid';

import { CAROUSEL_TYPES } from '../App';

import { CarouselContainer, ImgContainer, StyledImg } from './carousel.styles';

const Carousel = ({ config }) => {
  const { type, size, data } = config;
  const { carouselSize, itemSize } = size;

  // const values = data.map((item, i, arr) => {
  //   rotate: (180 / arr.length / 2 * i),
  //   xOffset: i < (arr.length / 2) ? -1 : 1,
  //   yOffset: '',

  // })

  return (
    <CarouselContainer size={size} count={data.length}>
      {type === CAROUSEL_TYPES.IMAGES &&
        data.map((img, i) => {
          const id = uniqid();

          return (
            <ImgContainer size={itemSize} key={id}>
              <StyledImg src={img} alt={`Image ${id}`} />
            </ImgContainer>
          );
        })}
    </CarouselContainer>
  );
};

export default Carousel;
