import styled from 'styled-components';
import useInfiniteSwiper from '../../hooks/useInfiniteSwiper';

const StyledHeader = styled.header`
  height: 860px;
  overflow: hidden;

  ul {
    display: flex;
    width: 1000%;

    li {
      width: 10%;
      position: relative;

      img {
        -webkit-user-drag: none;
      }

      div.text {
        position: absolute;
        left: 100px;
        top: 40%;
      }
    }
  }
`;

const StyledPage = styled.main``;

const ShopPage = () => {
  const { page, swipedTarget } = useInfiniteSwiper(10, true);

  return (
    <>
      <StyledHeader>
        <p style={{ position: 'absolute' }}>{page}</p>
        <ul className='headerContainer' ref={swipedTarget}>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202203/202203250718161.png/dims/optimize' alt='' />
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208171507331.png/dims/optimize' alt='' />
            <div className='text'>
              <h2>소중한 지인 없음</h2>
              <p>모바일 상품권</p>
            </div>
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208301422224.png/dims/optimize' alt='' />
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208111636172.png/dims/optimize' alt='' />
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/2022081918104218.png/dims/optimize' alt='' />
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208121439395.png/dims/optimize' alt='' />
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202207/202207081358294.png/dims/optimize' alt='' />
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202205/202205201436118.png/dims/optimize' alt='' />
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202203/202203250718161.png/dims/optimize' alt='' />
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208171507331.png/dims/optimize' alt='' />
          </li>
        </ul>
      </StyledHeader>
      <StyledPage>asdasd</StyledPage>
    </>
  );
};

export default ShopPage;
