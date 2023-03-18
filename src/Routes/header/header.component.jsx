import { Outlet } from 'react-router-dom';
import NavbarUnderline from '../../components/navbars/navbar-underline/navbar-underline.component';
import { NAVBAR_GAP } from '../navbars/navbars.component';

const navItems = [
  ['Buttons', '/buttons'],
  ['Progress Bars', '/progress'],
  ['Carousel', '/carousel'],
  ['Slideshows', '/slideshows'],
  ['Input', '/input'],
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
      <NavbarUnderline items={optionsNavbarUnderline.items} />
      <Outlet />
    </>
  );
};

export default Header;
