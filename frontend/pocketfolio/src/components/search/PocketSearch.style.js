// styled Component
import styled from 'styled-components';

import {RiHeart3Line, RiHeart3Fill, RiEyeLine} from 'react-icons/ri';

// Card 모양
export const PocketCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 5%;
`;

export const PocketItem = styled.div`
  margin: 10px;
  padding: 10px;
  width: 20%;
  height: 20%;
  min-width: 280px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
  /* background-color: blue; */
`;

export const PocketImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

export const PocketThumbnail = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

// 프로필 컴포넌트
export const PocketUserImgContainer = styled.div`
  padding: 0.5rem;
  height: 3.5rem;
  margin: 0;
  padding: 0;
`;

// Avatar Img
export const PocketUserImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const PocketUserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PocketUserDiv = styled.div`
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

export const IconDiv = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
