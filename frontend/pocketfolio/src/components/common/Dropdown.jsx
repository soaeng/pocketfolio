import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store/oauthSlice';
import {deleteAllToken} from '../../api/jwt';
import {
  Dropdown,
  DropdownList,
  DropdownP,
  HomeIcon,
  LogoutIcon,
  ProfileIcon,
  ProfileList,
  FollowList,
  ProfileDiv,
  ProfileImg,
  DropdownListLast,
  FollowList1,
  ProfileLine,
} from './Dropdown.style';

const DropDown = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(user, '유저 나와라');

  // 마이포켓 이동 => 수정 필요
  const myPocketClickHandler = () => {
    navigate('/port');
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
        {user.profilePic === undefined ? (
            <ProfileImg src="./assets/images/user.png" />
        ) : (
            <ProfileImg src={user.profilePic}></ProfileImg>
        )}
        <ProfileDiv>{user.email}</ProfileDiv>
        <FollowList>
          <FollowList1>팔로워 | {user.followerTotal}</FollowList1>
          <FollowList1>팔로잉 | {user.followingTotal}</FollowList1>
        </FollowList>
      </ProfileList>
      <DropdownList onClick={myPocketClickHandler}>
        <HomeIcon />
        <DropdownP>마이포켓</DropdownP>
      </DropdownList>
      <DropdownList onClick={profileClickHandler}>
        <ProfileIcon />
        <DropdownP>회원정보</DropdownP>
      </DropdownList>
      <ProfileLine />
      <DropdownListLast onClick={logoutClickHandler}>
        <LogoutIcon />
        <DropdownP>로그아웃</DropdownP>
      </DropdownListLast>
    </Dropdown>
  );
};

export default DropDown;
