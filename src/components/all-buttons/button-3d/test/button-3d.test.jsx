import { screen, render } from '@testing-library/react';
import Button3D from '../button-3d.component';
import 'jest-styled-components';
import {
  BORDER_RADIUS,
  BUTTON_SIZES,
  BUTTON_TEXT_STYLE,
  BUTTON_WIDTH,
} from '../../button.utilities/button.types';

describe('The button accepts the props', () => {
  test('The large size prop gives the button the appropriate font size', () => {
    render(<Button3D size={BUTTON_SIZES.LARGE}>3D Button</Button3D>);

    const button = screen.getByRole('button', { name: '3D Button' });

    expect(button).toHaveStyle('font-size: 24px; padding: 24px 36px;');
  });

  test('The small size prop gives the button the appropriate font size', () => {
    render(<Button3D size={BUTTON_SIZES.SMALL}>3D Button</Button3D>);

    const button = screen.getByRole('button', { name: '3D Button' });

    expect(button).toHaveStyle('font-size: 10px; padding: 12px 16px;');
  });

  test('The width prop gives the button the appropriate width', () => {
    render(<Button3D width={BUTTON_WIDTH.STRETCH}>3D Button</Button3D>);

    const button = screen.getByRole('button', { name: '3D Button' });

    expect(button).toHaveStyle('width: 100%');
  });

  test('The border radius prop gives the button the appropriate border radius', () => {
    render(<Button3D borderRadius={BORDER_RADIUS.MAX}>3D Button</Button3D>);

    const button = screen.getByRole('button', { name: '3D Button' });

    expect(button).toHaveStyle('border-radius: 100px');
  });

  test('The text style uppercase prop makes the text uppercase', () => {
    render(
      <Button3D textStyle={BUTTON_TEXT_STYLE.UPPERCASE}>3D Button</Button3D>
    );

    const button = screen.getByRole('button', { name: '3D Button' });

    expect(button).toHaveStyle('text-transform: uppercase');
  });
});
