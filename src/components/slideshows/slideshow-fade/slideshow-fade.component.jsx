import { useEffect, useState } from 'react';
import { data } from '../../../assets/test-data/images';

import { Container, ImgContainer, StyledImage } from './slideshow-fade.styles';

const SlideshowFade = ({
  images = data,
  interval = 5,
  orientation = 'landscape',
  border = true,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  let intervalId;

  useEffect(() => {
    if (intervalId) return;
    intervalId = setInterval(() => {
      setCurrentImage(current => {
        return getNextImage(current);
      });
    }, interval * 1000);
  }, []);

  const getNextImage = current => {
    if (current < images.length - 1) return current + 1;
    if (current === images.length - 1) return 0;
  };

  return (
    <Container orientation={orientation}>
      {images.map((img, i, arr) => (
        <ImgContainer
          key={img}
          numImages={arr.length}
          currentImage={currentImage}
          index={i}
          interval={interval}
          border={border}
        >
          <StyledImage src={img} alt={`Image ${i + 1}`} />
        </ImgContainer>
      ))}
    </Container>
  );
};

export default SlideshowFade;

/*
options:
  interval: Number; number of seconds between each picture
  orientation: String; 'landscape'(Default) || 'vertical' || 'square'
  border: Boolean; gives black border of 5px
*/
