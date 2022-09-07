import { useState, useRef, useEffect } from 'react';

const useInfiniteSwiper = (size, autoSlide = false) => {
  const [page, setPage] = useState(0);
  const swipedTarget = useRef(null);
  // swipedTarget은 ul임
  const [prevButton, setPrevButton] = useState(null);
  const [nextButton, setNextButton] = useState(null);
  const oldTrans = useRef(0);
  const trans = useRef(0);
  const start = useRef(0);
  const clicked = useRef(false);
  const debounce = useRef();
  const interval = useRef();
  const [render, setRender] = useState();

  useEffect(() => {
    if (swipedTarget.current) {
      const width = swipedTarget.current.getBoundingClientRect().width / size;

      (() => {
        setPage(1);
        swipedTarget.current.style.transition = '0s';
        trans.current = -width;
        swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
        oldTrans.current = trans.current;
      })();
    }
  }, []);

  useEffect(() => {
    // click

    const clickStart = ({ clientX }) => {
      clearTimeout(debounce.current);

      clicked.current = true;
      start.current = clientX;

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

        const width = swipedTarget.current.getBoundingClientRect().width / size;

        if (trans.current > -width * 0.5) {
          trans.current = 0;
          setPage(size - 2);

          const getLast = () => {
            swipedTarget.current.style.transition = '0s';
            trans.current = -width * (size - 2);
            swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
            oldTrans.current = trans.current;
          };

          debounce.current = setTimeout(getLast, 300);
        }

        [...Array(size)].forEach((_, i) => {
          if (i < size - 2) {
            if (trans.current <= -width * (i + 0.5) && trans.current > -width * (i + 1.5)) {
              trans.current = -width * (i + 1);
              setPage(i + 1);
            }
          }
        });

        if (trans.current <= -width * (size - 1.5)) {
          trans.current = -width * (size - 1);
          setPage(1);

          const getFirst = () => {
            if (swipedTarget.current) {
              swipedTarget.current.style.transition = '0s';
              trans.current = -width;
              swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
              oldTrans.current = trans.current;
            }
          };

          debounce.current = setTimeout(getFirst, 300);
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

        const width = swipedTarget.current.getBoundingClientRect().width / size;

        if (trans.current > -width * 0.5) {
          trans.current = 0;
          setPage(size - 2);

          const getLast = () => {
            swipedTarget.current.style.transition = '0s';
            trans.current = -width * (size - 2);
            swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
            oldTrans.current = trans.current;
          };

          debounce.current = setTimeout(getLast, 300);
        }

        [...Array(size)].forEach((_, i) => {
          if (i < size - 2) {
            if (trans.current <= -width * (i + 0.5) && trans.current > -width * (i + 1.5)) {
              trans.current = -width * (i + 1);
              setPage(i + 1);
            }
          }
        });

        if (trans.current <= -width * (size - 1.5)) {
          trans.current = -width * (size - 1);
          setPage(1);

          const getFirst = () => {
            swipedTarget.current.style.transition = '0s';
            trans.current = -width;
            swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
            oldTrans.current = trans.current;
          };

          debounce.current = setTimeout(getFirst, 300);
        }
      }

      if (swipedTarget.current) {
        swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
      }
      oldTrans.current = trans.current;
    };

    const prev = () => {
      if (swipedTarget.current) {
        swipedTarget.current.style.transition = '0.3s';
        const width = swipedTarget.current.getBoundingClientRect().width / size;

        if (page === 1) {
          trans.current = 0;
          oldTrans.current = trans.current;
          swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
          setPage(size - 2);

          const getLast = () => {
            swipedTarget.current.style.transition = '0s';
            trans.current = -width * (size - 2);
            swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
            oldTrans.current = trans.current;
          };

          debounce.current = setTimeout(getLast, 300);
        } else {
          trans.current = -width * (page - 1);
          swipedTarget.current.style.transform = `translateX(${-width * (page - 1)}px)`;
          oldTrans.current = -width * (page - 1);
          setPage(page - 1);
        }
      }
    };

    const next = () => {
      if (swipedTarget.current) {
        swipedTarget.current.style.transition = '0.3s';
        const width = swipedTarget.current.getBoundingClientRect().width / size;

        if (page === size - 2) {
          trans.current = -width * (size - 1);
          swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
          setPage(1);

          const getFirst = () => {
            swipedTarget.current.style.transition = '0s';
            trans.current = -width;
            swipedTarget.current.style.transform = `translateX(${trans.current}px)`;
            oldTrans.current = trans.current;
          };

          debounce.current = setTimeout(getFirst, 300);
        } else {
          trans.current = -width * (page + 1);
          swipedTarget.current.style.transform = `translateX(${-width * (page + 1)}px)`;
          oldTrans.current = -width * (page + 1);
          setPage(page + 1);
        }
      }
    };

    if (swipedTarget.current) {
      swipedTarget.current.addEventListener('mousedown', clickStart);
      swipedTarget.current.addEventListener('mousemove', clickMove);
      swipedTarget.current.addEventListener('mouseup', clickEnd);
      swipedTarget.current.addEventListener('mouseleave', clickEnd);

      swipedTarget.current.addEventListener('touchstart', touchStart, {
        passive: true,
      });
      swipedTarget.current.addEventListener('touchmove', touchMove, {
        passive: true,
      });
      swipedTarget.current.addEventListener('touchend', touchEnd, {
        passive: true,
      });
    }

    prevButton?.addEventListener('click', prev);
    nextButton?.addEventListener('click', next);

    if (autoSlide) {
      interval.current = setInterval(next, 5000);
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
      }

      prevButton?.removeEventListener('click', prev);
      nextButton?.removeEventListener('click', next);

      clearInterval(interval.current);
    };
  }, [size, page, prevButton, nextButton, swipedTarget]);

  return { swipedTarget, page, setPrevButton, setNextButton, setRender };
};

export default useInfiniteSwiper;
