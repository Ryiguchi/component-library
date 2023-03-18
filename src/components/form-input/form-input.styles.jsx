import styled, { css } from 'styled-components';
import { getColor } from '../all-buttons/button.utilities/button.mixins';
import { bodySmallRegular, bodyMediumRegular, theme } from './themes';

const shrinkLabelStyles = css`
  color: ${theme.colors.grayDarkest};
  ${bodySmallRegular};
  top: 20px;
  left: 8px;
`;

export const InputAndLabel = styled.div`
  position: relative;
  width: 100%;
  max-width: 30rem;

  input[type='password'] {
    letter-spacing: 0.5rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 12px;
  top: 57px;

  ${bodyMediumRegular}
  color: ${theme.colors.grayMedium};

  ${({ shrink }) => shrink && shrinkLabelStyles}

  cursor: text;
  transition: 0.3s ease all;
`;

const inputStyles = css`
  width: 100%;
  padding: 1.2rem;
  margin-top: 4.4rem;
  vertical-align: text-top;

  color: ${theme.colors.grayDarkest};
  ${bodyMediumRegular}

  border: none;
  border-radius: 10px;

  &:focus {
    outline: 2px solid ${theme.colors.primary};
  }

  &:focus ~ ${Label} {
    ${shrinkLabelStyles}
  }

  &:valid + img {
    ${({ hasText }) => hasText && 'opacity: 1;'}
  }
`;

export const Input = styled.input`
  ${inputStyles}
  background-color: ${({ backgroundColor }) =>
    `rgb(${getColor(backgroundColor)});`};
  /* height: 4.6rem; */
  ${({ type }) => type === 'textarea' && 'height: 20rem; '}
`;

export const Textarea = styled.textarea`
  ${inputStyles}
  height: 20rem;
`;

export const StyledValidIcon = styled.img`
  height: 1.6rem;
  position: absolute;
  right: 0.5rem;
  top: 2.5rem;
  opacity: 0;
`;

export const EyeContainer = styled.div`
  ${({ type }) => type !== 'password' && 'display: none;'}
  position: absolute;
  right: 0.5rem;
  bottom: 1.4rem;
`;
