import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {unfollowFunc, followFunc} from '../../store/oauthSlice';
import {getMyFollowing} from '../../store/oauthSlice';
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
  ScrollBox,
  RoomBox,
  RoomName,
  ProfileLine,
} from './UserProfile.style';

const UserProfile = props => {
  const closeUserModal = props.closeUserModal;
  const userInfo = props.userInfo;
  const user = useSelector(state => state.oauth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [follow, setFollow] = useState('');
  const [followingList, setFollowingList] = useState([]);

  // 팔로잉 목록 가져오기
  const getFollowing = async () => {
    const {payload} = await dispatch(getMyFollowing());
    setFollowingList(payload);
  };

  useEffect(() => {
    if (user) {
      getFollowing();
    }
  }, []);

  useEffect(() => {
    followingList.forEach(element => {
      if (element.userSeq === userInfo.userSeq) {
        setFollow(true);
      }
    });
  }, [followingList]);

  // room 이동
  const roomClickHandler = roomSeq => {
    navigate(`/room/${roomSeq}`);
  };

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

  // 이미지 오류인 경우 기본 이미지 보이게
  const onErrorImg = e => {
    e.target.src = '/assets/images/room_01.PNG';
  };

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
                    {follow ||
                    (userInfo.rooms && userInfo.rooms[0].isFollowing) ? (
                      <AlreadyFollowIcon />
                    ) : (
                      <FollowIcon />
                    )}
                  </IconDiv>
                )}
              </UserDiv>
              <FollowDiv>
                <UserFollowDiv>
                  팔로워 :{' '}
                  {follow ? userInfo.followerTotal + 1 : userInfo.followerTotal}
                </UserFollowDiv>
                <UserFollowDiv>
                  팔로잉 : {userInfo.followingTotal}
                </UserFollowDiv>
              </FollowDiv>
              <UserProDescDiv>{userInfo.describe}</UserProDescDiv>
              <UserProDescDiv>{userInfo.email}</UserProDescDiv>
            </UserProfileInfoContainer>
          </UserInfo>
          <div>
            <ProfileLine />
          </div>
          <ScrollBox>
            {userInfo.rooms &&
              userInfo.rooms.map(room => {
                const {roomSeq, thumbnail, name} = room;
                return (
                  <>
                    <RoomBox>
                      <RoomName>{name}</RoomName>
                      <RoomInfoDiv onClick={e => roomClickHandler(roomSeq)}>
                        <RoomInfoImg
                          onError={onErrorImg}
                          src={
                            thumbnail ? thumbnail : '/assets/images/room_01.PNG'
                          }
                        />
                      </RoomInfoDiv>
                    </RoomBox>
                  </>
                );
              })}
          </ScrollBox>
        </UserProfileContainer>
      </UserProfileItem>
    </>
  );
};

export default UserProfile;
