import styled from 'styled-components';
import ItemBox from './ItemBox';
import { useEffect, useState } from 'react';
import FilterModal from './FilterModal';

// { font-family: 'Poppins Bold', 'sans-serif'; }
// { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }

// 아이템 박스 Style
const StyledItem = styled.div`
	.itme-box {
		width: 1180px;
		margin: 0 auto;
		.item-filter-box {
			display: flex;
			width: 100%;
			margin: 0 auto;
			margin-bottom: 20px;
			font: bold 17px/1 'Spoqa Han Sans Neo', 'sans-serif';

			p {
				width: 87%;
			}
			.item-filter {
				display: flex;

				.item-filter-serch-box {
					span {
						margin-right: 10px;
					}
				}
				.item-sort-list-box {
					position: relative;
					#sort-list {
						position: absolute;
						bottom: 0.5px;

						option {
						}
					}
				}
			}
		}
		.item-inner-box {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			width: 1180px;
			margin: 0 auto;
			.item-a-box {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 280px;
				height: 100%;
				margin-right: 20px;
				&:nth-of-type(4n) {
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
						font: bold 18px/1 'Poppins';
					}
					.item-title {
						margin-bottom: 20px;
						font: 20px/1 'Poppins';
					}
					.item-price-box {
						.item-price-sale-off {
							margin-bottom: 10px;
							font: bold 22px/1 'Poppins';
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
								font: bold 22px/1 'Poppins';
								color: #ff0052;
							}
							.item-sale-price {
								font: bold 22px/1 'Poppins';
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
		.item-more-btn-box {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			padding: 100px;
			.item-more-btn {
				width: 260px;
				height: 60px;
				background: #fff;
				border: 2px solid #000;
				font: bold 18px/60px 'apple';
				cursor: pointer;
			}
		}
	}
`;

function Item() {
	const [shoes, setShoes] = useState(null);
	const [productdata, setProductData] = useState(null);
	const [mainCategory, setMainCategory] = useState('대분류');
	const [subCategory, setSubCategory] = useState('소분류');
	const [product, setProduct] = useState('상품종류');
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
	  fetch('/data/shoesData.json')
	    .then(res => res.json())
	    .then(res => {
	      setShoes(res);
	    });
	}, []);

	useEffect(() => {
		fetch('/data/product.json')
			.then((res) => res.json())
			.then((data) => {
				setProductData(data);
			});
	}, []);
	
	

	return (
		<>
			<StyledItem>
				<div className='itme-box'>
					<div className='item-filter-box'>
						{shoes && (
							<p>
								<span>{Object.keys(shoes.data).length}</span>개의 상품
							</p>
						)}
						<div className='item-filter'>
							<div className='item-filter-serch-box'>
								{/* 필터검색 버튼 */}
								<span
									onClick={() => {
										setToggle(true);
									}}>
									필터검색
								</span>
							</div>
							<div className='item-sort-list-box'>
								{/* 아이템정렬 버튼 */}
								<select name='sort-list' id='sort-list'>
									<option value='recent'>최근등록순</option>
									<option value='sale'>판매순</option>
									<option value='popularity'>인기순</option>
									<option value='high-price'>높은가격순</option>
									<option value='low-price'>낮은가격순</option>
								</select>
							</div>
						</div>
					</div>
					{toggle === true ? <FilterModal toggle={toggle} setToggle={setToggle} /> : null}
					<div className='item-inner-box'>
						{/* 상품전체박스 */}
						{productdata &&
							productdata.data.map((item, index) => {
								return <ItemBox productdata={productdata} item={item} index={index} />;
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
