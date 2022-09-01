import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  display: block;
  position: fixed;
  width: 50px;
  height: 50px;
  right: 15%;
  bottom: 8%;
  border: 3px solid ${(props) => props.theme.colors.footerBg};
  transition: opacity 300ms ease-in-out;
  cursor: pointer;
  z-index: 10;
`;

const TopButton = (props) => {
  const [button, setButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > 750 && window.scrollY < 3590 // 메인페이지에서 footer까지 오면 사라짐
        ? setButton(true)
        : setButton(false);
    };
    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  });

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setButton(false); // 스크롤 올라가면 버튼 숨기기
  };

  return (
    <>
      {/* button state에 따라 opacity변경 */}
      <Button
        className='hide'
        onClick={handleScrollTop}
        style={{ opacity: button ? '100%' : '0%' }}
      >
        <FontAwesomeIcon icon={faChevronUp} size='xl' />
      </Button>
    </>
  );
};

export default TopButton;
