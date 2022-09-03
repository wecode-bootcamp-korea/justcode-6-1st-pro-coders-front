import styled from 'styled-components';
import { BiChevronRight } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const StyledPage = styled.main`
  padding-top: 250px;

  h2 {
    font-size: 40px;
    font-weight: bolder;
    margin-top: 20px;
  }

  span.red {
    color: ${({ theme }) => theme.colors.textHover};
  }

  div.container {
    max-width: 1640px;
    width: 100%;
    margin: 0 auto;

    div.step {
      display: flex;
      gap: 10px;

      p {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.disabledTitle};

        &:nth-child(1) {
          color: black;
        }
      }
    }

    h3 {
      font-weight: 900;
      font-size: 24px;
      margin-top: 80px;
    }

    div.checkboxContainer {
      width: 10%;
      display: flex;
      align-items: center;

      span.checkbox {
        display: flex;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.colors.disabledTitle};
        color: white;
        cursor: pointer;
      }

      &.addAll {
        span {
          background-color: black;
        }
      }
    }

    p {
      text-align: center;
      font-weight: 900;

      &.option {
        color: ${({ theme }) => theme.colors.disabledTitle};
        font-weight: 500;
      }
    }

    .itemDetail {
      width: 55%;
    }

    .saleDetail {
      width: 15%;
    }

    .select {
      width: 20%;
    }

    div.listHeader {
      margin-top: 30px;
      border-top: 4px solid black;
      display: flex;

      p {
        padding: 20px;
      }
    }

    ul.list {
      border-bottom: 1px solid ${({ theme }) => theme.colors.disabledTitle};

      li {
        display: flex;
        border-top: 1px solid ${({ theme }) => theme.colors.disabledTitle};
        padding: 30px 0;

        &.picked {
          div.checkboxContainer {
            span.checkbox {
              background-color: black;
            }
          }
        }

        div.itemDetail {
          display: flex;
          gap: 30px;

          img {
            height: 150px;
          }

          div.text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            p {
              font-size: 20px;
            }

            p.option {
              margin-top: 10px;
              font-size: 18px;
            }
          }
        }

        div.saleDetail {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        div.select {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;

          p {
            font-size: 16px;
            font-weight: 500;
            border: 1px solid ${({ theme }) => theme.colors.disabledTitle};
            padding: 8px 20px;
            color: ${({ theme }) => theme.colors.disabledTitle};
            cursor: pointer;
          }
        }
      }
    }

    div.removeContainer {
      margin-top: 30px;
      display: flex;
      gap: 14px;

      button {
        border: 1px solid ${({ theme }) => theme.colors.text};
        border-radius: 0;
        background-color: transparent;
        padding: 14px 30px;
        font-size: 20px;
        font-weight: 900;
        cursor: pointer;
      }
    }

    div.total {
      margin-top: 100px;

      div.text {
        display: flex;
        border-top: 4px solid black;

        p {
          width: calc(100% / 3);
          padding: 20px 0;
        }
      }

      div.cost {
        border-top: 1px solid ${({ theme }) => theme.colors.disabledTitle};
        border-bottom: 1px solid ${({ theme }) => theme.colors.disabledTitle};
        display: flex;

        h2 {
          width: calc(100% / 3);
          text-align: center;
          margin: 0;
          padding: 20px 0;

          &.totalCost {
            color: ${({ theme }) => theme.colors.textHover};
          }
        }
      }
    }

    div.des {
      display: flex;
      justify-content: space-between;
      margin-top: 150px;

      div.left {
        width: 50%;

        ul {
          li {
            margin-bottom: 20px;
            font-weight: 900;
          }
        }
      }

      div.right {
        width: 31%;

        div.up {
          display: flex;
          gap: 20px;

          button {
            width: 50%;
            padding: 20px;
            border: 1px solid ${({ theme }) => theme.colors.text};
            border-radius: 0;
            background-color: transparent;
            font-size: 20px;
            font-weight: 900;
            cursor: pointer;
          }
        }

        div.naver {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          margin: 100px 0;
          border-top: 2px solid ${({ theme }) => theme.colors.footerBg};
          border-bottom: 1px solid ${({ theme }) => theme.colors.disabledTitle};

          img {
            width: 30%;
          }

          button {
            width: 60%;
            border: none;
            background-color: #23c300;
            padding: 0 20px;
            cursor: pointer;

            img {
              width: 40%;
            }
          }
        }
      }
    }
  }
`;

const Cart = () => {
  const [cartList, setCartList] = useState();
  const [selectList, setSelectList] = useState([]);
  const navigate = useNavigate();

  const addSelectHandler = cardId => {
    if (selectList.includes(cardId)) {
      setSelectList(selectList.filter(id => id !== cardId));
    } else {
      setSelectList([...selectList, cardId].sort());
    }
  };

  const addAllHandler = () => {
    if (selectList.length === cartList?.length) {
      setSelectList([]);
    } else {
      setSelectList(cartList.map(cart => cart.id));
    }
  };

  useEffect(() => {
    axios
      .get('/data/cartData.json', {
        headers: {
          Authorization: '',
        },
      }) //
      .then(({ data }) => {
        setCartList(data);
        setSelectList(data.map(cart => cart.id));
      });
  }, []);

  const removeOneHandler = async cartId => {
    try {
      const {
        data: { result },
      } = await axios.put('/user/cart', [cartId], {
        headers: {
          Authorization: 'jwt',
        },
      });

      setCartList(result);
      setSelectList(selectList.filter(id => id !== cartId));
    } catch (error) {
      console.log(error);
    }
  };

  const removePickedHandler = async () => {
    if (selectList.length) {
      try {
        const {
          data: { result },
        } = await axios.put('/user/cart', selectList, {
          headers: {
            Authorization: 'jwt',
          },
        });

        setCartList(result);
        setSelectList([]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeAllHandler = async () => {
    try {
      await axios.delete('/user/cart', {
        headers: {
          Authorization: 'jwt',
        },
      });

      setCartList([]);
      setSelectList([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledPage>
      <div className='container'>
        <div className='step'>
          <p>장바구니</p>
          <BiChevronRight />
          <p>주문결제</p>
          <BiChevronRight />
          <p>주문완료</p>
        </div>
        <h2>장바구니</h2>
        <h3>
          총 <span className='red'>2</span>개
        </h3>
        <div className='listHeader'>
          <div className={selectList.length === cartList?.length ? 'checkboxContainer addAll' : 'checkboxContainer'}>
            <span
              className='checkbox'
              onClick={addAllHandler} //
            >
              <BsCheck size={20} />
            </span>
          </div>
          <p className='itemDetail'>상품/옵션 정보</p>
          <p className='saleDetail'>판매정보</p>
          <p className='select'>선택</p>
        </div>
        <ul className='list'>
          {cartList &&
            cartList.map(cart => (
              <li key={cart.id} className={selectList.includes(cart.id) ? 'picked' : ''}>
                <div className='checkboxContainer'>
                  <span className='checkbox' onClick={() => addSelectHandler(cart.id)}>
                    <BsCheck size={20} />
                  </span>
                </div>
                <div className='itemDetail'>
                  <img src={cart.product.img} alt='' />
                  <div className='text'>
                    <p>{cart.product.name}</p>
                    <p className='option'>
                      {cart.size} | 수량: {cart.count}
                    </p>
                  </div>
                </div>
                <div className='saleDetail'>
                  <p>{cart.product.salePrice}</p>
                </div>
                <div className='select'>
                  <p onClick={() => removeOneHandler(cart.id)}>삭제</p>
                </div>
              </li>
            ))}
        </ul>
        <div className='removeContainer'>
          <button onClick={removeAllHandler}>전체 삭제</button>
          <button onClick={removePickedHandler}>선택 삭제</button>
        </div>
        {cartList && (
          <div className='total'>
            <div className='text'>
              <p>총 상품금액</p>
              <p>배송비</p>
              <p>총 주문금액</p>
            </div>
            <div className='cost'>
              <h2>
                {selectList
                  .map(select => cartList.find(cart => cart.id === select))
                  .reduce(
                    (acc, cur) =>
                      acc +
                      cur.count *
                        Number(
                          cur.product.salePrice
                            .split('')
                            .filter(e => e !== ',')
                            .join('')
                        ),
                    0
                  )
                  .toLocaleString()}
                원
              </h2>
              <h2>0원</h2>
              <h2 className='totalCost'>
                {selectList
                  .map(select => cartList.find(cart => cart.id === select))
                  .reduce(
                    (acc, cur) =>
                      acc +
                      cur.count *
                        Number(
                          cur.product.salePrice
                            .split('')
                            .filter(e => e !== ',')
                            .join('')
                        ),
                    0
                  )
                  .toLocaleString()}
                원
              </h2>
            </div>
          </div>
        )}
        <div className='des'>
          <div className='left'>
            <ul>
              <li>장바구니에 담긴 상품은 30일간 보관됩니다.</li>
              <li>쿠폰은 주문/결제 페이지에서 적용됩니다.</li>
              <li>재고상황에 따라 사이즈 품절 및 가격/혜택이 변경될 수 있습니다.</li>
            </ul>
          </div>
          <div className='right'>
            <div className='up'>
              <button onClick={() => navigate('/')}>쇼핑 계속하기</button>
              <button>주문하기</button>
            </div>
            <div className='naver'>
              <img src='https://image.prospecs.com/front/images/renewal/naverpay_text.png' alt='' />
              <button>
                <img src='https://image.prospecs.com/front/images/renewal/icon_naverpay.svg' alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledPage>
  );
};

export default Cart;
