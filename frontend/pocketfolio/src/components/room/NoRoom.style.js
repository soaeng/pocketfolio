import styled from 'styled-components';
import {GiLockedDoor} from 'react-icons/gi';
import {FaDoorClosed, FaDoorOpen} from 'react-icons/fa'

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
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
  top: calc(50% - 12rem);
  background-color: rgba(255, 255, 255, 0.3);
  width: 55%;
  min-width: 550px;
  padding: 1rem;
  border-radius: 0.8rem;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  /* outline: solid blue; */

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
  /* outline: solid; */
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  /* outline: solid red; */
`;

export const Text = styled.div`
  font-size: 2rem;
`;

export const IconDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const DoorIcon = styled(GiLockedDoor)`
  font-size: 15rem;
  color: #ff9898;
`;

export const DoorClosed = styled(FaDoorClosed)``
export const DoorOpen = styled(FaDoorOpen)``