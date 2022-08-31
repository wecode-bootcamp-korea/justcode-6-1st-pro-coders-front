import styled from 'styled-components';
import Header from './Header';
import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/ThirdSection';
import FourthSection from './Sections/FourthSection';
import FifthSection from './Sections/FifthSection';

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
