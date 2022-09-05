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

const ShopHeader = (loaction) => {
	const [shoes, setShoes] = useState(null);
	const [active, setActive] = useState(false);
	const [categoryMenu, setCategorymenu] = useState([
		{
			id: 1,
			text: '전체',
			selected: true,
		},
		{
			id: 2,
			text: '런닝화',
			selected: false,
		},
		{
			id: 3,
			text: '워킹화',
			selected: false,
		},
		{
			id: 4,
			text: '스포츠화',
			selected: false,
		},
		{
			id: 5,
			text: '트레킹화',
			selected: false,
		},
		{
			id: 6,
			text: '스니커즈',
			selected: false,
		},
		{
			id: 7,
			text: '샌들슬리퍼',
			selected: false,
		},
		{
			id: 8,
			text: '기타',
			selected: false,
		},
	]);
	const params = new URLSearchParams(location.search)
	let category = params.get("category")
	const filterResult =(catItem)=>{
		const result = categoryMenu.filter((curData)=>{
			return curData.text === catItem;
		});
		setCategorymenu()
	}



	useEffect(() => {
		fetch('/data/product.json')
			.then((res) => res.json())
			.then((res) => {
				setShoes(res);
			});
	}, []);

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

			
		
						</div>
					</div>
				)}
			</>
		</StyledShopHeader>
	);
};

export default ShopHeader;
