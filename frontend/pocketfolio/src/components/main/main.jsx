import React, {useState, useEffect, useRef} from 'react';

import Nav from '../common/nav';
import {Container, Slider, Content, CarouselNav} from './main.style';
import Page1 from './carouselPage/page1';
import Page2 from './carouselPage/page2';

// Main Carousel 자동 화면 전환을 위한 함수 선언
const useInteval = (callback, delay) => {
  const savedCallback = useRef();
  const intervalIdRef = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      intervalIdRef.current = setInterval(tick, delay);
    }

    const id = intervalIdRef.current;
    return () => {
      clearInterval(id);
    };
  }, [delay]);
};

// Main 페이지
function Main() {
  const pageSlider = [
    {id: 1, component: <Page1 />},
    {id: 2, component: <Page2 />},
  ];

  const [slideIndex, setSlideIndex] = useState(1);

  // 5초마다 화면 전환을 위한 것
  const delay = 5000;
  const [isRunning, setIsRunning] = useState(true);

  useInteval(
    () => {
      if (slideIndex === pageSlider.length) {
        setSlideIndex(1);
      } else setSlideIndex(slideIndex + 1);
    },
    isRunning ? delay : null,
  );

  const slideNav = index => {
    setSlideIndex(index);
  };

  return (
    <>
      {/* Navbar */}
      <Nav />
      {/* Main Carousel */}
      <Container>
        <Slider>
          <Content>
            {pageSlider.map((obj, index) => {
              return (
                <div key={obj.id}>
                  {slideIndex === index + 1 && pageSlider[index]['component']}
                </div>
              );
            })}
            <CarouselNav>
              {Array.from({length: 2}).map((item, index) => (
                <button key={index} onClick={() => slideNav(index + 1)} />
              ))}
            </CarouselNav>
          </Content>
        </Slider>
      </Container>
    </>
  );
}

export default Main;
