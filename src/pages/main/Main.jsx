import styled from 'styled-components';
import Header from './Header';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import ThirdSection from './sections/ThirdSection';
import FourthSection from './sections/FourthSection';
import FifthSection from './sections/FifthSection';

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
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
      </StyledMain>
    </>
  );
};

export default MainPage;
