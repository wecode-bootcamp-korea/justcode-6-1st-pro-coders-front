import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const Main = styled.div`
  width: 1280px;
  margin: 250px auto 0 auto;

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
`;

const Store = (props) => {
  const [toggle, setToggle] = useState(false);
  const handleShowToggle = (e) => {
    setToggle((prev) => !prev);
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
      <section className='shopList'>지도</section>
    </Main>
  );
};

export default Store;
