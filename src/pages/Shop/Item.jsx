import styled from 'styled-components';
import theme from '../../styles/theme';
import ItemBox from './ItemBox';
import Nav from '../../components/Nav';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShopHeader from './ShopHeader';
// { font-family: 'Poppins Bold', 'sans-serif'; }
// { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }



// 아이템 박스 Style
const StyledItem = styled.div`
	.item-inner-box {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		margin: 0 auto;
		.item-a-box {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			width: 280px;
			height: 100%;
			margin-right: 20px;
			&:nth-of-type(4) {
				margin-right: 0;
			}
			.item-img {
				position: relative;
				width: 100%;
				height: 100%;
				opacity: 1;

				&:hover .item-main-img {
					opacity: 0;
					transition: 1s;
				}
				&:hover .item-hover-img {
					opacity: 1;
					transition: 1s;
				}

				.item-main-img {
					width: 100%;
					height: 100%;
					position: absolute;
					right: 0px;
					opacity: 1;
					transition: 1s;
				}
				.item-hover-img {
					width: 100%;
					height: 100%;
					opacity: 0;
					transition: 1s;
				}
			}
			.item-content {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: flex-start;
				width: 100%;
				height: 100%;
				padding-left: 10px;
				color: #000;

				.item-cate {
					margin-top: 15px;
					margin-bottom: 10px;
					font: bold 18px/1 'Spoqa Han Sans Neo', 'sans-serif';
				}
				.item-title {
					margin-bottom: 20px;
					font: 20px/1 'Spoqa Han Sans Neo', 'sans-serif';
				}
				.item-price-box {
					.item-price-sale-off {
						margin-bottom: 10px;
						font: bold 22px/1 'Poppins Bold', 'sans-serif';
					}
					.item-price-sale-on {
						margin-bottom: 10px;
						font: 15px/1 'Spoqa Han Sans Neo', 'sans-serif';
						text-decoration: line-through;
						color: #ccc;
					}
					.item-sale-box {
						margin-bottom: 10px;
						.item-sale-percent {
							font: bold 22px/1 'Poppins Bold', 'sans-serif';
							color: #ff0052;
						}
						.item-sale-price {
							font: bold 22px/1 'Poppins Bold', 'sans-serif';
						}
					}
				}
				.item-badge-box {
					margin-bottom: 15px;
					.item-gender-box {
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
					.item-coupon-box {
						.coupon {
							display: inline-block;
							width: 40px;
							height: 20px;
							padding: 2px;
							line-height: 14px;
							text-align: center;
							font-weight: bold;
							border: 2px solid #000;
						}
					}
				}
			}
		}
	}
	.item-more-btn-box{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 100px;
		.item-more-btn{
			width: 260px;
			height: 60px;
			background: #fff;
			border: 2px solid #000;
			font: bold 18px/60px 'apple';
			cursor: pointer;
		}

	}
`;

function Item() {
	const [shoes, setShoes] = useState();
	const [mainCategory, setMainCategory] = useState('대분류');
	const [subCategory, setSubCategory] = useState('소분류');
	const [product, setProduct] = useState('상품종류');

	useEffect(() => {
		fetch('/data/shoesData.json')
			.then((res) => res.json())
			.then((res) => {
				setShoes(res);
			});
	}, []);

	return (
		<>
		<ShopHeader />

			<StyledItem>
				<div className='itme-box'>
					<div className='item-inner-box'>
						{/* 상품전체박스 */}
						{shoes &&
							shoes.data.map((item, index) => {
								return <ItemBox shoes={shoes} item={item} index={index} />;
							})}
						<ItemBox />
					</div>
					<div className='item-more-btn-box'>
						<button className='item-more-btn'>더보기</button>
						</div>
				</div>
			</StyledItem>
		</>
	);
}

export default Item;
