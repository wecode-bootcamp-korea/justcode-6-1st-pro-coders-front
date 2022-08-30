import styled from 'styled-components';
import theme from '../../styles/theme';
import { useEffect, useState } from 'react';

function ItemBox() {
	
	const [itemImg, setItemImg] = useState('https://img.prospecs.com/prod/PR0UR22/PR0UR22S553/PR0UR22S553_02.jpg/dims/resizef/530x530/optimize');
	const [itemHoverImg, setItemHoverImg] = useState('https://img.prospecs.com/prod/PR0UR22/PR0UR22S553/PR0UR22S553_01.jpg/dims/resizef/530x530/optimize');
	const [itemCate, setItemCate] = useState(['[2022 S/S 신상]', '시즌OFF', '신학기']);
	const [itmeTitle, setItemTitle] = useState('상품명');
	const [itemPrice, setItemPrice] = useState('00,000원');
	const [itemSale, setItemSale] = useState('0%');
	const [itemSalePrice, setItemSalePrice] = useState('00,000원');
	const [shoes, setShoes] = useState();
	useEffect(() => {
	fetch('/data/shoesData.json')
	.then((res) => res.json())
			.then((res) => {
				setShoes(res)
			});
		}, []);
    
		

	return (
		<>
			{/* 상품전체박스 */}
			{shoes && (<a href='' className='item-a-box'>
				<div className='item-img'>
					{/* Hover 전 */}
					<img className='item-main-img' src={shoes.data[0].img} alt='' />
					{/*Hover 후 */}
					<img className='item-hover-img' src={shoes.data[0].hoverimg} alt='' />
				</div>
				{/* 상품 분류, 이름, 가격 */}
				<div className='item-content'>
					<p className='item-cate'>{shoes.data[0].cate}</p> {/* 상품분류 [신상/할인 ...] */}
					
					<p className='item-title'>{shoes.data[0].name}</p> {/* 상품이름 */}
					<div className='item-price-box'>
						{/* 상품가격박스 */}
						<p className='item-price-sale-on'>{shoes.data[0].price}</p> {/* 정가 */}
						<p className='item-sale-box'>
							<span className='item-sale-percent'>{shoes.data[0].salePercent}</span> {/* 할인 % */}
							<span className='item-sale-price'>{shoes.data[0].salePrice}</span> {/* 할인된 가격 */}
						</p>
					</div>
					{/* 착용가능 성별 및 쿠폰여부 */}
					<div className='item-badge-box'>
						<span className='item-gender-box'>
							<span className='male'>남</span>
							<span className='female'>여</span>
						</span>
						<span className='item-coupon-box'>
							<span className='coupon'>쿠폰</span>
						</span>
					</div>
				</div>
			</a>)}
		</>
	);
}

export default ItemBox;
