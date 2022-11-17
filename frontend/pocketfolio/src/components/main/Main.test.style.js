// styled Component
import styled from 'styled-components';
import {H3, Body1, Body2} from '../../styles/styles.style';
import {AiOutlineSearch} from 'react-icons/ai';

// Main Carousel
export const Container = styled.div``;

// Main Carousel Slider
// Main Carousel 배경색 container
export const ColorBox = styled.div`
  z-index: -1;
  position: absolute;
  margin-top: 5%;
  width: 70%;
  height: 280px;
  padding: 1% 0 1% 3%;
  border-radius: 0 0 15% 0;
  transition: all 0.5s;

  @media screen and (max-width: 1024px) {
    height: 260px;
  }

  @media screen and (max-width: 900px) {
    height: 230px;
  }

  @media screen and (max-width: 600px) {
    height: 180px;
  } ;
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
  padding: 0.8rem 1rem;
  border-radius: 24px;
  border: none;
  background-color: #fff;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

export const RecCarouselContainer = styled.div`
  position: relative;
`;

// 글자 component 스타일
export const Title = styled(H3)`
  font-weight:bold;
`;

export const Text = styled(Body2)`
  color: white;
`;

// Carousel 버튼
export const CarouselNav = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 280px;

  @media screen and (max-width: 1440px) {
    top: 280px;
  }

  @media screen and (max-width: 1024px) {
    top: 250px;
  }

  @media screen and (max-width: 900px) {
    top: 220px;
  }

  @media screen and (max-width: 600px) {
    top: 180px;
  } ;
`;

export const Text1 = styled(Body2)`
  color: #333;
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

// SearchInput
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 0.5px solid #bbb;
  width: 40%;
  height: 40px;
  min-width: 200px;
  padding: 0px 30px;
`;
export const SearchInput = styled.input`
  width: 80%;
  height: 25px;
  border: none;
  padding: 0 10px;
  font-size: 17px;
  background-color: transparent;

  &::placeholder {
    font-size: 17px;
  }

  &:focus {
    border: none;
    outline: none;
    padding: 0 10px;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  height: 25px;
  width: 25px;
`;

export const SearchDiv = styled.div`
display:flex;
justify-content:center;
margin-top:5%`