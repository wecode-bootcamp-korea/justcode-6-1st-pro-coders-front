import styled from 'styled-components';

const StyledItem = styled.li`
  width: calc(${({ length }) => (length > 5 ? '20%' * length : '20%')});
  padding: 20px;
  cursor: pointer;

  div.imgContainer {
    display: flex;
    align-items: center;
    height: 280px;

    img {
      width: 100%;
      aspect-ratio: 1 / 1;
      -webkit-user-drag: none;
    }
  }

  p.strong {
    font-weight: 900;
    font-size: 18px;
    margin-top: 10px;
  }

  h4 {
    font-weight: 700;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  p.price {
    font-weight: 900;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.disabledTitle};
    margin-bottom: 10px;
    text-decoration: line-through;
  }

  p.realPrice {
    font-weight: 900;
    font-size: 20px;

    span.red {
      color: ${({ theme }) => theme.colors.textHover};
    }
  }

  div.gender {
    display: flex;
    margin-top: 10px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 900;
      color: white;
      width: 24px;
      height: 24px;

      &.male {
        background-color: black;
      }

      &.female {
        background-color: ${({ theme }) => theme.colors.textHover};
      }
    }
  }
`;

const Item = ({ item: { name, cate, price, salePercent, salePrice, sale, img, gender }, length }) => {
  return (
    <StyledItem length={length}>
      <div className='imgContainer'>
        <img src={img} alt='' />
      </div>
      <p className='strong'>{cate}</p>
      <h4>{name}</h4>
      {sale ? (
        <>
          <p className='price'>{price}</p>
          <p className='realPrice'>
            <span className='red'>{salePercent}</span> {salePrice}
          </p>
        </>
      ) : (
        <p className='realPrice'>{price}</p>
      )}
      <div className='gender'>
        {gender[0] === 'm' && <span className='male'>남</span>}
        {gender[0] === 'f' && <span className='female'>여</span>}
        {gender[0] === 'u' && (
          <>
            <span className='male'>남</span>
            <span className='female'>여</span>
          </>
        )}
      </div>
    </StyledItem>
  );
};

export default Item;
