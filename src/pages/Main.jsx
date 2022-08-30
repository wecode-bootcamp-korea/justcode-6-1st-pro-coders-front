import useSwiper from '../hooks/useSwiper';
import styled from 'styled-components';
import Footer from '../components/Footer';

const StyledHeader = styled.header`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.text};
  overflow: hidden;

  ul {
    display: flex;
    width: 500%;
    height: 100%;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 100%;
      color: white;
      font-size: 30px;
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
  const { page, setNextButton, setPrevButton, swipedTarget } = useSwiper([1, 2, 3, 4, 5]);

  return (
    <>
      <StyledHeader>
        <ul ref={swipedTarget}>
          <li>3</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>1</li>
        </ul>
      </StyledHeader>
      <StyledMain></StyledMain>
      <Footer />
    </>
  );
};

export default MainPage;
