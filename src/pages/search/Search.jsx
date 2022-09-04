import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Item from '../Shop/Shoes/Item';
import ItemBox from '../Shop/Shoes/ItemBox';

const Main = styled.div``;

const Search = (props) => {
  const [searchList, setSearchList] = useState();
  useEffect(() => {
    // fetch('http://localhost:8000/search')
    //   .then((res) => res.json())
    //   .then((data) => setSearchList(data));
    fetch('data/shoesData.json')
      .then((res) => res.json())
      .then((data) => setSearchList(data.data));
  }, []);
  return (
    <Main>
      <h1>'트레이닝' 검색결과 총 778개의 상품이 조회 되었습니다.</h1>
      <Item>
        {searchList &&
          searchList.map((el, i) => {
            <ItemBox key={el.id} shoes={searchList} item={el} index={i} />;
          })}
      </Item>
    </Main>
  );
};

export default Search;
