import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import useScroll from '../hooks/useScroll';
import LoginModal from './LoginModal';

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.3s;
  background-color: ${({ search, isScrolled, isMain }) => (search || isScrolled || !isMain ? 'white' : 'transparent')};
  z-index: 10;
  transform: translateY(${({ isScrollDown }) => (isScrollDown ? '-100px' : '0')});

  div.container {
    max-width: 1280px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      transition: 0.2s;
      filter: invert(${({ search, isScrolled, isMain }) => (search || isScrolled || !isMain ? '1' : '0')});
      cursor: pointer;
    }

    a {
      display: block;
      font-weight: 900;
      font-size: 20px;
      transition: 0.2s;
      color: ${({ search, isScrolled, isMain }) => (search || isScrolled || !isMain ? 'black' : 'white')};
    }

    p {
      font-size: 20px;
      font-weight: 900;
      cursor: pointer;
      color: ${({ search, isScrolled, isMain }) => (search || isScrolled || !isMain ? 'black' : 'white')};
      transition: 0.2s;
    }

    ul.gnb {
      display: flex;
      width: 70%;

      & > li {
        & > a {
          padding: 40px 25px;
        }

        div.inner {
          display: flex;
          justify-content: center;
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%;
          padding: 0 20px;
          overflow-y: hidden;
          background-color: white;
          height: 0;
          transition: 0.3s;

          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 6px;
            background-color: black;
          }

          div.innerContainer {
            max-width: 1280px;
            width: 100%;
            height: fit-content;
            padding: 40px 0px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            row-gap: 30px;
            position: relative;

            ul.lnb {
              width: calc(100% / 5);

              &:nth-child(8) {
                width: calc(40%);
                padding-left: calc(20%);
              }

              & > li {
                &:not(:first-of-type) {
                  a {
                    font-weight: 500;
                    font-size: 18px;
                    margin-bottom: 14px;
                  }

                  a.lnbSubMenu {
                    font-weight: 900;
                    margin-top: 40px;
                  }
                }

                &:nth-child(2) {
                  a.lnbSubMenu {
                    margin-top: 0;
                  }
                }
              }
            }

            div.adContainer {
              position: absolute;
              right: 0;
              top: 730px;
              width: 40%;
              padding-bottom: 40px;
              display: flex;
              flex-direction: column;
              gap: 20px;

              img {
                width: 100%;
                filter: none;
              }
            }
          }
        }

        &:first-of-type {
          div.inner {
            overflow-y: scroll;
          }
        }

        &:nth-child(3) {
          div.inner {
            div.innerContainer {
              div.adContainer {
                display: flex;
                flex-direction: row;
                width: calc(40% + 20px);
                top: 40px;
                right: 0;
                padding: 0;

                img {
                  width: calc(50% - 10px);
                }
              }
            }
          }
        }

        &:last-of-type {
          div.inner {
            background-image: url('images/nav/img/gnb_banner_smartfit.png');

            background-size: auto 270px;

            div.innerContainer {
              position: relative;

              div.textContainer {
                position: absolute;
                top: 125px;
                left: 0;
                display: flex;
                gap: 20px;

                h4 {
                  font-weight: 900;
                  color: white;
                  font-size: 20px;
                }

                p {
                  font-weight: 500;
                  color: white;
                  font-size: 20px;
                  cursor: none;
                }
              }
            }
          }
        }
      }
    }

    ul.gnb2 {
      display: flex;
      gap: 30px;

      & > li {
        display: flex;
        align-items: center;
      }
    }

    a.lnbSubName {
      margin-bottom: 14px;
      border-bottom: 8px solid transparent;
      padding-bottom: 6px;
      width: fit-content;
    }
  }

  &:hover {
    background-color: white;

    div.container {
      img {
        filter: invert(1);
      }

      a {
        color: ${({ theme }) => theme.colors.text};

        &:hover {
          color: ${({ theme }) => theme.colors.textHover};
        }
      }

      p {
        color: ${({ theme }) => theme.colors.text};
      }

      ul.gnb {
        & > li {
          &:first-of-type {
            &:hover {
              div.inner {
                height: 500px;
              }
            }
          }

          &:not(:first-of-type) {
            &:hover {
              div.inner {
                height: 270px;
              }
            }
          }
        }
      }

      a.lnbSubName:hover {
        border-bottom: 8px solid ${({ theme }) => theme.colors.textHover};
      }
    }
  }

  div.searchContainer {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: ${({ search }) => (search ? '500px' : '0')};
    background-color: white;
    transition: 0.3s;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: black;
    }

    div.search {
      max-width: 600px;
      width: 100%;
      margin-top: 40px;

      form {
        display: flex;
        gap: 10px;

        div.inputContainer {
          display: flex;
          align-items: center;
          width: calc(85% - 10px);
          padding: 10px;
          border: 1px solid #aaaaaa;

          input {
            height: 100%;
            width: 100%;
            border: none;
            font-size: 20px;
            padding-right: 10px;

            &:focus {
              outline: none;
            }
          }

          img {
            cursor: pointer;
          }
        }

        button {
          width: 15%;
          border: none;
          background-color: #333333;
          color: white;
          font-weight: 700;
          padding: 14px 30px;
        }
      }

      h2 {
        margin-top: 30px;
        margin-bottom: 6px;
        font-weight: 700;
      }

      div.down {
        display: flex;
        justify-content: space-between;

        ul.searchList {
          padding-top: 10px;
          li {
            margin-bottom: 12px;
          }
        }

        img {
          width: 40%;
        }
      }
    }
  }
`;

const Nav = ({ userInfo: { isLogin }, setUserInfo, userInfo }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMain, setIsMain] = useState(pathname === '/' || pathname === '/shop');
  const { isScrollDown, isScrolled } = useScroll();

  const input = useRef();
  const [search, setSearch] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [modal, setModal] = useState(false);

  const clearHandler = () => {
    input.current.value = '';
    setInputValue('');
  };

  useEffect(() => {
    setIsMain(pathname === '/' || pathname === '/shop');
  }, [pathname]);

  const signOut = () => {
    setUserInfo({
      isLogin: false,
      token: '',
      user_id: '',
    });

    navigate('/');
  };

  // ????????? ?????? ??????

  return (
    <>
      {modal && <LoginModal setModal={setModal} setUserInfo={setUserInfo} />}
      <StyledNav //
        search={search}
        isScrollDown={isScrollDown}
        isScrolled={isScrolled}
        isMain={isMain}
      >
        <div className='container'>
          <img src='/images/logo-white.svg' className='logo' alt='logo' width={110} onClick={() => navigate('/')} />

          <ul className='gnb'>
            <li>
              <Link to='/shop'>SHOP</Link>
              <div className='inner'>
                <div className='innerContainer'>
                  <ul className='lnb'>
                    <li>
                      <Link to='/shop/shoes/??????' className='lnbSubName'>
                        SHOES
                      </Link>
                    </li>
                    <li>
                      <Link to='/shop/shoes/?????????'>?????????</Link>
                    </li>
                    <li>
                      <Link to='/shop/shoes/?????????'>?????????</Link>
                    </li>
                    <li>
                      <Link to='/shop/shoes/????????????'>????????????</Link>
                    </li>
                    <li>
                      <Link to='/shop/shoes/????????????'>????????????</Link>
                    </li>
                    <li>
                      <Link to='/shop/shoes/????????????'>????????????</Link>
                    </li>
                    <li>
                      <Link to='/shop/shoes/??????'>??????/?????????</Link>
                    </li>
                    <li>
                      <Link to='/shop/shoes/?????????'>?????????</Link>
                    </li>
                    <li>
                      <Link to='/shop/shoes/??????'>??????</Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/' className='lnbSubName'>
                        MEN
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>???????????? & ??????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>???????????? ???/???</Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/' className='lnbSubName'>
                        WOMEN
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>???????????? & ??????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>????????? ??????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>????????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>???????????? ???/???</Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/' className='lnbSubName'>
                        ORIGINAL
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='lnbSubMenu'>
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>????????????</Link>
                    </li>
                    <li>
                      <Link to='/'>??????/????????????</Link>
                    </li>
                    <li>
                      <Link to='/' className='lnbSubMenu'>
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>???????????? & ??????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>????????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>???????????? ???/???</Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                    <li>
                      <Link to='/' className='lnbSubMenu'>
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ????????????</Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/' className='lnbSubName'>
                        BAG/ACC
                      </Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ????????????</Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????? & ?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>?????????</Link>
                    </li>
                    <li>
                      <Link to='/'>??????</Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/' className='lnbSubName'>
                        KIDS
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='strong'>
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='strong'>
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='strong'>
                        ??????
                      </Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/' className='lnbSubName'>
                        SALE
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='strong'>
                        ??????
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='strong'>
                        ????????????
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='strong'>
                        ????????????
                      </Link>
                    </li>
                    <li>
                      <Link to='/' className='strong'>
                        ??????
                      </Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/' className='lnbSubName'>
                        BEST 50
                      </Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/' className='lnbSubName'>
                        GIFT CARD
                      </Link>
                    </li>
                  </ul>
                  <div className='adContainer'>
                    <img src='images/nav/img/ad1.png' alt='ad1' />
                    <img src='images/nav/img/ad2.png' alt='ad1' />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to='/event'>EVENT</Link>
            </li>
            <li>
              <Link to='/archive'>ARCHIVE</Link>
              <div className='inner'>
                <div className='innerContainer'>
                  <ul className='lnb'>
                    <li>
                      <Link to='/archive' className='lnbSubName'>
                        LOOKBOOK
                      </Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/archive' className='lnbSubName'>
                        NEWS
                      </Link>
                    </li>
                  </ul>
                  <ul className='lnb'>
                    <li>
                      <Link to='/archive' className='lnbSubName'>
                        ISSUE
                      </Link>
                    </li>
                  </ul>
                  <div className='adContainer'>
                    <img src='https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80' alt='' />
                    <img src='https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1372&q=80' alt='' />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to='/store'>STORE</Link>
            </li>
            <li>
              <Link to='/smartfit'>SMART FIT</Link>
              <div className='inner'>
                <div className='innerContainer'>
                  <div className='textContainer'>
                    <h4>SMART FIT</h4>
                    <p>??????????????? ??????????????? ??? ?????? ????????? ???????????? ????????? ????????? ??????, ???????????? ???????????? ??? ?????? SMART??? ??????????????????.</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <ul className='gnb2'>
            <li>
              <img src='images/nav/icon/icon_search_white.svg' className='logo' alt='logo' onClick={() => setSearch(!search)} />
            </li>
            <li>
              <img src='images/nav/icon/icon_cart_white.svg' className='logo' alt='logo' onClick={() => navigate('/cart')} />
            </li>
            <li>
              {isLogin ? ( //
                <p onClick={signOut}>LOGOUT</p>
              ) : (
                <p onClick={() => setModal(true)}>LOGIN</p>
              )}
            </li>
          </ul>
        </div>
        <div className='searchContainer'>
          <div className='search'>
            <form onSubmit={e => e.preventDefault()}>
              <div className='inputContainer'>
                <input
                  //
                  ref={input}
                  onChange={e => setInputValue(e.target.value)}
                  type='text'
                  placeholder='?????? ????????? ???????????? ?????? 3??? ?????????'
                />

                {inputValue && <img src='images/nav/icon/icon_search_close.svg' alt='close' onClick={clearHandler} />}
              </div>
              <button
                onClick={() => {
                  navigate(`/search?key=${input.current.value}`);
                  clearHandler();
                  setSearch(false);
                }}
              >
                ??????
              </button>
            </form>

            <h2>???????????????</h2>
            <div className='down'>
              <ul className='searchList'>
                <li>2022 S/S</li>
                <li>????????????</li>
                <li>??????</li>
                <li>?????????</li>
                <li>????????????</li>
                <li>??????</li>
                <li>?????????</li>
                <li>????????????</li>
                <li>??????</li>
                <li>?????? ???</li>
                <li>??????</li>
              </ul>

              <img src='images/nav/img/search_add.png' alt='search banner' />
            </div>
          </div>
        </div>
      </StyledNav>
    </>
  );
};

export default Nav;
