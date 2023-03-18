import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: 20px;

  display: flex;
  align-items: center;
`;

export const BarContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  background-color: #fff;
  /* border: 1px solid #000; */
  border-radius: 100px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.15), inset 0 -1px 3px rgba(0, 0, 0, 0.3),
    0 0 2px rgba(0, 0, 0, 0.15);

  width: 100%;
  height: 5px;
`;

export const Bar = styled.div`
  height: 100%;
  width: ${({ percentCompleted }) => `${percentCompleted}%`};
  background-color: ${({ barColor }) => `${barColor}`};
  border-radius: 100px;
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Dots = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  /* border: ${({ current }) =>
    current ? `1px solid #fff` : `1px solid #000`}; */
  box-shadow: 2px 7px 5px rgba(0, 0, 0, 0.2),
    inset -1px -2px 2px rgba(0, 0, 0, 0.4), 0 0 5px rgba(0, 0, 0, 0.2);

  background-color: ${({ current }) => (current ? `green` : `#fff`)};

  z-index: 10;
`;
