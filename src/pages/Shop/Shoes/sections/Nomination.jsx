import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styled from 'styled-components';
import MdPick from './MdPick';

const StyledNomination = styled.div`
  .item-nomination-inner-box {
    margin: 0 auto;
    width: 1180px;
    padding-top: 50px;

    .nomination-title {
      margin: 0 auto;
      font: bold 40px/1 'Poppins';
    }
    .nomination-text {
      margin: 0 auto;
      margin-top: 10px;
      font: 20px/1 'apple';
    }
    .item-nomination-scroll {
      /* position: relative;
			right: 400px; */
      width: 100%;
      transition: 0.5;
      .swiper {
        width: 100%;
        height: 570px;

        &:hover .swiper-button-prev::after {
          opacity: 1;
        }
        &:hover .swiper-button-next::after {
          opacity: 1;
        }
      }
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .swiper-button-prev {
      width: 50px;
      height: 50px;
      opacity: 1;
      transition: 0.5;
      &::after {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 30px;
        line-height: 1.7;
        color: #fff;
        background: #00000090;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
    }
    .swiper-button-next {
      width: 50px;
      height: 50px;
      &::after {
        width: 100%;
        height: 100%;
        text-align: center;
        font-size: 30px;
        line-height: 1.7;
        color: #fff;
        background: #00000090;
        opacity: 0;
        transition: opacity 0.5s ease;
      }
    }
  }
`;

function Nomination() {
  const [nomination, setNomination] = useState(null);

  useEffect(() => {
    fetch('/data/nominationData.json')
      .then(res => res.json())
      .then(res => {
        setNomination(res);
      });
  }, []);

  return (
    <StyledNomination>
      <div className='item-nomination-inner-box'>
        <p className='nomination-title'>MD'S PICK</p>
        <p className='nomination-text'>MD가 선정한 추천상품을 소개합니다.</p>
        <div className='item-nomination-scroll'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className='mySwiper'
          >
            {nomination &&
              nomination.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <MdPick item={item} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </StyledNomination>
  );
}

export default Nomination;
