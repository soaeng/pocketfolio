import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {
  NavContainer,
  NavLogoImg,
  NavSearch,
  LoginBotton,
  SearchImg,
} from './nav.style';

/** 네비게이션 페이지 */
function Nav() {
  const navigate = useNavigate();

  // 검색어
  const [word, setWord] = useState('');

  const logoClickHandler = () => {
    navigate('/');
  };

  const loginClickHandler = () => {
    navigate('/login');
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
      <NavLogoImg onClick={logoClickHandler} src="./assets/images/logo.png" />
      <NavSearch
        placeholder="검색어를 입력해주세요"
        onKeyDown={keyDownHandler}
      />
      <SearchImg src="./assets/images/search.png" />
      <LoginBotton onClick={loginClickHandler}>로그인/회원가입</LoginBotton>
    </NavContainer>
  );
}
export default Nav;
