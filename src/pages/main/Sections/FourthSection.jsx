import styled from 'styled-components';

const StyledSection = styled.section`
  div.container {
    max-width: 2000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 !important;

    div.news {
      display: flex;
      gap: 20px;
      width: 100%;

      div.imgContainer {
        width: calc(50% - 10px);
        height: 100%;
        overflow: hidden;
        cursor: pointer;
      }
    }
  }
  div.textContainer {
    display: flex;
    gap: 20px;
    max-width: 1640px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 20px 0 20px;
    cursor: pointer;

    div.text {
      width: calc(50% - 10px);

      h2 {
        font-size: 24px;
        font-weight: 900;
        position: relative;
        padding-bottom: 30px;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 14px;
          background-color: black;
        }
      }

      p {
        margin-top: 40px;
        font-size: 18px;
        line-height: 1.4;
        font-weight: 600;
        width: 90%;
      }
    }
  }
`;

const FourthSection = () => {
  return (
    <StyledSection>
      <div className='container'>
        <div className='news'>
          <div className='imgContainer'>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208181043441.png/dims/optimize' alt='' />
          </div>
          <div className='imgContainer'>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208241216152.png/dims/optimize' alt='' />
          </div>
        </div>
      </div>
      <div className='textContainer'>
        <div className='text'>
          <h2>FC서울 유니폼, '2022 굿 디자인 어워드' 수상</h2>
          <p>FC서울 2022시즌 유니폼이 ‘2022 굿 디자인 어워드’에서, ‘우수디자인(GD)’에 선정됐다.</p>
        </div>
        <div className='text'>
          <h2>레슬링 국가대표 프로스펙스 유니폼 입는다</h2>
          <p>대한레슬링협회와 후원 계약 체결, 2025년까지 레슬링 국가대표팀 의류 및 용품 후원 4대 프로스포츠, 익스트림까지…프로스펙스, 스포츠 산업 발전, 저변 확대 앞장서</p>
        </div>
      </div>
    </StyledSection>
  );
};

export default FourthSection;
