import { StyledContainer } from './container.styles';

const Container = ({ children, maxWidth = '100%', gap = '10rem' }) => {
  return (
    <StyledContainer gap={gap} maxWidth={maxWidth}>
      {children}
    </StyledContainer>
  );
};

export default Container;
