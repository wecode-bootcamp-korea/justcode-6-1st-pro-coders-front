import styled from 'styled-components';
import ItemBox from './ItemBox';
import { useEffect, useState } from 'react';
import FilterModal from './FilterModal';
import { Link, useParams } from 'react-router-dom';
import Nomination from './Nomination';
import axios from 'axios';
import ShoesSkeleton from '../../../../components/Skeleton/ShoesSkeleton';

// { font-family: 'Poppins Bold', 'sans-serif'; }
// { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }

/* SHOP HEADER */
const StyledShopHeader = styled.div`
  .itemHeaderInnerBox {
    width: 1180px;
    height: 100%;
    margin: 0 auto;
    margin-top: 50px;
    padding-top: 200px;
    .itemBreadcrumb {
      font: 14px/1 'Spoqa Han Sans Neo', 'sans-serif';
      color: #999;
      margin-bottom: 20px;
      .itemCategoryHome {
        margin-right: 10px;
      }
      .itemMainCategory {
        margin-right: 10px;
        &::before {
          content: '>';
          margin-right: 10px;
        }
      }
      .itemSubCategory {
        margin-right: 10px;
        font-weight: bold;
        color: #000;
        &::before {
          content: '>';
          font-weight: normal;
          color: #999;
          margin-right: 10px;
        }
      }
    }
    .itemSubTitle {
      .itemCategoryTitle {
        font: bold 40px/1 'Spoqa Han Sans Neo', 'sans-serif';
        margin-bottom: 40px;
      }
    }
    .itemShoesTab {
      display: flex;
      width: 100%;
      height: 100%;
      margin-bottom: 50px;
      .itemShoesLink {
        position: relative;
        margin-right: 20px;
        font: bold 26px/1 'Spoqa Han Sans Neo', 'sans-serif';
        color: #999;
        transition: 0.5s;
        list-style: none;
        a {
          color: #999;
        }
        &::after {
          content: ' ';
          position: absolute;
          top: 20px;
          left: 0;
          display: inline-block;
          width: 0%;
          height: 7.5px;
          margin-top: 15px;
          transition: 0.5s;
          background: #000;
        }
        &:hover {
          a {
            color: #000;
          }
          ::after {
            content: ' ';
            content: ' ';
            position: absolute;
            top: 20px;
            left: 0;
            display: inline-block;
            width: 100%;
            height: 7.5px;
            margin-top: 15px;
            transition: 0.5s;
            background: #000;
          }
        }
      }

      .itemShoesLinkOn {
        position: relative;
        margin-right: 20px;
        font: bold 26px/1 'Spoqa Han Sans Neo', 'sans-serif';
        color: #999;
        transition: 0.5s;
        list-style: none;
        a {
          color: #000;
        }
        &::after {
          content: ' ';
          position: absolute;
          top: 20px;
          left: 0;
          display: inline-block;
          width: 100%;
          height: 7.5px;
          margin-top: 15px;
          transition: 0.5s;
          background: #000;
        }
        &:hover {
          a {
            color: #000;
          }
          ::after {
            content: ' ';
            position: absolute;
            top: 20px;
            left: 0;
            display: inline-block;
            width: 100%;
            height: 7.5px;
            margin-top: 15px;
            transition: 0.5s;
            background: #000;
          }
        }
      }
    }
    .itemShoesLi {
      width: 100%;
      height: 100%;
      margin-bottom: 100px;
      .itemShoesLink {
        position: relative;
        margin-right: 20px;
        font: bold 26px/1 'Spoqa Han Sans Neo', 'sans-serif';
        color: #000;
        transition: 0.5s;
        &::after {
          content: ' ';
          position: absolute;
          top: 20px;
          left: 0;
          display: inline-block;
          width: 100%;
          height: 7.5px;
          margin-top: 15px;
          transition: 0.5s;
          background: #000;
        }
        &:hover {
          color: #000;
          ::after {
            content: ' ';
            content: ' ';
            position: absolute;
            top: 20px;
            left: 0;
            display: inline-block;
            width: 100%;
            height: 7.5px;
            margin-top: 15px;
            transition: 0.5s;
            background: #000;
          }
        }
      }
    }

    .itemFilterBox {
      display: flex;
      justify-content: right;
      width: 100%;
      font: bold 17px/1 'Spoqa Han Sans Neo', 'sans-serif';
      p {
        width: 80%;
      }
      .itemFilter {
        display: flex;
        .itemFilterSerchBox {
          span {
            margin-right: 10px;
          }
        }
        .itemSortListBox {
          position: relative;
          #sort-list {
            position: absolute;
            bottom: 0.5px;
          }
        }
      }
    }
  }
`;

/* SHOP ITEM */
const StyledItem = styled.div`
  .itmeBox {
    width: 1180px;
    margin: 0 auto;
    .itemFilterBox {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin: 0 auto;
      padding-right: 120px;
      margin-bottom: 20px;
      font: bold 17px/1 'Spoqa Han Sans Neo', 'sans-serif';

      p {
        width: 87%;
      }
      .itemFilter {
        display: flex;
        .itemFilterSerchBox {
          span {
            margin-right: 10px;
          }
        }
        .itemSortListBox {
          position: relative;
          #sort-list {
            position: absolute;
            bottom: 0.5px;

            option {
            }
          }
        }
      }
    }
    .itemInnerBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 1280px;
      margin: 0 auto;
      .itemABox {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 280px;
        height: 100%;
        margin-right: 20px;
        &:nth-of-type(4n) {
          margin-right: 0;
        }
        .itemImg {
          position: relative;
          width: 100%;
          height: 100%;
          opacity: 1;

          &:hover .itemMainImg {
            opacity: 0;
            transition: 1s;
          }
          &:hover .itemHoverImg {
            opacity: 1;
            transition: 1s;
          }

          .itemMainImg {
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0px;
            opacity: 1;
            transition: 1s;
          }
          .itemHoverImg {
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: 1s;
          }
        }
        .itemContent {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          height: 100%;
          padding-left: 10px;
          color: #000;

          .itemCate {
            margin-top: 15px;
            margin-bottom: 10px;
            font: bold 18px/1 'Poppins';
          }
          .itemTitle {
            margin-bottom: 20px;
            font: 20px/1 'Poppins';
          }
          .itemPriceBox {
            .itemPriceSaleOff {
              margin-bottom: 10px;
              font: bold 22px/1 'Poppins';
            }
            .itemPriceSaleOn {
              margin-bottom: 10px;
              font: 15px/1 'Spoqa Han Sans Neo', 'sans-serif';
              text-decoration: line-through;
              color: #ccc;
            }
            .itemSaleBox {
              margin-bottom: 10px;
              .itemSalePercent {
                font: bold 22px/1 'Poppins';
                color: #ff0052;
              }
              .itemSalePrice {
                font: bold 22px/1 'Poppins';
              }
            }
          }
          .itemBadgeBox {
            margin-bottom: 15px;
            .itemGenderBox {
              margin-right: 20px;
              .male {
                display: inline-block;
                width: 20px;
                height: 20px;
                background: #000;
                line-height: 20px;
                text-align: center;
                color: #fff;
              }
              .female {
                display: inline-block;
                width: 20px;
                height: 20px;
                background: #ff0052;
                line-height: 20px;
                text-align: center;
                color: #fff;
              }
            }
            .itemCouponBox {
              .coupon {
                display: inline-block;
                width: 40px;
                height: 20px;
                padding: 2px;
                line-height: 14px;
                text-align: center;
                font-weight: bold;
                border: 2px solid #000;
              }
            }
          }
        }
      }
    }
    .itemMoreBtnBox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 100px;
      .itemMoreBtn {
        width: 260px;
        height: 60px;
        background: #fff;
        border: 2px solid #000;
        font: bold 18px/60px 'apple';
        cursor: pointer;
      }
    }
  }
`;

const Item = () => {
  const [shoesCategory, setShoesCategory] = useState('');
  const { category } = useParams();
  const params = useParams();
  const [shoes, setShoes] = useState(null);
  const [product, setProduct] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState(0);
  const [end, setEnd] = useState(false);
  const [loading, setLoading] = useState(false);

  const filterItem = async categItem => {
    setLoading(true);
    const { data } = await axios.get('http://localhost:8000/products?type=SHOES');

    setShoesCategory(data.filter(item => item.category === categItem));
    setLoading(false);
  };

  useEffect(() => {
    if (category === '샌들') {
      filterItem('샌들/슬리퍼');
    } else if (category !== '전체') {
      filterItem(category);
    }
  }, [category]);

  useEffect(() => {
    if (!end) {
      setLoading(true);

      // fetch('http://localhost:8000/products?type=SHOES')
      fetch('http://localhost:8000/products?type=SHOES')
        .then(res => res.json())
        .then(data => {
          const slicedData = data.slice(page, page + 8);

          if (slicedData.length < 8) {
            setEnd(true);
          }

          setProduct([...product, ...slicedData]);
          setLoading(false);
        });
    }
  }, [page]);

  return (
    <>
      <StyledShopHeader>
        <div className='headerInner'>
          <div className='itemHeaderInnerBox'>
            <div className='itemBreadcrumb'>
              {/* 제품분류 [HOME > 대분류 > 소분류] */}
              <span className='itemCategoryHome'>HOME</span>
              <span className='itemMainCategory'>SHOES</span>
              <span className='itemSubCategory'>{category}</span>
            </div>
            <div className='itemSubTitle'>
              {/* 제품 카테고리 (SHOES MAN WOMAN ..) */}
              <h3 className='itemCategoryTitle'>{category}</h3>
            </div>
            <div className='itemShoesTab'>
              {/* 카테고리별 이동 링크 */}
              <ul className='itemShoesTab'>
                {['전체', '러닝화', '워킹화', '트레킹화', '스니커즈', '샌들', '아동화', '기타'].map(cate => {
                  if (cate === '샌들') {
                    return (
                      <li key={cate} className={category === cate ? 'itemShoesLinkOn' : 'itemShoesLink'}>
                        <Link to={`/shop/shoes/${cate}`}>샌들/슬리퍼</Link>
                      </li>
                    );
                  }

                  return (
                    <li key={cate} className={category === cate ? 'itemShoesLinkOn' : 'itemShoesLink'}>
                      <Link to={`/shop/shoes/${cate}`}>{cate}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </StyledShopHeader>
      {params.category === '전체' && <Nomination />}

      <StyledItem>
        <div className='itmeBox'>
          <div className='itemFilterBox'>
            {shoes && (
              <p>
                <span>{Object.keys(shoes.data).length}</span>개의 상품
              </p>
            )}
            <div className='itemFilter'>
              <div className='itemFilterSerchBox'>
                {/* 필터검색 버튼 */}
                <span
                  onClick={() => {
                    setToggle(true);
                  }}
                >
                  필터검색
                </span>
              </div>
              <div className='itemSortListBox'>
                {/* 아이템정렬 버튼 */}
                <select name='sort-list' id='sort-list'>
                  <option value='recent'>최근등록순</option>
                  <option value='sale'>판매순</option>
                  <option value='popularity'>인기순</option>
                  <option value='high-price'>높은가격순</option>
                  <option value='low-price'>낮은가격순</option>
                </select>
              </div>
            </div>
          </div>
          {toggle === true && <FilterModal toggle={toggle} setToggle={setToggle} />}
          <div className='itemInnerBox'>
            {/* 상품전체박스 */}

            {params.category === '전체' && product.length ? (
              product.map(item => {
                return <ItemBox item={item} key={item.id} />;
              })
            ) : (
              <></>
            )}

            {loading ||
              (params.category !== '전체' &&
                shoesCategory &&
                shoesCategory.map(item => {
                  return <ItemBox item={item} key={item.id} />;
                }))}
          </div>
          {loading && <ShoesSkeleton />}
          <div className='itemMoreBtnBox'>
            {params.category === '전체' && !end && (
              <button className='itemMoreBtn' disabled={loading} onClick={() => setPage(page => page + 8)}>
                더보기
              </button>
            )}
          </div>
        </div>
      </StyledItem>
    </>
  );
};

export default Item;
