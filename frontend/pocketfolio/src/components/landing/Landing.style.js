import styled from 'styled-components';
import {H1, Body1} from '../../styles/styles.style';

export const Frame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: -1;
`;

export const Content1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Content2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
`;

export const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 5px;
`;

export const Title = styled(H1)`
  color: white;
  text-shadow: 0px 4px 4px rgba(1, 1, 1, 0.25);
  word-break: keep-all;
`;

export const SubTitle = styled(H1)`
  color: white;
  font-weight: lighter;
  word-break: keep-all;
`;

export const Description = styled(Body1)`
  color: white;
  font-weight: lighter;
  word-break: keep-all;
  margin: 0;
  line-height: 180%;
`;

export const IconBtn = styled.button`
  position: absolute;
  bottom: 0;
  background-color: transparent;
  border: 0px;
  font-size: 5vh;
  color: #cccccc;
  transition: all 0.2s;

  animation: up-down 1.4s infinite ease-in-out alternate;

  @keyframes up-down {
    from {
      transform: translatey(0px);
    }
    to {
      transform: translatey(-15px);
    }
  }

  &:hover {
    color: #fff;
    cursor: pointer;
    box-shadow: 2;
  }
`;

export const DotBtn = styled.button`
  width: 2vw;
  height: 2vw;
  border: 0px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const Dots = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
  top: 50%;
  right: 5%;
  transform: translate(0, -50%);
`;
