// styled Component
import styled from 'styled-components';

import {RiHeart3Line, RiHeart3Fill, RiEyeLine} from 'react-icons/ri';

// Card 모양
export const PortCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 5%;
`;

export const PortItem = styled.div`
  margin: 10px;
  padding: 10px;
  width: 20%;
  height: 20%;
  min-width: 280px;
  transition: 0.5s ease;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;

  &:hover {
    /* background-color: darkgray; */
  }
`;

export const PortImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
`;

export const PortThumbnail = styled.img`
  width: 90%;
  /* filter: brightness(1); */

  /* &:hover {
    filter: brightness(0.5);
  } */
`;

export const HoverDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  padding: 10px;
  height: 25%;
  min-width: 260px;
  border-radius: 16px;
  transition: 0.5s ease;
  opacity: 0;
  cursor: pointer;
  z-index: 9;
  /* background-color: aqua; */

  &:hover {
    opacity: 1;
  }
`;

export const PortSearchButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 15px;
  border-radius: 16px;
  border: none;
  background-color: #e75452;
  color: #fff;
  font-size: 18px;
  height: 20%;
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

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PortUserImgContainer = styled.div`
  padding: 0.5rem;
  height: 3.5rem;
  margin: 0;
  padding: 0;
`;

// Avatar Img
export const PortUserImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const PortUserDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Item3 = styled.div`
  padding-right: 0.5rem;
`;
