import styled from 'styled-components';

const StyledmdPick = styled.div`
  .nomination-inner-box {
    position: relative;
    display: block;
    width: 100%;
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, #ffffff00 60%, #000);
      opacity: 0.9;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .nomination-md-pick-box {
      position: absolute;
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .nomination-item-content-box {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
    height: 100%;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 20px;
    .badge {
      margin-bottom: 15px;
      .gender {
        margin-right: 20px;
        .male {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: #000;
          line-height: 20px;
          text-align: center;
          color: #fff;
        }
        .female {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: #ff0052;
          line-height: 20px;
          text-align: center;
          color: #fff;
        }
      }
    }
    .nomination-item-title-box {
      .nomination-item-title {
        display: block;
        font: 22px/1 'Poppins';
        margin-bottom: 20px;
        color: #fff;
      }
    }
    .nomination-item-price-box {
      .nomination-item-price-sale-off {
        display: block;
        margin-bottom: 10px;
        font: bold 22px/1 'Poppins';
        color: #fff;
      }
      .nomination-item-price-sale-on {
        display: block;
        margin-bottom: 10px;
        font: 15px/1 'Spoqa Han Sans Neo', 'sans-serif';
        text-decoration: line-through;
        color: #ccc;
      }
      .nomination-item-sale-price {
        margin-right: 100px;
        font: bold 22px/1 'Poppins Bold', 'sans-serif';
        color: #fff;
      }
      .nomination-item-sale-percent {
        font: bold 22px/1 'Poppins';
        color: #fff;
      }
    }
  }
`;

function MdPick({ item }) {
  return (
    <StyledmdPick>
      <a href='#' className='nomination-inner-box'>
        <div className='nomination-md-pick-box'>
          <img
            src='https://image.prospecs.com/files/upload/display/mdspick/best_badge.png/dims/optimize'
            alt=''
          />
        </div>
        <div className='nomination-img-box'>
          <img src={item.cover_image} alt='' />
        </div>
        <div className='nomination-item-content-box'>
          <div className='badge'>
            <span className='gender'>
              {/* 조건부 랜더링 : gender가 unisex면 남여 둘다 출력하고 male이면 남 을 출력해라 그것도 아니면 여를 출력해라 */}
              {item.gender === 'UNISEX' ? (
                <>
                  <span className='male'>남</span>
                  <span className='female'>여</span>
                </>
              ) : item.gender === 'MALE' ? (
                <span className='male'>남</span>
              ) : (
                <span className='female'>여</span>
              )}
            </span>
          </div>
          <div className='nomination-item-title-box'>
            <span className='nomination-item-title'>{item.title}</span>
          </div>
          <div className='nomination-item-price-box'>
            {/* 조건부 랜더링 : sale이 false면 정상가 만 출력하고 true면 정상가에 줄을 귿고 할인가와 할인율을 보여주는 조건 */}
            {item.is_discounted === 0 ? (
              <>
                <span className='nomination-item-price-sale-off'>
                  {item.price}원
                </span>
              </>
            ) : (
              <>
                <span className='nomination-item-price-sale-on'>
                  {item.price}원
                </span>
                <span className='nomination-item-sale-price'>
                  {item.discounted_price}원
                </span>
                <span className='nomination-item-sale-percent'>
                  {item.discount_percent}%
                </span>
              </>
            )}
          </div>
        </div>
      </a>
    </StyledmdPick>
  );
}

export default MdPick;
