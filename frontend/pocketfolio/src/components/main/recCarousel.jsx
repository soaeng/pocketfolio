// 추천 carousel
import React, { useState, useEffect, useRef } from "react";
import {Container, Carousel, Item, Ui} from './recCarousel.style'

// 임시데이터
const items = [
    {
        icon:"face",
        copy:'01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },{
        icon:"pets",
        copy:'02. Sed do eiusmod tempor incididunt ut labore.'
    },{
        icon:"stars",
        copy:'03. Consectetur adipiscing elit.'
    },{
        icon:"invert_colors",
        copy:'04. Ut enim ad minim veniam, quis nostrud exercitation.'
    },{
        icon:"psychology",
        copy:'05. Llamco nisi ut aliquip ex ea commodo consequat.'
    },{
        icon:"brightness_7",
        copy:'06. Misi ut aliquip ex ea commodo consequat.'
    },{
      icon:"brightness",
      copy:'07. Misi ut aliquip ex ea commodo consequat.'
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
    <Container>
      <Carousel ref={carousel}>
        {item.map((it) => {
          const {icon, copy} = it;
          return(
            <Item>
              <div>{icon}</div>
              <div>{copy}</div>
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