import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledMain = styled.main`
  section {
    padding-top: 100px;
  }

  section.first {
    display: flex;
    gap: 20px;
    width: 100%;

    div.imgContainer {
      position: relative;
      width: calc(50% - 10px);
      height: 100%;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        height: 100%;
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

const MainPage = () => {
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
    <>
      <Header />
      <StyledMain isFirstInView={isFirstInView}>
        <section className='first' ref={firstSection}>
          <div className='imgContainer'>
            <img src='https://image.prospecs.com/files/upload/display/202208/202208301117241.jpg/dims/optimize' alt='' />
          </div>
          <div className='imgContainer'>
            <img src='https://image.prospecs.com/files/upload/display/202205/202205191805182.jpg/dims/optimize' alt='' />
          </div>
        </section>

        <section className='second'></section>
      </StyledMain>
    </>
  );
};

export default MainPage;
