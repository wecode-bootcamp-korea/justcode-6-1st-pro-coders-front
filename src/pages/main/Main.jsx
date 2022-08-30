import styled from 'styled-components';
import Header from './Header';
import FirstSection from './Sections/FirstSection';

const StyledMain = styled.main`
  section {
    padding-top: 100px;
  }
`;

const MainPage = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <FirstSection />
        <section className='second'></section>
      </StyledMain>
    </>
  );
};

export default MainPage;
