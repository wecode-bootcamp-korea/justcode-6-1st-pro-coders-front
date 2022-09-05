import { NavLink } from 'react-router-dom';

function ItemBox({ productdata, item, index }) {
	return (
		<>
			{/* 상품전체박스 */}
			{productdata && (
				<NavLink to={`/product/${item.id -1}`} className='item-a-box'>
					<div className='item-img'>
						{/* Hover 전 */}
						<img className='item-main-img' src={productdata.data[index].main_image} alt='' />
						{/*Hover 후 */}
						<img className='item-hover-img' src={productdata.data[index].sub_image} alt='' />
					</div>
					{/* 상품 분류, 이름, 가격 */}
					<div className='item-content'>
						<p className='item-cate'>{productdata.data[index].keyword}</p> {/* 상품분류 [신상/할인 ...] */}
						<p className='item-title'>{productdata.data[index].title}</p> {/* 상품이름 */}
						{/* 상품가격박스 */}
						<div className='item-price-box'>
							{/* 할인 유/무 여부 */}
							<div>
								{productdata.data[index].is_discounted === 1 ? (
									<p className='item-price-sale-on'>{productdata.data[index].price}원</p>
								) : (
									<p className='item-price-sale-off'>{productdata.data[index].price}원</p>
								)}
							</div>
							{/* 정가 */}
							{productdata.data[index].is_discounted === 1 ? (
								<p className='item-sale-box'>
									<span className='item-sale-percent'>{productdata.data[index].discount_percent}%</span> {/* 할인 % */}
									<span className='item-sale-price'>{productdata.data[index].discounted_price}원</span> {/* 할인된 가격 */}
								</p>
							) : null}
						</div>
						{/* 착용가능 성별 및 쿠폰여부 */}
						<div className='item-badge-box'>
							<span className='item-gender-box'>
								{productdata.data[index].gender === 'UNISEX' ? (
									<>
										<span className='male'>남</span>
										<span className='female'>여</span>
									</>
								) : productdata.data[index].gender === 'MALE' ? (
									<span className='male'>남</span>
								) : (
									<span className='female'>여</span>
								)}
							</span>
							<span className='item-coupon-box'>{productdata.data[index].coupon === 1 ? <span className='coupon'>쿠폰</span> : null}</span>
						</div>
					</div>
				</NavLink>
			)}
		</>
	);
}

export default ItemBox;
