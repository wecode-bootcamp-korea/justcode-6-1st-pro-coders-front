import styled from 'styled-components';

const StyledSkeleton = styled.section`
  height: 664px;
  margin-bottom: 100px;

  div.container {
    max-width: 1640px;
    padding: 0 20px;
    margin: 0 auto;

    div.keywordList {
      display: flex;
      gap: 30px;

      & > div {
        width: 100px;
        height: 24px;
        background-color: #00000050;
        margin-bottom: 30px;
      }
    }
    div.itemList {
      margin-top: 40px;

      display: flex;

      & > div {
        width: 20%;
        height: 464px;
        margin: 20px;

        div.img {
          width: 100%;
          aspect-ratio: 1 / 1;
          background-color: #00000050;
        }

        div.category {
          margin-top: 20px;
          width: 200px;
          height: 24px;
          background-color: #00000050;
        }

        div.price {
          margin-top: 20px;
          width: 100px;
          height: 24px;
          background-color: #00000050;
        }
      }
    }
  }
`;

const SwiperSkeleton = () => (
  <StyledSkeleton>
    <div className='container'>
      <div className='keywordList'>
        <div className='keyword' />
        <div className='keyword' />
        <div className='keyword' />
        <div className='keyword' />
      </div>
      <div className='itemList'>
        <div className='item'>
          <div className='img' />
          <div className='category' />
          <div className='price' />
        </div>
        <div className='item'>
          <div className='img' />
          <div className='category' />
          <div className='price' />
        </div>
        <div className='item'>
          <div className='img' />
          <div className='category' />
          <div className='price' />
        </div>
        <div className='item'>
          <div className='img' />
          <div className='category' />
          <div className='price' />
        </div>
        <div className='item'>
          <div className='img' />
          <div className='category' />
          <div className='price' />
        </div>
      </div>
    </div>
  </StyledSkeleton>
);

export default SwiperSkeleton;
