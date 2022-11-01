// styled Component
import styled from 'styled-components';
import {H3, Body1, Body2} from '../../styles/styles.style';

// Main Carousel
export const Container = styled.div``;

// Main Carousel Slider
// Main Carousel 배경색 container
export const ColorBox = styled.div`
  z-index: -1;
  position: absolute;
  margin-top: 5%;
  width: 70%;
  height: 40%;
  padding: 1% 0 1% 3%;
  border-radius: 0 0 15% 0;
  transition: all 0.5s;

  /* @media screen and (max-width: 1024px) {
    height: 20%;
  } */
`;

// carousel 전체 div
export const Content = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  width: 100%;
  flex-direction: row;
  flex: none;
`;

export const Items = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: center;
  border-radius: 0 0 15% 0;
`;

export const ContentItem = styled.div`
  padding-top: 3%;
  padding-left: 3%;
`;

// 이미지 컨테이너
export const ImageContainer = styled.img`
  background-color: beige;
  border-radius: 10px;
  width: 60vw;

  @media screen and (max-width: 1024px) {
    width: 50vw;
  }
`;

// Move to Room Button
export const RoomButton = styled.button`
  z-index: 9;
  width: 200px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  border: none;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    box-shadow: 0.5px 0.5px 0.5px #333;
    color: #000;
  }

  &:active {
    top: 2px;
    box-shadow: 0.5px 0.5px 0.5px #333;
  }
`;

export const RecCarouselContainer = styled.div`
  position: relative;
`;

// 글자 component 스타일
export const Title = styled(H3)``;

export const Text = styled(Body2)`
  color: white;
  opacity: 80%;
`;

// Carousel 버튼
export const CarouselNav = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 40%;
`;

// CarouselNavButton 색 변경
export const CarouselNavButton = styled.button`
  margin-left: 10px;
  margin-bottom: 8px;
  width: 5%;
  padding-bottom: 50%;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 2px gray;
  background-color: white;
  opacity: 80%;
`;

export const CarouselNavButtonNone = styled.button`
  margin-left: 10px;
  margin-bottom: 8px;
  width: 5%;
  padding-bottom: 50%;
  border-radius: 50%;
  border: none;
  background-color: white;
  opacity: 50%;
`;
