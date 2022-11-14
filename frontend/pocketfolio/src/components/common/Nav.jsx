import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {
  NavContainer,
  NavLogoImg,
  NavBotton,
  NavSearchInput,
  LoginDiv,
  UserName,
  NavSearchContainer,
  NavSearchIcon,
} from './Nav.style';

import Avatar from './Avatar';

/** 네비게이션 페이지 */
function Nav() {
  const navigate = useNavigate();

  // 로그인 유저 정보 가져오기
  const user = useSelector(state => state.oauth.user);

  // 검색어
  const [word, setWord] = useState('');

  // 입력창 변화 감지
  const onChange = e => {
    setWord(e.target.value);
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
      {window.location.pathname === '/main' ? (
        <NavSearchContainer>
          <NavSearchIcon />
          <NavSearchInput
            placeholder="검색어를 입력해주세요"
            onKeyDown={keyDownHandler}
            onChange={onChange}
            value={word}
          />
        </NavSearchContainer>
      ) : null}
      {user === null ? (
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
