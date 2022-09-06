import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';

const StyledCheckBox = styled.span`
  display: block;
  margin-right: 8px;
  background-color: ${({ isSave }) => (isSave ? 'black' : 'white')};
  padding: 1px;
  border: 1px solid black;

  svg {
    color: white;
  }
`;

const StyledLogin = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000080;
  left: 0;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;

  div.container {
    width: 100%;
    max-width: 500px;
    padding: 30px;
    background-color: white;
    position: relative;

    & > svg {
      position: absolute;
      bottom: calc(100% + 10px);
      right: 0;
      color: white;
      cursor: pointer;
    }

    h2 {
      margin: 20px 0;
      font-weight: 900;
      font-size: 30px;
      text-align: center;
      border-bottom: 6px solid black;
      padding-bottom: 30px;
    }

    form {
      padding-top: 20px;

      div.inputContainer {
        display: flex;
        flex-direction: column;
        gap: 10px;

        input {
          border: 1px solid ${({ theme }) => theme.colors.disabledTitle};
          padding: 10px;

          &:focus {
            outline: none;
          }
        }
      }

      div.option {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        p {
          font-size: 14px;
          cursor: pointer;
          user-select: none;
        }

        a {
          font-size: 14px;
          color: ${({ theme }) => theme.colors.disabledTitle};
        }

        div.saveId {
          display: flex;
          align-items: center;
        }

        div.find {
          display: flex;
          align-items: center;
          gap: 20px;
          position: relative;

          a {
            display: flex;
            align-items: center;
            text-decoration: underline;
          }

          &::after {
            content: '';
            position: absolute;
            left: 42px;
            top: 3px;
            width: 1px;
            height: 16px;
            background-color: ${({ theme }) => theme.colors.disabledTitle};
            margin-left: 10px;
            transform: rotate(14deg);
          }
        }
      }

      div.buttonContainer {
        padding-top: 20px;
        display: flex;
        justify-content: space-between;
        gap: 20px;

        button {
          border: none;
          border: 2px solid ${({ theme }) => theme.colors.footerBg};
          width: 50%;
          padding: 10px;
          font-weight: 900;
          cursor: pointer;

          &.signIn {
            background-color: ${({ theme }) => theme.colors.footerBg};
            color: white;
          }
        }

        div.signUp {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border: 2px solid ${({ theme }) => theme.colors.footerBg};
          width: 50%;
          padding: 10px;
          font-weight: 900;
          cursor: pointer;
          background-color: white;
          color: ${({ theme }) => theme.colors.footerBg};
        }
      }
    }

    p.sns {
      text-align: center;
      margin: 40px 0;
      font-weight: 900;
    }

    div.social {
      display: flex;
      justify-content: center;
      gap: 20px;

      img {
        cursor: pointer;
        -webkit-user-drag: none;
      }
    }
  }
`;

const LoginModal = ({ setModal }) => {
  const [isSave, setIsSave] = useState(false);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = async e => {
    e.preventDefault();

    if (email && password.length > 6) {
      setDisabled(true);

      try {
        // 나중에 signin url
        const {
          data: { user },
        } = await axios.post('/user', {
          email,
          password,
        });

        setUserInfo({
          isLogin: true,
          email: user.email,
          name: user.name,
          phone_number: user.phone_number,
          date_of_birth: user.date_of_birth,
          gender: user.gender,
          access_token: user.access_token,
          user_id: user.user_id,
        });

        setDisabled(false);
        setModal(false);
      } catch (error) {
        console.log(error);
        setDisabled(false);
      }
    }
  };

  const signUpHandler = () => {
    setModal(false);
    navigate('/signup');
  };

  return (
    <StyledLogin>
      <div className='container'>
        <AiOutlineClose size={40} onClick={() => setModal(false)} />
        <h2>로그인</h2>
        <form onSubmit={signInHandler}>
          <div className='inputContainer'>
            <input
              type='email'
              autoComplete='false'
              placeholder='아이디를 이메일 형식으로 입력해 주세요.'
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='password'
              autoComplete='false'
              placeholder='비밀번호를 입력해주세요.'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className='option'>
            <div className='saveId' onClick={() => setIsSave(!isSave)}>
              <StyledCheckBox isSave={isSave}>
                <AiOutlineCheck />
              </StyledCheckBox>
              <p>아이디 저장</p>
            </div>

            <div className='find' onClick={() => setModal(false)}>
              <Link to='/'>아이디</Link>
              <Link to='/'>비밀번호 찾기</Link>
            </div>
          </div>

          <div className='buttonContainer'>
            <button className='signIn' disabled={disabled}>
              {disabled ? '로그인 중' : '로그인'}
            </button>
            <div className='signUp' onClick={signUpHandler}>
              회원가입
            </div>
          </div>
        </form>

        <p className='sns'>SNS 간편 로그인</p>

        <div className='social'>
          <img
            src='https://image.prospecs.com/front/images/renewal/icon_naver.png'
            alt=''
            width={50}
          />
          <img
            src='https://image.prospecs.com/front/images/renewal/icon_kakao.png  '
            alt=''
            width={50}
          />
          <img
            src='https://image.prospecs.com/front/images/renewal/icon_face.png'
            alt=''
            width={50}
          />
        </div>
      </div>
    </StyledLogin>
  );
};

export default LoginModal;
