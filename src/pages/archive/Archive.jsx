import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import LookbookSkeleton from '../../components/Skeleton/LookbookSkeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Main = styled.div`
  width: 1280px;
  margin: 250px auto 200px auto;
  padding: 0 20px;

  h3 {
    margin-bottom: 47px;
    font-family: 'Poppins', 'sans-serif';
    font-weight: 700;
    font-size: 40px;
    color: ${props => props.theme.colors.text};
  }

  div.titleContainer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h4 {
      margin-bottom: 28px;
      font-family: 'Poppins', 'sans-serif';
      font-weight: 700;
      font-size: 30px;
      color: ${props => props.theme.colors.text};
    }

    div.selectContainer {
      position: relative;
      margin-bottom: 10px;
      padding: 0 20px;
      font-family: 'Poppins', 'sans-serif';
      font-weight: 500;
      font-size: 18px;
      text-align: right;
      cursor: pointer;

      span.selectTitle {
        margin-right: 10px;
      }

      ul {
        position: absolute;
        top: 32px;
        right: 20px;
        width: 310px;
        padding-top: 5px;
        background-color: #fff;
        border: 1px solid ${props => props.theme.colors.text};
        font-size: 16px;
        text-align: left;
        z-index: 2;

        li {
          padding: 18px 15px;
          font-weight: 200;
          color: ${props => props.theme.colors.disabledTitle};
        }

        li.selected {
          color: ${props => props.theme.colors.text};
        }
      }
    }
  }

  section {
    position: relative;
    width: 100%;
    overflow: hidden;

    .chevron {
      position: absolute;
      top: 45%;
    }

    .chevron.left {
      left: 3%;
      z-index: 1;
    }

    .chevron.right {
      right: 10%;
      z-index: 1;
    }

    ul.imgContainer {
      display: flex;

      div.imgBox {
        width: 480px;
        height: 720px;
        margin-right: 40px;
        overflow: hidden;

        img {
          width: auto;
          height: 100%;
        }
      }
    }
  }
`;

const Archive = props => {
  const [loading, setLoading] = useState(true);
  const [toggleList, setToggleList] = useState([
    { id: 1, text: '22FW PERFORMANCE LOOKBOOK', selected: true },
    { id: 2, text: '22 SUMMER LOOKBOOK', selected: false },
    { id: 3, text: '22 SUMMER ORIGINAL LOOKBOOK', selected: false },
    { id: 4, text: '22SS CAMPAIGN', selected: false },
    { id: 5, text: '22SS PERFORMANCE LOOKBOOK', selected: false },
    { id: 6, text: '22SS ORIGINAL LOOKBOOK', selected: false },
  ]);
  const [womenData, setWomenData] = useState();
  const [menData, setMenData] = useState();
  const [toggleTitle, setToggleTitle] = useState(toggleList[0]);
  const [toggleShow, setToggleShow] = useState(false);
  const [slide, setSlide] = useState(0);
  const slideRef = useRef();

  useEffect(() => {
    fetch('data/archive.json')
      .then(res => res.json())
      .then(json => {
        setWomenData(json.women);
        setMenData(json.men);
        setLoading(false);
      });
  }, []);

  const handleToggle = () => {
    setToggleShow(prev => !prev);
  };

  const handleToggleMenu = e => {
    const newToggleList = toggleList.map(list => {
      return list.id === +e.target.id ? { ...list, selected: true } : { ...list, selected: false };
    });
    setToggleList(newToggleList);
    setToggleTitle(toggleList[e.target.id - 1]);
    setSlide(0);
  };

  useEffect(() => {
    if (!loading) {
      slideRef.current.style.transition = 'all 300ms ease-in-out';
      slideRef.current.style.transform = `translateX(${slide}px)`;
    }
  }, [slide]);

  const handleSwipe = e => {
    let slideValue = slide;
    const target = e.target.closest('.chevron');
    if (target.id === 'left') {
      slideValue += 520;
      if (slideValue >= 0) {
        slideValue = 0;
      }
    } else {
      slideValue -= 520;
      if (slideValue <= -1840) {
        slideValue = -1840;
      }
    }
    setSlide(slideValue);
  };

  return (
    <>
      {loading && <LookbookSkeleton />}
      {!loading && (
        <Main>
          <h3>LOOKBOOK</h3>
          <div className='titleContainer'>
            <h4>{toggleTitle.text}</h4>
            <div className='selectContainer' onClick={handleToggle}>
              <div>
                <span className='selectTitle'>{toggleTitle.text}</span>
                {toggleShow ? <FontAwesomeIcon icon={faChevronUp} size='xs' /> : <FontAwesomeIcon icon={faChevronDown} size='xs' />}
              </div>
              {toggleShow && (
                <ul>
                  {toggleList.map(info => {
                    return info.selected ? (
                      <li className='selected' id={info.id} onClick={handleToggleMenu} key={info.id}>
                        {info.text}
                      </li>
                    ) : (
                      <li id={info.id} onClick={handleToggleMenu} key={info.id}>
                        {info.text}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
          <section>
            <div className='chevron left' id='left' onClick={handleSwipe}>
              <FontAwesomeIcon icon={faChevronLeft} size='2x' color='white' />
            </div>
            <div className='chevron right' ig='right' onClick={handleSwipe}>
              <FontAwesomeIcon icon={faChevronRight} size='2x' color='white' />
            </div>
            <ul className='imgContainer' ref={slideRef}>
              {womenData &&
                menData &&
                ((toggleTitle.id + 1) % 2
                  ? menData.map(data => {
                      return (
                        <li key={data.id}>
                          <div className='imgBox'>
                            <img src={data.img} alt='pictorial img' />
                          </div>
                        </li>
                      );
                    })
                  : womenData.map(data => {
                      return (
                        <li key={data.id}>
                          <div className='imgBox'>
                            <img src={data.img} alt='pictorial img' />
                          </div>
                        </li>
                      );
                    }))}
            </ul>
          </section>
        </Main>
      )}
    </>
  );
};

export default Archive;
