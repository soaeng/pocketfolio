import {useNavigate} from 'react-router-dom';
import {
  Container,
  LoginContainer,
  LogoDiv,
  LogoImg,
  LoginDiv,
  LoginIconDiv,
  LoginIcon,
  LoginText,
  CommentText,
} from './Login.style';
import LoginCanvas from './LoginCanvas';

const Login = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/main');
  };

  // google login
  const googleFunc = () => {
    window.location.href = `https://k7e101.p.ssafy.io/api/oauth2/authorization/google`;
  };

  // kakao login
  const kakaoFunc = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=53ce315aff782111b4d2c206e9b0e563&redirect_uri=https://k7e101.p.ssafy.io/api/login/oauth2/code/kakao&response_type=code`;
  };

  return (
    <Container>
      <LoginCanvas />

      <LoginContainer>
        <LogoDiv onClick={moveToMain}>
          <LogoImg src={process.env.PUBLIC_URL + '/assets/images/logo4.png'} />
        </LogoDiv>

        <LoginDiv className="google" onClick={googleFunc}>
          <LoginIconDiv>
            <LoginIcon
              src={process.env.PUBLIC_URL + '/assets/images/logo_google.png'}
            />
          </LoginIconDiv>
          <LoginText>구글로 시작하기</LoginText>
        </LoginDiv>

        <LoginDiv className="kakao" onClick={kakaoFunc}>
          <LoginIconDiv>
            <LoginIcon
              src={process.env.PUBLIC_URL + '/assets/images/logo_kakao.png'}
            />
          </LoginIconDiv>
          <LoginText>카카오로 시작하기</LoginText>
        </LoginDiv>

        <LoginDiv className="github">
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
