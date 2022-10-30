// 추천 carousel
import React, { useState, useEffect, useRef } from "react";
import {Container, Carousel, Item, Ui, Item3} from './recCarousel.style'

// 임시데이터
const items = [
    {
        icon:"face",
        copy:'01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: '김싸피',
        like: '123',
        seen: '234'
    },{
        icon:"pets",
        copy:'02. Sed do eiusmod tempor incididunt ut labore.',
        name: '김싸피',
        like: '123',
        seen: '234'
    },{
        icon:"stars",
        copy:'03. Consectetur adipiscing elit.',
        name: '김싸피',
        like: '123',
        seen: '234'
    },{
        icon:"invert_colors",
        copy:'04. Ut enim ad minim veniam, quis nostrud exercitation.',
        name: '김싸피',
        like: '123',
        seen: '234'
    },{
        icon:"psychology",
        copy:'05. Llamco nisi ut aliquip ex ea commodo consequat.',
        name: '김싸피',
        like: '123',
        seen: '234'
    },{
        icon:"brightness_7",
        copy:'06. Misi ut aliquip ex ea commodo consequat.',
        name: '김싸피',
        like: '123',
        seen: '234'
    },{
      icon:"brightness",
      copy:'07. Misi ut aliquip ex ea commodo consequat.',
      name: '김싸피',
      like: '123',
      seen: '234'
  }
];

const RecCarousel = () => {
  const [item, setItem] = useState(items);
  const carousel = useRef(null)

  const handleLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRight = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return(
    <>
      <p>포켓폴리오 추천 작품</p>
    <Container>
      <Carousel ref={carousel}>
        {item.map((it) => {
          const {icon, copy, name, like, seen} = it;
          return(
            <Item>
              <div>{icon}</div>
              <div>{copy}</div>
              <hr/>
              <Item3>
                <div>{name}</div>
                <div>❤ {like}</div>
                <div>👁 {seen}</div>
              </Item3>
            </Item>
          )
        })}
      </Carousel>
    </Container>
    <Ui>
      <button onClick={handleLeft}>{"<"}</button>
      <button onClick={handleRight}>{">"}</button>
    </Ui>
  </>
  );
}

export default RecCarousel