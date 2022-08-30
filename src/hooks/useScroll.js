import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const newScrollY = useRef(0);
  const oldScrollY = useRef(0);

  useEffect(() => {
    const scrollHandler = () => {
      newScrollY.current = window.scrollY;

      newScrollY.current > oldScrollY.current ? setIsScrollDown(true) : setIsScrollDown(false);
      newScrollY.current > 10 ? setIsScrolled(true) : setIsScrolled(false);

      oldScrollY.current = newScrollY.current;
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return { isScrollDown, isScrolled };
};

export default useScroll;
