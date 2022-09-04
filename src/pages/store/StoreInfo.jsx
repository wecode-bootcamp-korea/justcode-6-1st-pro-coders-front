import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  width: 95%;
  padding: 40px 15px;
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  cursor: pointer;

  .name {
    margin-bottom: 15px;
    font-size: 22px;
    font-weight: 700;
  }
  .address {
    margin-bottom: 20px;
    line-height: 20px;
    color: ${(props) => props.theme.colors.disabledTitle};
    font-size: 16px;
  }

  .en {
    line-height: 23px;
    font-family: 'Poppins', 'Spoqa Han Sans Neo', 'sans-serif';
  }

  .bold {
    display: inline-block;
    width: 40px;
    font-weight: 900;
    font-size: 14px;
  }
`;

const StoreInfo = ({ id, name, address, tel, time, handleMapLocation }) => {
  return (
    <Main id={id} onClick={handleMapLocation}>
      <h5 className='name'>{name}</h5>
      <p className='address'>{address}</p>
      <p className='en'>
        <span className='bold'>TEL</span>
        {tel}
      </p>
      <p className='en'>
        <span className='bold'>TIME</span>
        {time}
      </p>
    </Main>
  );
};

export default StoreInfo;
