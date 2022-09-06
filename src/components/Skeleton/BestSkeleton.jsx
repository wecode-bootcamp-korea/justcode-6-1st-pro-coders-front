import styled from 'styled-components';

const StyledSkeleton = styled.div`
  display: flex;
  gap: 40px;
  width: calc(100% - 570px);

  div.left {
    width: 50%;

    div.img {
      width: 100%;
      aspect-ratio: 1 /1;
      background-color: #00000050;
    }

    div.category {
      margin-top: 20px;
      width: 100px;
      height: 24px;
      background-color: #00000050;
    }

    div.title {
      margin-top: 20px;
      width: 200px;
      height: 24px;
      background-color: #00000050;
    }

    div.price {
      margin-top: 20px;
      width: 140px;
      height: 24px;
      background-color: #00000050;
    }
  }

  div.right {
    width: 50%;

    div.item {
      display: flex;
      margin-bottom: 20px;

      div.img {
        width: 30%;
        aspect-ratio: 1 /1;
        background-color: #00000050;
      }

      div.textContainer {
        width: 50%;
        padding-left: 20px;

        div.category {
          margin-top: 20px;
          width: 100px;
          height: 24px;
          background-color: #00000050;
        }

        div.title {
          margin-top: 20px;
          width: 200px;
          height: 24px;
          background-color: #00000050;
        }

        div.price {
          margin-top: 20px;
          width: 140px;
          height: 24px;
          background-color: #00000050;
        }
      }
    }
  }
`;

const BestSkeleton = () => (
  <StyledSkeleton>
    <div className='left'>
      <div className='img' />
      <div className='category' />
      <div className='title' />
      <div className='price' />
    </div>
    <div className='right'>
      <div className='item'>
        <div className='img' />
        <div className='textContainer'>
          <div className='category' />
          <div className='title' />
          <div className='price' />
        </div>
      </div>
      <div className='item'>
        <div className='img' />
        <div className='textContainer'>
          <div className='category' />
          <div className='title' />
          <div className='price' />
        </div>
      </div>
      <div className='item'>
        <div className='img' />
        <div className='textContainer'>
          <div className='category' />
          <div className='title' />
          <div className='price' />
        </div>
      </div>
      <div className='item'>
        <div className='img' />
        <div className='textContainer'>
          <div className='category' />
          <div className='title' />
          <div className='price' />
        </div>
      </div>
    </div>
  </StyledSkeleton>
);

export default BestSkeleton;
