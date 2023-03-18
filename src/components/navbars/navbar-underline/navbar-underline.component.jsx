import { BUTTON_COLORS } from '../../all-buttons/button.utilities/button.types';
import * as S from './navbar-underline.styles';

const NavbarUnderline = ({
  items = [
    ['item1', '#'],
    ['item2', '#'],
    ['item3', '#'],
    ['item4', '#'],
  ],
  color = BUTTON_COLORS.GREEN,
}) => {
  return (
    <S.NavbarContainer>
      {items.map(item => (
        <a href={item[1]} key={item[1]}>
          <S.NavbarItem color={color}>{item[0]}</S.NavbarItem>
        </a>
      ))}
    </S.NavbarContainer>
  );
};

export default NavbarUnderline;
