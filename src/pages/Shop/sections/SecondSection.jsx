import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSwiper from '../../../hooks/useSwiper';
import SwiperSkeleton from '../../../components/Skeleton/SwiperSkeleton';

const StyledSection = styled.section`
  overflow: hidden;

  div.container {
    h3 {
      margin-top: 40px;
      font-size: 30px;
      font-weight: 900;
    }

    div.listContainer {
      margin-top: 40px;

      ul.list {
        display: flex;
        width: calc(100% * 18 / 4);
        cursor: pointer;

        li {
          width: calc(100% / 18);
          padding: 10px;
          user-select: none;

          img {
            -webkit-user-drag: none;
            width: 100%;
            aspect-ratio: 1 / 1;
          }

          p {
            padding-top: 20px;
            font-size: 20px;
          }

          h4 {
            font-size: 30px;
            font-weight: 900;
            margin-top: 10px;
          }
        }
      }

      div.line {
        height: 4px;
        background-color: #00000050;
        margin-top: 40px;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          width: calc(100% / ${({ length, perView }) => length - perView - 1});
          height: 100%;
          left: 0;
          top: 0;
          background-color: black;
          transition: 0.3s;
          transform: translateX(calc(100% * ${({ page }) => page}));
        }
      }
    }
  }
`;

const SecondSection = () => {
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);
  const { swipedTarget, page, setRender } = useSwiper(18, 4);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8000/products?type=SHOES') // localhost:8000/products?type=SHOES
      .then(re => re.json())
      .then(data => {
        setList(data.slice(0, 20));
        setLoading(false);
      });
  }, []);

  return (
    <StyledSection page={page} perView={4} length={list?.length ? list.length : null}>
      <div className='container'>
        <h2>
          일상을 자유롭고 경쾌하게 <br /> FW 스타일링
        </h2>
        {loading ? (
          <SwiperSkeleton />
        ) : (
          <>
            <h3>추천상품</h3>

            <div className='listContainer' ref={setRender}>
              <ul className='list' ref={swipedTarget}>
                {list.map(item => (
                  <li key={item.id}>
                    <img src={item.main_image} alt={item.title} onClick={() => navigate(`/product/${item.id}`)} />
                    <p>{item.title}</p>
                    <h4>{item.discounted_price}원</h4>
                  </li>
                ))}
              </ul>
              <div className='line' />
            </div>
          </>
        )}
      </div>
    </StyledSection>
  );
};

export default SecondSection;
