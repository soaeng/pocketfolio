import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {unfollowFunc, followFunc} from '../../store/oauthSlice';

import {
  UserProfileItem,
  UserProfileContainer,
  UserProfileImgContainer,
  UserProfileImg,
  UserProfileInfoContainer,
  IconDiv,
  FollowIcon,
  AlreadyFollowIcon,
  CancelBox,
  CancelIcon,
  UserFollowDiv,
  UserProNameDiv,
  UserProDescDiv,
  FollowDiv,
  UserInfo,
  RoomInfoDiv,
  RoomInfoImg,
  UserDiv,
} from './UserProfile.style';
import { useEffect } from 'react';

const UserProfile = ({closeUserModal, userInfo}) => {
  const user = useSelector(state => state.oauth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [follow, setFollow] = useState('');

  // room 이동
  const roomClickHandler = roomSeq => {
    navigate(`/room/${roomSeq}`)
  }

  // 팔로우, 언팔로우
  async function handleFollow() {
    if (user) {
      if (follow) {
        const {payload} = await dispatch(unfollowFunc(userInfo.userSeq));
        if (payload) {
          setFollow(false);
        }
      } else {
        const {payload} = await dispatch(followFunc(userInfo.userSeq));
        if (payload) {
          setFollow(true);
        }
      }
    }
  }

  // useEffect(() => {
  //   setFollow();
  // }, [follow]);

  return (
    <>
      <UserProfileItem>
        <CancelBox onClick={closeUserModal}>
          <CancelIcon />
        </CancelBox>
        <UserProfileContainer>
          <UserInfo>
            {/* 사용자 프로필 사진 */}
            <UserProfileImgContainer>
              <UserProfileImg
                src={
                  userInfo.profilePic
                    ? userInfo.profilePic
                    : '/assets/images/user.png'
                }
              />
            </UserProfileImgContainer>
            {/* 사용자 정보 */}
            <UserProfileInfoContainer>
              <UserDiv>
                <UserProNameDiv>{userInfo.name}</UserProNameDiv>
                {/* 팔로우 버튼 */}
                {/* 팔로우 | 로그인한 상태이고, 방 주인이 아닌 경우 가능 */}
                {user && user.userSeq !== userInfo.userSeq && (
                  <IconDiv onClick={handleFollow}>
                    {follow ? <AlreadyFollowIcon /> : <FollowIcon />}
                  </IconDiv>
                )}
              </UserDiv>
              <UserProDescDiv>{userInfo.describe}</UserProDescDiv>
              <UserProDescDiv>{userInfo.email}</UserProDescDiv>
              <FollowDiv>
                <UserFollowDiv>팔로워 : {userInfo.followerTotal}</UserFollowDiv>
                <UserFollowDiv>팔로잉 : {userInfo.followingTotal}</UserFollowDiv>
              </FollowDiv>
            </UserProfileInfoContainer>
          </UserInfo>
          <div>
            <hr/>
          </div>
          {userInfo.rooms && userInfo.rooms.map((room) => {
            const {roomSeq, thumbnail, isFollowing, like, name, category} = room
            return (
              <>
                <div>{name}</div>
                <RoomInfoDiv onClick={e => roomClickHandler(roomSeq)}>
                  <RoomInfoImg src={thumbnail ? thumbnail : '/assets/images/room_01.png'}/>
                </RoomInfoDiv>

              </>
            )
          })}
        </UserProfileContainer>
      </UserProfileItem>
    </>
  );
};

export default UserProfile;
