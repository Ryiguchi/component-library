import SlideshowStack from '../components/slideshows/slideshow-stack/slideshow-stack.component';

export default {
  title: 'Slideshows',
  component: SlideshowStack,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    delay: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
};

const Template = args => <SlideshowStack {...args} />;

export const Stack = Template.bind({});

Stack.args = {
  delay: 3,
};
