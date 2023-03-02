import React from 'react';
import NavbarUnderline from '../../navbars/navbar-underline/navbar-underline.component';
import { Container, NavbarContainer } from './navbars.styles';

const navItems = [
  ['Collections', '#'],
  ['Men', '#'],
  ['Women', '#'],
  ['About', '#'],
  ['Contact', '#'],
];

export const NAVBAR_GAP = {
  SMALL: '4.8rem',
  DEFAULT: '7.2rem',
  LARGE: '9.6rem',
  X_LARGE: '14.4rem',
};

const optionsNavbarUnderline = {
  items: navItems,
  color: '#FF7E1B',
  gap: NAVBAR_GAP.DEFAULT,
  fontSize: '2rem',
};

const Navbars = () => {
  return (
    <Container>
      <NavbarContainer>
        <NavbarUnderline options={optionsNavbarUnderline} />
      </NavbarContainer>
    </Container>
  );
};

export default Navbars;
