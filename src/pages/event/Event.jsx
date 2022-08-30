import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import EventCard from './EventCard';

const Main = styled.div`
  div.headerContainer {
    margin: 0 20px;
    a {
      color: ${(props) => props.theme.colors.text};
    }
    h3 {
      margin-bottom: 47px;
      font-family: 'Poppins', 'sans-serif';
      font-weight: 700;
      font-size: 40px;
      ${(props) => props.theme.colors.text}
    }
    ul {
      display: flex;
      margin-bottom: 57px;

      li {
        margin-right: 32px;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-weight: 700;
        font-size: 26px;
        color: ${(props) => props.theme.colors.disabledTitle};
        &:hover {
          color: ${(props) => props.theme.colors.text};
        }
        &:after {
          content: '';
          display: block;
          width: 0;
          height: 7.5px;
          margin-top: 15px;
          transition: width 200ms ease-in-out;
          background-color: ${(props) => props.theme.colors.text};
        }
        &:hover:after {
          content: '';
          display: block;
          width: 100%;
          height: 7.5px;
          margin-top: 15px;
          transition: width 200ms ease-in-out;
          background-color: ${(props) => props.theme.colors.text};
        }
      }

      li.selected {
        margin-right: 32px;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-weight: 700;
        font-size: 26px;
        color: ${(props) => props.theme.colors.text};
        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 7.5px;
          margin-top: 15px;
          background-color: ${(props) => props.theme.colors.text};
        }
      }
    }
  }

  div.selectContainer {
    position: relative;
    margin-right: 15px;
    margin-bottom: 10px;
    padding: 0 20px;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-weight: 500;
    font-size: 18px;
    text-align: right;
    cursor: pointer;

    span {
      margin-right: 13px;
    }
    div {
      position: absolute;
      top: 32px;
      right: 20px;
      width: 120px;
      padding: 25px 20px;
      background-color: #fff;
      border: 1px solid ${(props) => props.theme.colors.text};
      font-size: 16px;
      font-weight: 400;
      text-align: left;
    }
  }

  div.cardContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const Event = (props) => {
  const [menuList, setMenuList] = useState([
    {
      id: 1,
      text: '전체',
      selected: true,
    },
    {
      id: 2,
      text: '이벤트',
      selected: false,
    },
    {
      id: 3,
      text: '기획전',
      selected: false,
    },
  ]);
  const [arrow, setArrow] = useState(false);

  const handleSelected = (e) => {
    const newMenu = menuList.map((menu) => {
      return +e.target.id === menu.id
        ? { id: menu.id, text: menu.text, selected: true }
        : { id: menu.id, text: menu.text, selected: false };
    });
    setMenuList(newMenu);
  };

  const handleArrow = () => {
    setArrow((arrow) => !arrow);
  };

  return (
    <Main>
      <div className='headerContainer'>
        <Link to='/event'>
          <h3>EVENT</h3>
        </Link>
        <ul>
          {menuList.map((menu) => {
            return menu.selected ? (
              <Link to='/event' key={menu.id} onClick={handleSelected}>
                <li className='selected' id={menu.id}>
                  {menu.text}
                </li>
              </Link>
            ) : (
              <Link to='/event' key={menu.id} onClick={handleSelected}>
                <li id={menu.id}>{menu.text}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className='selectContainer' onClick={handleArrow}>
        <span>진행중</span>
        {arrow ? (
          <FontAwesomeIcon icon={faChevronUp} size='xs' />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} size='xs' />
        )}
        {arrow ? <div>진행중</div> : null}
      </div>
      <div className='cardContainer'>
        <EventCard />
      </div>
    </Main>
  );
};

export default Event;
