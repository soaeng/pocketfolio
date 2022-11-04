import {useNavigate} from 'react-router-dom';
import {
  Container,
  SelfContainer,
  IntroText,
  RoomImgDiv,
  RoomImg,
  LoginContainer,
  LogoDiv,
  LogoImg,
  LoginDiv,
  LoginIconDiv,
  LoginIcon,
  LoginText,
  CommentText,
} from './Login.style';

const Login = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/main');
  };

  // social login
  const loginFunc = social => {
    window.location.href = `https://k7e101.p.ssafy.io/api/oauth2/authorization/${social}`;
  };

  return (
    <Container>
      <SelfContainer>
        <IntroText>손쉽게 만드는</IntroText>
        <IntroText>나만의 포트폴리오 전시장</IntroText>
        <RoomImgDiv>
          <RoomImg src={process.env.PUBLIC_URL + '/assets/images/room.png'} />
        </RoomImgDiv>
      </SelfContainer>

      <LoginContainer>
        <LogoDiv onClick={moveToMain}>
          <LogoImg src={process.env.PUBLIC_URL + '/assets/images/logo.png'} />
        </LogoDiv>

        <LoginDiv className="google" onClick={() => loginFunc('google')}>
          <LoginIconDiv>
            <LoginIcon
              src={process.env.PUBLIC_URL + '/assets/images/logo_google.png'}
            />
          </LoginIconDiv>
          <LoginText>구글로 시작하기</LoginText>
        </LoginDiv>

        <LoginDiv className="kakao" onClick={() => loginFunc('kakao')}>
          <LoginIconDiv>
            <LoginIcon
              src={process.env.PUBLIC_URL + '/assets/images/logo_kakao.png'}
            />
          </LoginIconDiv>
          <LoginText>카카오로 시작하기</LoginText>
        </LoginDiv>

        <LoginDiv className="facebook" onClick={() => loginFunc('facebook')}>
          <LoginIconDiv>
            <LoginIcon
              src={process.env.PUBLIC_URL + '/assets/images/logo_facebook.png'}
            />
          </LoginIconDiv>
          <LoginText>페이스북으로 시작하기</LoginText>
        </LoginDiv>

        <LoginDiv className="github" onClick={() => loginFunc('github')} >
          <LoginIconDiv className="github">
            <LoginIcon
              src={process.env.PUBLIC_URL + '/assets/images/logo_github.png'}
            />
          </LoginIconDiv>
          <LoginText>깃허브로 시작하기</LoginText>
        </LoginDiv>

        <CommentText>소셜 로그인으로 간편하게 즐겨보세요</CommentText>
      </LoginContainer>
    </Container>
  );
};

export default Login;
