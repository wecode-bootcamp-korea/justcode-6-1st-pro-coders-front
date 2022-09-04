import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const { kakao } = window;

const Main = styled.div`
  width: 50%;
  height: 100%;
  margin-right: 15px;
  z-index: -1;

  .mapDetail {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.disabledTitle};
  }
`;

const Map = ({ list }) => {
  useEffect(() => {
    if (list && list.length === 1) {
      // 지도
      const container = document.getElementById('map');
      // 마커
      const markerPosition = new kakao.maps.LatLng(list[0].lat, list[0].lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        title: list[0].name,
      });
      const options = {
        center: new kakao.maps.LatLng(list[0].lat, list[0].lng),
        marker: marker,
        level: 3,
      };
      const kakaoMap = new kakao.maps.Map(container, options);

      // 인포윈도우
      const iwPosition = new kakao.maps.LatLng(list[0].lat, list[0].lng);

      const iwContent =
        list[0].name.length >= 10
          ? list[0].name.length >= 12
            ? `<div style="width: 220px; margin: 0 auto; padding: 10px; border-radius: 50%; font-weight: 700;">${list[0].name}</div>`
            : `<div style="width: 180px; margin: 0 auto; padding: 10px; border-radius: 50%; font-weight: 700;">${list[0].name}</div>`
          : `<div style="margin: 0 auto; padding: 10px; border-radius: 50%; font-weight: 700;">${list[0].name}</div>`;

      const infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      marker.setMap(kakaoMap);
      infowindow.open(kakaoMap, marker);
    } else {
      // 지도
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(35.624915, 127.151226),
        level: 13,
      };
      const kakaoMap = new kakao.maps.Map(container, options);
      // 마커들
      list &&
        list.forEach((el) => {
          new kakao.maps.Marker({
            map: kakaoMap,
            position: new kakao.maps.LatLng(el.lat, el.lng),
            title: el.name,
          });
        });
    }
  }, [list]);

  return (
    <Main>
      <div id='map' className='mapDetail'></div>
    </Main>
  );
};

export default Map;
