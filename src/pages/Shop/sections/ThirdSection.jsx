import { useState } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  h3 {
    font-size: 30px;
    font-weight: 900;
  }

  div.container {
    div.categories {
      margin-top: 30px;
      display: flex;
      gap: 30px;
      color: ${({ theme }) => theme.colors.disabledTitle};
      cursor: pointer;

      h3 {
        &:nth-child(${({ mode }) => mode}) {
          color: black;
        }
      }
    }
  }
`;

const ThirdSection = () => {
  const [mode, setMode] = useState(1);

  return (
    <StyledSection mode={mode}>
      <div className='container'>
        <h3>BEST</h3>

        <div className='categories'>
          <h3 onClick={() => setMode(1)}>퍼포먼스라인</h3>
          <h3 onClick={() => setMode(2)}>오리지널라인</h3>
        </div>
      </div>
    </StyledSection>
  );
};

export default ThirdSection;
