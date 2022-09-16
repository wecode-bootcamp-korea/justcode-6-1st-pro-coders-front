import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
  .inner {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 50px;
    background: #222;
    color: #fff;
    div {
      width: 33%;
    }
    .footerLeftBox {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;
      margin-left: 15px;

      .footerLogo {
        font: bold 40px/1 'Spoqa Han Sans Neo';
        color: #fff;
      }
      .footerColorGray {
        color: #777;
        a {
          color: #777;
          text-decoration: underline;
          font-weight: bold;
        }
      }
      .footerFontBold {
        font-weight: bold;
      }
      .footerCopyright {
        margin-top: 15px;
      }
    }
    .footerCenterBox {
      width: 10%;
      display: flex;
      justify-content: flex-end;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        li {
          position: relative;
          bottom: 30px;
          margin-bottom: 10px;
          a {
            color: #fff;
          }
        }
      }
    }

    .footerRightBox {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .snsBox {
        width: 100%;
        height: 20%;
        margin-top: 30px;
        &::after {
          content: '';
          display: block;
          clear: both;
        }
        li {
          float: left;
          margin-right: 20px;
          a {
            font: 25px/1 'Spoqa Han Sans Neo';
            color: #fff;
          }
        }
      }
      .contactusBox {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 70%;
        ul {
          li:nth-of-type(1) {
            font: bold 25px/1 'Spoqa Han Sans Neo';
            margin-bottom: 10px;
          }
          li:nth-of-type(2) {
            color: #777;
            margin-bottom: 10px;
          }
          li:nth-of-type(3) {
            margin-bottom: 10px;
          }
          li:nth-of-type(4) {
            color: #777;
            margin-bottom: 10px;
          }
          li:nth-of-type(5) {
            margin-bottom: 10px;
          }
          li:nth-of-type(6) {
            color: #777;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className='inner'>
        {/* 왼쪽박스 */}
        <div className='footerLeftBox'>
          <a className='footerLogo'>
            <img src='/images/logo-white.svg' className='logo' alt='logo' width={110} onClick={() => navigate('/')} />
          </a>
          <ul>
            <li>(주) 7-Team-ProCoders</li>
            <li>프론트엔드 : 이다익 (채용문의 : kkukileon305@gmail.com)</li>
            <li>프론트엔드 : 봉원희(채용문의 : 2021bongwonny@gmail.com)</li>
            <li>프론트엔드 : 최승철(채용문의 : tmdcjf152@naver.com)</li>
            <li>백엔드 : 이신희(채용문의 : shlee2227@gmail.com)</li>
            <li>백엔드 : 조윤식(채용문의 : j9707052000@gmail.com)</li>
          </ul>
          <ul>
            <li className='footerColorGray footerFontBold'>클론코딩안내</li>
            <li className='footerColorGray'>
              이곳은 저스트코드에서 진행하는 프로젝트 사이트입니다, <br /> 구매를 원하시는 고객님께서는 정식사이트를 이용해주십시오{' '}
              <a href='#' className='footerColorWhite'>
                프로스펙스 사이트
              </a>
            </li>
            <li className='footerCopyright'>프로코더스닷컴 | COPYRIGHT &copy; 2022 PRO CODERS CO. ALL RIGHT RESERVED</li>
          </ul>
        </div>
        {/* 중간박스 */}
        <div className='footerCenterBox'>
          <ul>
            <li>
              <a href='#'>개인정보처리방침</a>
            </li>
            <li>
              <a href='#'>이용약관</a>
            </li>
            <li>
              <a href='#'>고객센터</a>
            </li>
            <li>
              <a href='#'>A/S 안내</a>
            </li>
            <li>
              <a href='#'>공지사항</a>
            </li>
            <li>
              <a href='#'>앱다운로드</a>
            </li>
          </ul>
        </div>
        {/* 오른쪽박스 */}
        <div className='footerRightBox'>
          <div className='snsBox'>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
          <div className='contactusBox'>
            <ul>
              <li>CONTACT US</li>
              <li>구매 / 배송 문의</li>
              <li>080-710-0000</li>
              <li>상품정보 / AS문의</li>
              <li>080-234-0000</li>
              <li>
                MON - FRI 09:00 - 18:00 <br /> 주말, 공휴일 휴무 <br />
                BREAK TIME : 12:30 - 13:30
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
