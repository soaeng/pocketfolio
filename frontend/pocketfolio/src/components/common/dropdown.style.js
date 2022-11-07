// styled Component
import styled from 'styled-components';
import {
  RiHomeSmileLine,
  RiLoginCircleLine,
  RiContactsLine,
} from 'react-icons/ri';

// 드롭다운
export const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  right: 10px;
  border-radius: 12px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;

// 드롭다운 리스트 부분
export const DropdownList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 0 0 12px 12px;
  &:hover {
    background-color: #a9957b;
  }
`;

export const DropdownA = styled.p`
  display: block;
  padding: 0 15px;
  line-height: inherit;
  cursor: pointer;
`;

// 드롭다운에서 프로필 부분
export const ProfileList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
  background-color: #afb4ff;
  color: #fff;
`;

export const ProfileDiv = styled.div`
  padding: 10px;
`;

export const FollowList = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
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
