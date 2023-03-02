import SlideshowFade from '../../components/slideshows/slideshow-fade/slideshow-fade.component';

import img1 from '../../assets/test-data/slideshow/img-1.webp';
import img2 from '../../assets/test-data/slideshow/img-2.webp';
import img3 from '../../assets/test-data//slideshow/img-3.webp';
import img4 from '../../assets/test-data/slideshow/img-5.webp';
import img5 from '../../assets/test-data/slideshow/img-6.webp';
import img6 from '../../assets/test-data/slideshow/img-7.webp';
import img7 from '../../assets/test-data/slideshow/img-8.webp';
import img8 from '../../assets/test-data/slideshow/img-9.webp';
import img9 from '../../assets/test-data/slideshow/img-10.webp';
import img10 from '../../assets/test-data/slideshow/img-12.webp';

export const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
];

const Slideshows = () => {
  return (
    <div>
      <SlideshowFade images={images} />
    </div>
  );
};

export default Slideshows;
