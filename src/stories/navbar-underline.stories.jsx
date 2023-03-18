import { BUTTON_COLORS } from '../components/all-buttons/button.utilities/button.types';
import NavbarUnderline from '../components/navbars/navbar-underline/navbar-underline.component';

export default {
  title: 'NavBars',
  component: NavbarUnderline,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
  },
};

const Template = args => <NavbarUnderline {...args} />;

export const Underline = Template.bind({});

Underline.args = {
  items: [
    ['item1', '#'],
    ['item2', '#'],
    ['item3', '#'],
    ['item4', '#'],
  ],
  color: BUTTON_COLORS.ORANGE,
};
