import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store/oauthSlice';
import {deleteAllToken} from '../../api/jwt';
import {
  Dropdown,
  DropdownList,
  DropdownA,
  HomeIcon,
  LogoutIcon,
  ProfileIcon,
  ProfileList,
  FollowList,
  ProfileDiv,
  DropDownListBox,
} from './dropdown.style';

const DropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.oauth.user);
  console.log(user, '유저 나와라');

  // 마이포켓 이동 => 수정 필요
  const myPocketClickHandler = () => {
    navigate('/room/1');
  };

  // 프로필 이동
  const profileClickHandler = () => {
    navigate('/profile');
  };

  // 로그아웃 클릭 시 이동
  const logoutClickHandler = () => {
    deleteAllToken();
    dispatch(logout());
    navigate('/main');
  };

  return (
    <Dropdown>
      <ProfileList>
        <ProfileDiv>profilePic</ProfileDiv>
        <ProfileDiv>{user.name}</ProfileDiv>
        <ProfileDiv>email</ProfileDiv>
        <FollowList>
          <div>팔로워 | {user.followerTotal}</div>
          <div>팔로잉 | {user.followingTotal}</div>
        </FollowList>
      </ProfileList>
      <DropDownListBox>
        <DropdownList onClick={myPocketClickHandler}>
          <HomeIcon />
          <DropdownA>마이포켓</DropdownA>
        </DropdownList>
        <DropdownList onClick={profileClickHandler}>
          <ProfileIcon />
          <DropdownA>회원정보</DropdownA>
        </DropdownList>
        <DropdownList onClick={logoutClickHandler}>
          <LogoutIcon />
          <DropdownA>로그아웃</DropdownA>
        </DropdownList>
      </DropDownListBox>
    </Dropdown>
  );
};

export default DropDown;
