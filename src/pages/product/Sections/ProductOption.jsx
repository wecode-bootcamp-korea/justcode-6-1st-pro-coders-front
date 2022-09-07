import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { useState } from 'react';
import AccordionCard from './AccordionCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductSkeleton from '../../../components/Skeleton/ProductSkeleton';
import { useEffect } from 'react';

const StyledPage = styled.main`
  .product-inner-box {
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    margin-bottom: 100px;
    .product-detail-box {
      display: flex;
      width: 100%;
      height: 100%;
      margin-top: 200px;
      .product-img-box {
        width: 50%;
        height: 100%;
        .product-item-picture {
          width: 100%;
          height: 60%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .img-container {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 100%;
          img {
            width: 150px;
            height: 150px;
          }
        }
        .imgContainer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 40px 0 0 0;
          cursor: pointer;
          img {
            width: 100px;
            height: 100px;
            margin: 5px 0;
          }
        }
        .product-item-picture-list {
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
          .item-picture-list {
            width: 130px;
            height: 122px;
            background: blue;
          }
        }
      }
      .product-order-box {
        width: 50%;
        height: 100%;
        padding: 50px;

        .product-information-box {
          display: flex;
          justify-content: space-between;
          margin-bottom: 50px;
          .product-information {
            display: flex;
            flex-direction: column;
            .product-cate {
              font: bold 16px/1 'poppins';
              margin-bottom: 10px;
            }
            .product-name {
              font: 30px/1 'apple';
            }
          }
          .product-unit {
            display: flex;
            align-items: flex-end;
            font-size: 30px;
            span {
              margin-right: 10px;
            }
          }
        }

        .product-price-box {
          .product-price-sale-on {
            .price {
              display: block;
              margin: 10px;
              font: bold 18px/1 'apple';
              color: #999;
              text-decoration: line-through;
            }
            .sale-percent {
              margin-right: 10px;
              font: bold 30px/1 'poppins';
              color: #ff0052;
            }
            .sale-price {
              margin-right: 10px;
              font: bold 30px/1 'poppins';
              color: #000;
            }
          }
          .product-price-sale-off {
            .price {
              margin-right: 10px;
              font: bold 30px/1 'poppins';
              color: #000;
            }
          }
          .tooltip {
            display: inline-block;
            font-size: 20px;
            color: #999;
          }
        }

        .coupon-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 30px 0px;
          width: 100%;
          border-bottom: 2px solid #000;

          padding-bottom: 50px;
          .review-score {
            display: flex;
            justify-content: center;
            align-items: center;
            font: 18px/1 'apple';
            color: #999;
            span {
              margin-left: 20px;
              font: 15px/ 'apple';
              color: #000;
              text-decoration: underline;
            }
          }
          .coupon-download {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;
            height: 40px;
            border: 1px solid #999;
            border-bottom: 1px solid #000;
            color: #999;
          }
        }

        .product-benefits {
        }
        .product-option {
          margin-top: 50px;
          .product-color {
            .product-color-title {
              display: block;
              font: bold 18px 'apple';
              margin-bottom: 10px;
            }
            .product-color-picture-box {
              display: block;
              width: 130px;
              height: 130px;
              margin-bottom: 20px;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .product-size {
            #product-size-unisex {
              display: block;
            }
            #product-size-male {
              display: none;
            }
            #product-size-female {
              display: none;
            }
            select {
              width: 100%;
              padding: 0.8em 0.5em;
              font-family: inherit;
              background: url('https://image.prospecs.com/front/images/renewal/icon_arrow_D.svg') no-repeat 95% 50%;
              border: 1px solid #999;
              border-radius: 0px;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
            }
          }
        }
        .product-order-btn {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          margin-top: 60px;
          border-bottom: 1px solid #000;

          a {
            cursor: pointer;
          }

          .purchase {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 70px;
            margin-bottom: 20px;
            border: 1px solid #222;
            background: #222;
            color: #fff;
            font: bold 18px/1 'apple';
          }
          .basket {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 70px;
            border: 1px solid #222;
            color: #000;
            font: 18px/1 'apple';
            background-color: white;
            cursor: pointer;
          }
          .stock {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 70px;
            margin-bottom: 50px;
            border: 1px solid #222;
            color: #000;
            font: 16px/1 'apple';
          }
        }
        .naver-btn-inner-box {
          display: flex;
          .npay-inner-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #ddd;
            .npay-text {
              display: flex;
              flex-direction: column;
              width: 100%;
              padding: 15px 10px;
              font: 12px/1 'apple';
              .naver-logo {
                font: bold 14px/1 'poppins';
                color: #19b419;
              }
            }
            .npay-btn {
              width: 100%;
              height: 70%;
              background-color: #19b419;
              .npay-img {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
              }
            }
          }
        }
        .npay-banner {
          span {
            &:nth-of-type(1) {
              margin-right: 10px;
              font: 12px/1 'apple';
              color: #19b419;
            }
            &:nth-of-type(2) {
              font: 12px/1 'apple';
            }
          }
        }
      }
    }
  }

  .product-count {
    padding: 20px 0px;
    p {
      font-weight: 900;
      font-size: 20px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      height: 35px;

      input {
        padding: 6px;
        width: 60px;
        position: absolute;
        left: 60%;
        top: 0;
        border: 1px solid ${({ theme }) => theme.colors.disabledTitle};
      }
    }

    p.error {
      margin-top: 20px;
      color: ${({ theme }) => theme.colors.textHover};
    }
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000050;
  z-index: 10;

  div.modalContainer {
    background-color: white;
    max-width: 800px;
    width: 100%;
    border: 1px solid black;
    padding: 20px;

    h2 {
      font-weight: 900;
      font-size: 24px;
      line-height: 1.5;
      word-break: keep-all;
      text-align: center;
    }

    div.btnContainer {
      display: flex;
      justify-content: center;
      gap: 20px;
      padding-top: 20px;
      margin-top: 20px;
      border-top: 2px solid black;

      button {
        width: 50%;
        padding: 20px;
        border: 1px solid black;
        background-color: white;
      }
    }
  }
`;

const ProductOption = ({ product, userInfo: { isLogin, user_id, token } }) => {
  const [error, setError] = useState(false);
  const [overlapError, setOverlapError] = useState(false);
  const [size, setSize] = useState('250');
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    product && product.sizes === 'FREE' && setSize('FREE');
  }, [product]);

  const addCartHandler = async (e, itemId) => {
    e.preventDefault();

    if (!isLogin) {
      setErrorMessage('로그인 해주세요');
      setOverlapError(true);
      return;
    }

    if (isLogin && !error) {
      setDisabled(true);
      try {
        await axios.post(
          'http://localhost:8000/cart',
          {
            user_id,
            product_id: itemId,
            size,
            count,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setDisabled(false);
        setErrorMessage('장바구니에 추가 되었습니다');
        setOverlapError(true);
      } catch (error) {
        console.log(error);
        setDisabled(false);
        setErrorMessage('중복된 아이템이거나 유효하지 않습니다');
        setOverlapError(true);
      }
    }
  };

  const changeHandler = e => {
    const countNumber = Number(e.target.value);

    if (countNumber) {
      setCount(countNumber);
      setError(false);
    } else {
      setCount(1);
      e.preventDefault();
      setError(true);
    }
  };

  return (
    <StyledPage>
      {overlapError && (
        <StyledModal>
          <div className='modalContainer'>
            <h2>{errorMessage}</h2>
            <div className='btnContainer'>
              <button onClick={() => setOverlapError(false)}>돌아가기</button>
              <button onClick={() => navigate('/cart')}>장바구니</button>
            </div>
          </div>
        </StyledModal>
      )}
      {product ? (
        <div className='product-inner-box'>
          <div className='product-detail-box'>
            {/* 이미지 박스 */}
            <div className='product-img-box'>
              {/* ⬇️ 이미지 슬라이드 들어갈 자리 */}
              <div className='product-item-picture'>
                <img src={product.main_image} alt='Selected' className='selected' />
              </div>
              {/* ⬇️ 이미지 클릭시 메인 화면에 보여줌 */}
              <div className='img-container'>
                {/* 앞면사진 */}
                <img src={product.main_image} />
                {/* 옆면사진 */}
                <img src={product.sub_image} />
                {/* 뒷면사진 */}
                <img src={product.back_image} />
                {/* 하이앵글사진 */}
                <img src={product.high_image} />
              </div>
            </div>
            {/*상품 소개 및 주문버튼 */}
            <div className='product-order-box'>
              <div className='product-information-box'>
                <div className='product-information'>
                  <span className='product-cate'>{product.keyword}</span>
                  <span className='product-name'>{product.title}</span>
                </div>
                <div className='product-unit'>
                  <span className='like-btn'>
                    <AiOutlineHeart />
                  </span>
                  <span className='share-btn'>
                    <AiOutlineShareAlt />
                  </span>
                </div>
              </div>
              <div className='product-price-box'>
                {product.is_discounted === 1 ? (
                  <div className='product-price-sale-on'>
                    <span className='price'>{product.price}원</span>
                    <span className='sale-percent'>{product.discount_percent}%</span>
                    <span className='sale-price'>{product.discounted_price}원</span>
                    <div className='tooltip'>
                      <AiOutlineQuestionCircle />
                    </div>
                  </div>
                ) : (
                  <div className='product-price-sale-off'>
                    <span className='price'>{product.price}원</span>
                    <div className='tooltip'>
                      <AiOutlineQuestionCircle />
                    </div>
                  </div>
                )}
              </div>
              <div className='coupon-box'>
                <a className='review-score' href='#'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <span>0개의 리뷰 보기</span>
                </a>
                <span className='coupon-download'>
                  쿠폰받기
                  <AiOutlineDownload />
                </span>
              </div>
              <div className='product-benefits'>
                <AccordionCard />
              </div>
              <div className='product-option'>
                <div className='product-color'>
                  <span className='product-color-title'>색상</span>
                  <a href='#' className='product-color-picture-box'>
                    <img src={product.main_image} />
                  </a>
                </div>
                {product?.sizes !== 'FREE' && (
                  <div className='product-size'>
                    <select
                      name='product-size'
                      id='product-size-unisex' //
                      onChange={e => setSize(e.target.value)}
                      defaultValue='250'
                    >
                      <option value='init'>사이즈선택</option>
                      <option value='230'>230</option>
                      <option value='240'>240</option>
                      <option value='250'>250</option>
                      <option value='260'>260</option>
                      <option value='270'>270</option>
                      <option value='280'>280</option>
                      <option value='290'>290</option>
                    </select>

                    <select name='product-size' id='product-size-male' onChange={e => setSize(e.target.value)} defaultValue='250'>
                      <option value='init'>사이즈선택</option>
                      <option value='250'>250</option>
                      <option value='260'>260</option>
                      <option value='270'>270</option>
                      <option value='280'>280</option>
                      <option value='290'>290</option>
                    </select>

                    <select name='product-size' id='product-size-female' onChange={e => setSize(e.target.value)} defaultValue='250'>
                      <option value='init'>사이즈선택</option>
                      <option value='230'>230</option>
                      <option value='240'>240</option>
                      <option value='250'>250</option>
                    </select>
                  </div>
                )}

                <div className='product-count'>
                  <div>
                    <p>수량</p>
                    <input type='text' id='count' name='count' onChange={changeHandler} placeholder={1} />
                    <p>
                      {(
                        Number(
                          product.price
                            .split('')
                            .filter(e => e !== ',')
                            .join('')
                        ) * count
                      ).toLocaleString()}
                      원
                    </p>
                  </div>
                  {error && <p className='error'>숫자만 입력하세요</p>}
                </div>
              </div>
              <div className='product-order-btn'>
                <div className='order-btn-inner-box'>
                  <a className='purchase'>구매하기</a>
                  <button className='basket' onClick={e => addCartHandler(e, product.id)} disabled={disabled}>
                    {disabled ? '기다려주세요' : '장바구니'}
                  </button>
                  <a className='stock'>오프라인 매장 재고 확인 &#62;</a>
                </div>
              </div>
              <div className='naver-btn-inner-box'>
                <div className='npay-inner-box'>
                  <div className='npay-text'>
                    <span className='naver-logo'>NAVER</span>
                    <span>네이버 ID로 간편구매</span>
                    <span>네이버페이</span>
                  </div>
                  <div className='npay-btn'>
                    <a href='#' className='npay-img'>
                      <img src='https://image.prospecs.com/front/images/renewal/icon_naverpay.svg' alt='N-pay 구매' />
                      <span className='hidden'>N-pay 구매</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='npay-banner'>
                <span>[네이버포인트]</span>
                <span>포인트 100% 활용 방법</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ProductSkeleton />
      )}
    </StyledPage>
  );
};

export default ProductOption;
