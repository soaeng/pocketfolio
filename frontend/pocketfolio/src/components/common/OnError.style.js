import styled from 'styled-components';
import {FaRegHandPointRight} from 'react-icons/fa';

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 10rem);
  padding-top: 10rem;

  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ZeroContainer = styled.div`
  width: 17rem;
  height: 17rem;
  background-color: #0c1e42;
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: rotate(-15deg);
    background-image: radial-gradient(
        circle at 30% 30%,
        #fff 1.5%,
        transparent 2.5%
      ),
      radial-gradient(circle at 80% 70%, #fff 1.5%, transparent 2.5%),
      radial-gradient(circle at 30% 50%, #fff 1%, transparent 2%),
      radial-gradient(circle at 70% 85%, #fff 1%, transparent 2%);
    background-size: 100% 100%, 100% 100%, 50% 100%, 50% 50%;
    background-position: 0 0, 0 0, 0 0, 0 0;
    animation: snow 6s linear infinite forwards;
    @keyframes snow {
      100% {
        background-position: 0px 17rem, 0 17rem, 0px 17rem, 0px 17rem;
      }
    }
  }
`;

export const ImgDiv = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

export const Img = styled.img`
  height: 12rem;
`;

export const Text = styled.h1`
  font-size: 15rem;
  font-weight: bold;
  color: #0c1e42;
  margin: 0 2rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.p`
  & + & {
    margin-top: 0.3rem;
  }
`;

export const PositionDiv = styled.div`
  position: relative;
`;

export const Btn = styled.div`
  margin-top: 1rem;
  width: max-content;
  color: #0c1e42;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 3px solid #0c1e42;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  position: absolute;
  left: -5rem;

  &:hover {
    animation: 1s move;

    @keyframes move {
      0% {
        left: -5rem;
      }

      50% {
        left: -4rem;
      }

      100% {
        left: -5rem;
      }
    }
  }
`;

export const BtnText = styled.p`

`;

export const IconDiv = styled.div`
  height: 1.2rem;
  margin-left: 0.5rem;
`;

export const Icon = styled(FaRegHandPointRight)``;