// styled Component
import styled from 'styled-components';

import {
  RiCloseFill,
  RiUserFollowFill,
  RiUserAddLine,
} from 'react-icons/ri';

export const UserProfileItem = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 30rem;
  height: 30rem;
  margin: 10px;
  padding: 25px;
  border-radius: 16px;
  border: 3px solid #ff9392;
  /* box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15); */
  z-index: 99999;
  left: 50%;
  bottom: 8%;
  transform: translate(-50%, 0);

  @media screen and (max-width: 35rem) {
    width: 85vw;
  }
`;

export const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  
`

// 유저 프로필 사진
export const UserProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserProfileImg = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
`

// 유저 정보 담는 div
export const UserProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`;

export const UserProNameDiv = styled.div`
  padding: 10px 0;
  font-size: large;
  font-weight: bold;
`

export const UserProDescDiv = styled.div`
  padding: 10px 0;
`

// 팔로우 버튼(팔로우 언팔로우 가능)
export const FollowDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  z-index: 9999999;
`

export const UserFollowDiv = styled.div`
  padding-right: 10px;
`
export const FollowIcon = styled(RiUserAddLine)`
  width: 100%;
  height: 100%;
`;

export const AlreadyFollowIcon = styled(RiUserFollowFill)`
  width: 100%;
  height: 100%;
`;

export const IconDiv = styled.div`
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;
  padding: 10px;
`;

// 취소 버튼
export const CancelBox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 1.7rem;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const CancelIcon = styled(RiCloseFill)`
  width: 100%;
  height: 100%;
`;

// 마이포켓 정보
export const RoomInfoDiv = styled.div`
  cursor: pointer;
`

export const RoomInfoImg = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
`

export const ScrollBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff9392;
    height: 15px;
    border-radius: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffd8d7;
    border-radius: 0.2rem;
  }
`;

export const RoomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

export const RoomName = styled.div`
  font-size: large;
  font-weight: bold;
`

export const ProfileLine = styled.hr`
  border-top: 1px solid lightgray;
  margin: 0;
`