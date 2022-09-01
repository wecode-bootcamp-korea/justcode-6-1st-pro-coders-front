import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoginModal from '../../components/LoginModal';
import TopButton from '../../components/TopButton';

const Main = styled.div`
  width: 1280px;
  margin: 100px auto 0 auto;

  h3 {
    margin-bottom: 47px;
    font-family: 'Poppins', 'sans-serif';
    font-weight: 700;
    font-size: 40px;
    color: ${(props) => props.theme.colors.text};
  }

  section.banner {
    width: 100%;
    height: 590px;
    padding: 140px 50px;
    background: url('https://image.prospecs.com/front/images/renewal/smartfit/bg_smartfit_top.png')
      no-repeat;
    background-position: 70%;
    background-size: 130%;

    h4 {
      p.title {
        font-family: 'Poppins', 'sans-serif';
        font-weight: 700;
        color: ${(props) => props.theme.colors.text};
      }
      p.small {
        margin-bottom: 15px;
        font-size: 26px;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-weight: 500;
      }
      p.medium {
        font-size: 78px;
      }
      p.large {
        font-size: 104px;
      }
    }

    div.desc {
      font-family: 'Spoqa Han Sans Neo', 'sans-serif';
      &:before {
        content: '';
        display: block;
        width: 35px;
        height: 13px;
        margin: 30px 0 45px 0;
        background-color: ${(props) => props.theme.colors.text};
      }

      p {
        margin: 10px 0;
        font-size: 20px;

        span.en {
          font-family: 'Poppins', 'sans-serif';
        }
      }
    }
  }
  section.howto {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 170px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    h4.redDot {
      display: flex;
      font-weight: 700;
      font-size: 46px;
      margin-bottom: 80px;
      &:after {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        margin: -8px 0 0 3px;
        background-color: ${(props) => props.theme.colors.textHover};
      }
    }
    .listContainer {
      display: flex;
      flex-wrap: wrap;
      .list {
        margin: 0 20px 20px 0;

        .textContainer {
          display: flex;
          justify-content: flex-start;
          padding: 60px 0 0 40px;
          height: 230px;
          border: 4px solid ${(props) => props.theme.colors.text};
          border-bottom: 0px;
          .number {
            margin-top: -9px;
            margin-right: 13px;
            font-size: 55px;
            font-family: 'Poppins', 'sans-serif';
            font-weight: 900;
          }
          .content {
            line-height: 42px;
            font-size: 34px;
            font-family: 'Spoqa Han Sans Neo', 'sans-serif';
            font-weight: 500;
          }
        }
        .imageContainer {
          width: 620px;
          height: 630px;
          background-color: ${(props) => props.theme.colors.text};
          background-image: url('https://image.prospecs.com/front/images/renewal/smartfit/img_smartfit_guide_frame.png');
          background-repeat: no-repeat;
          background-position: 50% 78%;
          border: 4px solid ${(props) => props.theme.colors.text};
          border-top: 0px;
          text-align: center;
          overflow: hidden;

          img {
            position: relative;
            bottom: -85px;
          }
        }
      }
    }
  }
  section.last {
    width: 1920px;
    margin: 170px 0 0 0;
    color: #fff;

    div.bgContainer {
      height: 480px;
      padding-left: 300px;
      background-image: url('https://image.prospecs.com/front/images/renewal/smartfit/bg_smartfit_footer_top.png');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      transform: translateX(-300px);

      div.textContainer {
        padding: 100px 0 0 20px;
        h4.title {
          margin-bottom: 30px;
          font-size: 40px;
          font-family: 'Spoqa Han Sans Neo', 'sans-serif';
          font-weight: 400;
          line-height: 50px;
        }

        p {
          margin-bottom: 45px;
          font-size: 20px;
          font-weight: 400;
        }
        .go {
          display: flex;
          font-size: 42px;
          font-family: 'Poppins', 'sans-serif';
          font-weight: 700;
          cursor: pointer;
          &:after {
            content: '';
            display: block;
            width: 40px;
            height: 16px;
            margin: 11px 0 0 10px;
            background-color: ${(props) => props.theme.colors.textHover};
          }
        }
      }
    }
  }
  .info {
    height: 350px;
    padding: 90px 0 0 300px;
    background-color: ${(props) => props.theme.colors.footerBg};
    transform: translateX(-300px);
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: 400;

    dl {
      padding: 0 20px;
      dt {
        font-size: 24px;
        font-weight: 600;
      }

      dd {
        width: 1280px;
        margin-top: 20px;
        border-top: 3px solid #fff;

        ul {
          margin-top: 35px;

          .infoList {
            display: flex;
            margin: 12px 0;
            &:before {
              content: '';
              display: block;
              width: 4px;
              height: 4px;
              margin: 5px 8px 0 0;
              background-color: #fff;
            }
          }
        }
      }
    }
  }
`;

const SmartFit = (props) => {
  const [modal, setModal] = useState(false);
  const openLogin = () => {
    setModal((prev) => !prev);
  };

  // useEffect(() => {
  //   const handleShowButton = () => {
  //     if (window.scrollY > 750) {
  //       setButton(true);
  //     } else {
  //       setButton(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleShowButton);
  //   return () => {
  //     window.removeEventListener('scroll', handleShowButton);
  //   };
  // }, []);

  // const handleScrollTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  //   setButton(false);
  // };

  return (
    <Main>
      {modal && <LoginModal setModal={setModal} />}
      <h3>SMART FIT</h3>
      <section className='banner'>
        <h4>
          <p className='small'>내 발에 꼭 맞는 신발</p>
          <p className='title medium'>PROSPECS</p>
          <p className='title large'>SMART FIT</p>
        </h4>
        <div className='desc'>
          <p>프로스펙스 스마트 핏은</p>
          <p>내 발에 완벽한 사이즈와 상품을 추천해 주고,</p>
          <p>
            맞춤신발 제작까지 해 주는 <span className='en'>SMART</span>한
            서비스입니다.
          </p>
        </div>
      </section>
      <section className='howto'>
        <h4 className='redDot'>이용안내</h4>
        <ol className='listContainer'>
          <li className='list'>
            <div className='textContainer'>
              <span className='number'>01</span>
              <p className='content'>
                프로스펙스닷컴 로그인 후,
                <br />
                스마트 핏 클릭
              </p>
            </div>
            <div className='imageContainer'>
              <img
                src='https://image.prospecs.com/front/images/renewal/smartfit/img_smartfit_guide_1.png'
                alt='how to step 1'
              />
            </div>
          </li>
          <li className='list'>
            <div className='textContainer'>
              <span className='number'>02</span>
              <p className='content'>
                서비스 최초 이용시,
                <br />
                개인정보 제3자 제공동의 진행
              </p>
            </div>
            <div className='imageContainer'>
              <img
                src='https://image.prospecs.com/front/images/renewal/smartfit/img_smartfit_guide_2.png'
                alt='how to step 2'
              />
            </div>
          </li>
          <li className='list'>
            <div className='textContainer'>
              <span className='number'>03</span>
              <p className='content'>
                동의 후, 스마트 핏 서비스와
                <br />
                펄핏 APP을 통해 발 사이즈 측정
              </p>
            </div>
            <div className='imageContainer'>
              <img
                src='https://image.prospecs.com/front/images/renewal/smartfit/img_smartfit_guide_3.png'
                alt='how to step 3'
              />
            </div>
          </li>
          <li className='list'>
            <div className='textContainer'>
              <span className='number'>04</span>
              <p className='content'>
                발사이즈 측정 후,
                <br />
                내 발에 완벽한 사이즈와
                <br />
                상품 추천을 받은 뒤, 구매하기!
              </p>
            </div>
            <div className='imageContainer'>
              <img
                src='https://image.prospecs.com/front/images/renewal/smartfit/img_smartfit_guide_4.png'
                alt='how to step 4'
              />
            </div>
          </li>
        </ol>
      </section>
      <section className='last'>
        <div className='bgContainer'>
          <div className='textContainer'>
            <h4 className='title'>
              내 발에 맞는 사이즈가 없으시다고요?
              <br />
              맞춤신발을 제작해 드립니다!
            </h4>
            <p>(맞춤신발 제작은 22년 9월중 서비스 예정)</p>
            <h5 className='go' onClick={openLogin}>
              GO
            </h5>
          </div>
        </div>
        <div className='info'>
          <dl>
            <dt>안내사항</dt>
            <dd>
              <ul>
                <li className='infoList'>
                  맞춤신발 구매 시 프로스펙스닷컴 쿠폰/포인트 등의 사용은
                  불가합니다.
                </li>
                <li className='infoList'>
                  맞춤신발 구매 시 주문제작부터 배송까지 약 1개월이 소요됩니다.
                </li>
                <li className='infoList'>
                  맞춤신발은 고객님만을 위한 주문제작 상품이기 때문에
                  전자상거래법 제17조 2항 제 6호 및 동법 시행령 제 21조에 의거
                  결제 후 주문취소가 불가하고, 교환/반품이 불가합니다.
                </li>
                <li className='infoList'>
                  13세 미만의 어린이와 발의 상태가 전문 의료진의 진단이 필요한
                  경우 맞춤 신발 제작이 어려울 수 있습니다.
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </section>
    </Main>
  );
};

export default SmartFit;
