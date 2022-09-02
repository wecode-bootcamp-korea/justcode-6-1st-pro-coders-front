import { useState, useRef, useEffect } from 'react';

const useSwiper = (size, perView = 1) => {
  const [page, setPage] = useState(0);
  const swipedTarget = useRef(null);
  // swipedTarget은 ul
  const [prevButton, setPrevButton] = useState(null);
  const [nextButton, setNextButton] = useState(null);
  const oldTrans = useRef(0);
  const start = useRef(0);
  const trans = useRef(0);
  const clicked = useRef(false);
  const debounce = useRef();

  useEffect(() => {
    if (swipedTarget.current) {
      setPage(0);
      swipedTarget.current.style.transition = '0s';
      trans.current = 0;
      swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
      oldTrans.current = trans.current;
    }
  }, [size]);

  useEffect(() => {
    // click
    const clickStart = ({ clientX }) => {
      clicked.current = true;
      start.current = clientX;
      clearTimeout(debounce.current);

      if (swipedTarget.current) {
        swipedTarget.current.style.transition = '0s';
      }
    };

    const clickMove = ({ clientX }) => {
      if (clicked.current) {
        trans.current = clientX - start.current + oldTrans.current;

        if (swipedTarget.current) {
          swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
        }
      }
    };

    const clickEnd = () => {
      if (swipedTarget.current) {
        swipedTarget.current.style.transition = '0.3s';
        debounce.current = setTimeout(() => (swipedTarget.current.style.transition = '0s'), 300);

        const width = (swipedTarget.current.getBoundingClientRect().width + 20) / size;

        if (trans.current > -width * 0.5) {
          trans.current = 0;
          setPage(0);
        }

        [...Array(size)].forEach((_, i) => {
          if (i < size - (2 + (perView - 1))) {
            if (trans.current <= -width * (i + 0.5) && trans.current > -width * (i + 1.5)) {
              trans.current = -width * (i + 1);
              setPage(i + 1);
            }
          }
        });

        if (trans.current <= -width * (size - (perView + 0.5))) {
          trans.current = -width * (size - perView);
          setPage(size - perView);
        }
      }

      if (swipedTarget.current) {
        swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
      }
      oldTrans.current = trans.current;
      clicked.current = false;
    };

    const touchStart = ({
      changedTouches: {
        0: { clientX },
      },
    }) => {
      start.current = clientX;
      clearTimeout(debounce.current);

      if (swipedTarget.current) {
        swipedTarget.current.style.transition = '0s';
      }
    };

    const touchMove = ({
      changedTouches: {
        0: { clientX },
      },
    }) => {
      trans.current = clientX - start.current + oldTrans.current;

      if (swipedTarget.current) {
        swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
      }
    };

    const touchEnd = () => {
      if (swipedTarget.current) {
        swipedTarget.current.style.transition = '0.3s';
        debounce.current = setTimeout(() => (swipedTarget.current.style.transition = '0s'), 300);

        const width = (swipedTarget.current.getBoundingClientRect().width + 20) / size;

        if (trans.current > -width * 0.5) {
          trans.current = 0;
          setPage(0);
        }

        [...Array(size)].forEach((_, i) => {
          if (i < size - (2 + (perView - 1))) {
            if (trans.current <= -width * (i + 0.5) && trans.current > -width * (i + 1.5)) {
              trans.current = -width * (i + 1);
              setPage(i + 1);
            }
          }
        });

        if (trans.current <= -width * (size - (perView + 0.5))) {
          trans.current = -width * (size - perView);
          setPage(size - perView);
        }
      }

      if (swipedTarget.current) {
        swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
      }
      oldTrans.current = trans.current;
    };

    const prev = () => {
      if (swipedTarget.current) {
        const width = (swipedTarget.current.getBoundingClientRect().width + 20) / size;

        trans.current = -width * (page - 1);
        swipedTarget.current.style.transform = `translateX(${-width * (page - 1)}px)`;
        oldTrans.current = -width * (page - 1);
      }

      setPage(page - 1);
    };

    const next = () => {
      if (swipedTarget.current) {
        const width = (swipedTarget.current.getBoundingClientRect().width + 20) / size;

        trans.current = -width * (page + 1);
        swipedTarget.current.style.transform = `translateX(${-width * (page + 1)}px)`;
        oldTrans.current = -width * (page + 1);
      }

      setPage(page + 1);
    };

    if (swipedTarget.current && size > perView) {
      swipedTarget.current.addEventListener('mousedown', clickStart);
      swipedTarget.current.addEventListener('mousemove', clickMove);
      swipedTarget.current.addEventListener('mouseup', clickEnd);
      swipedTarget.current.addEventListener('mouseleave', clickEnd);

      swipedTarget.current.addEventListener('touchstart', touchStart, { passive: true });
      swipedTarget.current.addEventListener('touchmove', touchMove, { passive: true });
      swipedTarget.current.addEventListener('touchend', touchEnd, { passive: true });

      prevButton?.addEventListener('click', prev);
      nextButton?.addEventListener('click', next);
    }

    return () => {
      if (swipedTarget.current) {
        swipedTarget.current.removeEventListener('mousedown', clickStart);
        swipedTarget.current.removeEventListener('mousemove', clickMove);
        swipedTarget.current.removeEventListener('mouseup', clickEnd);
        swipedTarget.current.removeEventListener('mouseleave', clickEnd);

        swipedTarget.current.removeEventListener('touchstart', touchStart);
        swipedTarget.current.removeEventListener('touchmove', touchMove);
        swipedTarget.current.removeEventListener('touchend', touchEnd);

        prevButton?.removeEventListener('click', prev);
        nextButton?.removeEventListener('click', next);
      }
    };
  }, [size, page, prevButton, nextButton, swipedTarget]);

  return { swipedTarget, page, setPrevButton, setNextButton, trans };
};

export default useSwiper;
