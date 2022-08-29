import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardContent from './CardContent';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const CardBox = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 36px 0;
  padding: 0 20px;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
`;

const CardImgBox = styled.div`
  width: 100%;
`;

const CardImg = styled.img`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.colors.textHover};
`;

const CardDesc = styled.div`
  margin: 0;
  padding-top: 20px;
`;

const CardDate = styled.p`
  font-family: 'Poppins', 'sans-serif';
  font-weight: 400;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.disabledTitle};
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
        <ThemeProvider theme={theme}>
          {cardData.map((card) => {
            return (
              <Link
                to='/event'
                style={{ display: 'block', width: '33%' }}
                key={card.id}
              >
                <CardBox>
                  <CardImgBox>
                    <CardImg alt='event banner' src={card.img} />
                  </CardImgBox>
                  <CardDesc>
                    <CardDate>{card.date}</CardDate>
                    <CardContent content={card.title} />
                  </CardDesc>
                </CardBox>
              </Link>
            );
          })}
        </ThemeProvider>
      )}
    </>
  );
};

export default EventCard;
