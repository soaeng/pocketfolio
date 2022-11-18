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
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 30rem;
  height: 30rem;
  margin: 10px;
  padding: 25px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
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
  align-items: center;
  
`

// 유저 프로필 사진
export const UserProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserProfileImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: baseline;
`

// 유저 정보 담는 div
export const UserProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`

export const UserFollowDiv = styled.div`
  padding: 0 5px;
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
`;

// 취소 버튼
export const CancelBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.7rem;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const CancelIcon = styled(RiCloseFill)`
  width: 100%;
  height: 100%;
`;

// 마이포켓 정보
export const RoomInfoDiv = styled.div``

export const RoomInfoImg = styled.img`
  height: 200px;
  width: 200px;
`