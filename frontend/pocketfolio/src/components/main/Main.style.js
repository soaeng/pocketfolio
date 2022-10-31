// styled Component
import styled from 'styled-components';

// Main Carousel
export const Container = styled.div`
  justify-content: space-between;
`;

// Main Carousel Slider
export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
`;
export const CarouselNav = styled.div`
  position: absolute;
  top: 110px;
`;

// CarouselNavButton 색 변경
export const CarouselNavButton = styled.button`
  margin-left: 10px;
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
  width: 5%;
  padding-bottom: 50%;
  border-radius: 50%;
  border: none;
  background-color: white;
  opacity: 50%;
`;

export const Test = styled.div`
  position: relative;
  top: 300px;
`;
