import styled from 'styled-components';
import { getColor } from '../../all-buttons/button.utilities/button.mixins';

export const NavbarContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 3rem;

  a {
    text-decoration: none;
    color: #555;
    width: 10rem;
  }
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  border-bottom: 2px solid #fff;
  padding: 2rem 0;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-bottom: ${({ color }) => `2px solid rgb(${getColor(color)})`};
    color: ${({ color }) => `rgb(${getColor(color)})`};
  }
`;
