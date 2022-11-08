import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {
  NavContainer,
  NavLogoImg,
  NavBotton,
  NavSearchInput,
  LoginDiv,
} from './nav.style';

import Avatar from './avatar';

/** 네비게이션 페이지 */
function Nav() {
  const navigate = useNavigate();

  // 로그인 유저 정보 가져오기
  const user = useSelector(state => state.oauth.user);

  // 검색어
  const [word, setWord] = useState('');

  // 검색어 창 입력
  const onSubmit = async e => {
    e.preventDefault();
    navigate('/search', {
      state: {
        search: word,
      },
    });
    setWord(''); //submit 후 창 비우기
  };

  // 검색어 창 엔터시 입력
  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      setWord(word);
      onSubmit(event);
    }
  };
  
  // click시 navigate
  const logoClickHandler = () => {
    navigate('/main');
  };

  const loginClickHandler = () => {
    navigate('/login');
  };

  const roomClickHandler = () => {
    navigate('/room/1');
  };

  return (
    <NavContainer>
      <NavLogoImg
        onClick={logoClickHandler}
        src={process.env.PUBLIC_URL + '/assets/images/logo2.png'}
      />
      {window.location.pathname === '/main' ? (
        <NavSearchInput
          placeholder="검색어를 입력해주세요"
          onKeyDown={keyDownHandler}
        />
      ) : null}
      {user === null ? (
        <NavBotton onClick={loginClickHandler}>로그인/회원가입</NavBotton>
      ) : (
        <LoginDiv>
          <div>{user.name}님의 마이포켓</div>
          <NavBotton onClick={roomClickHandler}>마이룸</NavBotton>
          <Avatar />
        </LoginDiv>
      )}
    </NavContainer>
  );
}
export default Nav;
