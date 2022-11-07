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

// 마이룸 네브바
const RoomNav = ({sidebar, edit}) => {
  const navigate = useNavigate();

  // 로그인 표시 => 수정 필요
  const [loginFlag, setLoginFlag] = useState(() =>
    sessionStorage.getItem('Id'),
  );

  // main page로 이동
  const logoClickHandler = () => {
    navigate('/main');
  };

  // login page로 이동
  const loginClickHandler = () => {
    navigate('/login');
  };

  // 포트폴리오로 이동
  const roomClickHandler = () => {
    navigate('/port');
  };

  return (
    <Container className={sidebar ? 'side' : null}>
      <LogoContainer onClick={logoClickHandler}>
        <LogoImg src={process.env.PUBLIC_URL + '/assets/images/logo2.png'} />
      </LogoContainer>
      {edit ? null : loginFlag === null ? (
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
