import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  aspect-ratio: ${({ orientation }) => {
    if (orientation === 'landscape') return '1.5 / 1;';
    if (orientation === 'vertical') return '1 / 1.5;';
    if (orientation === 'square') return '1 / 1';
  }};
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  object-fit: cover;

  border: ${({ border }) => border && '5px solid #000;'};

  ${({ currentImage, index, interval, numImages }) => {
    const fadeStart = (interval - 2) / interval;

    if (currentImage === index) {
      return `
      animation: fadeOut ${interval}s;

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        ${fadeStart}% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
      
      `;
    }

    if (
      currentImage === index - 1 ||
      (currentImage === numImages - 1 && index === 0)
    )
      return `
        animation: fadeIn ${interval}s;

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          ${fadeStart}% {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `;
  }};
`;
