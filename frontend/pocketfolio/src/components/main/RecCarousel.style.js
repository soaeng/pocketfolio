// styled Component
import styled from 'styled-components';
import {H3, Body1, Body2} from '../../styles/styles.style';
import {RiHeart3Line, RiHeart3Fill, RiEyeLine} from 'react-icons/ri';

export const RecCaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
`;

//추천 포트폴리오 전체 감싼 것
export const Container = styled.div`
  width: 90%;
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

// 추천 포트폴리오 각각
export const Item = styled.div`
  display: flex;
  width: calc(84% / 4);
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
  margin: 1%;
  padding: 1%;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

// 캐러셀 버튼
export const ButtonDiv = styled.div`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  display: flex;
  width: 90%;
  justify-content: space-between;
  z-index: 100;
`;

// 캐러셀 왼쪽 버튼
export const LeftButton = styled.a`
  position: absolute;
  top: 50%;
  width: 3vmin;
  height: 3vmin;
  background: transparent;
  border-top: 1vmin solid #333;
  border-right: 1vmin solid #333;
  transition: all 200ms ease;
  left: 0;
  transform: translate3d(0, -50%, 0) rotate(-135deg);
  cursor: pointer;

  &:hover {
    border-color: #e75452;
    box-shadow: 0.5vmin -0.5vmin 0 #383838;
  }
`;

export const NoneLeftButton = styled.a`
  position: absolute;
  top: 50%;
  width: 3vmin;
  height: 3vmin;
  background: transparent;
  border-top: 1vmin solid lightgray;
  border-right: 1vmin solid lightgray;
  transition: all 200ms ease;
  left: 0;
  transform: translate3d(0, -50%, 0) rotate(-135deg);
  cursor: not-allowed;
`;

// 캐러셀 오른쪽 버튼
export const RightButton = styled.a`
  position: absolute;
  top: 50%;
  width: 3vmin;
  height: 3vmin;
  background: transparent;
  border-top: 1vmin solid #333;
  border-right: 1vmin solid #333;
  transition: all 200ms ease;
  right: 0;
  transform: translate3d(0, -50%, 0) rotate(45deg);
  cursor: pointer;

  &:hover {
    border-color: #e75452;
    box-shadow: 0.5vmin -0.5vmin 0 #383838;
  }
`;

export const NoneRightButton = styled.a`
  position: absolute;
  top: 50%;
  width: 3vmin;
  height: 3vmin;
  background: transparent;
  border-top: 1vmin solid lightgray;
  border-right: 1vmin solid lightgray;
  transition: all 200ms ease;
  right: 0;
  transform: translate3d(0, -50%, 0) rotate(45deg);
  cursor: not-allowed;
`;

export const Item2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Item3 = styled.div`
  padding-right: 0.5rem;
`;

export const LikeIcon = styled(RiHeart3Fill)`
  width: 100%;
  height: 100%;
`;

export const DislikeIcon = styled(RiHeart3Line)`
  width: 100%;
  height: 100%;
`;

export const ShowIcon = styled(RiEyeLine)`
  width: 100%;
  height: 100%;
  cursor: default;
`;

export const LikeShowDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const RecCarImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
`;

export const RecCarThumbnail = styled.img`
  width: 90%;
`;

// 글자 component 스타일
export const RecCaTitle = styled(Body1)`
  padding: 10px;
`;

export const RecUserImgContainer = styled.div`
  padding: 0.5rem;
  height: 3.5rem;
  margin: 0;
  padding: 0;
`;

export const RecUserImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const RecUserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
