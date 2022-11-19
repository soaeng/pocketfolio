// styled Component
import styled from 'styled-components';
import {
  RiUserFollowFill,
  RiUserAddLine,
} from 'react-icons/ri';

// Card 모양
export const UserCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  height: 100%;
  scroll-behavior: smooth;
  padding: 3% 10%;

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

export const UserItem = styled.div`
  margin: 20px 10px;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;

// 유저 정보 담는 div
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 프로필 사진 div
export const UserImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2%;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }
`;

// 프로필 사진
export const UserImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
`;

// 유저 정보 담는 div
export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserNameDiv = styled.div`
  padding: 20px 10px 5px 10px;
  font-size: large;
  font-weight: bold;
`

export const UserDescDiv = styled.div`
  width:230px;
  text-overflow: ellipsis;
  overflow:hidden;
`

export const FollowDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`

export const UserFollowDiv = styled.div`
  padding: 0 5px;
`

// 팔로우 div
export const Icon = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const IconDiv = styled.div`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;

// 팔로우 아이콘
export const FollowIcon = styled(RiUserAddLine)`
  width: 100%;
  height: 100%;
`;

// 언팔로우 아이콘
export const AlreadyFollowIcon = styled(RiUserFollowFill)`
  width: 100%;
  height: 100%;
`;
