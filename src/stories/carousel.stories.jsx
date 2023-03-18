import { data } from '../assets/test-data/images';
import { BUTTON_COLORS } from '../components/all-buttons/button.utilities/button.types';
import ImageCarousel from '../components/image-carousel/image-carousel.conponent';
import {
  BORDER_STYLES,
  BORDER_WIDTH,
  CARET_POSITION,
  CARET_SIZE,
  CARET_STYLE,
} from '../components/image-carousel/image-carousel.types';

export default {
  title: 'Carousels',
  component: ImageCarousel,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: [300, 400, 500, 600],
      },
    },
    numthumbs: {
      control: {
        type: 'range',
        min: 0,
        max: 8,
        step: 1,
      },
    },
    hasBorder: {
      control: 'boolean',
    },
    caret: {
      control: {
        type: 'select',
        options: Object.values(CARET_STYLE),
      },
    },
    borderColor: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
    borderWidth: {
      control: 'select',
      options: Object.values(BORDER_WIDTH),
    },
    caretPosition: {
      control: 'select',
      options: Object.values(CARET_POSITION),
    },
    caretSize: {
      control: 'select',
      options: Object.values(CARET_SIZE),
    },
    caretStyle: {
      control: 'select',
      options: Object.values(CARET_STYLE),
    },
    caretBorder: {
      control: 'boolean',
    },
  },
};

const Template = args => <ImageCarousel {...args} />;

export const Carousel = Template.bind({});

Carousel.args = {
  width: 400,
  numthumbs: 5,
  hasBorder: true,
  borderColor: BUTTON_COLORS.CHROME_YELLOW,
  borderStyle: BORDER_STYLES.GAP,
  borderWidth: BORDER_WIDTH.DEFAULT,
  caretPosition: CARET_POSITION.MIDDLE,
  caretSize: CARET_SIZE.DEFAULT,
  caretStyle: CARET_STYLE.CIRCLE,
  caretBorder: true,
  images: data,
};
