import React from 'react';

import {
  UserProfileItem,
  UserProfileContainer,
  UserProfileImgContainer,
  UserProfileImg,
  UserProfileInfoContainer,
  UserProfileFollowBtn,
} from './UserProfile.style';

const UserProfile = ({userInfo}) => {
  // const {rooms} = userInfo;
  console.log(userInfo.rooms);

  return (
    <>
      <UserProfileItem>
        <UserProfileContainer>
          {/* 사용자 프로필 사진 */}
          <UserProfileImgContainer>
            <UserProfileImg
              src={
                userInfo.profilePic
                  ? userInfo.profilePic
                  : process.env.PUBLIC_URL + '/assets/images/room.png'
              }
            />
          </UserProfileImgContainer>
          {/* 사용자 정보 */}
          <UserProfileInfoContainer>
            <div>{userInfo.name}</div>
            <div>{userInfo.describe}</div>
            <div>팔로워 : {userInfo.followerTotal}</div>
            <div>팔로잉 : {userInfo.followingTotal}</div>
          </UserProfileInfoContainer>
          {/* <div>{rooms}</div> */}
        </UserProfileContainer>
        {/* 팔로우 버튼 */}
        <UserProfileFollowBtn>팔로우</UserProfileFollowBtn>
      </UserProfileItem>
    </>
  );
};

export default UserProfile;
