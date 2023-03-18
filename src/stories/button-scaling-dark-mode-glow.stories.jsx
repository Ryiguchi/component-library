import ButtonScalingDarkModeGlow from '../components/all-buttons/button-scaling-dark-mode-glow/button-scaling-dark-mode-glow,component';
import {
  BORDER_RADIUS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../components/all-buttons/button.utilities/button.types';

export default {
  title: 'Buttons/Scaling/Dark-Mode-Glow',
  component: ButtonScalingDarkModeGlow,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'Black',
          value: '#000',
        },
      ],
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: Object.values(BUTTON_SIZES),
    },
    width: {
      control: 'radio',
      options: Object.values(BUTTON_WIDTH),
    },
    borderRadius: {
      control: 'radio',
      options: Object.values(BORDER_RADIUS),
    },
    textStyle: {
      control: 'radio',
      options: Object.values(BUTTON_TEXT_STYLE),
    },
    children: {
      control: 'text',
    },
  },
};

const Template = args => <ButtonScalingDarkModeGlow {...args} />;

export const DarkModeGlow = Template.bind({});

DarkModeGlow.args = {
  size: BUTTON_SIZES.DEFAULT,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  textStyle: BUTTON_TEXT_STYLE.UPPERCASE,
  children: 'Click Me',
};
