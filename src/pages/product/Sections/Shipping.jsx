import styled from 'styled-components';

const StyledShipping = styled.div`
  .shipping-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1280px;
    height: 100%;
    padding: 50px;
    margin: 0 auto;
    margin-bottom: 100px;
    .shipping-header {
      width: 100%;
      position: relative;
      padding-bottom: 20px;
      &::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: '';
        width: 100%;
        height: 4px;
        background: #000;
      }
      span {
        font: bold 20px/1 'poppins';
      }
    }
    .shipping-body {
      width: 100%;
      margin-top: 20px;
      table {
        tr {
          width: 100%;
          padding: 10px 0px;
          border-bottom: 1px solid #ddd;
          th {
            width: 20%;
            font: 16px/1 'apple';
          }
          td {
            width: 100%;

            ul {
              list-style: disc;
              padding: 10px;
              li {
                margin-bottom: 5px;
                a {
                  display: block;
                  margin-top: 5px;
                  color: #000;
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Shipping = () => {
  return (
    <StyledShipping>
      <div className='shipping-inner'>
        <div className='shipping-header'>
          <span>배송안내</span>
        </div>
        <div className='shipping-body'>
          <table>
            <tbody>
              {/* 배송정보 */}
              <tr>
                <th>배송정보</th>
                <td>
                  <ul>
                    <li>배송비는 실 결제금액 기준 30,000원 이상 구매 시 무료입니다.</li>
                    <li>실 결제금액 30,000원 미만 구매 시 배송비 2,500원은 고객님 부담입니다.</li>
                    <li>제주도 지역은 기본 배송비(2,500원)에 추가 2,500원이 부담되며, 도서산간 지역은 추가 5,000원이 부담됩니다.</li>
                    <li>일부 도서산간 지역은 배송이 불가하거나 배송이 다소 지연될 수 있습니다.</li>
                    <li>결제 완료 후 영업일 기준 2~5일 이내에 배송이 됩니다.(금요일 오후, 주말/공휴일 결제 건은 3~6일 이내 배송)</li>
                    <li>브랜드 및 품종이 다른 경우 개별(별도 포장)로 배송될 수 있습니다.</li>
                  </ul>
                </td>
              </tr>

              {/* 교환 반품 신청기간 */}
              <tr>
                <th>교환·반품 신청기간</th>
                <td>
                  <ul>
                    <li>단순 고객변심으로 인한 교환·반품 신청은 상품 수령일로부터 7일 이내 가능</li>
                    <li>단, 배송 상품 등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행된 경우에는 상품 등을 수령한 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내</li>
                  </ul>
                </td>
              </tr>

              {/* 교환 반품 배송비 */}
              <tr>
                <th>교환·반품 배송비</th>
                <td>
                  <ul>
                    <li>단순 고객변심으로 인한 교환·반품 시 배송비(왕복 배송비 5,000원)는 고객부담</li>
                    <li>제주도/도서산간 지역의 교환·반품 시에는 별도의 배송비를 부담하셔야 합니다.</li>
                    <li>교환·반품 배송비는 상품 발송 시 동봉해 주시거나 지정된 계좌로 입금해 주시면 됩니다.</li>
                    <li>배송비 입금계좌 : [ KEB하나은행 105-921110-48637 엘에스네트웍스서울지점]</li>
                  </ul>
                </td>
              </tr>
              {/* 교환 반품 불가사유 */}
              <tr>
                <th>교환·반품 불가사유</th>
                <td>
                  <ul>
                    <li>포장을 개봉하여 시착 또는 사용하여 상품 등의 가치가 훼손된 경우</li>
                    <li>단, 상품의 내용을 확인하기 위하여 포장을 개봉한 경우에는 교환/반품이 가능합니다.</li>
                    <li>고객님의 단순변심으로 인한 교환/반품 요청이 상품을 수령한 날로부터 7일을 경과한 경우</li>
                    <li>고객님의 책임 있는 사유로 상품 등의 가치가 심하게 파손되거나 훼손된 경우</li>
                    <li>고객님의 사용 또는 일부 소비에 의하여 상품 등의 가치가 현저히 감소된 경우</li>
                    <li>시간이 경과되어 재판매가 곤란할 정도로 상품 등의 가치가 상실된 경우. (예: 계절의류)</li>
                    <li>바지의 기장 수선 등 수선한 상품의 경우</li>
                    <li>프로스펙스닷컴에서 구입한 상품을 매장에서 교환·반품 하려는 경우 (온라인에서 구입한 상품은, 온라인에서만 반품을 받습니다.)</li>
                    <li>반품 하실때는 부속품을 반드시 상품과 동시에 반송해 주십시오.(구매 명세서, 이너웨어 등의 패키지, 단추 등 상품의 부속품, 상품에 붙어 있는 택·라벨)</li>
                    <li>기타, '전자상거래 등에서의 소비자보호에 관한 법률'이 정하는 청약철회 제한사유에 해당되는 경우</li>
                  </ul>
                </td>
              </tr>
              {/* 환불관련 안내 */}
              <tr>
                <th>환불관련 안내</th>
                <td>
                  <ul>
                    <li>카드결제 : 승인 취소 처리 (반품상품 도착 + 카드사 반영 4~5일 소요)</li>
                    <li>계좌이체/무통장입금 : 환불계좌로 입금 (반품상품 도착 + 은행 처리 3일 소요)</li>
                  </ul>
                </td>
              </tr>
              {/* 품질보증기준 */}
              <tr>
                <th>품질보증기준</th>
                <td>
                  <ul>
                    <li>
                      품질보증기간 : ㈜LS네트웍스 상품의 품질보증 기간은 구입일로부터 1년입니다. (단, 신발류 중 천연가죽 비율이 60% 이하는 6개월)
                      <a href='#'>품질보증기간 자세히 보기</a>
                    </li>
                  </ul>
                </td>
              </tr>
              {/* A/S 안내 */}
              <tr>
                <th>A/S 안내</th>
                <td>
                  <ul>
                    <li>수선품 접수는 구입기간(오래된 상품)에 관계 없이 가능합니다.</li>
                    <li>A/S접수는 우편 또는 택배를 이용하여 온라인 쇼핑몰 고객센터(080-023-1020)로 보내주시기 바랍니다.</li>
                    <li>A/S 온라인상담은 카카오톡에서 “프로스펙스고객서비스팀”을 친구검색하여도 가능합니다.</li>
                    <li>수선작업시 구입시기, 수선 종류에 따라 일정비용이 청구될 수 있습니다.</li>
                    <li>수선작업에 소요되는 기간은 평균적으로 고객센터 접수일(상품도착일)로부터 1주일 이내 또한 수선 작업이 어려운 경우 2주정도 작업이 완료됩니다. (단, 오래된 상품이나 수선자재를 구입하는 과정이 발생될 경우 지체될 수 있습니다.)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StyledShipping>
  );
};

export default Shipping;
