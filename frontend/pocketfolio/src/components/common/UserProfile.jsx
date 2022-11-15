import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {getUserInfo} from '../../store/oauthSlice';
import {
  UserProfileItem,
  UserProfileContainer,
  UserProfileImgContainer,
  UserProfileImg,
  UserProfileInfoContainer,
  UserProfileFollowBtn,
} from './UserProfile.style';

const UserProfile = () => {
  const dispatch = useDispatch();

  const [userProfile, setUserProfile] = useState('');

  // useEffect(() => {
  //   dispatch(getUserInfo()).then(res => {
  //     setUserProfile(res.payload.data);
  //     console.log(res.payload.data, 123);
  //   });
  // }, []);

  return (
    <>
      <UserProfileItem>
        <UserProfileContainer>
          {/* 사용자 프로필 사진 */}
          <UserProfileImgContainer>
            <UserProfileImg
              src={process.env.PUBLIC_URL + '/assets/images/room.png'}
            />
          </UserProfileImgContainer>
          {/* 사용자 정보 */}
          <UserProfileInfoContainer>
            <div>name</div>
            <div>describe</div>
            <div>followerTotal</div>
            <div>followingTotal</div>
          </UserProfileInfoContainer>
          <div>rooms</div>
        </UserProfileContainer>
        {/* 팔로우 버튼 */}
        <UserProfileFollowBtn>팔로우</UserProfileFollowBtn>
      </UserProfileItem>
    </>
  );
};

export default UserProfile;
