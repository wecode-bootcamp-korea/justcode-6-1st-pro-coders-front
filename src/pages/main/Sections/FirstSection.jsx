import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

const StyledSection = styled.section`
  div.container {
    display: flex;
    gap: 20px;
    max-width: 2000px;
    width: 100%;
    margin: 0 auto;
    padding: 0 !important;

    div.imgContainer {
      position: relative;
      width: calc(50% - 10px);
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }

      div.textContainer {
        position: absolute;
        bottom: 5%;
        left: 5%;
        color: white;
        font-weight: 900;

        h2 {
          font-size: 40px;
        }

        p {
          margin-top: 10px;
        }
      }

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: ${({ theme }) => theme.colors.mainImgBg};
        transition: 0.3s;
        transform: skewY(-10deg) scaleY(1.3) translateY(${({ isFirstInView }) => (isFirstInView ? '-100%' : '0')});
      }

      &:last-of-type::after {
        transition-delay: 0.3s;
      }
    }
  }
`;

const FirstSection = () => {
  const firstSection = useRef();
  const [isFirstInView, setIsFisrtInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRect.top) {
            entry.isIntersecting ? setIsFisrtInView(true) : setIsFisrtInView(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(firstSection.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <StyledSection isFirstInView={isFirstInView} ref={firstSection}>
      <div className='container'>
        <div className='imgContainer'>
          <img src='https://image.prospecs.com/files/upload/display/202208/202208301117241.jpg/dims/optimize' alt='' />
          <div className='textContainer'>
            <h2>HOW TO PLAY CITY</h2>
            <p>22FW PERFORMANCE</p>
          </div>
        </div>
        <div className='imgContainer'>
          <img src='https://image.prospecs.com/files/upload/display/202205/202205191805182.jpg/dims/optimize' alt='' />
          <div className='textContainer'>
            <h2>Original Surf Club</h2>
            <p>2022 HOT SUMMER COLLECTION</p>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default FirstSection;
