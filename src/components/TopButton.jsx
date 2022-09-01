import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  display: block;
  position: fixed;
  width: 50px;
  height: 50px;
  right: 10%;
  bottom: 8%;
  background-color: white;
  border: 3px solid ${({ theme }) => theme.colors.footerBg};
  transition: 0.3s;
  cursor: pointer;
  z-index: 10;
  opacity: ${({ button }) => (button ? '1' : '0')};
  visibility: ${({ button }) => (button ? 'visible' : 'hidden')};
`;

const TopButton = () => {
  const [button, setButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > window.innerHeight ? setButton(true) : setButton(false);
    };

    window.addEventListener('scroll', handleShowButton);

    return () => window.removeEventListener('scroll', handleShowButton);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button className='hide' onClick={handleScrollTop} button={button}>
      <FontAwesomeIcon icon={faChevronUp} size='xl' />
    </Button>
  );
};

export default TopButton;
