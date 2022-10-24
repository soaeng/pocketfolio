import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
`;

export const SelfContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: #271e6a;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IntroText = styled.p`
  color: white;
  font-size: 2.8rem;
  font-weight: bold;
  text-shadow: 1.5px 1.5px 1.5px gray;
`;

export const RoomImgDiv = styled.div`
  height: 65%;
`;

export const RoomImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoginContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoDiv = styled.div`
  height: 10rem;
  margin-bottom: 2rem;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoginDiv = styled.div`
  width: 26rem;
  height: 3.5rem;
  margin-bottom: 1.2rem;
  padding: 0.6rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.kakao {
    background-color: #fddc3f;
  }

  &.google {
    outline: 1.5px solid #808080;
  }

  &.facebook {
    background-color: #3b5998;
    color: #ffffff;
  }

  &.github {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const LoginIconDiv = styled.div`
  height: 94%;
  aspect-ratio: 1 / 1;
  margin-right: 1rem;
`;

export const LoginIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoginText = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const CommentText = styled.p`
  font-size: 1.3rem;
`;
