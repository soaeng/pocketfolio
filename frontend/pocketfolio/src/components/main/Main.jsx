import React, {useState, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

import Nav from '../common/nav';
import {
  Container,
  Slider,
  Content,
  CarouselNav,
  CarouselNavButton,
  CarouselNavButtonNone,
  RoomButton,
  Item,
  Test,
} from './Main.style';
import Page1 from './carouselPage/page1';
import Page2 from './carouselPage/page2';
import RecCarousel from './RecCarousel';

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
    {
      title1:"설치가 필요없는",
      title2:"포트폴리오 툴",
      text1:"언제 어디서나 손쉽게 꾸밀 수 있는",
      text2:"3D 포트폴리오를 만들어보세요",
      buttonText:"바로 시작하기",
      
    },
    {
      title1:"설치가 필요없는2",
      title2:"포트폴리오 툴2",
      text1:"언제 어디서나 손쉽게 꾸밀 수 있는2",
      text2:"3D 포트폴리오를 만들어보세요2",
      buttonText:"바로 시작하기",
    }
  ];

  const [slideIndex, setSlideIndex] = useState(pageSlider);
  console.log(slideIndex, 123)

  const carousel = useRef(null);

  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate('/port');
  };



  // 5초마다 화면 전환을 위한 것
  // const delay = 5000;
  // const [isRunning, setIsRunning] = useState(true);

  // useInteval(
  //   () => {
  //     if (slideIndex === pageSlider.length) {
  //       setSlideIndex(1);
  //     } else setSlideIndex(slideIndex + 1);
  //   },
  //   isRunning ? delay : null,
  // );

  // const slideNav = index => {
  //   setSlideIndex(index);
  // };

  const handleLeft = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRight = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };


  return (
    <>
      {/* Navbar */}
      <Nav />
      {/* Main Carousel */}
      <Container>
        <Content ref={carousel}>
          {slideIndex.map(sl => {
            const {title1, title2, text1, text2, buttonText} = sl;
            return(
              <Item>
                <div>{title1}</div>
                <div>{title2}</div>
                <div>{text1}</div>
                <div>{text2}</div>
                <RoomButton onClick={buttonClickHandler}>{buttonText}</RoomButton>
              </Item>
            )
          })}
          <CarouselNav>
            <CarouselNavButton onClick={handleLeft}/>
            <CarouselNavButton onClick={handleRight}/>
          </CarouselNav>
        </Content>
      </Container>
      {/* 추천 Carousel */}
      <Test>
        <RecCarousel />
      </Test>
    </>
  );
}

export default Main;
