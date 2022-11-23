// styled Component
import styled from 'styled-components';

import {RiHeart3Line, RiHeart3Fill, RiEyeLine} from 'react-icons/ri';

// Card 모양
export const PocketCard = styled.div`
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

export const PocketItem = styled.div`
  margin: 20px 10px;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

export const PocketImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    scale: 1.05;
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
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  padding: 5% 3% 0 3%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PocketName = styled.div`
  padding-left:10px;
  max-width: 130px;
`

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
  padding-right: 5px;
`;

export const LikeShowDiv = styled.div`
  display: flex;
  align-items: stretch;
  padding: 0 5px;
`;

export const Item3 = styled.div`
  padding-right: 0.5rem;
`;

export const IconDiv = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding-right: 5px;
`;
