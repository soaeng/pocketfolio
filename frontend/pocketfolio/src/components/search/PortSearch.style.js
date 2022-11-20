// styled Component
import styled from 'styled-components';

import {RiHeart3Line, RiHeart3Fill, RiEyeLine} from 'react-icons/ri';

// Card 모양
export const PortCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 100%;
  scroll-behavior: smooth;
  padding: 0 10%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

// 각 아이템
export const PortItem = styled.div`
  margin: 20px 10px;
  padding: 10px;
  transition: 0.5s ease;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

// 마이포켓 썸네일
export const PortImgDiv = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

export const PortThumbnail = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

// 호버시
export const HoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  width: 230px;
  height: 230px;
  padding: 10px;
  opacity: 0;
  border-radius: 8px;
  cursor: pointer;
  z-index: 9;

  &:hover {
    opacity: 1;
  }

  &:hover .shadow {
    visibility: visible;
  }
`;

export const Shadow = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 8px;
  background-color: #ffb9ae41;
`;

// 호버시 보이는 버튼
export const PortSearchButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 15px;
  border-radius: 16px;
  border: none;
  background-color: #e75452;
  color: #fff;
  font-size: 18px;
  height: 20%;
  z-index: 2;
  cursor: pointer;

  &:hover {
    background-color: #c13136;
    color: #eeeeee;
  }
`;

// 프로필 컴포넌트
export const PortUserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-left: 5px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PortUserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const PortUserImgContainer = styled.div`
  padding: 0.5rem;
  height: 3.5rem;
  margin: 0;
  padding: 0;
`;

export const PortUserImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

export const PortUserName = styled.div`
  padding-left: 10px;
  max-width: 100px;
`

// 좋아요 클릭수 컴포넌트
export const LikeShowDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const LikeIcon = styled(RiHeart3Fill)`
  width: 100%;
  height: 100%;
  padding-right: 5px;
`;

export const DislikeIcon = styled(RiHeart3Line)`
  width: 100%;
  height: 100%;
`;

export const ShowIcon = styled(RiEyeLine)`
  width: 100%;
  height: 100%;
  padding-right: 5px;
`;

export const Item3 = styled.div`
  padding-right: 0.5rem;
`;

export const IconDiv = styled.div`
  height: 100%;
  width: 100%;
`;