import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

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

  // 검색어
  const [word, setWord] = useState('');

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
    navigate('/room');
  };

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

  return (
    <NavContainer>
      <NavLogoImg onClick={logoClickHandler} src="./assets/images/logo2.png" />
      {window.location.pathname === '/search' ? null : (
        <NavSearchInput
          placeholder="검색어를 입력해주세요"
          onKeyDown={keyDownHandler}
        />
      )}
      {loginFlag === null ? (
        <NavBotton onClick={loginClickHandler}>로그인/회원가입</NavBotton>
      ) : (
        <LoginDiv>
          <NavBotton onClick={roomClickHandler}>마이룸</NavBotton>
          <Avatar />
        </LoginDiv>
      )}
    </NavContainer>
  );
}
export default Nav;
