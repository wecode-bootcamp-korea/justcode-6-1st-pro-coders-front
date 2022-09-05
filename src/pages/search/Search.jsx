import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Item from '../Shop/Shoes/sections/Item';
import ItemBox from '../Shop/Shoes/sections/ItemBox';


const Main = styled.div`
  margin: 250px auto 0 auto;
`;

const Search = (props) => {
  const keyword = '런닝화';
  const [searchList, setSearchList] = useState();
  useEffect(() => {
    // fetch(`http://localhost:8000/search?key=${keyword}`)
    //   .then((res) => res.json())
    //   .then((data) => setSearchList(data));
    fetch('data/shoesData.json')
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.data.filter((el) => {
          return el.subcategory.includes(keyword);
        });
        setSearchList(filteredData);
      });
  }, []);
  return (
    <Main>
      <h1>'트레이닝' 검색결과 총 778개의 상품이 조회 되었습니다.</h1>
      {searchList &&
        searchList.map((el) => {
          return (
            <div>
              <p>{el.title}</p>
              <img src={el.img} alt={el.title} />
            </div>
          );
        })}
    </Main>
  );
};

export default Search;
