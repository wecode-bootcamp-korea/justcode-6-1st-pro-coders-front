import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { AiTwotoneStar } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const StyledProductDetail = styled.main`
  .productDetailMainBox {
    width: 100%;
    border-top: 4px solid #000;
    border-bottom: 4px solid #ccc;
    padding: 150px 0px;
    .proproductDetailInnerBox {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      width: 1280px;
      height: 100%;

      /* Tab버튼 Style */
      .detailTabInner {
        width: 100%;
        margin-bottom: 50px;
        .tabMenu {
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

      /* Tab버튼 Fixed Style */
      .detailTabInnerFixed {
        position: fixed;
        top: 0px;
        left: 0;
        width: 100%;
        margin-bottom: 50px;
        padding: 100px;
        background: #fff;
        z-index: 4;
        .tabMenu {
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
      .detailContentInner  {
        display: flex;
        flex-direction: column;
        width: 100%;
		
        /* Point Style */
        .detailContentPoint {
          margin-left: 150px;
          margin-bottom: 30px;
          font: bold 20px/1 'poppins';
        }
        /* 제품상세 text 박스 style */
        .detailContentText {
          margin: 0 auto;
          margin-bottom: 30px;
          font: 20px/2 'poppins';
        }
        /* 아코디언 Style */
        .accordionInner {
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

const ProductDetail = () => {
  const itemDetail = useRef(null);
  const itemReview = useRef(null);
  const itemShipping = useRef(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (scrollY > 2300) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    function scrollListener() {
      window.addEventListener('scroll', handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const scrollToSection = elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <StyledProductDetail>
        <div className='productDetailMainBox'>
          <div className='proproductDetailInnerBox'>
            {/* 상품정보 네비게이션 바 */}
            <div ref={itemDetail} className={scrollActive ? 'detailTabInnerFixed' : 'detailTabInner'}>
              <div className='tabMenu'>
                <span onClick={() => scrollToSection(itemDetail)}>상품정보</span>
                <span onClick={() => scrollToSection(itemReview)}>리뷰</span>
                <span onClick={() => scrollToSection(itemShipping)}>배송안내</span>
              </div>
            </div>
            {/* 상품정보 */}
            <div className='detailContentInner '>
              <span ref={itemDetail} className='detailContentPoint'>
                POINT
              </span>
              <span className='detailContentText'>
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
              <div className='accordionInner'>
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

      <StyledProductReview>
        <div className='product-review-inner'>
          {/* 포로리뷰박스 */}
          <div className='review-photo-inner'>
            <div className='review-photo-title'>
              <span ref={itemReview}>PHOTO REVIEW</span>
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
&#128269; 리뷰 키워드 검색'
              ></input>
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

      <StyledShipping>
        <div ref={itemShipping} className='shipping-inner'>
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
    </>
  );
};

export default ProductDetail;
