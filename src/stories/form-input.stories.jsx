import FormInput from '../components/form-input/form-input.component';

export default {
  title: 'Inputs',
  component: FormInput,
  decorators: [
    Story => (
      <div style={{ margin: '3rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'light grey',
      values: [
        {
          name: 'light grey',
          value: '#ddd',
        },
      ],
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    validIcon: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
  },
};

const Template = args => <FormInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  label: 'User name',
  validIcon: true,
  type: 'text',
};
