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
      max-width: 1280px;

      h2 {
        width: 100%;
        text-align: left;
      }

      p {
        text-align: left;
        margin-top: 30px;
        width: 100%;

        &.red {
          color: ${({ theme }) => theme.colors.textHover};
        }
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

const SignUp = ({ userInfo: { isLogin }, setUserInfo }) => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState('');
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    isLogin && navigate('/');
  }, [isLogin]);

  const submitHandler = e => {
    e.preventDefault();

    const {
      email: { value: email },
      password: { value: password },
      nickname: { value: nickname },
      phone: { value: phone_number },
      birth: { value: date_of_birth },
    } = e.target;

    if (email && password.length > 6 && nickname && Number(phone_number) && date_of_birth.length >= 8 && Number(date_of_birth)) {
      setError(false);

      (async () => {
        setDisabled(true);

        try {
          await axios.post('http://localhost:8000/user/signup', {
            email,
            password,
            nickname,
            phone_number,
          });

          const {
            data: { token, user_id },
          } = await axios.post('http://localhost:8000/user/login', {
            email,
            password,
          });

          setUserInfo({
            user_id,
            token,
            isLogin: true,
          });

          setDisabled(false);
        } catch (error) {
          console.log(error);
          setDisabled(false);
          setError(true);
          setMessage('????????? ??????????????? ?????? ???????????? ????????????.');
        }
      })();
    } else {
      setError(true);
      setMessage('????????? ??????????????????.');
    }
  };

  return (
    <StyledLayout agree={agree} gender={gender}>
      {register ? ( //
        <div className='container signup'>
          <h2>????????????</h2>
          <p>??????????????? ?????? ????????? ????????? ??????????????????.</p>
          <h3>
            ???????????? <span>?????? ?????? ??????</span>
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
                  <p>????????????</p>
                </div>
                <input type='password' name='password' autoComplete='false' />
              </li>
              <li>
                <div className='text'>
                  <p>??????</p>
                </div>
                <input type='text' name='nickname' />
              </li>
              <li>
                <div className='text'>
                  <p>????????? ??????</p>
                </div>
                <input type='text' name='phone' placeholder='????????? ??????????????????' />
              </li>
              <li>
                <div className='text'>
                  <p>??????</p>
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
                  <p>????????????</p>
                </div>
                <input type='text' name='birth' placeholder='????????? ??????????????????(8??????)' />
              </li>
            </ul>

            {error && <p className='red'>{message}</p>}

            <h3>?????? ?????? ????????? ??????????????????.</h3>
            <div className='line' />
            <p>????????????</p>
            <div className='terms'>
              <p>????????????.</p>
            </div>
            <p className='agree' onClick={() => setAgree(!agree)}>
              <span>
                <BsCheck size={20} />
              </span>
              ???????????? ????????? ???????????????.
            </p>
            <button className='signup' disabled={disabled}>
              {disabled ? '???????????? ???...' : '????????????'}
            </button>
          </form>
        </div>
      ) : (
        <div className='container'>
          <h2>????????????</h2>
          <div className='line' />
          <p>
            ????????????????????? ??????????????? ???????????????.
            <br />
            ????????????????????? ???????????????????????? ????????? ???????????? ??????????????????.
          </p>
          <ul>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_sign_01.svg' alt='' />
              <div className='text'>
                <p>???????????? ?????? ?????? 5??? ?????????</p>
                <p className='detail'>E-MAIL ??? ??????(SMS) ?????? ?????? ??? ???????????? ?????? 3?????? ??????</p>
              </div>
            </li>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_sign_02.svg' alt='' />
              <div className='text'>
                <p>?????? ????????? ??????</p>
              </div>
            </li>
            <li>
              <img src='https://image.prospecs.com/front/images/renewal/icon_sign_03.svg' alt='' />
              <div className='text'>
                <p>????????? ??????</p>
                <p className='detail'>?????? ??? ?????? 5% ?????? ?????? ?????? 200????????? ?????? ?????? 1,000????????? ???</p>
              </div>
            </li>
          </ul>
          <button onClick={() => setRegister(true)}>????????????</button>

          <p className='sns'>SNS ????????????</p>

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
