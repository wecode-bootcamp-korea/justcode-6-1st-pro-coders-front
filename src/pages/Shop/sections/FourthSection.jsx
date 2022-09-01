import styled from 'styled-components';
import useInfiniteSwiper from '../../../hooks/useInfiniteSwiper';
import { BiChevronRight } from 'react-icons/bi';

const StyledSection = styled.section`
  overflow: hidden;

  div.container {
    div.content {
      display: flex;
      & > h2 {
        width: 20%;
        margin-top: 0;
        position: relative;
        z-index: 4;
      }

      div.listContainer {
        width: 80%;
        position: relative;

        button.next {
          position: absolute;
          right: 100px;
          top: calc(50% - 30px);
          border: none;
          background-color: black;
          color: white;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 8;
        }

        &::before {
          content: '';
          position: absolute;
          right: 100%;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: white;
          z-index: 2;
        }

        ul.list {
          width: calc(400%);
          display: flex;

          li {
            display: flex;
            width: 25%;
            user-select: none;

            div.imgContainer {
              width: 40%;

              img {
                width: 100%;
                -webkit-user-drag: none;
              }
            }

            div.text {
              padding: 30px;

              h2 {
                margin-bottom: 30px;
              }

              p {
                line-height: 1.5;
                font-weight: 900;
                font-size: 18px;

                &.tag {
                  margin-top: 30px;
                }
              }
            }

            p.red {
              color: ${({ theme }) => theme.colors.textHover};
              font-weight: 900;
              font-size: 20px;
            }
          }
        }
      }
    }

    div.line {
      width: 100%;
      height: 6px;
      background-color: black;
      margin: 100px 0;
    }
  }
`;

const FourthSection = () => {
  const { swipedTarget, setNextButton } = useInfiniteSwiper(4, true);
  return (
    <StyledSection>
      <div className='container'>
        <div className='content'>
          <h2>
            프로스펙스와 <br />
            함께 하는
            <br /> 일 ㅡ 상
          </h2>
          <div className='listContainer'>
            <button className='next' ref={setNextButton}>
              <BiChevronRight size={40} />
            </button>
            <ul className='list' ref={swipedTarget}>
              <li>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022062816333218.png/dims/optimize' alt='' />
                </div>
                <div className='text'>
                  <p className='red'>인플루언서와 함께하는 프로스펙스</p>
                  <h2>냉감소재라 착용감이 시원</h2>

                  <p>
                    이번 러닝에는 #프로스펙스 #원더쿨티셔츠 를 입었습니다!! <br />
                    냉감소재라 착용감이 시원해요. 기본스타일 티셔츠에 로고포인트가 있어요. <br />
                  </p>

                  <p className='tag'>#러닝하는여자 #기능성티 #기능성티추천 #냉감티셔츠</p>
                </div>
              </li>
              <li>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022062816333218.png/dims/optimize' alt='' />
                </div>
                <div className='text'>
                  <p className='red'>인플루언서와 함께하는 프로스펙스</p>
                  <h2>냉감소재라 착용감이 시원</h2>

                  <p>
                    이번 러닝에는 #프로스펙스 #원더쿨티셔츠 를 입었습니다!! <br />
                    냉감소재라 착용감이 시원해요. 기본스타일 티셔츠에 로고포인트가 있어요. <br />
                  </p>

                  <p>#러닝하는여자 #기능성티 #기능성티추천 #냉감티셔츠</p>
                </div>
              </li>
              <li>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022062816333218.png/dims/optimize' alt='' />
                </div>
                <div className='text'>
                  <p className='red'>인플루언서와 함께하는 프로스펙스</p>
                  <h2>냉감소재라 착용감이 시원</h2>

                  <p>
                    이번 러닝에는 #프로스펙스 #원더쿨티셔츠 를 입었습니다!! <br />
                    냉감소재라 착용감이 시원해요. 기본스타일 티셔츠에 로고포인트가 있어요. <br />
                  </p>

                  <p>#러닝하는여자 #기능성티 #기능성티추천 #냉감티셔츠</p>
                </div>
              </li>
              <li>
                <div className='imgContainer'>
                  <img src='https://image.prospecs.com/files/upload/display/202206/2022062816333218.png/dims/optimize' alt='' />
                </div>
                <div className='text'>
                  <p className='red'>인플루언서와 함께하는 프로스펙스</p>
                  <h2>냉감소재라 착용감이 시원</h2>

                  <p>
                    이번 러닝에는 #프로스펙스 #원더쿨티셔츠 를 입었습니다!! <br />
                    냉감소재라 착용감이 시원해요. 기본스타일 티셔츠에 로고포인트가 있어요. <br />
                  </p>

                  <p>#러닝하는여자 #기능성티 #기능성티추천 #냉감티셔츠</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='line' />
      </div>
    </StyledSection>
  );
};

export default FourthSection;
