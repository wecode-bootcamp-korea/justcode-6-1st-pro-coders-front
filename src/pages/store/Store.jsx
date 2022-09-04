import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import StoreInfo from './StoreInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const Main = styled.div`
  width: 1280px;
  margin: 250px auto 200px auto;

  h3 {
    margin-bottom: 47px;
    font-family: 'Poppins', 'sans-serif';
    font-weight: 700;
    font-size: 40px;
    color: ${(props) => props.theme.colors.text};
  }

  div.searchContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 185px;
    margin-bottom: 120px;
    padding: 40px;
    background-color: ${(props) => props.theme.colors.mainImgBg};
    border-top: 4px solid ${(props) => props.theme.colors.text};

    .title {
      margin-right: 26px;
      font-size: 22px;
      font-weight: 700;
    }

    .selectRegion {
      position: relative;
      width: 300px;
      height: 50px;
      margin-right: 15px;
      padding: 15px 16px;
      font-size: 18px;
      font-weight: 600;
      background-color: #fff;
      border: 1px solid ${(props) => props.theme.colors.disabledTitle};
      cursor: pointer;

      #textContainer {
        .text {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
      }
      .searchToggle {
        position: absolute;
        top: 100%;
        left: -1px;
        width: 300px;
        height: 320px;
        padding: 15px 16px;
        background-color: #fff;
        border: 1px solid ${(props) => props.theme.colors.text};
        font-weight: 400;
        overflow: scroll;

        ul {
          li {
            margin: 20px 0;
            cursor: pointer;
          }
          li:first-child {
            margin: 0 0 20px 0;
          }
          li:last-child {
            margin: 20px 0 0 0;
          }
        }
      }
    }
    form {
      width: 320px;
      height: 52px;
      padding-left: 13px;
      border: 1px solid ${(props) => props.theme.colors.disabledTitle};
      background-color: #fff;

      input {
        width: 86%;
        height: 100%;
        font-size: 18px;
      }

      button {
        border: none;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }

  .storeList {
    width: 100%;

    padding: 0 20px;

    .categoryName {
      display: flex;
      margin-bottom: 60px;
      border-bottom: none;
      font-size: 18px;
      font-weight: 400;
      .names {
        width: 25%;
        padding: 20px;
        text-align: center;
        border: 1px solid ${(props) => props.theme.colors.text};
        border-left: none;
        border-bottom: 3px solid ${(props) => props.theme.colors.text};
        cursor: pointer;

        &:first-child {
          border-left: 1px solid ${(props) => props.theme.colors.text};
        }
      }

      .names.selected {
        border: 3px solid ${(props) => props.theme.colors.text};
        border-bottom: none;
        font-weight: 700;
      }

      .number {
        font-family: 'Poppins', 'sans-serif';
      }
    }
    .mapContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 750px;

      .textContainer {
        width: 40%;
        height: 100%;
        margin-right: 100px;
        overflow: scroll;
      }
    }
  }
`;

const Store = (props) => {
  const [toggle, setToggle] = useState(false);
  const [list, setList] = useState();
  const [allList, setAllList] = useState();
  const [directManagementList, setDirectManagementList] = useState();
  const [departmentList, setDepartmentList] = useState();
  const [agencyList, setAgencyList] = useState();
  const [mapList, setMapList] = useState();
  const [category, setCategory] = useState([
    { id: 1, name: '전체', selected: true },
    { id: 2, name: '직영점', selected: false },
    { id: 3, name: '백화점', selected: false },
    { id: 4, name: '대리점', selected: false },
  ]);

  useEffect(() => {
    fetch('data/storeList.json')
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setAllList(data);
        setDirectManagementList(data.filter((el) => el.type === '직영점'));
        setDepartmentList(data.filter((el) => el.type === '백화점'));
        setAgencyList(data.filter((el) => el.type === '대리점'));
        setMapList(data);
      });
  }, []);

  const handleShowToggle = (e) => {
    setToggle((prev) => !prev);
  };

  const handleMapLocation = (e) => {
    const newItem = list.filter((el) => {
      return Number(e.target.closest('div').id) === el.id;
    });
    setMapList(newItem);
  };

  const handleResetData = () => {
    setList(allList);
    setMapList(allList);

    setCategory([
      { id: 1, name: '전체', selected: true },
      { id: 2, name: '직영점', selected: false },
      { id: 3, name: '백화점', selected: false },
      { id: 4, name: '대리점', selected: false },
    ]);
  };

  const handleFilterData = (e) => {
    const selectedTitle = e.target.closest('div').textContent.slice(0, 3);
    const newCategory = category.map((el) => {
      return el.name === selectedTitle
        ? { id: el.id, name: el.name, selected: true }
        : { id: el.id, name: el.name, selected: false };
    });

    setCategory(newCategory);
    const changeMap = (list) => {
      setMapList(list);
      setList(list);
    };

    selectedTitle === '직영점' && changeMap(directManagementList);
    selectedTitle === '백화점' && changeMap(departmentList);
    selectedTitle === '대리점' && changeMap(agencyList);
  };

  const showLength = (type) => {
    switch (type) {
      case '직영점':
        return directManagementList.length;
      case '백화점':
        return departmentList.length;
      case '대리점':
        return agencyList.length;
    }
  };

  return (
    <Main>
      <h3>STORE</h3>
      <div className='searchContainer'>
        <p className='title'>매장 검색</p>
        <div className='selectRegion'>
          <div id='textContainer' onClick={handleShowToggle}>
            {toggle ? (
              <p className='text'>
                전체
                <FontAwesomeIcon
                  icon={faChevronUp}
                  size='sm'
                  color={`${(props) => props.theme.colors.disabledTitle}`}
                />
              </p>
            ) : (
              <p className='text'>
                전체
                <FontAwesomeIcon
                  icon={faChevronDown}
                  size='sm'
                  color={`${(props) => props.theme.colors.disabledTitle}`}
                />
              </p>
            )}
          </div>
          {toggle && (
            <div className='searchToggle'>
              <ul>
                <li id='0'>전체</li>
                <li id='1'>강원도</li>
                <li id='2'>경기도</li>
                <li id='3'>경상남도</li>
                <li id='4'>경상북도</li>
                <li id='5'>광주광역시</li>
                <li id='6'>대구광역시</li>
                <li id='7'>대전광역시</li>
                <li id='8'>부산광역시</li>
                <li id='9'>서울특별시</li>
                <li id='10'>울산광역시</li>
                <li id='11'>인천광역시</li>
                <li id='12'>전라남도</li>
                <li id='13'>전라북도</li>
                <li id='14'>제주도</li>
                <li id='15'>충청남도</li>
                <li id='16'>충청북도</li>
                <li id='17'>세종특별자치시</li>
              </ul>
            </div>
          )}
        </div>
        <form>
          <input type='text' placeholder='매장명을 입력해주세요.' />
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />
          </button>
        </form>
      </div>
      <section className='storeList'>
        <div className='categoryName'>
          {list &&
          allList &&
          directManagementList &&
          departmentList &&
          agencyList ? (
            <>
              {category.map((categoryEl) => {
                return categoryEl.name === '전체' ? (
                  <div
                    className={categoryEl.selected ? 'names selected' : 'names'}
                    onClick={handleResetData}
                    key={categoryEl.id}
                  >
                    {categoryEl.name}
                    <span className='number'>({allList.length})</span>
                  </div>
                ) : (
                  <div
                    className={categoryEl.selected ? 'names selected' : 'names'}
                    onClick={handleFilterData}
                    key={categoryEl.id}
                  >
                    {categoryEl.name}
                    <span className='number'>
                      ({showLength(categoryEl.name)})
                    </span>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {category.map((el) => {
                return (
                  <div className='names' key={el.id}>
                    {el.name}(<span className='number'>0</span>)
                  </div>
                );
              })}
            </>
          )}
        </div>

        <div className='mapContainer'>
          {list &&
            allList &&
            directManagementList &&
            departmentList &&
            agencyList && (
              <div className='textContainer'>
                {list.map((el) => {
                  return (
                    <StoreInfo
                      key={el.id}
                      id={el.id}
                      name={el.name}
                      address={el.address}
                      tel={el.tel}
                      time={el.time}
                      handleMapLocation={handleMapLocation}
                    />
                  );
                })}
              </div>
            )}
          <Map list={mapList} />
        </div>
      </section>
    </Main>
  );
};

export default Store;
