import { data } from '../../assets/test-data/images';
import Container from '../../components/container/container.component';
import SlideshowFade from '../../components/slideshows/slideshow-fade/slideshow-fade.component';
import SlideshowStack from '../../components/slideshows/slideshow-stack/slideshow-stack.component';

const Slideshows = () => {
  return (
    <Container>
      <SlideshowFade images={data} />
      <SlideshowStack images={data}></SlideshowStack>
    </Container>
  );
};

export default Slideshows;
