import ButtonInverted from '../components/all-buttons/button-inverted/button-inverted.component';
import { BUTTON_COLORS } from '../components/all-buttons/button.utilities/button.types';
import ProgressBarGradient from '../components/progress-bars/progressbar-gradient/progressbar-gradient.component';

export default {
  title: 'Progress Bars',
  component: ProgressBarGradient,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
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
    numCheverons: {
      control: 'select',
      options: [20, 30, 40, 50],
    },
    width: {
      control: 'select',
      options: [
        '300px',
        '400px',
        '500px',
        '600px',
        '700px',
        '800px',
        '900px',
        '1000px',
      ],
    },

    color: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
  },
};

const Template = args => <ProgressBarGradient {...args} />;

export const Gradient = Template.bind({});

Gradient.args = {
  percent: 100,
  color: BUTTON_COLORS.GREEN,
  width: '400px',
};
