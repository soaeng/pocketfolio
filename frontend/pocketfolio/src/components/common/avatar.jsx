import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {
  AvatarImg,
  AvatarContainer,
  Dropdown,
  DropdownList,
} from './avatar.style';

function Avatar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // 로그아웃 클릭 시 이동
  const logoutClickHandler = () => {
    sessionStorage.clear();
    navigate('/main');
  };

  const profileClickHandler = () => {
    navigate('/profile');
  };

  return (
    <AvatarContainer>
      <AvatarImg
        src="./assets/images/user.png"
        onClick={() => {
          setVisible(!visible);
        }}
      />
      {visible && (
        <Dropdown>
          <DropdownList onClick={profileClickHandler}>
            <p>프로필</p>
          </DropdownList>
          <DropdownList onClick={logoutClickHandler}>
            <p>로그아웃</p>
          </DropdownList>
        </Dropdown>
      )}
    </AvatarContainer>
  );
}

export default Avatar;
