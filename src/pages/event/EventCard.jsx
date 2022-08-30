import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardContent from './CardContent';
import styled from 'styled-components';

const CardBox = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 36px 0;
  padding: 0 20px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  div.imgbox {
    width: 500px;
    img {
      width: 100%;
      height: 500px;
      background-color: ${(props) => props.theme.colors.mainImgBg};
    }
  }

  div.desc {
    margin: 0;
    padding-top: 20px;
    p.date {
      font-family: 'Poppins', 'sans-serif';
      font-weight: 400;
      margin-bottom: 15px;
      color: ${(props) => props.theme.colors.disabledTitle};
    }
  }
`;

const EventCard = (props) => {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    fetch('data/event.json')
      .then((res) => res.json())
      .then((json) => setCardData(json));
  }, []);

  return (
    <>
      {cardData && (
        <>
          {cardData.map((card) => {
            return (
              <Link
                to='/event'
                style={{ display: 'block', width: '33%' }}
                key={card.id}
              >
                <CardBox>
                  <div className='imgbox'>
                    <img alt='event banner' src={card.img} />
                  </div>
                  <div className='desc'>
                    <p className='date'>{card.date}</p>
                    <CardContent content={card.title} />
                  </div>
                </CardBox>
              </Link>
            );
          })}
        </>
      )}
    </>
  );
};

export default EventCard;
