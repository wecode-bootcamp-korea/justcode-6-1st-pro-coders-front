import { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
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
			display: flex;
			width: 100%;
			height: 100%;
			margin-bottom: 100px;
			.item-shoes-link {
				position: relative;
				margin-right: 20px;
				font: bold 26px/1 'Spoqa Han Sans Neo', 'sans-serif';
				color: #999;
				transition: 0.5s;
				list-style: none;
				&::after {
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
				&:hover {
					color: #000;
					::after {
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
		.item-shoes-li {
			width: 100%;
			height: 100%;
			margin-bottom: 100px;
			.item-shoes-link {
				position: relative;
				margin-right: 20px;
				font: bold 26px/1 'Spoqa Han Sans Neo', 'sans-serif';
				color: #000;
				transition: 0.5s;
				&::after {
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
				&:hover {
					color: #000;
					::after {
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
	const [shoes, setShoes] = useState('');
	const [shoesCategory,setShoesCategory] = useState('');
	const params = new URLSearchParams(location.search)
	let category = params.get("category")




	useEffect(() => {
		    // fetch('http://localhost:8000/products?type=SHOES')
		fetch('/data/product.json')
			.then((res) => res.json())
			.then((res) => {
				setShoes(res);
			});
	}, []);


	// 제품데이터에서 카테고리 별로 배열 만드는 함수
		const filterItem=(categItem)=>{
			const updatedItems = shoes.filter((itemCategory) => {
				return itemCategory.category === categItem;
			});
			setShoesCategory(updatedItems)
		}
		console.log(shoesCategory);




	return (
		<StyledShopHeader>
			<>
				{shoes && (
					<div className='item-header-inner-box'>
						<div className='item-breadcrumb'>
							{/* 제품분류 [HOME > 대분류 > 소분류] */}
							<span className='item-category-home'>HOME</span>
							<span className='item-main-category'>SHOES</span>
							<span className='item-sub-category'>{category}</span>
						</div>
						<div className='item-sub-title'>
							{/* 제품 카테고리 (SHOES MAN WOMAN ..) */}
							<h3 className='item-category-title'>{category}</h3>
						</div>
						<div className='item-shoes-tab'>
							{/* 카테고리별 이동 링크 */}	
<button className='categoryBtn btn-warning' ><Link to="/shop/shoes/전체" onClick={()=>{filterItem('')}}>전체</Link></button>
<button className='categoryBtn btn-warning' onClick={()=>{filterItem('러닝화')}}><Link to="/shop/shoes/러닝화">러닝화</Link></button>
<button className='categoryBtn btn-warning' onClick={()=>{filterItem('워킹화')}}><Link to="/shop/shoes/워킹화">워킹화</Link></button>
<button className='categoryBtn btn-warning' onClick={()=>{filterItem('트레킹화')}}><Link to="/shop/shoes/트레킹화">트레킹화</Link></button>
<button className='categoryBtn btn-warning' onClick={()=>{filterItem('스니커즈')}}><Link to="/shop/shoes/스니커즈">스니커즈</Link></button>
<button className='categoryBtn btn-warning' onClick={()=>{filterItem('샌들/슬리퍼')}}><Link to="/shop/shoes/샌들">샌들/슬리퍼</Link></button>
<button className='categoryBtn btn-warning' onClick={()=>{filterItem('아동화')}}><Link to="/shop/shoes/아동화">아동화</Link></button>
<button className='categoryBtn btn-warning' onClick={()=>{filterItem('기타')}}><Link to="/shop/shoes/기타">기타</Link></button>

			
						</div>
					</div>
				)}
			</>
		</StyledShopHeader>
	);
};

export default ShopHeader;
