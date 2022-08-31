import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledShopHeader = styled.div`
	.item-header-inner-box {
		width: 1180px;
		height: 100%;
		margin: 0 auto;
		margin-top: 50px;
		padding-top: 150px;
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
				&::after{
					
				}
				&:hover {
					color: #000;
	
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

const ShopHeader = () => {
	const [mainCategory, setMainCategory] = useState('대분류');
	const [subCategory, setSubCategory] = useState('소분류');
	const [product, setProduct] = useState('');


	
	return (
		<StyledShopHeader>
		<div className='item-header-inner-box'>
			<div className='item-breadcrumb'>
				{' '}
				{/* 제품분류 [HOME > 대분류 > 소분류] */}
				<span className='item-category-home'>HOME</span>
				<span className='item-main-category'>{mainCategory}</span>
				<span className='item-sub-category'>{subCategory}</span>
			</div>
			<div className='item-sub-title'>
				{/* 제품 카테고리 (SHOES MAN WOMAN ..) */}
				<h3 className='item-category-title'>{subCategory}</h3>
			</div>
			<div className='item-shoes-tab'>
				{/* 카테고리별 이동 링크 */}
				<NavLink className={'item-shoes-link'} to='/shop/shoes/all' > 
			전체
				</NavLink>
				<NavLink className={'item-shoes-link'} to='/shop/shoes/running'>
					런닝화
				</NavLink>
				<NavLink className={'item-shoes-link'} to='/shop/shoes/working'>
					워킹화
				</NavLink>
				<NavLink className={'item-shoes-link'} to='/shop/shoes/sport'>
					스포츠화
				</NavLink>
				<NavLink className={'item-shoes-link'} to='/shop/shoes/trekking'>
					트레킹화
				</NavLink>
				<NavLink className={'item-shoes-link'} to='/shop/shoes/snikers'>
					스니커즈
				</NavLink>
				<NavLink className={'item-shoes-link'} to='/shop/shoes/slipper'>
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
	);
};

export default ShopHeader;
