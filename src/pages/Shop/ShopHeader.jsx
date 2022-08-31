import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledShopHeader = styled.div`
	.item-header-inner-box {
		width: 1180px;
		height: 100%;
		margin: 0 auto;
		margin-top: 50px;
		padding-top: 200px;
		.item-breadcrumb {
			font: 14px/1 'Spoqa Han Sans Neo', 'sans-serif';
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
				font: bold 40px/1 'Spoqa Han Sans Neo', 'sans-serif';
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
				font: bold 26px/1 'Spoqa Han Sans Neo', 'sans-serif';
				color: #999;
				transition: 0.5s;
				&::after{
					content: ' ';
					position: absolute;
					top: 20px;
					left: 0;
					display: inline-block;
					width: 0%;
					height: 7.5px;
					margin-top: 15px;
					transition: 0.5s;
					background: #000;
				}
				&:hover{ ::after {
					content: ' ';
					content: ' ';
					position: absolute;
					top: 20px;
					left: 0;
					display: inline-block;
					width: 100%;
					height: 7.5px;
					margin-top: 15px;
					transition: 0.5s;
					background: #000;
				}
				}
			}
		}
		.item-filter-box {
			display: flex;
			width: 100%;
			font: bold 17px/1 'Spoqa Han Sans Neo', 'sans-serif';

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
	const [shoes, setShoes] = useState(null);
	const [mainCategory, setMainCategory] = useState('대분류');
	const [subCategory, setSubCategory] = useState('소분류');
	const [product, setProduct] = useState('');

	useEffect(()=>{
		fetch('/data/shoesData.json')
		.then((res)=>res.json())
		.then((res)=>{
			setShoes(res)
		})
	}, [])




	
	return (
		<StyledShopHeader>
	<>
	{shoes && (
		<div className='item-header-inner-box'>
			<div className='item-breadcrumb'>
				{/* 제품분류 [HOME > 대분류 > 소분류] */}
				<span className='item-category-home'>HOME</span>
				<span className='item-main-category'>{shoes.data[0].maincategory}</span>
				<span className='item-sub-category'>{shoes.data[0].subcategory}</span>
			</div>
			<div className='item-sub-title'>
				{/* 제품 카테고리 (SHOES MAN WOMAN ..) */}
				<h3 className='item-category-title'>{shoes.data[0].subcategory}</h3>
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

		</div>)}
		</>
	</StyledShopHeader>
	);
};

export default ShopHeader;
