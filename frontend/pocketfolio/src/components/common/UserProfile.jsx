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
  UserProfileFollowBtn,
  IconDiv,
  FollowIcon,
  AlreadyFollowIcon,
} from './UserProfile.style';

const UserProfile = ({userInfo}) => {
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
                  : '/assets/images/user.png'
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
          {userInfo.rooms && userInfo.rooms.map((room) => {
            const {roomSeq, thumbnail, isFollowing} = room
            // console.log(isFollowing, 1234)
            return (
              <>
                <div onClick={e => roomClickHandler(roomSeq)}> {/* 확인 필요*/}
                  <img src={thumbnail ? thumbnail : process.env.PUBLIC_URL + '/assets/images/room_01.png'}/>
                </div>
                {/* 팔로우 | 로그인한 상태이고, 방 주인이 아닌 경우 가능 */} {/* 확인 필요*/}
                {user && user.userSeq !== userInfo.userSeq && (
                  <IconDiv onClick={handleFollow}>
                    {follow ? <AlreadyFollowIcon /> : <FollowIcon />}
                  </IconDiv>
                )}
              </>
            )
          })}
        </UserProfileContainer>
        {/* 팔로우 버튼 */}
        
        <UserProfileFollowBtn>팔로우</UserProfileFollowBtn>
      </UserProfileItem>
    </>
  );
};

export default UserProfile;
