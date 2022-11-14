// 추천 carousel
import React, {useState, useEffect, useRef} from 'react';
import {
  RecCaContainer,
  Container,
  Carousel,
  ButtonDiv,
  Item,
  Item2,
  Item3,
  LikeIcon,
  ShowIcon,
  LikeShowDiv,
  RecCarImgDiv,
  RecCarThumbnail,
  RecCaTitle,
  LeftButton,
  NoneLeftButton,
  RightButton,
  NoneRightButton,
  RecUserImgContainer,
  RecUserImg,
  RecUserDiv,
} from './RecCarousel.style';

// 임시데이터
const items = [
  {
    icon: 'face',
    copy: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    name: '김싸피',
    like: '123',
    seen: '234',
  },
  {
    icon: 'pets',
    copy: '02. Sed do eiusmod tempor incididunt ut labore.',
    name: '김싸피',
    like: '123',
    seen: '234',
  },
  {
    icon: 'stars',
    copy: '03. Consectetur adipiscing elit.',
    name: '김싸피',
    like: '123',
    seen: '234',
  },
  {
    icon: 'invert_colors',
    copy: '04. Ut enim ad minim veniam, quis nostrud exercitation.',
    name: '김싸피',
    like: '123',
    seen: '234',
  },
  {
    icon: 'psychology',
    copy: '05. Llamco nisi ut aliquip ex ea commodo consequat.',
    name: '김싸피',
    like: '123',
    seen: '234',
  },
  {
    icon: 'brightness_7',
    copy: '06. Misi ut aliquip ex ea commodo consequat.',
    name: '김싸피',
    like: '123',
    seen: '234',
  },
  {
    icon: 'brightness',
    copy: '07. Misi ut aliquip ex ea commodo consequat.',
    name: '김싸피',
    like: '123',
    seen: '234',
  },
];

const RecCarousel = () => {
  const [item, setItem] = useState(items);

  const [index, setIndex] = useState(0);
  const carousel = useRef(null);

  const handleLeft = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    setIndex(index - 1);
  };

  const handleRight = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    setIndex(index + 1);
  };

  return (
    <>
      <RecCaContainer>
        <RecCaTitle>포켓폴리오 추천 작품</RecCaTitle>
        <Container>
          <Carousel ref={carousel}>
            {item.map(it => {
              const {copy, name, like, seen} = it;
              return (
                <Item>
                  {/* 이미지 */}
                  <RecCarImgDiv>
                    <RecCarThumbnail
                      src={process.env.PUBLIC_URL + '/assets/images/room.png'}
                    />
                  </RecCarImgDiv>
                  {/* 1차 설명 => 필요 없으면 삭제 */}
                  {/* <div>{copy}</div> */}
                  {/* 프로필 컴포넌트 */}
                  <Item2>
                    <RecUserDiv>
                      {/* 프로필 사진 */}
                      <RecUserImgContainer>
                        <RecUserImg
                          src={
                            process.env.PUBLIC_URL + '/assets/images/room.png'
                          }
                        />
                      </RecUserImgContainer>
                      <div>{name}</div>
                    </RecUserDiv>
                    <LikeShowDiv>
                      <LikeIcon />
                      <Item3>{like}</Item3>
                      <ShowIcon />
                      <div>{seen}</div>
                    </LikeShowDiv>
                  </Item2>
                </Item>
              );
            })}
          </Carousel>
        </Container>
        <ButtonDiv>
          {index !== 0 ? (
            <LeftButton
              onClick={e => {
                if (index !== 0) {
                  handleLeft(e);
                }
              }}
            />
          ) : (
            <NoneLeftButton />
          )}
          {index === 0 ? (
            <RightButton
              onClick={e => {
                if (index === 0) {
                  handleRight(e);
                }
              }}
            />
          ) : (
            <NoneRightButton />
          )}
        </ButtonDiv>
      </RecCaContainer>
    </>
  );
};

export default RecCarousel;
