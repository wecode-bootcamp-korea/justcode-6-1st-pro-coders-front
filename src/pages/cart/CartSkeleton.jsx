import styled from 'styled-components';

const StyledSkeleton = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    border-top: 1px solid ${({ theme }) => theme.colors.disalbedTitle};
    padding: 30px 0;
    height: 109px;

    &:last-of-type {
      border-bottom: 1px solid ${({ theme }) => theme.colors.disalbedTitle};
    }
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;

    &.checkbox {
      width: 10%;

      div.box {
        width: 20px;
        height: 20px;
        background-color: #00000050;
      }
    }

    &.content {
      width: 55%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 14px;

      div {
        width: 200px;
        background-color: #00000050;
        height: 20px;

        &:last-of-type {
          width: 180px;
        }
      }
    }

    &.info {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15%;

      div.text {
        width: 40px;
        height: 20px;
        background-color: #00000050;
      }
    }

    &.remove {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;

      div.text {
        width: 40px;
        height: 20px;
        background-color: #00000050;
      }
    }
  }
`;

const CartSkeleton = () => (
  <StyledSkeleton>
    <div>
      <div className='checkbox'>
        <div className='box' />
      </div>
      <div className='content'>
        <div className='title' />
        <div className='option' />
      </div>
      <div className='info'>
        <div className='text' />
      </div>
      <div className='remove'>
        <div className='text' />
      </div>
    </div>
    <div>
      <div className='checkbox'>
        <div className='box' />
      </div>
      <div className='content'>
        <div className='title' />
        <div className='option' />
      </div>
      <div className='info'>
        <div className='text' />
      </div>
      <div className='remove'>
        <div className='text' />
      </div>
    </div>
  </StyledSkeleton>
);

export default CartSkeleton;
