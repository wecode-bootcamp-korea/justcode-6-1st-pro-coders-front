import styled from 'styled-components';
import { BiChevronRight } from 'react-icons/bi';

const StyledPage = styled.main`
  padding-top: 250px;

  h2 {
    font-size: 40px;
    font-weight: bolder;
    margin-top: 20px;
  }

  div.container {
    max-width: 1640px;
    width: 100%;
    margin: 0 auto;

    div.step {
      display: flex;
      gap: 10px;

      p {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.disabledTitle};

        &:nth-child(1) {
          color: black;
        }
      }
    }
  }
`;

const Cart = () => {
  return (
    <StyledPage>
      <div className='container'>
        <div className='step'>
          <p>장바구니</p>
          <BiChevronRight />
          <p>주문결제</p>
          <BiChevronRight />
          <p>주문완료</p>
        </div>
        <h2>장바구니</h2>
      </div>
    </StyledPage>
  );
};

export default Cart;
