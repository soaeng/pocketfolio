// styled Component
import styled from 'styled-components';
import {
  RiHomeSmileLine,
  RiLoginCircleLine,
  RiContactsLine,
  RiUserFollowFill,
  RiUserAddLine,
} from 'react-icons/ri';

// 드롭다운
export const Dropdown = styled.div`
  position: absolute;
  right: 10px;
  border-radius: 12px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

export const DropdownList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffe4de;
  }
`;

export const DropdownListLast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 12px 12px;
  &:hover {
    background-color: #ffe4de;
  }
`;

export const DropdownP = styled.p`
  display: block;
  line-height: inherit;
  padding-right: 7%;
  cursor: pointer;
`;

// 드롭다운에서 프로필 부분
export const ProfileList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
  background-color: #ff6b69;
  color: #fff;
  padding: 10px;
`;

export const FollowList1 = styled.div`
  padding: 0 5px;
`;

export const ProfileDiv = styled.div`
  padding: 10px;
`;

export const ProfileImg = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

export const FollowList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  cursor: pointer;
`;

// 아이콘
export const HomeIcon = styled(RiHomeSmileLine)`
  width: 12%;
  height: 12%;
  padding: 0 15px;
`;

export const LogoutIcon = styled(RiLoginCircleLine)`
  width: 12%;
  height: 12%;
  padding: 0 15px;
`;

export const ProfileIcon = styled(RiContactsLine)`
  width: 12%;
  height: 12%;
  padding: 0 15px;
`;

export const ProfileLine = styled.hr`
  border-top: 1px solid lightgray;
  margin: 0;
`;

// follow list
export const FollowListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

export const FollowBox = styled.div`
  display: flex;
`

// follow Avatar Img
export const FollowImg = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

export const FollowName = styled.div`
  padding: 10px;
`;

export const ScrollBox = styled.div`
  height: 100.4px;
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
