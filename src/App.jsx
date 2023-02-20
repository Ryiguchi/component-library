import { Routes, Route } from 'react-router-dom';

import './App.css';
import ImageCarousel from './components/image-carousel/image-carousel.conponent';
import ProgressBarCrumbs from './components/progressbar-crumbs/progressbar-crumbs.component';
import ProgressBarGradient from './components/progressbar-gradient/progressbar-gradient.component';
import Buttons from './Routes/buttons/buttons.component';
import Header from './Routes/header/header.component';
import Progress from './Routes/progress/progress.component';
import Lightbox from './Routes/lightbox/lightbox.component';
import { GlobalStyle } from './globalStyles';

const barGradientOptions = {
  width: 500,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<Header />}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="progress" element={<Progress />} />
          <Route path="lightbox" element={<Lightbox />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
