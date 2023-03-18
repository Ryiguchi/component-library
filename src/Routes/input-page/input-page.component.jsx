import React from 'react';
import Container from '../../components/container/container.component';
import FormInput from '../../components/form-input/form-input.component';

const InputPage = () => {
  return (
    <div>
      <Container>
        <FormInput label="Enter your password" />
      </Container>
    </div>
  );
};

export default InputPage;
