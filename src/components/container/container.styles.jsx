import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ gap }) => gap};
  max-width: ${({ maxWidth }) => maxWidth};
  margin: 10rem auto;
`;
