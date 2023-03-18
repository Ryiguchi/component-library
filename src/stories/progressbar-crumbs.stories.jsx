import ButtonInverted from '../components/all-buttons/button-inverted/button-inverted.component';
import { BUTTON_COLORS } from '../components/all-buttons/button.utilities/button.types';
import ProgressBarCrumbs from '../components/progress-bars/progressbar-crumbs/progressbar-crumbs.component';

export default {
  title: 'Progress Bars',
  component: ProgressBarCrumbs,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    numItems: {
      control: {
        type: 'range',
        min: 3,
        max: 20,
        step: 1,
      },
    },
    numCompleted: {
      control: {
        type: 'range',
        min: 3,
        max: 20,
        step: 1,
      },
    },
    currentItem: {
      control: {
        type: 'range',
        min: 3,
        max: 20,
        step: 1,
      },
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
  },
};

const Template = args => <ProgressBarCrumbs {...args} />;

export const Crumbs = Template.bind({});

Crumbs.args = {
  numItems: 10,
  numCompleted: 7,
  currentItem: 4,
  barColor: 'green',
  width: '600px',
};
