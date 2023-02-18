import Carousel from './components/carousel.component';
import Button from './components/button-scaling/button-scaling.component';

import './App.css';

const data = [
  '/src/assets/img-1.webp',
  '/src/assets/img-2.webp',
  '/src/assets/img-3.webp',
  '/src/assets/img-4.webp',
  '/src/assets/img-5.webp',
  '/src/assets/img-6.webp',
  '/src/assets/img-5.webp',
  '/src/assets/img-6.webp',
  '/src/assets/img-5.webp',
  '/src/assets/img-6.webp',
];

export const CAROUSEL_TYPES = {
  IMAGES: 'images',
};

const config = {
  size: {
    carouselSize: {
      width: '300px',
      height: '300px',
    },
    itemSize: {
      height: '25px',
      width: '25px',
    },
  },

  data: data,
  type: CAROUSEL_TYPES.IMAGES,
};

function App() {
  return (
    <div>
      <Button />
    </div>
  );
}

export default App;
