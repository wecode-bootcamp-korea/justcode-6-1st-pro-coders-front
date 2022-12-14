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
        {/* ???????????? */}
        <div className='footerLeftBox'>
          <a className='footerLogo'>
            <img src='/images/logo-white.svg' className='logo' alt='logo' width={110} onClick={() => navigate('/')} />
          </a>
          <ul>
            <li>(???) 7-Team-ProCoders</li>
            <li>??????????????? : ????????? (???????????? : kkukileon305@gmail.com)</li>
            <li>??????????????? : ?????????(???????????? : 2021bongwonny@gmail.com)</li>
            <li>??????????????? : ?????????(???????????? : tmdcjf152@naver.com)</li>
            <li>????????? : ?????????(???????????? : shlee2227@gmail.com)</li>
            <li>????????? : ?????????(???????????? : j9707052000@gmail.com)</li>
          </ul>
          <ul>
            <li className='footerColorGray footerFontBold'>??????????????????</li>
            <li className='footerColorGray'>
              ????????? ????????????????????? ???????????? ???????????? ??????????????????, <br /> ????????? ???????????? ?????????????????? ?????????????????? ?????????????????????{' '}
              <a href='#' className='footerColorWhite'>
                ??????????????? ?????????
              </a>
            </li>
            <li className='footerCopyright'>????????????????????? | COPYRIGHT &copy; 2022 PRO CODERS CO. ALL RIGHT RESERVED</li>
          </ul>
        </div>
        {/* ???????????? */}
        <div className='footerCenterBox'>
          <ul>
            <li>
              <a href='#'>????????????????????????</a>
            </li>
            <li>
              <a href='#'>????????????</a>
            </li>
            <li>
              <a href='#'>????????????</a>
            </li>
            <li>
              <a href='#'>A/S ??????</a>
            </li>
            <li>
              <a href='#'>????????????</a>
            </li>
            <li>
              <a href='#'>???????????????</a>
            </li>
          </ul>
        </div>
        {/* ??????????????? */}
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
              <li>?????? / ?????? ??????</li>
              <li>080-710-0000</li>
              <li>???????????? / AS??????</li>
              <li>080-234-0000</li>
              <li>
                MON - FRI 09:00 - 18:00 <br /> ??????, ????????? ?????? <br />
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
