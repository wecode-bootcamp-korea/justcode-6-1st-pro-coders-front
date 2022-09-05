import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledProductDetail = styled.main`
	.product-detail-main-box {
		width: 100%;
		border-top: 4px solid #000;
		border-bottom: 4px solid #ccc;
		padding: 150px 0px;
		.product-detail-inner-box {
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			width: 1280px;
			height: 100%;

			/* Tab버튼 Style */
			.detail-tab-inner {
				width: 100%;
				margin-bottom: 50px;
				.tab-menu {
					span {
						position: relative;
						margin-right: 20px;
						font: bold 26px/1 'Spoqa Han Sans Neo', 'sans-serif';
						color: #999;
						transition: 0.5s;
						&:hover {
							color: #000;
						}
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
							::after {
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
								color: #000;
							}
						}
					}
				}
			}

			/* 제품상세정보 Style */
			.detail-content-inner {
				display: flex;
				flex-direction: column;
				width: 100%;
				/* Point Style */
				.detail-content-point {
					margin-left: 150px;
					margin-bottom: 30px;
					font: bold 20px/1 'poppins';
				}
				/* 제품상세 text 박스 style */
				.detail-content-text {
					margin: 0 auto;
					margin-bottom: 30px;
					font: 20px/2 'poppins';
				}
				/* 아코디언 Style */
				.accordion-inner {

					.accordion {
						color: #000;
						.accordion-item {
							border: none;
							.accordion-header {
								.active color {
									color: #000;
								}
								color: #000;
							}
							.accordion-button {
								background: none;
								border: 1px solid #ccc;
								font: bold 18px/1 'apple';
								&:not(.collapsed) {
									color: #000;
								}
								&:focus {
									box-shadow: 0 0 0 0rem #fff !important;
								}
								&.collapsed {
									border-radius: 0;
								}
							}
							.accordion-collapse {
								border: 1px solid #ccc;
								border-radius: 0;
								ul {
									display: flex;
									flex-direction: column;
									li {
										display: flex;
										justify-content: space-between;
										margin-bottom: 15px;
										div {
											display: flex;
											align-items: flex-end;
											flex-direction: column;
											.text-gray {
												color: #999;
											}
										}
									}
								}
								&.show {
									border-top: none;
									border-radius: 0;
								}
							}
						}
					}
					table {
						width: 100%;
						tbody {
							th {
								font: bold 16px/2.5 'apple';
							}
							td {
								font: 16px/2.5 'apple';
								color: #999;
							}
						}
					}
				}
			}
		}
	}
`;

const ProductDetail = () => {
	return (
		<StyledProductDetail>
			<div className='product-detail-main-box'>
				<div className='product-detail-inner-box'>
					{/* 상품정보 네비게이션 바 */}
					<div className='detail-tab-inner'>
						<div className='tab-menu'>
							<span href='#'>상품정보</span>
							<span href='#'>리뷰</span>
							<span href='#'>배송안내</span>
						</div>
					</div>
					{/* 상품정보 */}
					<div className='detail-content-inner'>
						<span className='detail-content-point'>POINT</span>
						<span className='detail-content-text'>
							• PEBAX(고기능 탄성 소재) 사용하여 에너지 리턴이 우수한 고기능성 러닝화
							<br />
							• 모노메쉬를 적용하여 경량성과 통기성이 우수
							<br />
							• 재귀반사를 활용한 측면 로고 포인트
							<br />
							• 탄성과 유연성이 가미된 미드솔로 자유로운 발의 움직임 유도
							<br />
							• 이중 경도 쿠셔닝 소재를 적용하여 반발 탄성 및 충격 흡수 강화
							<br />
							• 제품출시일 2022.09.01
							<br />
						</span>
						<div className='accordion-inner'>
							<Accordion defaultActiveKey='0'>
								<Accordion.Item eventKey='0'>
									<Accordion.Header>상품 상세정보</Accordion.Header>
									<Accordion.Body>
										<table>
											<tbody>
												{/* 제품소재 */}
												<tr>
													<th scope='row'>제품소제</th>
													<td>KNIT</td>
												</tr>
												{/* 색상 */}
												<tr>
													<th scope='row'>색상</th>
													<td>BLACK</td>
												</tr>

												{/* 치수 */}
												<tr>
													<th scope='row'>치수 (단위 :cm)</th>
													<td>225-280(5mm)</td>
												</tr>
												{/* 제조사 */}
												<tr>
													<th scope='row'>제조사</th>
													<td>(주)LS네트웍스</td>
												</tr>
												{/* 제조국 */}
												<tr>
													<th scope='row'>제조국</th>
													<td>중국</td>
												</tr>
												{/* 취급시 주의사항 */}
												<tr>
													<th scope='row'>취급시 주의사항</th>
													<td>제품 라벨 (Label) 및 태그 (Tag) 참조</td>
												</tr>
												{/* 품질보증기준 */}
												<tr>
													<th scope='row'>폼질보증기준</th>
													<td>구입일로부터 1년 (단, 신발류 중 천연가줒 비율이 60% 이하는 6개월)</td>
												</tr>
												{/* A/S 책임자와 전화번호 */}
												<tr>
													<th scope='row'>A/S 책임자와 전화번호</th>
													<td>(주)LS네트웍스 고객서비스센터 080-710-0000</td>
												</tr>
											</tbody>
										</table>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</StyledProductDetail>
	);
};

export default ProductDetail;
