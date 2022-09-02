import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLayout = styled.main`
  padding-top: 250px;

  div.container {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    &.signup {
      max-width: 1360px;

      h2 {
        width: 100%;
        text-align: left;
      }

      p {
        text-align: left;
        margin-top: 30px;
        width: 100%;
      }

      div.line {
        height: 5px;
        margin-top: 30px;
        margin-bottom: 0;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;

        ul {
          display: block;
          width: 100%;

          li {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid ${({ theme }) => theme.colors.disabledTitle};

            div.text {
              width: 240px;

              p {
                margin: 0;
                width: fit-content;
                position: relative;

                &::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 100%;
                  width: 6px;
                  height: 6px;
                  background-color: ${({ theme }) => theme.colors.textHover};
                }
              }
            }

            input {
              width: 300px;
              padding: 10px;
              border: 1px solid ${({ theme }) => theme.colors.disabledTitle};
              font-size: 20px;
            }
          }
        }

        div.terms {
          width: 100%;
          margin-top: 20px;
          border: 1px solid lightgray;
          padding: 20px;

          p {
            margin: 0;
            color: gray;
            font-weight: 500;
          }
        }
      }
    }

    h2 {
      font-size: 40px;
      font-weight: 900;
      text-align: center;
    }

    h3 {
      font-size: 24px;
      font-weight: 900;
      text-align: left;
      margin-top: 50px;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      width: 100%;

      span {
        font-weight: 500;
        font-size: 17px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          right: calc(100% + 6px);
          width: 6px;
          height: 6px;
          background-color: ${({ theme }) => theme.colors.textHover};
        }
      }
    }

    div.line {
      width: 100%;
      height: 8px;
      background-color: black;
      margin: 40px 0;
    }

    p {
      font-weight: bold;
      font-size: 18px;
      text-align: center;
      line-height: 1.5;
      word-break: keep-all;

      &.detail {
        color: ${({ theme }) => theme.colors.disabledTitle};
        margin-top: 20px;
        font-size: 14px;
      }

      &.sns {
        margin: 50px 0;
      }

      &.agree {
        display: flex;
        align-items: center;
        gap: 20px;
        cursor: pointer;

        span {
          display: flex;
          width: 20px;
          height: 20px;
          background-color: ${({ agree }) => (agree ? 'black' : 'white')};
          border: 1px solid black;
          align-items: center;
          justify-content: center;

          svg {
            color: white;
          }
        }
      }
    }

    ul:not(.signup) {
      margin-top: 50px;
      display: flex;
      justify-content: center;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33.3333333%;

        img {
          width: 30%;
        }

        div.text {
          display: flex;
          flex-direction: column;
          padding: 10px;

          p {
            line-height: 1.3;
          }

          p:first-of-type {
            height: 50px;
          }
        }
      }

      &.snsList {
        gap: 60px;
        margin-bottom: 100px;

        li {
          width: 50px;

          img {
            width: 100%;
          }
        }
      }
    }

    div.gender {
      display: flex;
      width: calc(100% - 250px);

      p {
        margin: 0;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100px;
        user-select: none;
        cursor: pointer;

        span {
          display: flex;
          align-items: center;
          color: white;
          border: 1px solid lightgray;
          width: 20px;
          height: 20px;
        }

        &.male {
          span {
            background-color: ${({ gender, theme }) => (gender === 'male' ? theme.colors.footerBg : 'white')};
          }
        }

        &.female {
          span {
            background-color: ${({ gender, theme }) => (gender === 'female' ? theme.colors.footerBg : 'white')};
          }
        }
      }
    }

    button {
      border: none;
      background-color: ${({ theme }) => theme.colors.footerBg};
      color: white;
      margin-top: 40px;
      padding: 20px;
      width: 100%;
      font-size: 20px;
      font-weight: 900;
      cursor: pointer;

      &.signup {
        max-width: 300px;
        margin-bottom: 100px;
      }
    }
  }
`;

const SignUp = ({ usefInfo: { isLogin }, setUserInfo }) => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    isLogin && navigate('/');
  }, [isLogin]);

  const submitHandler = e => {
    e.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
      name: { value: name },
      phone: { value: phone },
      birth: { value: birth },
    } = e.target;

    if (email && password.length > 6 && name && Number(phone) && birth.length >= 8 && Number(birth)) {
      setError(false);

      (async () => {
        try {
          // 나중에 signup url 넣어야함
          await axios.post('', {
            email,
            password,
            name,
            phone_number: phone,
            date_of_birth: birth,
          });

          // 나중에 signin url
          const { data } = await axios.post('', {
            email,
            password,
          });

          setUserInfo({
            isLogin: true,
            email: data.email,
            name: data.name,
            phone_number: data.phone_number,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            access_token: data.access_token,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    } else {
      setError(true);
    }
  };

  return (
    <StyledLayout agree={agree} gender={gender}>
      {register ? ( //
        <div className='container signup'>
          <h2>회원가입</h2>
          <p>회원가입을 위한 정확한 정보를 입력해주세요.</p>
          <h3>
            기본정보 <span>필수 입력 정보</span>
          </h3>
          <div className='line' />
          <form onSubmit={submitHandler}>
            <ul className='signup'>
              <li>
                <div className='text'>
                  <p>E-MAIL</p>
                </div>
                <input type='email' name='email' />
              </li>
              <li>
                <div className='text'>
                  <p>비밀번호</p>
                </div>
                <input type='password' name='password' />
              </li>
              <li>
                <div className='text'>
                  <p>이름</p>
                </div>
                <input type='text' name='name' />
              </li>
              <li>
                <div className='text'>
                  <p>휴대폰 번호</p>
                </div>
                <input type='text' name='phone' placeholder='숫자만 입력해주세요' />
              </li>
              <li>
                <div className='text'>
                  <p>성별</p>
                </div>
                <div className='gender'>
                  <p className='male' onClick={() => setGender('male')}>
                    <span>
                      <BsCheck size={20} />
                    </span>
                    Male
                  </p>
                  <p className='female' onClick={() => setGender('female')}>
                    <span>
                      <BsCheck size={20} />
                    </span>
                    Female
                  </p>
                </div>
              </li>
              <li>
                <div className='text'>
                  <p>생년월일</p>
                </div>
                <input type='text' name='birth' placeholder='숫자만 입력해주세요(8글자)' />
              </li>
            </ul>

            {error && <p className='red'>양식을 확인해주세요.</p>}

            <h3>회원 가입 약관에 동의해주세요.</h3>
            <div className='line' />
            <p>이용약관</p>
            <div className='terms'>
              <p>없습니다.</p>
            </div>
            <p className='agree' onClick={() => setAgree(!agree)}>
              <span>
                <BsCheck size={20} />
              </span>
              동의할게 없지만 동의합니다.
            </p>
            <button className='signup'>회원가입</button>
          </form>
        </div>
      ) : (
        <div className='container'>
          <h2>회원가입</h2>
          <div className='line' />
          <p>
            프로스펙스닷컴 회원가입을 환영합니다.
            <br />
            회원가입하시고 프로스펙스닷컴의 다양한 서비스를 이용해보세요.
          </p>
          <ul>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_sign_01.svg' alt='' />
              <div className='text'>
                <p>신규가입 금액 쿠폰 5종 패키지</p>
                <p className='detail'>E-MAIL 및 문자(SMS) 수신 동의 시 장바구니 최대 3만원 할인</p>
              </div>
            </li>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_sign_02.svg' alt='' />
              <div className='text'>
                <p>회원 등급별 혜택</p>
              </div>
            </li>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_sign_03.svg' alt='' />
              <div className='text'>
                <p>포인트 혜택</p>
                <p className='detail'>구매 시 최대 5% 적립 일반 리뷰 200포인트 포토 리뷰 1,000포인트 등</p>
              </div>
            </li>
          </ul>
          <button onClick={() => setRegister(true)}>회원가입</button>

          <p className='sns'>SNS 간편가입</p>

          <ul className='snsList'>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_naver.png' alt='' />
            </li>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_kakao.png' alt='' />
            </li>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_face.png' alt='' />
            </li>
          </ul>
        </div>
      )}
    </StyledLayout>
  );
};

export default SignUp;
