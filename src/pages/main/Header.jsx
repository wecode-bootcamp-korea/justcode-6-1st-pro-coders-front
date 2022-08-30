import useInfiniteSwiper from '../../hooks/useInfiniteSwiper';
import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const StyledHeader = styled.header`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  position: relative;

  div.navigator {
    position: absolute;
    bottom: 100px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 30px;

    div.pageNav {
      display: flex;
      align-items: center;
      gap: 20px;

      h2 {
        font-weight: 900;
        color: white;
      }

      span.gauge {
        width: 180px;
        height: 10px;
        background-color: #ffffff50;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          height: 100%;
          width: calc(100% * ${({ page }) => page} / 3);
          background-color: #ffffff;
          transition: 0.3s;
          left: 0;
          top: 0;
        }
      }
    }

    div.buttonContainer {
      display: flex;
      gap: 10px;
    }

    button {
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none;
      margin: 0;
      padding: 0;
      border: 3px solid white;
      background-color: transparent;
      color: white;
    }
  }

  ul {
    display: flex;
    width: 500%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 100vh;
      color: black;
      font-size: 30px;
      position: relative;

      h2 {
        position: absolute;
        bottom: 160px;
        left: 20px;
        font-size: 40px;
        font-weight: 900;
        color: white;
        width: 500px;
        line-height: 1.3;
      }

      img {
        -webkit-user-drag: none;
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
`;

const Header = () => {
  const { page, setNextButton, setPrevButton, swipedTarget } = useInfiniteSwiper([1, 2, 3, 4, 5]);
  const [disabled, setDisabled] = useState(false);

  const clickHandler = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 300);
  };

  return (
    <>
      <StyledHeader page={page}>
        <ul ref={swipedTarget}>
          <li>
            <img src='./main/img/title3.jfif' alt='' />
            <h2>치킨 먹고싶다</h2>
          </li>
          <li>
            <img src='./main/img/title1.jfif' alt='' />
            <h2>PRO-SPECS SPONSORSHIP</h2>
          </li>
          <li>
            <img src='./main/img/title2.jfif' alt='' />
            <h2>HOW TO PLAY THIS CITY 22FW PERFORMANCE</h2>
          </li>
          <li>
            <img src='./main/img/title3.jfif' alt='' />
            <h2>치킨 먹고싶다</h2>
          </li>
          <li>
            <img src='./main/img/title1.jfif' alt='' />
            <h2>PRO-SPECS SPONSORSHIP</h2>
          </li>
        </ul>

        <div className='navigator'>
          <div className='pageNav'>
            <h2>0{page}</h2>
            <span className='gauge'></span>
            <h2>03</h2>
          </div>
          <div className='buttonContainer'>
            <button className='prev' ref={setPrevButton} disabled={disabled} onClick={clickHandler}>
              <AiOutlineLeft size={40} />
            </button>
            <button className='next' ref={setNextButton} disabled={disabled} onClick={clickHandler}>
              <AiOutlineRight size={40} />
            </button>
          </div>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
