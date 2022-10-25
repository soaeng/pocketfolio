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
  text-align: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const IntroText = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 1.5px 1.5px 1.5px gray;
  margin: 0;
`;

export const RoomImgDiv = styled.div`
  height: 65%;
  aspect-ratio: 1/1;
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

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
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
  width: 23rem;
  height: 3rem;
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

  @media screen and (max-width: 450px) {
    width: fit-content;
    min-width: 344px;
  }

  @media screen and (max-width: 320px) {
    width: fit-content;
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
  font-size: 1.7rem;
  font-weight: bold;

  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const CommentText = styled.p`
  font-size: 1.3rem;
  min-width: 350px;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;
