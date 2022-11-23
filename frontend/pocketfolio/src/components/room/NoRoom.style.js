import styled from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  width: 55%;
  min-width: 550px;
  padding: 5rem 1rem;
  border-radius: 0.8rem;
`;

export const ImgDiv = styled.div`
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
  height: 15rem;
  width: 15rem;
  object-fit: cover;
`;


export const Text = styled.div`
  font-size: 1.5rem;
  padding-top: 2rem;
`;
