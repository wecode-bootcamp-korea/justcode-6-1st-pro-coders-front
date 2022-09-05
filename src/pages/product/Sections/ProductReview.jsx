import styled from 'styled-components';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import ProgressBar from 'react-bootstrap/ProgressBar';

const StyledProductReview = styled.div`
	.product-review-inner {
		width: 100%;
		height: 100%;
		padding: 100px 0px;
		/* 포토 리뷰 사진 */
		.review-photo-inner {
			width: 1280px;
			height: 100%;
			margin: 0 auto;
			text-align: center;
			border: 1px solid #999;
			.review-photo-title {
				span {
					display: block;
					font-weight: bold;
					padding: 10px 0px;
				}
			}
			.review-photo-box {
				display: flex;
				justify-content: space-around;
				width: 100%;
				padding: 0px 50px 10px 50px;
				.review-photo {
					width: 90px;
					height: 90px;
					background-color: #ddd;
				}
			}
		}
		/* 리뷰 콘텐츠 박스 */
		.review-content-inner {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			width: 1280px;
			margin: 0 auto;
			padding-top: 50px;
			.review-content-header {
				position: relative;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				height: 50px;
				padding: 0px 50px;
				margin-bottom: 50px;
				&::after {
					position: absolute;
					top: 100%;
					left: 40px;
					content: '';
					width: 95%;
					height: 3px;
					background: #000;
				}
				span {
					&:nth-of-type(1) {
						font: 20px/1 'apple';
						strong {
							font-weight: bold;
						}
					}
					&:nth-of-type(2) {
						color: #999;
					}
				}
			}
			.review-content-main {
				width: 100%;

				.review-summary {
					position: relative;
					display: flex;
					width: 100%;
					padding-bottom: 50px;
					&::after {
						position: absolute;
						top: 100%;
						left: 40px;
						content: '';
						width: 95%;
						height: 2px;
						background: #ddd;
					}
					.review-summary-write {
						position: relative;
						display: flex;
						justify-content: center;
						align-items: center;
						width: 30%;
						&::after {
							position: absolute;
							left: 100%;
							top: 0;
							content: '';
							width: 1px;
							height: 100%;
							background-color: #ddd;
						}
						.score-box {
							display: flex;
							justify-content: center;
							align-items: center;
							width: 100%;
							padding: 20px;
							svg {
								width: 50px;
								height: 50px;
								color: #ff0053;
							}
							.average-score {
								font: bold 40px/1 'apple';
							}
						}
						.review-write-btn {
							display: flex;
							justify-content: center;
							align-items: center;
							width: 150px;
							height: 30px;
							padding: 20px;
							border-radius: 5px;
							background: #222;
							color: #fff;
							font: bold 14px/1 'apple';
						}
					}
					.review-summary-graph {
						width: 70%;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
						.graph-box {
							position: relative;
							width: 100%;
							li {
								display: flex;
								justify-content: space-around;
								align-items: center;
								padding: 0px 30px;
								margin-bottom: 10px;
								span {
									&:nth-of-type(1) {
										width: 20%;
										font: 14px/1 'apple';
										color: #aaa;
									}
									&:nth-of-type(2) {
										width: 100%;
										.progress-bar {
											background: #000;
										}
									}
									&:nth-of-type(3) {
										width: 10%;
										font: 14px/1 'apple';
										color: #aaa;
									}
								}
							}
						}
					}
				}
			}
		}

		/* 리뷰 필터 박스 */
		.review-search-inner {
			width: 1280px;
			margin: 0 auto;

			.review-search-header {
				position: relative;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				padding: 20px 50px;
				&::after {
					position: absolute;
					top: 100%;
					left: 40px;
					content: '';
					width: 95%;
					height: 2px;
					background: #ddd;
				}
				.search-filter-btn {
					cursor: pointer;
					span {
						margin-right: 30px;
						font: bold 14px/1 'apple';
						color: #ddd;
						&:hover {
							color: #000;
						}
					}
					.active {
						color: #000;
						&:hover {
							color: #999;
						}
					}
				}
				input[type='text'] {
					width: 300px;
					height: 30px;
					border: 1px solid #ddd;
					border-radius: 5px;
				}
			}
			.review-search-body {
				position: relative;
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				padding: 15px 50px;
				&::after {
					position: absolute;
					top: 100%;
					left: 40px;
					content: '';
					width: 95%;
					height: 2px;
					background: #ddd;
				}
				.review-filter-select-box {
					width: 100%;
					display: flex;
					justify-content: flex-start;
					select {
						width: 60px;
						height: 30px;
						padding-left: 10px;
						margin-right: 5px;
						background: url('https://image.prospecs.com/front/images/renewal/icon_arrow_D.svg') no-repeat 90% 50%;
						background-size: 10px;
						border: 1px solid #ddd;
						border-radius: 5px;
						-webkit-appearance: none;
						-moz-appearance: none;
						appearance: none;
						font-size: 10px;
						&:nth-of-type(4) {
							width: 110px;
						}
						&:nth-of-type(5) {
							width: 110px;
						}
					}
				}
			}
		}
		.review-text-inner {
            position: relative;
            &::after {
					position: absolute;
					bottom: 0;
					left: 0;
					content: '';
					width: 100%;
					height: 4px;
					background: #ddd;
				}
			.review-text-box {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 1280px;
				margin: 0 auto;
				padding: 200px 0px;
				.review-text {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					span {
						display: block;
						color: #222;
						margin-bottom: 10px;
						&:nth-of-type(2) {
							font-weight: bold;
							margin-bottom: 20px;
						}
					}
				}
				.review-btn {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 200px;
					height: 40px;
					border-radius: 5px;
					background: #222;
					color: #fff;
					font-weight: bold;
				}
			}
		}
	}
`;

const ProductReview = () => {
	return (
		<StyledProductReview>
			<div className='product-review-inner'>
				{/* 포로리뷰박스 */}
				<div className='review-photo-inner'>
					<div className='review-photo-title'>
						<span>PHOTO REVIEW</span>
					</div>
					<ul className='review-photo-box'>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
						<li className='review-photo'></li>
					</ul>
				</div>
				{/* 리뷰콘텐츠박스 */}
				<div className='review-content-inner'>
					<div className='review-content-header'>
						<span>
							REVIEW <strong>(0)</strong>
						</span>
						<span>전체 상품 리뷰 보기</span>
					</div>

					<div className='review-content-main'>
						<div className='review-summary'>
							<div className='review-summary-write'>
								<div className='summary-score'>
									<span className='score-box'>
										<AiTwotoneStar />
										<span className='average-score'>-</span>
									</span>
									<span className='review-write-btn'>상품 리뷰 작성하기</span>
								</div>
							</div>
							<div className='review-summary-graph'>
								<ul className='graph-box'>
									{/* 아주좋아요 */}
									<li>
										<span>아주 좋아요</span>
										<span>
											<ProgressBar now={0} />
										</span>
										<span>0</span>
									</li>
									{/* 맘에들어요 */}
									<li>
										<span>맘에들어요</span>
										<span>
											<ProgressBar now={0} />
										</span>
										<span>0</span>
									</li>
									{/* 보통이에요 */}
									<li>
										<span>보통이에요</span>
										<span>
											<ProgressBar now={0} />
										</span>
										<span>0</span>
									</li>
									{/* 그냥 그래요 */}
									<li>
										<span>그냥 그래요</span>
										<span>
											<ProgressBar now={0} />
										</span>
										<span>0</span>
									</li>
									{/* 별로에요 */}
									<li>
										<span>별로에요</span>
										<span>
											<ProgressBar now={0} />
										</span>
										<span>0</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='review-search-inner'>
					<div className='review-search-header'>
						<div className='search-filter-btn'>
							<span className='active'>추천순</span>
							<span>최신순</span>
							<span>평점순</span>
						</div>
						<input
							type='text'
							placeholder='	
&#128269; 리뷰 키워드 검색'></input>
					</div>
					<div className='review-search-body'>
						<div className='review-filter-select-box'>
							{/* 평점 */}
							<select name='score' id='score'>
								<option value='init'>별점</option>
								<option value='5'>아주좋아요</option>
								<option value='4'> 맘에들어요</option>
								<option value='3'>보통이에요</option>
								<option value='2'>그냥 그래요</option>
								<option value='1'>별로에요</option>
							</select>
							{/* 키 */}
							<select name='stature' id='stature'>
								<option value='init'>키</option>
								<option value='status1'>149cm 이하</option>
								<option value='status2'>150 - 155cm</option>
								<option value='status3'>155 - 160cm</option>
								<option value='status4'>160 - 165cm</option>
								<option value='status5'>165 - 170cm</option>
								<option value='status6'>170 - 175cm</option>
								<option value='status7'>175 - 180cm</option>
								<option value='status8'>180 - 185cm</option>
								<option value='status9'>185 - 190cm</option>
								<option value='status10'>190cm 이상</option>
							</select>
							{/* 몸무게 */}
							<select name='weight' id='weight'>
								<option value='init'>몸무게</option>
								<option value='weight1'>44kg 이하</option>
								<option value='weight2'>45 - 50kg</option>
								<option value='weight3'>50 - 55kg</option>
								<option value='weight4'>55 - 60kg</option>
								<option value='weight5'>60 - 65kg</option>
								<option value='weight6'>65 - 70kg</option>
								<option value='weight7'>70 - 75kg</option>
								<option value='weight8'>75 - 80kg</option>
								<option value='weight9'>80 - 85kg</option>
								<option value='weight10'>85 - 90kg</option>
								<option value='weight11'>90kg 이상</option>
							</select>
							{/* 상의사이즈 */}
							<select name='top-size' id='top-size'>
								<option value='init'>평소사이즈 - 상의</option>
								<option value='top1'>XS</option>
								<option value='top2'>S</option>
								<option value='top3'>M</option>
								<option value='top4'>L</option>
								<option value='top5'>XL</option>
							</select>
							{/* 하의사이즈 */}
							<select name='bottom-size' id='bottom-size'>
								<option value='init'>평소사이즈 - 하의</option>
								<option value='bottom1'>23</option>
								<option value='bottom2'>24</option>
								<option value='bottom3'>25</option>
								<option value='bottom4'>26</option>
								<option value='bottom5'>27</option>
								<option value='bottom6'>28</option>
								<option value='bottom7'>29</option>
								<option value='bottom8'>30</option>
								<option value='bottom9'>31</option>
								<option value='bottom10'>32</option>
								<option value='bottom11'>33</option>
								<option value='bottom12'>34</option>
								<option value='bottom13'>35</option>
								<option value='bottom14'>36</option>
								<option value='bottom15'>37</option>
								<option value='bottom16'>38</option>
							</select>
						</div>
					</div>
				</div>
				<div className='review-text-inner'>
					<div className='review-text-box'>
						<div className='review-text'>
							<span>리뷰가 없습니다.</span>
							<span>리뷰를 작성해 보세요!</span>
						</div>
						<span className='review-btn'>상품 리뷰 작성하기</span>
					</div>
				</div>
			</div>
		</StyledProductReview>
	);
};

export default ProductReview;
