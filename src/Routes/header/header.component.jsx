import { Outlet } from 'react-router-dom';
import NavbarUnderline from '../../navbars/navbar-underline/navbar-underline.component';
import { NAVBAR_GAP } from '../navbars/navbars.component';

const navItems = [
  ['Buttons', 'buttons'],
  ['Navbars', 'navbars'],
  ['Progress Bars', 'progress'],
  ['Lightbox', 'lightbox'],
  ['Carousel', '#'],
  ['Slideshows', 'slideshows'],
];

const optionsNavbarUnderline = {
  items: navItems,
  color: '#FF7E1B',
  gap: NAVBAR_GAP.DEFAULT,
  fontSize: '2rem',
};

const Header = () => {
  return (
    <>
      <NavbarUnderline options={optionsNavbarUnderline} />
      <Outlet />
    </>
  );
};

export default Header;
