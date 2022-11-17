// styled Component
import styled from 'styled-components';
import {
  RiUserFollowFill,
  RiUserAddLine,
} from 'react-icons/ri';

// Card 모양
export const UserCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 5%;
`;

export const UserItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  width: 90%;
  /* min-width: 280px; */
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;

export const UserContainer = styled.div`
  display: flex;
`;

export const RecCarImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
`;

export const RecCarThumbnail = styled.img`
  width: 90%;
`;

// Avatar Container
export const UserImgContainer = styled.div`
  padding: 0.5rem;
  height: 3.5rem;
  /* align-items: center; */
`;

// Avatar Img
export const UserImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserFollowBtn = styled.button`
  padding: 0.5rem 1rem;
  margin: 15px;
  border-radius: 16px;
  border: none;
  background-color: #e75452;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #c13136;
    color: #eeeeee;
  }
`;

export const IconDiv = styled.div`
  cursor: pointer;
  width: 1.3rem;
  height: 1.3rem;

  &.follow {
    margin-right: 0.7rem;
  }

  &.edit {
    margin-right: 0.7rem;
  }

  &:hover {
    color: black;
  }
`;

export const FollowIcon = styled(RiUserAddLine)`
  width: 100%;
  height: 100%;
`;

export const AlreadyFollowIcon = styled(RiUserFollowFill)`
  width: 100%;
  height: 100%;
`;
