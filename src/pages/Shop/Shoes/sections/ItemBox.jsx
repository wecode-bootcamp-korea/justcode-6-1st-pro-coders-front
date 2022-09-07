import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function ItemBox({ item }) {
  return (
    <>
      {/* 상품전체박스 */}
      {item && (
        <NavLink to={`/product/${item.id}`} className='itemABox'>
          <div className='itemImg'>
            {/* Hover 전 */}
            <img className='itemMainImg' src={item.main_image} alt='' />
            {/*Hover 후 */}
            <img className='itemHoverImg' src={item.sub_image} alt='' />
          </div>
          {/* 상품 분류, 이름, 가격 */}
          <div className='itemContent'>
            <p className='itemCate'>{item.keyword}</p> {/* 상품분류 [신상/할인 ...] */}
            <p className='itemTitle'>{item.title}</p> {/* 상품이름 */}
            {/* 상품가격박스 */}
            <div className='itemPriceBox'>
              {/* 할인 유/무 여부 */}
              <div>{item.is_discounted === 1 ? <p className='itemPriceSaleOn'>{item.price}원</p> : <p className='itemPriceSaleOff'>{item.price}원</p>}</div>
              {/* 정가 */}
              {item.is_discounted === 1 ? (
                <p className='itemSaleBox'>
                  <span className='itemSalePercent'>{item.discount_percent}%</span> {/* 할인 % */}
                  <span className='itemSalePrice'>{item.discounted_price}원</span> {/* 할인된 가격 */}
                </p>
              ) : null}
            </div>
            {/* 착용가능 성별 및 쿠폰여부 */}
            <div className='itemBadgeBox'>
              <span className='itemGenderBox'>
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
              <span className='itemCouponBox'>{item.coupon === 1 ? <span className='coupon'>쿠폰</span> : null}</span>
            </div>
          </div>
        </NavLink>
      )}
    </>
  );
}
export default ItemBox;
