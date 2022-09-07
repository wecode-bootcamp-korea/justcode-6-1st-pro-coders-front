import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardContent from './CardContent';
import styled from 'styled-components';

const CardBox = styled.article`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  margin: 36px 0;
  padding: 0 20px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  div.imgBox {
    width: 500px;

    img {
      width: 100%;
      height: auto;
      background-color: ${(props) => props.theme.colors.mainImgBg};
    }
  }

  div.desc {
    padding-top: 20px;

    p.date {
      margin-bottom: 15px;
      font-family: 'Poppins', 'sans-serif';
      font-weight: 400;
      color: ${(props) => props.theme.colors.disabledTitle};
    }
  }
`;

const EventCard = ({cardData}) => {

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
                  <div className='imgBox'>
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
