import useInfiniteSwiper from '../hooks/useInfiniteSwiper';
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

    button {
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none;
      margin: 0;
      padding: 0;
      border: 2px solid white;
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
      color: black;
      font-size: 30px;

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

const StyledMain = styled.main`
  img {
    width: 100%;
    height: 100vh;
  }
`;

const MainPage = () => {
  const { page, setNextButton, setPrevButton, swipedTarget } = useInfiniteSwiper([1, 2, 3, 4, 5]);
  const [disabled, setDisabled] = useState(false);

  const clickHandler = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 300);
  };

  return (
    <>
      <StyledHeader>
        <ul ref={swipedTarget}>
          <li>
            <img src='./main/img/title3.jfif' alt='' />
          </li>
          <li>
            <img src='./main/img/title1.jfif' alt='' />
          </li>
          <li>
            <img src='./main/img/title2.jfif' alt='' />
          </li>
          <li>
            <img src='./main/img/title3.jfif' alt='' />
          </li>
          <li>
            <img src='./main/img/title1.jfif' alt='' />
          </li>
        </ul>

        <div className='navigator'>
          <h2>{page}</h2>
          <button className='prev' ref={setPrevButton} disabled={disabled} onClick={clickHandler}>
            <AiOutlineLeft size={40} />
          </button>
          <button className='next' ref={setNextButton} disabled={disabled} onClick={clickHandler}>
            <AiOutlineRight size={40} />
          </button>
        </div>
      </StyledHeader>
      <StyledMain></StyledMain>
    </>
  );
};

export default MainPage;
