import styled from 'styled-components';

const StyledMain = styled.main`
  img {
    width: 100%;
    height: 100vh;
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <img src='./main/img/title3.jfif' alt='title image' />
    </StyledMain>
  );
};

export default Main;
