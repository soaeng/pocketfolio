import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {
  NavContainer,
  NavLogoImg,
  NavBotton,
  LoginDiv,
  UserName,
} from './Nav.style';

import Avatar from './Avatar';

/** 네비게이션 페이지 */
function Nav() {
  const navigate = useNavigate();

  // 로그인 유저 정보 가져오기
  const user = useSelector(state => state.oauth.user);

  // click시 navigate
  const logoClickHandler = () => {
    navigate('/main');
  };

  const loginClickHandler = () => {
    navigate('/login');
  };

  return (
    <NavContainer>
      <NavLogoImg
        onClick={logoClickHandler}
        src={process.env.PUBLIC_URL + '/assets/images/logo4.png'}
      />
      {user ? (
        <NavBotton onClick={loginClickHandler}>로그인/회원가입</NavBotton>
      ) : (
        <LoginDiv>
          <UserName>{user.name}님</UserName>
          <Avatar user={user} />
        </LoginDiv>
      )}
    </NavContainer>
  );
}
export default Nav;
