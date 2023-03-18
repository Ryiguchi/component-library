import { screen, render } from '@testing-library/react';
import FormInput from '../form-input.component';

describe('The input receives its props', () => {
  test('The type prop gives the input the appropriate type', () => {
    render(<FormInput label="test" type="email" />);
    const input = screen.getByRole('textbox', { label: 'test' });

    expect(input).toBeInTheDocument();
    expect(input.type).toBe('email');
  });

  test('The validIcon=true prop shows the icon', () => {
    render(<FormInput label="test" validIcon={true} />);
    const validIcon = screen.getByAltText('Valid input icon');

    expect(validIcon).toBeInTheDocument();
  });

  test('The validIcon=false prop hides the icon', () => {
    render(<FormInput label="test" validIcon={false} />);
    const validIcon = screen.queryByAltText('Valid input icon');

    expect(validIcon).not.toBeInTheDocument();
  });
});
