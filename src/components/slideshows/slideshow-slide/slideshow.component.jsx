import { useEffect, useState } from 'react';
import { data } from '../../../assets/test-data/images';

import { Container, ImgContainer, StyledImage } from './slideshow.styles';

const Slideshow = ({ images = data, delay }) => {
  const [currentImage, setCurrentImage] = useState(0);
  let interval;

  useEffect(() => {
    if (interval) return;
    interval = setInterval(() => {
      setCurrentImage(current => {
        return getNextImage(current);
      });
    }, delay * 1000);
  }, []);

  const getNextImage = current => {
    if (current < images.length - 1) return current + 1;
    if (current === images.length - 1) return 0;
  };

  return (
    <Container>
      {images.map((img, i) => (
        <ImgContainer key={img} currentImage={currentImage} index={i}>
          <StyledImage src={img} alt="Chas Academy" />
        </ImgContainer>
      ))}
    </Container>
  );
};

export default Slideshow;
