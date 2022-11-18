import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  color: #333333;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginContainer = styled.div`
  position: absolute;
  top: calc(50% - 16.5rem);
  right: 5rem;

  width: 25rem;
  height: 33rem;
  padding: 1rem;
  border-radius: 0.8rem;

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 1;

  @media screen and (max-width: 620px) {
    position: static;
  }
`;

export const LogoDiv = styled.div`
  height: 16%;
  margin-bottom: 2rem;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoginDiv = styled.div`
  width: calc(82% - 2rem);
  min-width: 256px;
  height: 2.5rem;
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.kakao {
    background-color: #fddc3f;

    &:hover {
      background-color: #e7ca3d;
    }
  }

  &.google {
    outline: 1.5px solid #808080;

    &:hover {
      background-color: #e1e1e1;
    }
  }

  &.facebook {
    background-color: #3b5998;
    color: #ffffff;

    &:hover {
      background-color: #344f88;
      color: #e1e1e1;
    }
  }

  &.github {
    background-color: #000000;
    color: #ffffff;

    &:hover {
      color: #e1e1e1;
    }
  }
`;

export const LoginIconDiv = styled.div`
  height: 94%;
  aspect-ratio: 1 / 1;
  margin-right: 1rem;

  &.github {
    background-color: white;

    &:hover {
      background-color: #e1e1e1;
    }
  }
`;

export const LoginIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const LoginText = styled.p`
  font-size: 1.3rem;
  font-weight: bold;

  @media screen and (max-width: 420px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 370px) {
    font-size: 1.1rem;
  }
`;

export const CommentText = styled.p`
  font-size: 1.1rem;
  min-width: 350px;
  text-align: center;
  margin-bottom: 0;

  @media screen and (max-width: 400px) {
    display: none;
  }
`;
