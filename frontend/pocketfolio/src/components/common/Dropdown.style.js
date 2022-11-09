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
  right: 10px;
  border-radius: 12px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

// 드롭다운 리스트 부분
export const DropDownListBox = styled.div`
  background-color: #fff;
  border-radius: 0 0 12px 12px;
`;

export const DropdownList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #ffe4de;
  }
`;

export const DropdownA = styled.p`
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
`;

export const FollowList1 = styled.div`
  padding: 0 5px;
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
