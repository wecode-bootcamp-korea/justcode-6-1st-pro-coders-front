import styled from 'styled-components';

const StyledSkeleton = styled.div`
  display: flex;

  div.item {
    width: 25%;
    margin-right: 20px;

    &:last-of-type {
      margin-right: 0;
    }

    div.img {
      background-color: #00000050;
      aspect-ratio: 1/1;
    }

    div.category {
      width: 120px;
      height: 20px;
      background-color: #00000050;
      margin-top: 10px;
    }

    div.title {
      width: 150px;
      height: 20px;
      background-color: #00000050;
      margin-top: 10px;
    }

    div.price {
      margin-top: 20px;
      background-color: #00000050;
      width: 100px;
      height: 20px;
    }

    div.coupon {
      margin-top: 10px;
      background-color: #00000050;
      width: 40px;
      height: 20px;
    }
  }
`;

const ShoesSkeleton = () => (
  <StyledSkeleton>
    <div className='item'>
      <div className='img' />
      <div className='category' />
      <div className='title' />
      <div className='price' />
      <div className='coupon' />
    </div>
    <div className='item'>
      <div className='img' />
      <div className='category' />
      <div className='title' />
      <div className='price' />
      <div className='coupon' />
    </div>
    <div className='item'>
      <div className='img' />
      <div className='category' />
      <div className='title' />
      <div className='price' />
      <div className='coupon' />
    </div>
    <div className='item'>
      <div className='img' />
      <div className='category' />
      <div className='title' />
      <div className='price' />
      <div className='coupon' />
    </div>
  </StyledSkeleton>
);

export default ShoesSkeleton;
