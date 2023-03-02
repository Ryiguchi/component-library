import Container from '../../components/container/container.component';
import ProgressBarCrumbs from '../../components/progress-bars/progressbar-crumbs/progressbar-crumbs.component';
import ProgressBarGradient from '../../components/progress-bars/progressbar-gradient/progressbar-gradient.component';

import { BUTTON_COLORS } from '../../components/all-buttons/button.utilities/button.types';

export const crumbsOptions = {
  numItems: 10,
  numCompleted: 5,
  currentItem: 3,
};

const Progress = () => {
  return (
    <Container>
      <ProgressBarGradient width={500} color={BUTTON_COLORS.CHROME_YELLOW} />
      <ProgressBarCrumbs options={crumbsOptions} />
    </Container>
  );
};

export default Progress;
