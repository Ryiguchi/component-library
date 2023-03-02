import { Link } from 'react-router-dom';
import { NavbarContainer, NavbarItem } from './navbar-underline.styles';

const NavbarUnderline = ({
  options,
  options: { items, color, gap, fontSize },
}) => {
  return (
    <NavbarContainer options={options}>
      {items.map((item, i) => (
        <Link to={item[1]} key={i}>
          <NavbarItem color={color} key={i}>
            {item[0]}
          </NavbarItem>
        </Link>
      ))}
    </NavbarContainer>
  );
};

export default NavbarUnderline;
