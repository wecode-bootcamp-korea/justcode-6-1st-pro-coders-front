import styled from 'styled-components';
import useInfiniteSwiper from '../../hooks/useInfiniteSwiper';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import FourthSection from './sections/FourthSection';

const StyledHeader = styled.header`
  height: 860px;
  overflow: hidden;
  position: relative;

  ul.listContainer {
    display: flex;
    width: 700%;

    & > li {
      width: calc(100% / 7);
      position: relative;

      img {
        -webkit-user-drag: none;
      }

      div.text {
        position: absolute;
        left: 0px;
        top: 0px;
        color: white;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);

        div.textContainer {
          padding: 18% 0 0 5%;
          user-select: none;

          p {
            font-size: 30px;
            font-weight: 900;
          }

          h2 {
            margin-top: 20px;
            font-size: 50px;
            font-weight: 900;
            line-height: 1.2;
          }
        }
      }
    }
  }

  ul.navigator {
    position: absolute;
    left: calc(50% - 100px);
    bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 200px;
    height: 10px;

    & > li {
      width: 10px;
      background-color: #ffffff30;
      transition: 0.3s;

      &:nth-child(${({ page }) => page}) {
        background-color: #ffffffff;
      }
    }
  }
`;

const StyledPage = styled.main`
  section {
    display: flex;
    justify-content: center;
    padding-top: 100px;

    h2 {
      margin-top: 20px;
      font-weight: 900;
      font-size: 40px;
      line-height: 1.3;
    }

    div.container {
      max-width: 1640px;
      width: 100%;
      padding: 0 20px;
    }
  }
`;

const ShopPage = () => {
  const { page, swipedTarget } = useInfiniteSwiper(7, true);

  return (
    <>
      <StyledHeader page={page}>
        <ul className='listContainer' ref={swipedTarget}>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202203/202203250718161.png/dims/optimize' alt='' />
            <div className='text'>
              <div className='textContainer'>
                <p>Eco Recycle Material</p>
                <h2>
                  지속가능을 향한
                  <br />
                  프로스펙스의 도전
                </h2>
              </div>
            </div>
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208171507331.png/dims/optimize' alt='' />
            <div className='text'>
              <div className='textContainer'>
                <p>추석 연휴 특집 이벤트</p>
                <h2>
                  추석엔 더 풍요롭게! <br /> 최대 70% SALE
                </h2>
              </div>
            </div>
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208301422224.png/dims/optimize' alt='' />
            <div className='text'>
              <div className='textContainer'>
                <p>LG트윈스 구매고객 대상 이벤트</p>
                <h2>(추첨)홈경기 티켓 증정</h2>
              </div>
            </div>
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208111636172.png/dims/optimize' alt='' />
            <div className='text'>
              <div className='textContainer'>
                <p>ONLINE EXCLUSIVE</p>
                <h2>
                  ALWAYS <br /> PROSPECS
                </h2>
              </div>
            </div>
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/2022081918104218.png/dims/optimize' alt='' />
            <div className='text'>
              <div className='textContainer'>
                <p>LG네트웍스 모바일 기프트 카드</p>
                <h2>
                  소중한 지인에게
                  <br />
                  모바일 상품권을 선물해 보세요.
                </h2>
              </div>
            </div>
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202203/202203250718161.png/dims/optimize' alt='' />
            <div className='text'>
              <div className='textContainer'>
                <p>Eco Recycle Material</p>
                <h2>
                  지속가능을 향한
                  <br />
                  프로스펙스의 도전
                </h2>
              </div>
            </div>
          </li>
          <li>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208171507331.png/dims/optimize' alt='' />
            <div className='text'>
              <div className='textContainer'>
                <p>추석 연휴 특집 이벤트</p>
                <h2>
                  추석엔 더 풍요롭게! <br /> 최대 70% SALE
                </h2>
              </div>
            </div>
          </li>
        </ul>
        <ul className='navigator'>
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </StyledHeader>
      <StyledPage>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </StyledPage>
    </>
  );
};

export default ShopPage;
