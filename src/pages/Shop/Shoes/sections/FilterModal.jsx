import styled from 'styled-components';

const StyledFilter = styled.div`
  .filterModalInnerBox {
    width: 1180px;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #000;
    .filterModalHeader {
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
      .modalHeaderTextStyle {
        display: block;
        font: bold 20px/1 'apple';
      }
      .modalHeaderCloseBtn {
        display: flex;
        display: block;
        font: bold 20px/1 'apple';
        cursor: pointer;
      }
    }
    .filterModalList {
      width: 100%;
      .filterModalListBox {
        display: flex;
        width: 100%;
        margin-bottom: 50px;
        .modalListTextStyle {
          width: 10%;
          margin-right: 50px;
          padding: 15px;
          font: bold 17px/1 'apple';
        }
        .filters {
          display: flex;
          align-items: center;
          width: 100%;
          .filterCheckList {
            display: flex;
            flex-wrap: wrap;
            .fiterPriceInputBox {
              display: flex;
              width: 100%;
              margin-bottom: 20px;
              span {
                font: 20px/2 'apple';
                margin: 0 10px;
              }
              .filterCheckInputBox {
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
              .filterCheckBox {
                display: flex;
                flex-wrap: wrap;
                span {
                  font: 18px/1.2 'apple';
                  margin-left: 10px;
                }
                input[type='checkbox'] {
                  display: none;
                }

                /* ???????????? ?????? ????????? */
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
                /* ???????????? ?????? ????????? */
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
                /* ???????????? ?????? ????????? */
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
                /* ???????????? ?????? ????????? */
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

                /* ?????? ?????? ????????? */
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
                /* ????????? ?????? ????????? */
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
                /* ????????? ?????? ????????? */
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
                /* ????????? ?????? ????????? */
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
                /* ?????? ?????? ????????? */
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
                /* ?????? ?????? ????????? */
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
                /* ?????? ?????? ????????? */
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
                /* ????????? ?????? ????????? */
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
                /* ????????? ?????? ????????? */
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
                /* ?????? ?????? ????????? */
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
                /* ?????? ?????? ????????? */
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
                /* ????????? ?????? ????????? */
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
                /* ?????? ?????? ????????? */
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

                /* ?????? 0~3?????? */
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
                /* ?????? 3~5?????? */
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
                /* ?????? 5~10?????? */
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
                /* ?????? 10~20?????? */
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
                /* ?????? 20~30?????? */
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
                /* ?????? 30??????~ */
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

                /* ????????? ?????? */
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
                /* ????????? 230 */
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
                /* ????????? 235 */
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
                /* ????????? 240 */
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
                /* ????????? 245 */
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
                /* ????????? 250 */
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
                /* ????????? 255 */
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
                /* ????????? 260 */
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
                /* ????????? 265 */
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
                /* ????????? 270 */
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
                /* ????????? 275 */
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
                /* ????????? 280 */
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
                /* ????????? 285 */
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
                /* ????????? 290 */
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
      <div className='filterModalInnerBox'>
        <div className='filterModalHeader'>
          <span className='modalHeaderTextStyle'>????????????</span>
          <span
            className='modalHeaderCloseBtn'
            onClick={() => {
              setToggle(false);
            }}
          >
            X
          </span>
        </div>
        <ul className='filterModalList'>
          {/* ?????? */}
          <li className='filterModalListBox'>
            <sapn className='modalListTextStyle'>??????</sapn>
            <div className='filters'>
              <ul className='filterCheckList'>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_gender-all' id='gender_all' />
                    <label for='gender_all'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_gender-male' id='gender_male' />
                    <label for='gender_male'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_gender-female' id='gender_female' />
                    <label for='gender_female'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_gender-kid' id='gender_kid' />
                    <label for='gender_kid'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* ?????? */}
          <li className='filterModalListBox'>
            <sapn className='modalListTextStyle'>??????</sapn>
            <div className='filters'>
              <ul className='filterCheckList'>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-all' id='color_all' />
                    <label for='color_all'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ????????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-white' id='color_white' />
                    <label for='color_white'></label>
                    <span className='text'>?????????</span>
                  </div>
                </li>
                {/* ????????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-orange' id='color_orange' />
                    <label for='color_orange'></label>
                    <span className='text'>?????????</span>
                  </div>
                </li>
                {/* ????????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-beige' id='color_beige' />
                    <label for='color_beige'></label>
                    <span className='text'>?????????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-gold' id='color_gold' />
                    <label for='color_gold'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-pink' id='color_pink' />
                    <label for='color_pink'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-red' id='color_red' />
                    <label for='color_red'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ????????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-brown' id='color_brown' />
                    <label for='color_brown'></label>
                    <span className='text'>?????????</span>
                  </div>
                </li>
                {/* ????????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-gray' id='color_gray' />
                    <label for='color_gray'></label>
                    <span className='text'>?????????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-purple' id='color_purple' />
                    <label for='color_purple'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-blue' id='color_blue' />
                    <label for='color_blue'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* ????????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-navy' id='color_navy' />
                    <label for='color_navy'></label>
                    <span className='text'>?????????</span>
                  </div>
                </li>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_color-black' id='color_black' />
                    <label for='color_black'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* ?????? */}
          <li className='filterModalListBox'>
            <sapn className='modalListTextStyle'>??????</sapn>
            <div className='filters'>
              <ul className='filterCheckList'>
                {/* ???????????? */}
                <li className='fiterPriceInputBox'>
                  <div className='filterCheckInputBox'>
                    <div className='filter-input'>
                      <input type='text' name='price_from' maxLength='11' />
                    </div>
                    <span> ~ </span>
                    <div className='filter-input'>
                      <input type='text' name='price_to' maxLength='11' />
                    </div>
                  </div>
                </li>

                {/* 0~3?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_price' id='price0-3' />
                    <label for='price0-3'></label>
                    <span className='text'>0~3??????</span>
                  </div>
                </li>

                {/* 3~5?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_price' id='price3-5' />
                    <label for='price3-5'></label>
                    <span className='text'>3~5??????</span>
                  </div>
                </li>
                {/* 5~10?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_price' id='price5-10' />
                    <label for='price5-10'></label>
                    <span className='text'>5~10??????</span>
                  </div>
                </li>
                {/* 10~20?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_price' id='price10-20' />
                    <label for='price10-20'></label>
                    <span className='text'>10~20??????</span>
                  </div>
                </li>
                {/* 20??????~30?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_price' id='price20-30' />
                    <label for='price20-30'></label>
                    <span className='text'>20~30??????</span>
                  </div>
                </li>
                {/* 30?????? ~ */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_price' id='price30' />
                    <label for='price30'></label>
                    <span className='text'>30??????~</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* ????????? */}
          <li className='filterModalListBox'>
            <sapn className='modalListTextStyle'>?????????</sapn>
            <div className='filters'>
              <ul className='filterCheckList'>
                {/* ?????? */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_all' id='size_all' />
                    <label for='size_all'></label>
                    <span className='text'>??????</span>
                  </div>
                </li>
                {/* 230 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_230' id='size_230' />
                    <label for='size_230'></label>
                    <span className='text'>230</span>
                  </div>
                </li>
                {/* 235 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_235' id='size_235' />
                    <label for='size_235'></label>
                    <span className='text'>235</span>
                  </div>
                </li>
                {/* 240 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_240' id='size_240' />
                    <label for='size_240'></label>
                    <span className='text'>240</span>
                  </div>
                </li>
                {/* 245 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_245' id='size_245' />
                    <label for='size_245'></label>
                    <span className='text'>245</span>
                  </div>
                </li>
                {/* 250 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_250' id='size_250' />
                    <label for='size_250'></label>
                    <span className='text'>250</span>
                  </div>
                </li>
                {/* 255 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_255' id='size_255' />
                    <label for='size_255'></label>
                    <span className='text'>255</span>
                  </div>
                </li>
                {/* 260 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_260' id='size_260' />
                    <label for='size_260'></label>
                    <span className='text'>260</span>
                  </div>
                </li>
                {/* 265 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_265' id='size_265' />
                    <label for='size_265'></label>
                    <span className='text'>265</span>
                  </div>
                </li>
                {/* 270 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_270' id='size_270' />
                    <label for='size_270'></label>
                    <span className='text'>270</span>
                  </div>
                </li>
                {/* 275 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_275' id='size_275' />
                    <label for='size_275'></label>
                    <span className='text'>275</span>
                  </div>
                </li>
                {/* 280 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_280' id='size_280' />
                    <label for='size_280'></label>
                    <span className='text'>280</span>
                  </div>
                </li>
                {/* 285 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_285' id='size_285' />
                    <label for='size_285'></label>
                    <span className='text'>285</span>
                  </div>
                </li>
                {/* 290 */}
                <li>
                  <div className='filterCheckBox'>
                    <input type='checkbox' name='check_size_290' id='size_290' />
                    <label for='size_290'></label>
                    <span className='text'>290</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* ??????/?????? ?????? */}
        <div className='filter-modal-btn'>
          <input type='reset' value='?????????' />
          <input type='submit' value='????????????' />
        </div>
      </div>
    </StyledFilter>
  );
}

export default FilterModal;
