import React, {useState} from 'react';
import {
  UserCard,
  UserItem,
  UserContainer,
  UserImgContainer,
  UserImg,
  UserInfoContainer,
  UserFollowBtn,
} from './UserSearch.style';

// 임시데이터(card)
const items = [
  {
    icon: 'face', //사용자 이름
    copy: '01. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', //사용자 describe
  },
  {
    icon: 'pets',
    copy: '02. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: 'stars',
    copy: '03. Consectetur adipiscing elit.',
  },
];

const UserSearch = () => {
  const [item, setItem] = useState(items);

  return (
    <>
      <UserCard>
        {item.map(it => {
          const {icon, copy} = it;
          return (
            <UserItem>
              <UserContainer>
                {/* 사용자 프로필 사진 */}
                <UserImgContainer>
                  <UserImg
                    src={process.env.PUBLIC_URL + '/assets/images/room.png'}
                  />
                </UserImgContainer>
                {/* 사용자 정보 */}
                <UserInfoContainer>
                  <div>{icon}</div>
                  <div>{copy}</div>
                </UserInfoContainer>
              </UserContainer>
              {/* 팔로우 버튼 */}
              <UserFollowBtn>팔로우</UserFollowBtn>
            </UserItem>
          );
        })}
      </UserCard>
    </>
  );
};

export default UserSearch;
