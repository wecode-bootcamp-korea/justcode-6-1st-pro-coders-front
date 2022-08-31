import styled from 'styled-components';
import theme from '../../styles/theme';
import { useEffect, useState } from 'react';

function ItemBox({ shoes, item, index }) {

	return (
		<>
			{/* 상품전체박스 */}
			{shoes && (
				<a href='' className='item-a-box'>
					<div className='item-img'>
						{/* Hover 전 */}
						<img className='item-main-img' src={shoes.data[index].img} alt='' />
						{/*Hover 후 */}
						<img className='item-hover-img' src={shoes.data[index].hoverimg} alt='' />
					</div>
					{/* 상품 분류, 이름, 가격 */}
					<div className='item-content'>
						<p className='item-cate'>{shoes.data[index].cate}</p> {/* 상품분류 [신상/할인 ...] */}
						<p className='item-title'>{shoes.data[index].name}</p> {/* 상품이름 */}
						{/* 상품가격박스 */}
						<div className='item-price-box'>
							{/* 할인 유/무 여부 */}
							<div>
								{shoes.data[index].sale === true ? (
									<p className='item-price-sale-on'>{shoes.data[index].price}</p>
								) : (
									<p className='item-price-sale-off'>{shoes.data[index].price}</p>
								)}
							</div>
							{/* 정가 */}
							<p className='item-sale-box'>
								<span className='item-sale-percent'>{shoes.data[index].salePercent}</span> {/* 할인 % */}
								<span className='item-sale-price'>{shoes.data[index].salePrice}</span> {/* 할인된 가격 */}
							</p>
						</div>
						{/* 착용가능 성별 및 쿠폰여부 */}
						<div className='item-badge-box'>
							<span className='item-gender-box'>
								{(shoes.data[index].gender === "unisex") ? <><span className='male'>남</span>
								<span className='female'>여</span></> : (shoes.data[index].gender === "male") ? <span className='male'>남</span> : <span className='female'>여</span> }

							</span>
							<span className='item-coupon-box'>
								{shoes.data[index].coupon === true ? <span className='coupon'>쿠폰</span> : null}
							</span>
						</div>
					</div>
				</a>
				
			)}
		</>
	);
}

export default ItemBox;
