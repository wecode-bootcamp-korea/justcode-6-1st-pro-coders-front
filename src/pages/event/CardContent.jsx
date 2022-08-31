import styled from 'styled-components';

const Content = styled.p`
  font-weight: 700;
  font-size: 22px;
  color: ${(props) => props.theme.colors.text};

  span.kr {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }

  span.en {
    font-family: 'Poppins', 'sans-serif';
  }
`;

const Event = ({ content }) => {
  return (
    <>
      {content && (
        <Content>
          {content.map((text) => {
            return Object.keys(text)[0] === 'contentKR' ? (
              <span className='kr' key={new Date() + text.contentKR}>
                {text.contentKR}
              </span>
            ) : (
              <span className='en' key={new Date() + text.contentEN}>
                {text.contentEN}
              </span>
            );
          })}
        </Content>
      )}
    </>
  );
};

export default Event;
