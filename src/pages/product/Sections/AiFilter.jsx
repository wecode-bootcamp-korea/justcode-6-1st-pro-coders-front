import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const StyledAiFilter = styled.div`
	.ai-filter-inner-box {
		display: flex;
		flex-direction: column;
		width: 1280px;
		height: 100%;
		margin: 0 auto;
		padding-bottom: 100px;
		.ai-filter-title {
			display: block;
			width: 100%;
			font: bold 35px/1 'apple';
		}
		.color-filter-box {
			width: 100%;
			.filter-check-list {
				display: flex;
				padding: 40px 0px 20px 0px ;
				li {
					margin-right: 15px;
				}
				input[type='checkbox'] {
					display: none;
				}
				input[id='color_all'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: url('https://mbris.loobig.co.kr/Frtb/items/common/images/colorchip_rainbow.png');
					cursor: pointer;
				}
				input[id='color_all']:checked + label {
					position: relative;
					background: url('https://mbris.loobig.co.kr/Frtb/items/common/images/colorchip_rainbow.png');
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 화이트 색상 스타일 */
				input[id='color_white'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					cursor: pointer;
				}
				input[id='color_white']:checked + label {
					position: relative;
					background: #fff;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 오렌지 색상 스타일 */
				input[id='color_orange'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: orange;
					cursor: pointer;
				}
				input[id='color_orange']:checked + label {
					position: relative;
					background: orange;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 베이지 색상 스타일 */
				input[id='color_beige'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: beige;
					cursor: pointer;
				}
				input[id='color_beige']:checked + label {
					position: relative;
					background: beige;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #000;
					}
				}
				/* 골드 색상 스타일 */
				input[id='color_gold'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: yellow;
					cursor: pointer;
				}
				input[id='color_gold']:checked + label {
					position: relative;
					background: yellow;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #000;
					}
				}
				/* 핑크 색상 스타일 */
				input[id='color_pink'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: pink;
					cursor: pointer;
				}
				input[id='color_pink']:checked + label {
					position: relative;
					background: pink;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 레드 색상 스타일 */
				input[id='color_red'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: red;
					cursor: pointer;
				}
				input[id='color_red']:checked + label {
					position: relative;
					background: red;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 브라운 색상 스타일 */
				input[id='color_brown'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: brown;
					cursor: pointer;
				}
				input[id='color_brown']:checked + label {
					position: relative;
					background: brown;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 그레이 색상 스타일 */
				input[id='color_gray'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: gray;
					cursor: pointer;
				}
				input[id='color_gray']:checked + label {
					position: relative;
					background: gray;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 퍼플 색상 스타일 */
				input[id='color_purple'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: purple;
					cursor: pointer;
				}
				input[id='color_purple']:checked + label {
					position: relative;
					background: purple;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 블루 색상 스타일 */
				input[id='color_blue'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: blue;
					cursor: pointer;
				}
				input[id='color_blue']:checked + label {
					position: relative;
					background: blue;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 네이비 색상 스타일 */
				input[id='color_navy'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: navy;
					cursor: pointer;
				}
				input[id='color_navy']:checked + label {
					position: relative;
					background: navy;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
				/* 블랙 색상 스타일 */
				input[id='color_black'] + label {
					display: inline-block;
					width: 30px;
					height: 30px;
					border: 2px solid #ddd;
					background: black;
					cursor: pointer;
				}
				input[id='color_black']:checked + label {
					position: relative;
					background: black;
					&::before {
						position: absolute;
						top: 0;
						left: 0;
						content: '\f00c';
						font-family: FontAwesome;
						font-size: 15px;
						text-align: center;
						color: #fff;
					}
				}
			}
		}
		.ai-filter-item-box {
			.swiper-wrapper {
				position: relative;
				div {
					width: 30px;
				}
				.product-inner-box {
					width: 100%;
					.product-img-box {
						width: 100%;
						height: 100%;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.product-text-box {
						display: flex;
						flex-direction: column;
						justify-content: flex-start;
						width: 100%;
						margin-top: 20px;
						.product-title {
							font: bold 22px/1 'apple';
							margin-bottom: 10px;
						}
						.product-price {
							font: bold 22px/1 'poppins';
							margin-bottom: 30px;
						}
					}
				}
			}
			.swiper-pagination-progressbar-fill {
				position: absolute;

				background-color: #000;
			}
		}
	}
`;

const AiFilter = () => {
	return (
		<StyledAiFilter>
			<div className='ai-filter-inner-box'>
				<span className='ai-filter-title'>AI 추천상품</span>
				<div className='color-filter-box'>
					<div className='filters'>
						<ul className='filter-check-list'>
							{/* 전체 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-all' id='color_all' />
									<label for='color_all'></label>
									<span className='hidden'>전체</span>
								</div>
							</li>
							{/* 화이트 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-white' id='color_white' />
									<label for='color_white'></label>
									<span className='hidden'>화이트</span>
								</div>
							</li>
							{/* 오렌지 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-orange' id='color_orange' />
									<label for='color_orange'></label>
									<span className='hidden'>오렌지</span>
								</div>
							</li>
							{/* 베이지 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-beige' id='color_beige' />
									<label for='color_beige'></label>
									<span className='hidden'>베이지</span>
								</div>
							</li>
							{/* 골드 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-gold' id='color_gold' />
									<label for='color_gold'></label>
									<span className='hidden'>골드</span>
								</div>
							</li>
							{/* 핑크 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-pink' id='color_pink' />
									<label for='color_pink'></label>
									<span className='hidden'>핑크</span>
								</div>
							</li>
							{/* 레드 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-red' id='color_red' />
									<label for='color_red'></label>
									<span className='hidden'>레드</span>
								</div>
							</li>
							{/* 브라운 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-brown' id='color_brown' />
									<label for='color_brown'></label>
									<span className='hidden'>브라운</span>
								</div>
							</li>
							{/* 그레이 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-gray' id='color_gray' />
									<label for='color_gray'></label>
									<span className='hidden'>그레이</span>
								</div>
							</li>
							{/* 퍼플 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-purple' id='color_purple' />
									<label for='color_purple'></label>
									<span className='hidden'>퍼플</span>
								</div>
							</li>
							{/* 블루 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-blue' id='color_blue' />
									<label for='color_blue'></label>
									<span className='hidden'>블루</span>
								</div>
							</li>
							{/* 네이비 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-navy' id='color_navy' />
									<label for='color_navy'></label>
									<span className='hidden'>네이비</span>
								</div>
							</li>
							{/* 블랙 */}
							<li>
								<div className='filter-check-box'>
									<input type='checkbox' name='check_color-black' id='color_black' />
									<label for='color_black'></label>
									<span className='hidden'>블랙</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className='ai-filter-item-box'>
					<Swiper
						pagination={{
							type: 'progressbar',
						}}
						slidesPerView={4}
						spaceBetween={20}
						navigation={false}
						loop={true}
						mousewheel={true}
						modules={[Mousewheel, Pagination]}
						className='mySwiper'>
						<SwiperSlide>
							<div className='product-inner-box'>
								<div className='product-img-box'>
									<img src='https://img.prospecs.com/prod/PW0UW22/PW0UW22S524/PW0UW22S524_01.jpg/dims/resizef/1024x1024/optimize' alt='' />
								</div>
								<div className='product-text-box'>
									<span className='product-title'>리버EX 614</span>
									<span className='product-price'>119,000원</span>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='product-inner-box'>
								<div className='product-img-box'>
									<img src='https://img.prospecs.com/prod/PW0UW22/PW0UW22S524/PW0UW22S524_01.jpg/dims/resizef/1024x1024/optimize' alt='' />
								</div>
								<div className='product-text-box'>
									<span className='product-title'>리버EX 614</span>
									<span className='product-price'>119,000원</span>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='product-inner-box'>
								<div className='product-img-box'>
									<img src='https://img.prospecs.com/prod/PW0UW22/PW0UW22S524/PW0UW22S524_01.jpg/dims/resizef/1024x1024/optimize' alt='' />
								</div>
								<div className='product-text-box'>
									<span className='product-title'>리버EX 614</span>
									<span className='product-price'>119,000원</span>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='product-inner-box'>
								<div className='product-img-box'>
									<img src='https://img.prospecs.com/prod/PW0UW22/PW0UW22S524/PW0UW22S524_01.jpg/dims/resizef/1024x1024/optimize' alt='' />
								</div>
								<div className='product-text-box'>
									<span className='product-title'>리버EX 614</span>
									<span className='product-price'>119,000원</span>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='product-inner-box'>
								<div className='product-img-box'>
									<img src='https://img.prospecs.com/prod/PW0UW22/PW0UW22S524/PW0UW22S524_01.jpg/dims/resizef/1024x1024/optimize' alt='' />
								</div>
								<div className='product-text-box'>
									<span className='product-title'>리버EX 614</span>
									<span className='product-price'>119,000원</span>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</StyledAiFilter>
	);
};

export default AiFilter;
