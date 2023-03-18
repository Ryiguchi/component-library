import Container from '../../components/container/container.component';
import ProgressBarRound from '../../components/progress-bars/progress-bar-round/progress-bar-round.component';
import ProgressBarCrumbs from '../../components/progress-bars/progressbar-crumbs/progressbar-crumbs.component';
import ProgressBarGradient from '../../components/progress-bars/progressbar-gradient/progressbar-gradient.component';

const Progress = () => {
  return (
    <Container>
      <ProgressBarRound />
      <ProgressBarGradient />
      <ProgressBarCrumbs />
    </Container>
  );
};

export default Progress;
