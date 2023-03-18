import { BUTTON_COLORS } from '../components/all-buttons/button.utilities/button.types';
import ProgressBarRound from '../components/progress-bars/progress-bar-round/progress-bar-round.component';

export default {
  title: 'Progress Bars',
  component: ProgressBarRound,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <div style={{ height: '10rem', width: '10rem' }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    percent: {
      control: {
        type: 'range',
        min: 1,
        max: 100,
        step: 1,
      },
    },

    color: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
  },
};

const Template = args => <ProgressBarRound {...args} />;

export const Round = Template.bind({});

Round.args = {
  percent: 65,
  size: 80,
  color: BUTTON_COLORS.GREEN,
};
