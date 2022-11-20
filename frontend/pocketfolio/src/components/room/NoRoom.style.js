import styled from 'styled-components';
import {GiLockedDoor} from 'react-icons/gi';
import {FaDoorClosed, FaDoorOpen} from 'react-icons/fa';
import {HiHome} from 'react-icons/hi';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
`;

// export const Container = styled.div`
//   width: 60%;
//   height: 70%;
//   outline: solid;
// `;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(50% - 16rem);
  background-color: rgba(255, 255, 255, 0.3);
  width: 55%;
  min-width: 550px;
  padding: 1rem;
  padding-bottom: 2.5rem;
  border-radius: 0.8rem;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;

  animation: swing ease-in-out 0.8s infinite alternate;
  transform-origin: center -20px;

  @keyframes swing {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
`;

export const CloseImg = styled.img`
  height: 20rem;
  width: 20rem;
  object-fit: cover;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
`;

export const Text = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  &:hover {
    transition: all 0.2s;
    .tooltip {
      visibility: visible;
    }
  }
`;

export const DoorIcon = styled(GiLockedDoor)`
  font-size: 15rem;
  color: #ff9898;
`;

export const DoorClosed = styled(FaDoorClosed)``;
export const DoorOpen = styled(FaDoorOpen)``;
export const HomeIcon = styled(HiHome)`
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #e75472;
    scale: 1.1;
  }
`;

export const GoMain = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;
`;

export const ToolTip = styled.span`
  position: absolute;
  top: 3.2rem;
  left: -5.7rem;
  /* visibility: hidden; */
  width: 150px;

  display: flex;
  flex-direction: row-reverse;
`;

export const ToolTipText = styled.p`
  width: fit-content;
  margin: 0;
  font-size: 1rem;
  color: #1d1d1d;
  border-radius: 6px;
  padding: 4px 6px;
`;
