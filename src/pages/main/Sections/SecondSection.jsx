import styled from 'styled-components';
import useInfiniteSwiper from '../../../hooks/useInfiniteSwiper';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useState } from 'react';

const StyledSection = styled.section`
  overflow: hidden;
  position: relative;

  ul {
    width: 500%;
    display: flex;

    li {
      width: 20%;
      position: relative;

      img {
        width: 100%;
        -webkit-user-drag: none;
        cursor: pointer;
      }

      h2 {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 400px;
        font-weight: 900;
        font-size: 60px;
        line-height: 1.4;
      }
    }
  }

  div.navigator {
    position: absolute;
    left: 0;
    top: 400px;
    display: flex;
    gap: 20px;
    padding: 0 100px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background-color: black;
      color: white;
      width: 50px;
      height: 50px;
      cursor: pointer;
    }
  }
`;

const SecondSection = () => {
  const { setNextButton, setPrevButton, swipedTarget } = useInfiniteSwiper(5);
  const [disabled, setDisabled] = useState(false);

  const checkHandler = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 300);
  };

  return (
    <StyledSection>
      <ul ref={swipedTarget}>
        <li>
          <img src='https://image.prospecs.com/files/upload/display/202205/202205191808123.png/dims/optimize' alt='PRO-SPECS PERFORMANCE' />
          <h2>PRO-SPECS PERFORMANCE</h2>
        </li>
        <li>
          <img src='https://image.prospecs.com/files/upload/display/202208/202208301120141.png/dims/optimize' alt='PRO-SPECS PERFORMANCE' />
          <h2>PRO-SPECS PERFORMANCE</h2>
        </li>
        <li>
          <img src='https://image.prospecs.com/files/upload/display/202208/202208301450054.png/dims/optimize' alt='PRO-SPECS ORIGINAL' />
          <h2>PRO-SPECS ORIGINAL</h2>
        </li>
        <li>
          <img src='https://image.prospecs.com/files/upload/display/202205/202205191808123.png/dims/optimize' alt='PRO-SPECS PERFORMANCE' />
          <h2>PRO-SPECS PERFORMANCE</h2>
        </li>
        <li>
          <img src='https://image.prospecs.com/files/upload/display/202208/202208301120141.png/dims/optimize' alt='PRO-SPECS PERFORMANCE' />
          <h2>PRO-SPECS PERFORMANCE</h2>
        </li>
      </ul>
      <div className='navigator'>
        <button ref={setPrevButton} onClick={checkHandler} disabled={disabled}>
          <AiOutlineLeft size={40} />
        </button>
        <button ref={setNextButton} onClick={checkHandler} disabled={disabled}>
          <AiOutlineRight size={40} />
        </button>
      </div>
    </StyledSection>
  );
};

export default SecondSection;
