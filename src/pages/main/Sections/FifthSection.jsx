import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiChevronRight } from 'react-icons/bi';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  div.container {
    max-width: 1640px;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    gap: 100px;
  }
`;

const ItemBrand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;

  a {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 900;
    color: black;
  }

  img {
    width: 100px;
    aspect-ratio: 1 / 1;
  }

  p {
    width: 300px;
    font-size: 20px;
    text-align: center;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.disabledTitle};
  }
`;

const FifthSection = () => {
  return (
    <StyledSection>
      <div className='container'>
        <ItemBrand>
          <img src='/images/logo-black.svg' alt='LOOKBOOK' />
          <Link to='/archive'>
            LOOKBOOK
            <BiChevronRight size={40} />
          </Link>
          <p>22 F/W 시즌 룩북을 만나보세요.</p>
        </ItemBrand>
        <ItemBrand>
          <img src='https://image.prospecs.com/front/images/renewal/icon_quick_02.svg' alt='STORE' />
          <Link to='/store'>
            STORE
            <BiChevronRight size={40} />
          </Link>
          <p>가장 가까운 프로스펙스 매장을 검색해보세요.</p>
        </ItemBrand>
        <ItemBrand>
          <img src='https://image.prospecs.com/front/images/renewal/icon_quick_03.svg' alt='GIFTCARD' />
          <Link to='/'>
            GIFTCARD
            <BiChevronRight size={40} />
          </Link>
          <p>소중한 분께 LS네트웍스 모바일상품권을 선물해 보세요.</p>
        </ItemBrand>
      </div>
    </StyledSection>
  );
};

export default FifthSection;
