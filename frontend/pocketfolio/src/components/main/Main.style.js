// styled Component
import styled from 'styled-components';

// Main Carousel
export const Container = styled.div`
  padding-top: 75px;
`;

// Main Carousel Slider
export const ColorBox = styled.div`
  z-index: -1;
  position: absolute;
  background-color: beige;
  margin-top: 3%;
  width: 70%;
  padding: 1% 0 1% 3%;
  border-radius: 0 0 15% 0;
`;

export const Content = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  flex: none;
  & ${ColorBox} {
    background-color: red;
  }
`;

export const Items = styled.div`
  margin-top: 3%;
  width: 70%;
  padding: 1% 0 1% 3%;
  border-radius: 0 0 15% 0;
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

// Carousel 버튼
export const CarouselNav = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 170px;
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

export const ImageContainer = styled.img``;

export const Test = styled.div`
  position: relative;
`;
