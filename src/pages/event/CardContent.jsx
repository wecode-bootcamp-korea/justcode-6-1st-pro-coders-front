import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const Content = styled.p``;

const TitleEN = styled.span`
  font-family: 'Poppins', 'sans-serif';
  font-weight: 700;
  font-size: 22px;
  color: ${(props) => props.theme.colors.text};
`;

const TitleKR = styled.span`
  font-weight: 700;
  font-size: 22px;
  color: ${(props) => props.theme.colors.text};
`;

const Event = ({ content }) => {
  return (
    <>
      {content && (
        <ThemeProvider theme={theme}>
          <Content>
            {content.map((text) => {
              return Object.keys(text)[0] === 'contentKR' ? (
                <TitleKR key={new Date() + text.contentKR}>
                  {text.contentKR}
                </TitleKR>
              ) : (
                <TitleEN key={new Date() + text.contentEN}>
                  {text.contentEN}
                </TitleEN>
              );
            })}
          </Content>
        </ThemeProvider>
      )}
    </>
  );
};

export default Event;
