import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout, getMyFollowing, getMyFollower} from '../../store/oauthSlice';
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
  FollowListBox,
  FollowImg,
  FollowName,
  ScrollBox,
} from './Dropdown.style';

const DropDown = ({user}) => {
  // 팔로우 팔로잉 리스트 보이게 안보이게 하는 것
  const [dropDownState, setDropDownState] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 팔로우, 팔로잉 리스트 저장되는 상태
  const [followList, setFollowList] = useState([]);
  const [followingList, setFollowingList] = useState([]);

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
  };

  // 팔로잉 목록 가져오기
  const getFollowing = async () => {
    const {payload} = await dispatch(getMyFollowing());
    setFollowingList(payload);
    console.log(payload, '팔로잉 목록');
  };

  useEffect(() => {
    getFollowing();
  }, []);

  // 팔로우 목록 가져오기
  const getFollow = async () => {
    const {payload} = await dispatch(getMyFollower());
    setFollowList(payload);
    console.log(payload, '팔로우 목록');
  };

  useEffect(() => {
    getFollow();
  }, []);

  const FollowingTest = () => {
    if (dropDownState === 3) {
      if (followingList.length !== 0) {
        return followingList.map(list => {
          const {followSeq, name, profilePic, userSeq} = list;
          return (
            <>
              <FollowListBox>
                <FollowImg
                  src={
                    profilePic
                      ? profilePic
                      : process.env.PUBLIC_URL + '/assets/images/user.png'
                  }
                ></FollowImg>
                <FollowName>{name}</FollowName>
              </FollowListBox>
            </>
          );
        });
      } else return <div>팔로잉 없음</div>;
    }
  };

  const FollowTest = () => {
    if (dropDownState === 2) {
      if (followList.length !== 0) {
        return followList.map(list => {
          const {followSeq, name, profilePic, userSeq} = list;
          return (
            <>
              <FollowListBox>
                <FollowImg
                  src={
                    profilePic
                      ? profilePic
                      : process.env.PUBLIC_URL + '/assets/images/user.png'
                  }
                ></FollowImg>
                <FollowName>{name}</FollowName>
              </FollowListBox>
            </>
          );
        });
      } else return <div>팔로우 없음</div>;
    }
  };

  return (
    <Dropdown>
      <ProfileList>
        <ProfileImg
          src={
            user.profilePic
              ? user.profilePic
              : process.env.PUBLIC_URL + '/assets/images/user.png'
          }
        />
        <ProfileDiv>{user.email}</ProfileDiv>
        <FollowList>
          <FollowList1
            onClick={() => {
              setDropDownState(dropDownState === 2 ? 1 : 2);
            }}
          >
            팔로워 | {user.followerTotal}
          </FollowList1>
          <FollowList1
            onClick={() => {
              setDropDownState(dropDownState === 3 ? 1 : 3);
            }}
          >
            팔로잉 | {user.followingTotal}
          </FollowList1>
        </FollowList>
      </ProfileList>
      {dropDownState === 1 && (
        <>
          <DropdownList onClick={myPocketClickHandler}>
            <HomeIcon />
            <DropdownP>마이포켓</DropdownP>
          </DropdownList>
          <DropdownList onClick={profileClickHandler}>
            <ProfileIcon />
            <DropdownP>회원정보</DropdownP>
          </DropdownList>
        </>
      )}
      {dropDownState === 2 && (
        <>
          <ScrollBox>
            <FollowTest />
          </ScrollBox>
        </>
      )}
      {dropDownState === 3 && (
        <>
          <ScrollBox>
            <FollowingTest />
          </ScrollBox>
        </>
      )}
      <ProfileLine />
      <DropdownListLast onClick={logoutClickHandler}>
        <LogoutIcon />
        <DropdownP>로그아웃</DropdownP>
      </DropdownListLast>
    </Dropdown>
  );
};

export default DropDown;
