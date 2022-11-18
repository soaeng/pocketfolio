import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {unfollowFunc, followFunc} from '../../store/oauthSlice';
import {getUserInfo} from '../../store/oauthSlice';

import {
  UserCard,
  UserItem,
  UserContainer,
  UserImgContainer,
  UserImg,
  UserInfoContainer,
  Icon,
  IconDiv,
  AlreadyFollowIcon,
  FollowIcon,
  UserNameDiv,
  UserDescDiv,
  FollowDiv,
  UserFollowDiv,
} from './UserSearch.style';

import UserProfile from '../common/UserProfile';

const UserSearch = ({data}) => {
  const user = useSelector(state => state.oauth.user);
  const dispatch = useDispatch();

  const [roomModal, setRoomModal] = useState(false); //프로필 모달 보이게 안보이게

  // 팔로우 상태 저장할 곳
  const [follow, setFollow] = useState('');

  // 팔로우, 언팔로우
  const handleFollow = async (userSeq, hasFollowed) => {
    if (user) {
      if (hasFollowed) {
        const {payload} = await dispatch(unfollowFunc(userSeq));
        if (payload) {
          setFollow(false);
        }
      } else {
        const {payload} = await dispatch(followFunc(userSeq));
        if (payload) {
          setFollow(true);
        }
      }
    }
  }

  useEffect(() => {
    handleFollow();
  }, []);

  // 특정 유저정보 담을 상태
  const [userInfo, setUserInfo] = useState([]);

  // 특정 유저정보 조회 함수
  const bringUserInfo = async userSeq => {
    const {payload} = await dispatch(getUserInfo(userSeq));
    setUserInfo(payload);
    console.log(payload, '특정 유저정보');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <UserCard>
        {data.map(it => {
          const {userSeq, name, profilePic, describe, followerTotal, followingTotal, hasFollowed} = it;
          return (
            <UserItem>
              {/* 팔로우 버튼 */}
              {/* 팔로우 | 로그인한 상태이고, 방 주인이 아닌 경우 가능 */}
              {user && user.userSeq !== userSeq && (
                <Icon>
                  <IconDiv className="follow" onClick={e => handleFollow(userSeq, hasFollowed)}>
                    {hasFollowed !== false ? <AlreadyFollowIcon /> : <FollowIcon />}
                  </IconDiv>
                </Icon>
              )}
              <UserContainer>
                {/* 사용자 프로필 사진 */}
                <UserImgContainer                   
                  onClick={e => {
                    setRoomModal(userSeq);
                    bringUserInfo(userSeq);
                  }}
                >
                  <UserImg
                    src={profilePic ? profilePic : '/assets/images/user.png'}
                  />
                  {userSeq === roomModal && <UserProfile userInfo={userInfo}/>}
                </UserImgContainer>
                {/* 유저 정보 */}
                <UserInfoContainer>
                  <UserNameDiv>{name}</UserNameDiv>
                  {/* <UserDescDiv>{describe}</UserDescDiv> */}
                  <FollowDiv>
                    <UserFollowDiv>팔로우 | {followerTotal}</UserFollowDiv>
                    <UserFollowDiv>팔로잉 | {followingTotal}</UserFollowDiv>
                  </FollowDiv>
                </UserInfoContainer>
              </UserContainer>
            </UserItem>
          );
        })}
      </UserCard>
    </>
  );
};

export default UserSearch;
