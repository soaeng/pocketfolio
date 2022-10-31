import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Container,
  LogoContainer,
  LogoImg,
  NavBotton,
  LoginDiv,
} from './RoomNav.style';
import Avatar from '../common/avatar';

const RoomNav = () => {
  const navigate = useNavigate();

  // 로그인 표시 => 수정 필요
  const [loginFlag, setLoginFlag] = useState(() =>
    sessionStorage.getItem('Id'),
  );

  const logoClickHandler = () => {
    navigate('/main');
  };

  const loginClickHandler = () => {
    navigate('/login');
  };

  const roomClickHandler = () => {
    navigate('/port');
  };

  return (
    <Container>
      <LogoContainer onClick={logoClickHandler}>
        <LogoImg src={process.env.PUBLIC_URL + '/assets/images/logo2.png'} />
      </LogoContainer>

      {loginFlag === null ? (
        <NavBotton onClick={loginClickHandler}>로그인/회원가입</NavBotton>
      ) : (
        <LoginDiv>
          <NavBotton onClick={roomClickHandler}>마이룸</NavBotton>
          <Avatar />
        </LoginDiv>
      )}
    </Container>
  );
};
export default RoomNav;
