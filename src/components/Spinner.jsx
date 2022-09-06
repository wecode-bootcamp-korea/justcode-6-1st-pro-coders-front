import { ImSpinner } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  svg {
    animation: ${spin} infinite 1s;
  }
`;

const Spinner = () => (
  <StyledSpinner>
    <ImSpinner size={40} />
  </StyledSpinner>
);

export default Spinner;
