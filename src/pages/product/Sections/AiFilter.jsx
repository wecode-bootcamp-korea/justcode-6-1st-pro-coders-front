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
      width: 50%;
      display: flex;
      flex-direction: row;
      .filter-check-list {
        display: flex;
        padding: 40px 0px 20px 0px;
        li {
          margin-right: 0px;
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
        <div className='color-filter-box'></div>
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
            className='mySwiper'
          >
            <SwiperSlide>
              <div className='product-inner-box'>
                <div className='product-img-box'>
                  <img src='https://img.prospecs.com/prod/PW0MW22/PW0MW22F512/PW0MW22F512_02.jpg/dims/resizef/530x530/optimize' alt='랩터 BX 2 신발사진' />
                </div>
                <div className='product-text-box'>
                  <span className='product-title'>랩터 BX 2</span>
                  <span className='product-price'>199,000원</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-inner-box'>
                <div className='product-img-box'>
                  <img src='https://img.prospecs.com/prod/PS0US22/PS0US22F011/PS0US22F011_02.jpg/dims/resizef/530x530/optimize' alt='랜드슬램 OG 103 신발사진' />
                </div>
                <div className='product-text-box'>
                  <span className='product-title'>그랜드슬램 OG 103</span>
                  <span className='product-price'>89,000원</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-inner-box'>
                <div className='product-img-box'>
                  <img src='https://img.prospecs.com/prod/PS0US22/PS0US22F301/PS0US22F301_02.jpg/dims/resizef/530x530/optimize' alt='오리지널 JQ 101 신발사진' />
                </div>
                <div className='product-text-box'>
                  <span className='product-title'>오리지널 JQ 101</span>
                  <span className='product-price'>89,000원</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-inner-box'>
                <div className='product-img-box'>
                  <img src='https://img.prospecs.com/prod/PS0US22/PS0US22F302/PS0US22F302_02.jpg/dims/resizef/530x530/optimize' alt='오리지널 JQ 102 신발사진' />
                </div>
                <div className='product-text-box'>
                  <span className='product-title'>오리지널 JQ 102</span>
                  <span className='product-price'>89,000원</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='product-inner-box'>
                <div className='product-img-box'>
                  <img src='https://img.prospecs.com/prod/PR0UR22/PR0UR22F413/PR0UR22F413_02.jpg/dims/resizef/530x530/optimize' alt='X-FIN 213 신발사진' />
                </div>
                <div className='product-text-box'>
                  <span className='product-title'>X-FIN 213</span>
                  <span className='product-price'>149,000원</span>
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
