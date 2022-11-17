// styled Component
import styled from 'styled-components';

import {
  RiUserFollowFill,
  RiUserAddLine,
} from 'react-icons/ri';

export const UserProfileItem = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;

export const UserProfileContainer = styled.div`
  display: flex;
`;

// Avatar Container
export const UserProfileImgContainer = styled.div`
  padding: 0.5rem;
  height: 3.5rem;
  /* align-items: center; */
`;

// Avatar Img
export const UserProfileImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export const UserProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserProfileFollowBtn = styled.button`
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
