import { useEffect, useState } from 'react';
import { BUTTON_COLORS } from '../all-buttons/button.utilities/button.types';

import validIconGreen from './circle-check.svg';
import eyeClosed from './eye-closed.svg';
import eyeOpen from './eye-open.svg';

import * as S from './form-input.styles';

/*
props = {
  label: String - label text
  type: String (default = 'text') - input "type" prop
  required: Boolean (default = false)
  name: String - short name to define the field
  validIcon: Boolean (default = true) - if you want the green check if field is valid 
  data: Object (default = null) - previous
}
*/

const FormInput = ({
  backgroundColor = BUTTON_COLORS.LIGHT_GREY,
  label,
  validIcon = true,
  type = 'password',
  data = null,
  id = Date.now(),
  ...otherProps
}) => {
  const [formField, setFormField] = useState({ key: '' });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!data) return;
    const { name } = otherProps;

    if (data[name]) {
      document.getElementById(id).setAttribute('value', data[name]);
      setFormField({ key: data[name] });
    }
  }, []);

  const handleLabelClick = e => {
    e.target.nextElementSibling.focus();
  };

  const handleChange = e => {
    const { value } = e.target;
    setFormField({ key: value });
  };

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.InputAndLabel>
      {label && (
        <S.Label onClick={handleLabelClick} shrink={formField.key.length}>
          {label}
        </S.Label>
      )}
      {type === 'textarea' && (
        <S.Textarea
          id={id}
          wrap="hard"
          cols={20}
          minLength={type === 'password' ? '8' : '0'}
          type={showPassword === true ? 'text' : type}
          onChange={handleChange}
          hasText={formField.key.length}
          {...otherProps}
        ></S.Textarea>
      )}
      {type !== 'textarea' && (
        <S.Input
          backgroundColor={backgroundColor}
          id={id}
          minLength={type === 'password' ? '8' : '0'}
          type={showPassword === true ? 'text' : type}
          onChange={handleChange}
          hasText={formField.key.length}
          {...otherProps}
        ></S.Input>
      )}
      {validIcon && (
        <S.StyledValidIcon src={validIconGreen} alt="Valid input icon" />
      )}
      <S.EyeContainer type={type}>
        {showPassword && (
          <img onClick={handleEyeClick} src={eyeOpen} alt="Show" />
        )}
        {!showPassword && (
          <img onClick={handleEyeClick} src={eyeClosed} alt="Hide" />
        )}
      </S.EyeContainer>
    </S.InputAndLabel>
  );
};

export default FormInput;
