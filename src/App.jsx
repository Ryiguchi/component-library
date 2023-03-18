import { Routes, Route } from 'react-router-dom';

import './App.css';
import Buttons from './Routes/buttons/buttons.component';
import Header from './Routes/header/header.component';
import Progress from './Routes/progress/progress.component';
import { GlobalStyle } from './globalStyles';
import Navbars from './Routes/navbars/navbars.component';
import Slideshows from './Routes/slideshows/slideshows.component';
import InputPage from './Routes/input-page/input-page.component';
import CarouselPage from './Routes/carousel-page/carousel-page.component';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<Header />}>
          <Route path="buttons" element={<Buttons />} />
          <Route path="progress" element={<Progress />} />
          <Route path="carousel" element={<CarouselPage />} />
          <Route path="input" element={<InputPage />} />
          <Route path="navbars" element={<Navbars />} />
          <Route path="slideshows" element={<Slideshows />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
