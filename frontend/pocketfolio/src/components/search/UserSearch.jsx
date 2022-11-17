import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {unfollowFunc, followFunc} from '../../store/oauthSlice';
import {
  UserCard,
  UserItem,
  UserContainer,
  UserImgContainer,
  UserImg,
  UserInfoContainer,
  UserFollowBtn,
  IconDiv,
  AlreadyFollowIcon,
  FollowIcon,
} from './UserSearch.style';

const UserSearch = ({data}) => {
  console.log(data, 123456)
  const user = useSelector(state => state.oauth.user);
  const dispatch = useDispatch();

  const [follow, setFollow] = useState(data.hasFollowed);

  // 팔로우, 언팔로우
  async function handleFollow() {
    if (user) {
      if (follow) {
        const {payload} = await dispatch(unfollowFunc(data.userSeq));
        if (payload) {
          setFollow(false);
        }
      } else {
        const {payload} = await dispatch(followFunc(data.userSeq));
        if (payload) {
          setFollow(true);
        }
      }
    }
  }

  return (
    <>
      <UserCard>
        {data.map(it => {
          const {userSeq, name, profilePic, describe, followerTotal, followingTotal, hasFollowed} = it;
          return (
            <UserItem>
              <UserContainer>
                {/* 사용자 프로필 사진 */}
                <UserImgContainer>
                  <UserImg
                    src={profilePic ? profilePic : '/assets/images/user.png'}
                  />
                </UserImgContainer>
                {/* 사용자 정보 */}
                <UserInfoContainer>
                  <div>{name}</div>
                  <div>{describe}</div>
                  <div>{followerTotal}</div>
                  <div>{followingTotal}</div>
                </UserInfoContainer>
              </UserContainer>
              {/* 팔로우 버튼 */}
              {/* 팔로우 | 로그인한 상태이고, 방 주인이 아닌 경우 가능 */}
          {user && user.userSeq !== data.userSeq && (
            <IconDiv className="follow" onClick={handleFollow}>
              {follow ? <AlreadyFollowIcon /> : <FollowIcon />}
            </IconDiv>
          )}
            </UserItem>
          );
        })}
      </UserCard>
    </>
  );
};

export default UserSearch;
