import styled from 'styled-components';
import theme from '../../styles/theme';
import ItemBox from './ItemBox';
import Nav from '../../components/Nav';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// { font-family: 'Poppins Bold', 'sans-serif'; }
// { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }

// 아이템 헤더 Style
const StyledShopHeader = styled.header`
	.item-header-inner-box {
		width: 1180px;
		height: 100%;
		margin: 0 auto;
		margin-top: 50px;
background: #555;
		.item-breadcrumb {
			font: 14px/1 'apple';
			color: #999;
			margin-bottom: 20px;
			.item-category-home {
				margin-right: 10px;
			}
			.item-main-category {
				margin-right: 10px;
				&::before {
					content: '>';
					margin-right: 10px;
				}
			}
			.item-sub-category {
				margin-right: 10px;
				font-weight: bold;
				color: #000;
				&::before {
					content: '>';
					font-weight: normal;
					color: #999;
					margin-right: 10px;
				}
			}
		}
		.item-sub-title {
			.item-category-title {
				font: bold 40px/1 'apple';
				margin-bottom: 40px;
			}
		}
		.item-shoes-tab {
			width: 100%;
			height: 100%;
			margin-bottom: 100px;
			.item-shoes-link {
				position: relative;
				margin-right: 20px;
				font: bold 26px/1 'apple';
				color: #999;
				transition: 0.5s;
				&:hover {
					color: #000;
					border-bottom: 7px solid #000;
				}
			}
		}
		.item-filter-box {
			display: flex;
			width: 100%;
			font: bold 17px/1 'apple';

			p {
				width: 80%;
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
	}
`;

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
`;



function Item() {
	return (
		<>
		<Nav/>
			<StyledShopHeader>
				<div className='item-header-inner-box'>
					<div className='item-breadcrumb'>
						{' '}
						{/* 제품분류 [HOME > 대분류 > 소분류] */}
						<span className='item-category-home'>HOME</span>
						<span className='item-main-category'>제품대분류</span>
						<span className='item-sub-category'>제품소분류</span>
					</div>
					<div className='item-sub-title'>
						{/* 제품 카테고리 (SHOES MAN WOMAN ..) */}
						<h3 className='item-category-title'>카테고리</h3>
					</div>
					<div className='item-shoes-tab'>
						{/* 카테고리별 이동 링크 */}
						<NavLink className={'item-shoes-link'} to='/all'>
							전체
						</NavLink>
						<NavLink className={'item-shoes-link'} to='/running'>
							런닝화
						</NavLink>
						<NavLink className={'item-shoes-link'} to='/working'>
							{' '}
							{/*  */}
							워킹화
						</NavLink>
						<NavLink className={'item-shoes-link'} to='/sports'>
							{' '}
							{/*  */}
							스포츠화
						</NavLink>
						<NavLink className={'item-shoes-link'} to='/trecking'>
							{' '}
							{/*  */}
							트레킹화
						</NavLink>
						<NavLink className={'item-shoes-link'} to='/snikers'>
							{' '}
							{/*  */}
							스니커즈
						</NavLink>
						<NavLink className={'item-shoes-link'} to='/slipper'>
							샌들/슬리퍼
						</NavLink>
					</div>
					<div className='item-filter-box'>
						<p>
							<span>00</span>개의 상품
						</p>
						<div className='item-filter'>
							<div className='item-filter-serch-box'>
								{/* 필터검색 버튼 */}
								<span>필터검색</span>
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
				</div>
			</StyledShopHeader>

			<StyledItem>
				<div className='itme-box'>
					<div className='item-inner-box'>
						{/* 상품전체박스 */}
			<ItemBox/>
	
					</div>
				</div>
			</StyledItem>
		</>
	);
}

export default Item;
