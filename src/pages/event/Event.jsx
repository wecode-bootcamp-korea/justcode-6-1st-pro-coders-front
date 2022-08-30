import { useState } from 'react';
import { Link, MemoryRouter } from 'react-router-dom';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import theme from '../../styles/theme';
import EventCard from './EventCard';

const HeaderContainer = styled.div`
  margin: 0 20px;
`;

const Title = styled.h1`
  margin-bottom: 47px;
  font-family: 'Poppins', 'sans-serif';
  font-weight: 700;
  font-size: 40px;
  ${(props) => props.theme.colors.text}
`;

const MenuBox = styled.ul`
  display: flex;
  margin-bottom: 57px;
`;

const widthChange = keyframes`
  from{
    width: 0%;
  }
  to{
    width: 100%;
  }
`;

const Menu = styled.li`
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
`;

const SelectedMenu = styled.li`
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
`;

const SelectContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 0 20px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-weight: 500;
  font-size: 18px;
  text-align: right;
`;

const CardListBox = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Arrow = styled.img`
  width: 12px;
  margin-left: 10px;
  margin-right: 3px;
`;

const Toggle = styled.div`
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
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <Title>EVENT</Title>
        <MenuBox>
          {menuList.map((menu) => {
            return menu.selected ? (
              <Link to='/event' key={menu.id} onClick={handleSelected}>
                <SelectedMenu id={menu.id}>{menu.text}</SelectedMenu>
              </Link>
            ) : (
              <Link to='/event' key={menu.id} onClick={handleSelected}>
                <Menu id={menu.id}>{menu.text}</Menu>
              </Link>
            );
          })}
        </MenuBox>
      </HeaderContainer>
      <SelectContainer onClick={handleArrow}>
        <span>진행중</span>
        {arrow ? (
          <Arrow src='images/event/icons/up-arrow.png' alt='화살표 아이콘' />
        ) : (
          <Arrow src='images/event/icons/down-arrow.png' alt='화살표 아이콘' />
        )}
        {arrow ? <Toggle>진행중</Toggle> : null}
      </SelectContainer>
      <CardListBox>
        <EventCard />
      </CardListBox>
    </ThemeProvider>
  );
};

export default Event;
