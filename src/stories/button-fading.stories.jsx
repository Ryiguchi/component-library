import Button3D from '../components/all-buttons/button-3d/button-3d.component';
import ButtonFading from '../components/all-buttons/button-fading/button-fading.component';
import {
  BORDER_RADIUS,
  BUTTON_COLORS,
  BUTTON_COLOR_EFFECTS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../components/all-buttons/button.utilities/button.types';

export default {
  title: 'Buttons',
  component: ButtonFading,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'radio',
      options: Object.values(BUTTON_SIZES),
    },
    textColor: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
    backgroundColor: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
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
    colorEffect: {
      control: 'radio',
      options: Object.values(BUTTON_COLOR_EFFECTS),
    },
    children: {
      control: 'text',
    },
  },
};

const Template = args => <ButtonFading {...args} />;

export const Fading = Template.bind({});

Fading.args = {
  size: BUTTON_SIZES.DEFAULT,
  textColor: BUTTON_COLORS.WHITE,
  backgroundColor: BUTTON_COLORS.MEGAMAN_BLUE,
  width: BUTTON_WIDTH.FIT,
  borderRadius: BORDER_RADIUS.DEFAULT,
  textStyle: BUTTON_TEXT_STYLE.UPPERCASE,
  children: 'Click Me',
  colorEffect: BUTTON_COLOR_EFFECTS.DARKER,
};
