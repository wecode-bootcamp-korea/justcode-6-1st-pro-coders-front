import styled from 'styled-components';

const StyledFilter = styled.div`
  .filter-modal-inner-box {
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #000;
    .filter-modal-header {
      position: relative;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      margin-bottom: 40px;
      padding: 10px;
      &::after {
        position: absolute;
        bottom: 0;
        content: '';
        width: 99%;
        height: 4px;
        background: #000;
      }
      .modal-header-text-style {
        display: block;
        font: bold 20px/1 'apple';
      }
      .modal-header-close-btn {
        display: flex;
        display: block;
        font: bold 20px/1 'apple';
        cursor: pointer;
      }
    }
    .filter-modal-list {
      width: 100%;
      .filter-modal-list-box {
        display: flex;
        width: 100%;
        margin-bottom: 50px;
        .modal-list-text-style {
          width: 10%;
          margin-right: 50px;
          padding: 15px;
          font: bold 17px/1 'apple';
        }
        .filters {
          display: flex;
          align-items: center;
          width: 100%;
          .filter-check-list {
            display: flex;
            flex-wrap: wrap;
            .fiter-price-input-box {
              display: flex;
              width: 100%;
              margin-bottom: 20px;
              span {
                font: 20px/2 'apple';
                margin: 0 10px;
              }
              .filter-check-input-box {
                display: flex;
                input[type='text'] {
                  display: inline-block;
                  width: 200px;
                  height: 40px;
                }
              }
            }
            li {
              width: 150px;
              margin-right: 50px;
              font: 18px/1 'apple';
              .filter-check-box {
                display: flex;
                flex-wrap: wrap;
                span {
                  font: 18px/1.2 'apple';
                  margin-left: 10px;
                }
                input[type='checkbox'] {
                  display: none;
                }

                /* 체크박스 전체 스타일 */
                input[id='gender_all'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='gender_all']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 체크박스 남성 스타일 */
                input[id='gender_male'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='gender_male']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 체크박스 여성 스타일 */
                input[id='gender_female'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='gender_female']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 체크박스 키즈 스타일 */
                input[id='gender_kid'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='gender_kid']:checked + label {
                  position: relative;
                  background: #000;
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

                /* 전체 색상 스타일 */
                input[id='color_all'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='color_all']:checked + label {
                  position: relative;
                  background: #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='color_white']:checked + label {
                  position: relative;
                  background: #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
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

                /* 가격 0~3만원 */
                input[id='price0-3'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='price0-3']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 가격 3~5만원 */
                input[id='price3-5'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='price3-5']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 가격 5~10만원 */
                input[id='price5-10'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='price5-10']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 가격 10~20만원 */
                input[id='price10-20'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='price10-20']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 가격 20~30만원 */
                input[id='price20-30'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='price20-30']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 가격 30만원~ */
                input[id='price30'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='price30']:checked + label {
                  position: relative;
                  background: #000;
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

                /* 사이즈 전체 */
                input[id='size_all'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_all']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 230 */
                input[id='size_230'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_230']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 235 */
                input[id='size_235'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_235']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 240 */
                input[id='size_240'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_240']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 245 */
                input[id='size_245'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_245']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 250 */
                input[id='size_250'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_250']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 255 */
                input[id='size_255'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_255']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 260 */
                input[id='size_260'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_260']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 265 */
                input[id='size_265'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_265']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 270 */
                input[id='size_270'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_270']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 275 */
                input[id='size_275'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_275']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 280 */
                input[id='size_280'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_280']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 285 */
                input[id='size_285'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_285']:checked + label {
                  position: relative;
                  background: #000;
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
                /* 사이즈 290 */
                input[id='size_290'] + label {
                  display: inline-block;
                  width: 20px;
                  height: 20px;
                  border: 2px solid #000;
                  cursor: pointer;
                }
                input[id='size_290']:checked + label {
                  position: relative;
                  background: #000;
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
          }
        }
      }
    }
    .filter-modal-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      input[type='reset'] {
        display: block;
        width: 160px;
        height: 60px;
        margin-right: 20px;
        background: #fff;
        border: 1px solid #000;
        font: bold 16px/1 'apple';
      }
      input[type='submit'] {
        display: block;
        width: 160px;
        height: 60px;
        background: #222;
        border: 1px solid #000;
        font: bold 16px/1 'apple';
        color: #fff;
      }
    }
  }
`;

function FilterModal({ toggle, setToggle }) {
  return (
    <StyledFilter>
      <div className='filter-modal-inner-box'>
        <div className='filter-modal-header'>
          <span className='modal-header-text-style'>필터검색</span>
          <span
            className='modal-header-close-btn'
            onClick={() => {
              setToggle(false);
            }}
          >
            X
          </span>
        </div>
        <ul className='filter-modal-list'>
          {/* 성별 */}
          <li className='filter-modal-list-box'>
            <sapn className='modal-list-text-style'>성별</sapn>
            <div className='filters'>
              <ul className='filter-check-list'>
                {/* 전체 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_gender-all' id='gender_all' />
                    <label for='gender_all'></label>
                    <span className='text'>전체</span>
                  </div>
                </li>
                {/* 남성 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_gender-male' id='gender_male' />
                    <label for='gender_male'></label>
                    <span className='text'>남성</span>
                  </div>
                </li>
                {/* 여성 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_gender-female' id='gender_female' />
                    <label for='gender_female'></label>
                    <span className='text'>여성</span>
                  </div>
                </li>
                {/* 아동 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_gender-kid' id='gender_kid' />
                    <label for='gender_kid'></label>
                    <span className='text'>아동</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* 컬러 */}
          <li className='filter-modal-list-box'>
            <sapn className='modal-list-text-style'>컬러</sapn>
            <div className='filters'>
              <ul className='filter-check-list'>
                {/* 전체 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-all' id='color_all' />
                    <label for='color_all'></label>
                    <span className='text'>전체</span>
                  </div>
                </li>
                {/* 화이트 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-white' id='color_white' />
                    <label for='color_white'></label>
                    <span className='text'>화이트</span>
                  </div>
                </li>
                {/* 오렌지 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-orange' id='color_orange' />
                    <label for='color_orange'></label>
                    <span className='text'>오렌지</span>
                  </div>
                </li>
                {/* 베이지 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-beige' id='color_beige' />
                    <label for='color_beige'></label>
                    <span className='text'>베이지</span>
                  </div>
                </li>
                {/* 골드 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-gold' id='color_gold' />
                    <label for='color_gold'></label>
                    <span className='text'>골드</span>
                  </div>
                </li>
                {/* 핑크 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-pink' id='color_pink' />
                    <label for='color_pink'></label>
                    <span className='text'>핑크</span>
                  </div>
                </li>
                {/* 레드 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-red' id='color_red' />
                    <label for='color_red'></label>
                    <span className='text'>레드</span>
                  </div>
                </li>
                {/* 브라운 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-brown' id='color_brown' />
                    <label for='color_brown'></label>
                    <span className='text'>브라운</span>
                  </div>
                </li>
                {/* 그레이 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-gray' id='color_gray' />
                    <label for='color_gray'></label>
                    <span className='text'>그레이</span>
                  </div>
                </li>
                {/* 퍼플 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-purple' id='color_purple' />
                    <label for='color_purple'></label>
                    <span className='text'>퍼플</span>
                  </div>
                </li>
                {/* 블루 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-blue' id='color_blue' />
                    <label for='color_blue'></label>
                    <span className='text'>블루</span>
                  </div>
                </li>
                {/* 네이비 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-navy' id='color_navy' />
                    <label for='color_navy'></label>
                    <span className='text'>네이비</span>
                  </div>
                </li>
                {/* 블랙 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_color-black' id='color_black' />
                    <label for='color_black'></label>
                    <span className='text'>블랙</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* 가격 */}
          <li className='filter-modal-list-box'>
            <sapn className='modal-list-text-style'>가격</sapn>
            <div className='filters'>
              <ul className='filter-check-list'>
                {/* 가격작성 */}
                <li className='fiter-price-input-box'>
                  <div className='filter-check-input-box'>
                    <div className='filter-input'>
                      <input type='text' name='price_from' maxLength='11' />
                    </div>
                    <span> ~ </span>
                    <div className='filter-input'>
                      <input type='text' name='price_to' maxLength='11' />
                    </div>
                  </div>
                </li>

                {/* 0~3만원 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_price' id='price0-3' />
                    <label for='price0-3'></label>
                    <span className='text'>0~3만원</span>
                  </div>
                </li>

                {/* 3~5만원 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_price' id='price3-5' />
                    <label for='price3-5'></label>
                    <span className='text'>3~5만원</span>
                  </div>
                </li>
                {/* 5~10만원 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_price' id='price5-10' />
                    <label for='price5-10'></label>
                    <span className='text'>5~10만원</span>
                  </div>
                </li>
                {/* 10~20만원 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_price' id='price10-20' />
                    <label for='price10-20'></label>
                    <span className='text'>10~20만원</span>
                  </div>
                </li>
                {/* 20만원~30만원 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_price' id='price20-30' />
                    <label for='price20-30'></label>
                    <span className='text'>20~30만원</span>
                  </div>
                </li>
                {/* 30만원 ~ */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_price' id='price30' />
                    <label for='price30'></label>
                    <span className='text'>30만원~</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* 사이즈 */}
          <li className='filter-modal-list-box'>
            <sapn className='modal-list-text-style'>사이즈</sapn>
            <div className='filters'>
              <ul className='filter-check-list'>
                {/* 전체 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_all' id='size_all' />
                    <label for='size_all'></label>
                    <span className='text'>전체</span>
                  </div>
                </li>
                {/* 230 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_230' id='size_230' />
                    <label for='size_230'></label>
                    <span className='text'>230</span>
                  </div>
                </li>
                {/* 235 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_235' id='size_235' />
                    <label for='size_235'></label>
                    <span className='text'>235</span>
                  </div>
                </li>
                {/* 240 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_240' id='size_240' />
                    <label for='size_240'></label>
                    <span className='text'>240</span>
                  </div>
                </li>
                {/* 245 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_245' id='size_245' />
                    <label for='size_245'></label>
                    <span className='text'>245</span>
                  </div>
                </li>
                {/* 250 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_250' id='size_250' />
                    <label for='size_250'></label>
                    <span className='text'>250</span>
                  </div>
                </li>
                {/* 255 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_255' id='size_255' />
                    <label for='size_255'></label>
                    <span className='text'>255</span>
                  </div>
                </li>
                {/* 260 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_260' id='size_260' />
                    <label for='size_260'></label>
                    <span className='text'>260</span>
                  </div>
                </li>
                {/* 265 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_265' id='size_265' />
                    <label for='size_265'></label>
                    <span className='text'>265</span>
                  </div>
                </li>
                {/* 270 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_270' id='size_270' />
                    <label for='size_270'></label>
                    <span className='text'>270</span>
                  </div>
                </li>
                {/* 275 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_275' id='size_275' />
                    <label for='size_275'></label>
                    <span className='text'>275</span>
                  </div>
                </li>
                {/* 280 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_280' id='size_280' />
                    <label for='size_280'></label>
                    <span className='text'>280</span>
                  </div>
                </li>
                {/* 285 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_285' id='size_285' />
                    <label for='size_285'></label>
                    <span className='text'>285</span>
                  </div>
                </li>
                {/* 290 */}
                <li>
                  <div className='filter-check-box'>
                    <input type='checkbox' name='check_size_290' id='size_290' />
                    <label for='size_290'></label>
                    <span className='text'>290</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* 리셋/적용 버튼 */}
        <div className='filter-modal-btn'>
          <input type='reset' value='초기화' />
          <input type='submit' value='필터적용' />
        </div>
      </div>
    </StyledFilter>
  );
}

export default FilterModal;
