import { Link } from 'react-router-dom';

function ItemBox({ item }) {
  return (
    <>
      {/* 상품전체박스 */}
      {item && (
        <Link to={`/product/${item.id - 1}`} className='item-a-box'>
          <div className='item-img'>
            {/* Hover 전 */}
            <img className='item-main-img' src={item.main_image} alt='' />
            {/*Hover 후 */}
            <img className='item-hover-img' src={item.sub_image} alt='' />
          </div>
          {/* 상품 분류, 이름, 가격 */}
          <div className='item-content'>
            <p className='item-cate'>{item.keyword}</p> {/* 상품분류 [신상/할인 ...] */}
            <p className='item-title'>{item.title}</p> {/* 상품이름 */}
            {/* 상품가격박스 */}
            <div className='item-price-box'>
              {/* 할인 유/무 여부 */}
              <div>{item.is_discounted === 1 ? <p className='item-price-sale-on'>{item.price}원</p> : <p className='item-price-sale-off'>{item.price}원</p>}</div>
              {/* 정가 */}
              {item.is_discounted === 1 ? (
                <p className='item-sale-box'>
                  <span className='item-sale-percent'>{item.discount_percent}%</span> {/* 할인 % */}
                  <span className='item-sale-price'>{item.discounted_price}원</span> {/* 할인된 가격 */}
                </p>
              ) : null}
            </div>
            {/* 착용가능 성별 및 쿠폰여부 */}
            <div className='item-badge-box'>
              <span className='item-gender-box'>
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
              <span className='item-coupon-box'>{item.coupon === 1 ? <span className='coupon'>쿠폰</span> : null}</span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default ItemBox;
