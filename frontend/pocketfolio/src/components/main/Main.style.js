// styled Component
import styled from 'styled-components';

// Main Carousel
export const Container = styled.div`
  /* justify-content: space-between; */
  padding-top: 75px;
`;

// Main Carousel Slider
export const Slider = styled.div`
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Content = styled.div`
  background-color: gray;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

export const CarouselNav = styled.div`
  position: absolute;
  top: 115px;
`;

// CarouselNavButton 색 변경
export const CarouselNavButton = styled.button`
  margin-left: 10px;
  width: 5%;
  padding-bottom: 30%;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 2px gray;
  background-color: white;
  opacity: 80%;
`;

export const CarouselNavButtonNone = styled.button`
  margin-left: 10px;
  width: 5%;
  padding-bottom: 30%;
  border-radius: 50%;
  border: none;
  background-color: white;
  opacity: 50%;
`;

export const Test = styled.div`
  position: relative;
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  min-width: 150px;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  flex: none;
`;

// Move to Room Button
export const RoomButton = styled.button`
  z-index: 9;
  width: 200px;
  margin: 0.5rem;
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
