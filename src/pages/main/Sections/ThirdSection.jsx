import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Item from './Item';
import useSwiper from '../../../hooks/useSwiper';
import SwiperSkeleton from '../../../components/Skeleton/SwiperSkeleton';
import axios from 'axios';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  user-select: none;
  overflow: hidden;

  div.container {
    max-width: 1280px;
    width: 100%;
    padding: 0 20px;

    ul.keywordList {
      display: flex;
      gap: 30px;

      li {
        h3 {
          font-weight: 900;
          font-size: 24px;
          padding-bottom: 30px;
          cursor: pointer;
          position: relative;
          color: ${({ theme }) => theme.colors.disabledTitle};
          transition: 0.2s;

          &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 10px;
            background-color: black;
            transform: scaleX(0);
            transition: 0.3s;
            transform-origin: 0;
          }

          &:hover {
            color: black;
            &::after {
              transform: scaleX(1);
            }
          }
        }

        &:nth-child(${({ menu }) => menu + 1}) {
          h3 {
            color: black;

            &::after {
              transform: scaleX(1);
            }
          }
        }
      }
    }

    div.listContainer {
      ul.items {
        display: flex;
        padding-top: 40px;
        width: calc(${({ itemList, menu }) => (itemList[menu].length > 5 ? `20% * ${itemList[menu].length}` : '100%')});
      }
    }

    div.line {
      height: 6px;
      margin-top: 100px;
      background-color: #00000050;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: calc(${({ itemList, menu, perView }) => (itemList[menu].length > 5 ? `100% / ${itemList[menu].length - perView + 1}` : '100%')});
        height: 100%;
        left: 0;
        top: 0;
        background-color: black;
        transition: 0.3s;
        transform: translateX(calc(100% * ${({ page }) => page}));
      }
    }
  }
`;

const categories = [
  { id: 0, name: '러닝화' },
  { id: 1, name: '워킹화' },
  { id: 2, name: '트레킹화' },
  { id: 3, name: '스니커즈' },
  { id: 4, name: '샌들/슬리퍼' },
  { id: 5, name: '스포츠화' },
  { id: 6, name: '아동화' },
  { id: 7, name: '기타' },
];

const ThirdSection = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState(0);
  const [keywordList, setKeywordList] = useState();
  const [itemList, setItemList] = useState();
  const { swipedTarget, page } = useSwiper(itemList ? itemList[menu].length : 5, 5);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const shuffledData = categories.sort(() => Math.random() - 0.5).slice(0, 4);
      setKeywordList(shuffledData);

      const itemsData = (await axios.get(`http://localhost:8000/products?type=SHOES`)).data;
      setItemList(shuffledData.map(data => itemsData.filter(itemData => itemData.category === data.name)));
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <SwiperSkeleton />;
  }

  return (
    <StyledSection menu={menu} itemList={itemList} page={page} perView={5}>
      <div className='container'>
        <ul className='keywordList'>
          {keywordList.map((keyword, i) => (
            <li key={keyword.id}>
              <h3 onClick={() => setMenu(i)}>#{keyword.name}</h3>
            </li>
          ))}
        </ul>
        <div className='listContainer'>
          <ul className='items' ref={swipedTarget}>
            {itemList[menu].map(item => (
              <Item key={item.id} item={item} length={itemList[menu].length} />
            ))}
          </ul>
        </div>
        <div className='line' />
      </div>
    </StyledSection>
  );
};

export default ThirdSection;
