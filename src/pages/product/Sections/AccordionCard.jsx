import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledAccordion = styled.div`
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
				border-bottom: 1px solid #ccc;
				font: bold 18px/1 'apple';
				&:not(.collapsed) {
					color: #000;
				}
				&:focus {
					box-shadow: 0 0 0 0.0rem #fff !important;
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
`;

const AccordionCard = () => {
	return (
		<StyledAccordion>
			<Accordion defaultActiveKey='0'>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>최대 혜택가</Accordion.Header>
					<Accordion.Body>
						<ul>
							<li>
								<span>상품 쿠폰</span>
								<span>-14,900원</span>
							</li>
							<li>
								<span>즉시할인 포인트</span>
								<span>-4,000원</span>
							</li>
							<li>
								<span>비씨/현대/신한/KB국민카드 결제시 즉시할인</span>
								<span>-8,000원</span>
							</li>
							<li>
								<span>배송비 정보</span>
								<div>
									<span>0원</span>
									<span className='text-gray'>(1,000원 이상 무료배송)</span>
								</div>
							</li>
							<li>
								<span>포인트 적립</span>
								<span>7,450P</span>
							</li>
						</ul>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>카드사 혜택</Accordion.Header>
					<Accordion.Body>
						<p>
							KB국민·신한·현대·BC카드 결제 시 1,000/2,500/5,000/8,000원/15,000원
							<br /> 즉시할인 <br />
							(3만원/5만원/8만원/12만원/15만원 이상 결제 시 적용, 한도 소진 시 종료)
						</p>
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</StyledAccordion>
	);
};

export default AccordionCard;
