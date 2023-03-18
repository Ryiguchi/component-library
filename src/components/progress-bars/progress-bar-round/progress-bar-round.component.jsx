import { BUTTON_COLORS } from '../../all-buttons/button.utilities/button.types';
import {
  Container,
  InnerCircle,
  OuterCircle,
} from './progress-bar-round.styles';

const ProgressBarRound = ({
  percent = 50,
  color = BUTTON_COLORS.MEGAMAN_BLUE,
  size = 80,
}) => {
  return (
    <Container size={size}>
      <OuterCircle percent={percent} color={color} size={size}></OuterCircle>
      <InnerCircle color={color} size={size}>{`${percent}%`}</InnerCircle>
    </Container>
  );
};

export default ProgressBarRound;
