import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ItemBox from '../Shop/Shoes/sections/ItemBox';
import SearchSkeleton from '../../components/Skeleton/SearchSkeleton';

const Main = styled.div`
  width: 1280px;
  margin: 250px auto;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  section.searchInputContainer {
    p {
      margin-bottom: 50px;
      font-size: 26px;
      font-weight: 700;
      color: ${props => props.theme.colors.disabledTitle};
      .highlight {
        color: ${props => props.theme.colors.text};
      }
    }

    form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 80px;

      .alignInputContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 100%;

        div.inputContainer {
          display: flex;
          align-items: center;
          width: 700px;
          height: 100%;
          padding: 10px;
          margin-right: 15px;
          border: 1px solid ${props => props.theme.colors.disabledTitle};

          input {
            width: 100%;
            padding-left: 15px;
            border: none;
            font-size: 20px;

            &:focus {
              outline: none;
            }
          }
          img {
            margin-right: 20px;
          }
        }
        button.searchBtn {
          width: 130px;
          height: 100%;
          padding: 14px 30px;
          border: none;
          background-color: ${props => props.theme.colors.text};
          color: white;
          font-weight: 700;
          font-size: 18px;
        }
      }
    }

    .noResult {
      width: 845px;
      margin: 30px auto 0 auto;
      padding: 32px 30px;
      background-color: ${props => props.theme.colors.mainImgBg};
      text-align: left;

      h4 {
        margin-bottom: 13px;
        font-weight: 500;
        font-size: 18px;
      }
      .searchTip {
        li {
          display: flex;
          margin-bottom: 12px;
          :last-child {
            margin-bottom: none;
          }

          &:before {
            content: '';
            display: block;
            width: 4px;
            height: 4px;
            margin: 5px 8px 5px 0;
            background-color: ${props => props.theme.colors.text};
          }
        }
      }
    }
  }

  .popularKeyword {
    display: flex;
    width: calc(100% - 40px);
    margin: 0 auto;
    padding-bottom: 30px;
    border-bottom: 1px solid #d1d1d1;
    font-size: 20px;

    ul {
      display: flex;
      justify-content: space-between;

      li {
        margin-right: 35px;
        cursor: pointer;
        :last-child {
          margin-right: 0;
        }
      }

      li.title {
        font-weight: 700;
      }
    }
  }

  .itemFilterContainer {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 25px 0 25px 0;
    font: bold 17px/1 'Spoqa Han Sans Neo', 'sans-serif';

    .itemFilter {
      display: flex;
      align-items: center;

      .itemFilterSerchBox {
        margin-right: 15px;
      }

      .itemSortListBox {
        margin-right: 30px;
      }
    }
  }

  .itemInnerBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 1280px;
    margin: 50px auto 150px auto;

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
            text-align: left;
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

  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 100px;

    .moreBtn {
      width: 260px;
      height: 60px;
      background: #fff;
      border: 3px solid ${props => props.theme.colors.text};
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .promotion {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 700;

    h4 {
      margin-bottom: 50px;
      font-size: 24px;
    }

    .promotionCardContainer {
      display: flex;
      width: 100%;
      font-size: 22px;

      .promotionCard {
        width: 33%;
        margin-right: 50px;
        text-align: left;

        img {
          width: 100%;
          margin-bottom: 20px;
        }
      }
    }
  }
`;

const Search = props => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState();
  const [searchList, setSearchList] = useState();
  const [keywordList, setKeywordList] = useState([
    {
      id: 1,
      title: '인기검색어',
      style: 'title',
    },
    {
      id: 2,
      title: '2022 S/S신상',
    },
    {
      id: 3,
      title: '블레이드 BX',
    },
    { id: 4, title: 'X-FIN' },
    {
      id: 5,
      title: '러닝화',
    },
    {
      id: 6,
      title: '워킹화',
    },
    {
      id: 7,
      title: '스니커즈',
    },
    { id: 8, title: '모자' },
    { id: 9, title: '양말' },
    { id: 10, title: '오리지널' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const input = useRef();

  useEffect(() => {
    const value = new URLSearchParams(location.search).get('key');
    setKeyword(value);
    setInputValue(value);
    fetch(`http://localhost:8000/search${location.search}`)
      .then(res => res.json())
      .then(data => {
        data.message ? setSearchList([]) : setSearchList(data);
        setLoading(false);
      })
      .catch(err => setSearchList([]));
  }, [location]);

  const onSearch = () => {
    setLoading(true);
    setKeyword(input.current.value);
    fetch(`http://localhost:8000/search?key=${input.current.value}`)
      .then(res => res.json())
      .then(data => {
        data.message ? setSearchList([]) : setSearchList(data);
        setLoading(false);
      })
      .catch(err => {
        setSearchList([]);
        setLoading(false);
      });
  };

  const onSearchPopular = e => {
    setInputValue(e.target.textContent);
    setKeyword(e.target.textContent);
    fetch(`http://localhost:8000/search?key=${e.target.textContent}`)
      .then(res => res.json())
      .then(data => {
        setSearchList(data);
        setLoading(false);
      })
      .catch(err => {
        setSearchList([]);
        setLoading(false);
      });
  };

  const clearHandler = () => {
    input.current.value = '';
    setInputValue('');
  };

  return (
    <>
      {loading && <SearchSkeleton />}
      {!loading && (
        <Main>
          <section className='searchInputContainer'>
            {searchList && searchList.length !== 0 ? (
              <p>
                <span className='highlight'>'{keyword}'</span> 검색결과
                <span className='highlight'>{` 총 ${searchList.length}개`}</span>의 상품이 조회 되었습니다.
              </p>
            ) : (
              <p>
                <span className='highlight'>'{keyword}'</span>에 대한 검색 결과가 없습니다.
              </p>
            )}
            <div>
              <form onSubmit={e => e.preventDefault()}>
                <div className='alignInputContainer'>
                  <div className='inputContainer'>
                    <input
                      ref={input}
                      value={inputValue}
                      onChange={e => {
                        setInputValue(e.target.value);
                      }}
                      type='text'
                    />
                    {inputValue && <img src='nav/icon/icon_search_close.svg' alt='close-icon' onClick={clearHandler} />}
                  </div>
                  <button className='searchBtn' onClick={onSearch}>
                    검색
                  </button>
                </div>
                {searchList && searchList.length === 0 && (
                  <div className='noResult' length={searchList.length}>
                    <h4>검색 Tip</h4>
                    <ul className='searchTip'>
                      <li>검색어를 정확히 입력하였는지 확인해주세요.</li>
                      <li>검색어의 단어 수를 줄이거나, 보다 일반적인 검색어로 다시 검색해 주세요.</li>
                      <li>검색어를 단어로 입력해보세요. (예 : 프로스펙스 런닝화 → 런닝화)</li>
                      <li>상품이 품절되었을 경우 검색이 되지 않을 수 있습니다.</li>
                    </ul>
                  </div>
                )}
              </form>
            </div>
          </section>
          <div className='popularKeyword'>
            <ul>
              {keywordList.map(keyword => {
                return keyword.id === 1 ? (
                  <li key={keyword.id} className={keyword.style}>
                    {keyword.title}
                  </li>
                ) : (
                  <li key={keyword.id} className={keyword.style} onClick={onSearchPopular}>
                    {keyword.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <section className='itemFilterContainer'>
            <div className='itemFilter'>
              <div className='itemFilterSerchBox'>
                <div
                  onClick={() => {
                    setToggle(true);
                  }}
                >
                  필터검색
                </div>
              </div>
              <div className='itemSortListBox'>
                <select name='sort-list' id='sort-list'>
                  <option value='recent'>최근등록순</option>
                  <option value='sale'>판매순</option>
                  <option value='popularity'>인기순</option>
                  <option value='high-price'>높은가격순</option>
                  <option value='low-price'>낮은가격순</option>
                </select>
              </div>
            </div>
          </section>
          <section className='itemInnerBox'>
            {searchList &&
              searchList.map(item => {
                return <ItemBox item={item} key={item.id} />;
              })}
          </section>
          <section className='promotion'>
            <h4>관련 기획전</h4>
            <div className='promotionCardContainer'>
              <div className='promotionCard'>
                <img src='https://image.prospecs.com/files/upload/display/202208/202208111603071_4.png/dims/optimize' alt='2022 FW HOW TO PLAY THIS CITY' />
                <h5>2022 FW HOW TO PLAY THIS CITY</h5>
              </div>
              <div className='promotionCard'>
                <img src='https://image.prospecs.com/files/upload/display/202206/202206171021471_4.png/dims/optimize' alt='LG트윈스 구매고객 대상 이벤트' />
                <h5>LG트윈스 구매고객 대상 이벤트</h5>
              </div>
              <div className='promotionCard'>
                <img src='https://image.prospecs.com/files/upload/display/202208/202208171353281_4.png/dims/optimize' alt='랭킹100' />
                <h5>랭킹100</h5>
              </div>
            </div>
          </section>
        </Main>
      )}
    </>
  );
};

export default Search;
