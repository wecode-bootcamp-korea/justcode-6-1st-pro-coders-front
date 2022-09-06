import styled from 'styled-components';

const StyledSkeleton = styled.section`
  padding-top: 200px;
  margin-bottom: 200px;

  div.container {
    display: flex;
    flex-direction: row;

    div.left {
      width: 50%;

      div.img {
        height: 640px;
        background-color: #00000050;
      }

      div.subImg {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        div.small {
          width: 150px;
          height: 150px;
          background-color: #00000050;
        }
      }
    }

    div.right {
      width: 50%;
      padding: 30px 60px;

      div.category {
        width: 100px;
        height: 20px;
        background-color: #00000050;
      }

      div.title {
        margin-top: 20px;
        width: 200px;
        height: 30px;
        background-color: #00000050;
      }

      div.price {
        margin-top: 60px;
        width: 140px;
        height: 30px;
        background-color: #00000050;
      }

      div.info {
        margin-top: 60px;
        margin-bottom: 100px;
        width: 100%;
        height: 20px;
        background-color: #00000050;
      }

      div.subImg {
        display: flex;
        margin-top: 100px;
        gap: 10px;

        div.img {
          width: 100px;
          height: 100px;
          background-color: #00000050;
        }
      }

      div.size {
        margin-top: 60px;
        margin-bottom: 50px;
        width: 100%;
        height: 30px;
        background-color: #00000050;
      }

      div.btnContainer {
        display: flex;
        gap: 20px;

        div.btn {
          margin-top: 0;
          width: 50%;
          border-radius: 0;
          height: 70px;
          background-color: #00000050;
        }
      }

      div.btn {
        margin-top: 30px;
        width: 100%;
        height: 70px;
        background-color: #00000050;
        border-radius: 0;
      }
    }
  }
`;

const ProductSkeleton = () => (
  <StyledSkeleton>
    <div className='container'>
      <div className='left'>
        <div className='img' />
        <div className='subImg'>
          <div className='small' />
          <div className='small' />
          <div className='small' />
          <div className='small' />
        </div>
      </div>
      <div className='right'>
        <div className='category' />
        <div className='title' />
        <div className='price' />
        <div className='info' />
        <div className='title' />
        <div className='title' />
        <div className='subImg'>
          <div className='img' />
          <div className='img' />
        </div>
        <div className='size' />
        <div className='btnContainer'>
          <div className='btn' />
          <div className='btn' />
        </div>
        <div className='btn' />
        <div className='btn' />
      </div>
    </div>
  </StyledSkeleton>
);

export default ProductSkeleton;
