import React, {useState, useEffect, useRef, useReducer} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Nav from '../common/Nav';
import {
  Container,
  SearchDiv,
  Content,
  CarouselNav,
  CarouselNavButton,
  CarouselNavButtonNone,
  RoomButton,
  Item,
  Items,
  ImageContainer,
  ColorBox,
  ContentItem,
  Title,
  Text,
  RecCarouselContainer,
  SearchContainer,
  SearchIcon,
  SearchInput
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
  // 로그인 유저 정보 가져오기
  const user = useSelector(state => state.oauth.user);

  const navigate = useNavigate();

  const color1 = {
    backgroundColor: '#f3a9a1',
  };
  const color2 = {
    backgroundColor: '#7db0e0',
  };

  let _style = {
    backgroundColor: '#f3a9a1',
  };

  // 검색어
  const [word, setWord] = useState('');

  // 입력창 변화 감지
  const onChange = e => {
    setWord(e.target.value);
  };

  // 검색어 창 입력
  const onSubmit = async e => {
    e.preventDefault();
    navigate('/search', {
      state: {
        search: word,
      },
    });
    setWord(''); //submit 후 창 비우기
  };

  // 검색어 창 엔터시 입력
  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      setWord(word);
      onSubmit(event);
    }
  };

  // 5초마다 화면 전환을 위한 것
  const carousel = useRef(null);
  const reducer = (state, action) => {
    _style = action === 1 ? color1 : color2;
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

  // 바로 시작 버튼 이동
  const moveLoginClickHandler = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Navbar */}
      <Nav />

      {/* Main Carousel */}
      <Container>
        <ColorBox style={_style} />
        <Content ref={carousel}>
          {pageSlider.map((sl, index) => {
            const {title1, title2, text1, text2, buttonText} = sl;
            return (
              <Item>
                <Items>
                  <ContentItem>
                    <Title>{title1}</Title>
                    <Title>{title2}</Title>
                    <Text>{text1}</Text>
                    <Text>{text2}</Text>
                    {user === null ? (<RoomButton onClick={moveLoginClickHandler}>시작하기</RoomButton>):(<RoomButton onClick={buttonClickHandler}>
                      {buttonText}
                    </RoomButton>)}
                  </ContentItem>
                  <div>
                    <ImageContainer src="./assets/images/logo2.png" />
                  </div>
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
      {/* 검색창 */}
      <SearchDiv>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            placeholder="검색어를 입력해주세요"
            onKeyDown={keyDownHandler}
            onChange={onChange}
            value={word}
          />
        </SearchContainer>
      </SearchDiv>
      {/* 추천 Carousel */}
      <RecCarouselContainer>
        <RecCarousel />
      </RecCarouselContainer>
      {/* 추천 Carousel */}
      <RecCarouselContainer>
        <RecCarousel />
      </RecCarouselContainer>
    </>
  );
}

export default Main;
