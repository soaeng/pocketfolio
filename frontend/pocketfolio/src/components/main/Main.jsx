import React, {useEffect, useRef, useReducer} from 'react';
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
  Items,
  ImageContainer,
  ColorBox,
} from './Main.style';
import RecCarousel from './RecCarousel';

const pageSlider = [
  {
    title1: '설치가 필요없는',
    title2: '포트폴리오 툴',
    text1: '언제 어디서나 손쉽게 꾸밀 수 있는',
    text2: '3D 포트폴리오를 만들어보세요',
    buttonText: '바로 시작하기',
  },
  {
    title1: '설치가 필요없는2',
    title2: '포트폴리오 툴2',
    text1: '언제 어디서나 손쉽게 꾸밀 수 있는2',
    text2: '3D 포트폴리오를 만들어보세요2',
    buttonText: '바로 시작하기',
  },
];

// Main 페이지
function Main() {
  const navigate = useNavigate();

  // 5초마다 화면 전환을 위한 것
  const carousel = useRef(null);
  const reducer = (state, action) => {
    carousel.current.scrollTo({
      top: 0,
      left: carousel.current.offsetWidth * (action - 1),
      behavior: 'smooth',
    });
    return action;
  };
  const [slideIndex, scrollCarousel] = useReducer(reducer, 1);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (slideIndex === pageSlider.length) {
        scrollCarousel(1);
      } else scrollCarousel(slideIndex + 1);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex]);

  // 바로 시작 버튼 이동
  const buttonClickHandler = () => {
    navigate('/port');
  };

  return (
    <>
      {/* Navbar */}
      <Nav />
      {/* Main Carousel */}
      <Container>
        <ColorBox />
        <Content ref={carousel}>
          {pageSlider.map((sl, index) => {
            const {title1, title2, text1, text2, buttonText} = sl;
            return (
              <Item>
                <Items>
                  <div>{title1}</div>
                  <div>{title2}</div>
                  <div>{text1}</div>
                  <div>{text2}</div>
                  <RoomButton onClick={buttonClickHandler}>
                    {buttonText}
                  </RoomButton>
                  <ImageContainer src="./assets/images/logo2.png" />
                </Items>
              </Item>
            );
          })}
          <CarouselNav>
            {slideIndex === 1 ? (
              <CarouselNavButton
                onClick={() => {
                  scrollCarousel(1);
                }}
              />
            ) : (
              <CarouselNavButtonNone
                onClick={() => {
                  scrollCarousel(1);
                }}
              />
            )}
            {slideIndex === 2 ? (
              <CarouselNavButton
                onClick={() => {
                  scrollCarousel(2);
                }}
              />
            ) : (
              <CarouselNavButtonNone
                onClick={() => {
                  scrollCarousel(2);
                }}
              />
            )}
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
