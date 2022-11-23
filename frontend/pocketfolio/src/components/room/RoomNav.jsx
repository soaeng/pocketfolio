import React from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Container,
  LogoContainer,
  LogoImg,
  NavBotton,
  LoginDiv,
  UserName,
} from './RoomNav.style';
import Avatar from '../common/Avatar';
import {useSelector} from 'react-redux';

// 마이룸 네브바
const RoomNav = ({sidebar, edit}) => {
  const navigate = useNavigate();

  // 로그인 유저정보 가져오기
  const user = useSelector(state => state.oauth.user);

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
      {/* 로고 */}
      <LogoContainer onClick={logoClickHandler}>
        <LogoImg src={process.env.PUBLIC_URL + '/assets/images/logo4.png'} />
      </LogoContainer>

      {edit ? null : user ? (
        <LoginDiv>
          <UserName onClick={roomClickHandler}>{user.name}님</UserName>
          <Avatar user={user} />
        </LoginDiv>
      ) : (
        <NavBotton onClick={loginClickHandler}>로그인/회원가입</NavBotton>
      )}
    </Container>
  );
};
export default RoomNav;
