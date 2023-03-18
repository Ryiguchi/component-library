import SlideshowFade from '../components/slideshows/slideshow-fade/slideshow-fade.component';

export default {
  title: 'Slideshows',
  component: SlideshowFade,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    interval: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
    border: {
      control: 'boolean',
    },
  },
};

const Template = args => <SlideshowFade {...args} />;

export const Fade = Template.bind({});

Fade.args = {
  interval: 3,
  border: true,
};
