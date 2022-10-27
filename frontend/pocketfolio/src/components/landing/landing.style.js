import styled from 'styled-components';
import {H1} from '../../styles/styles.style';

export const Frame = styled.div`
  width: 100vw;
  height: 100vh;
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

export const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background: url('./assets/images/landing_bg.png');
  background-size: cover;
  background-position: center;
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
  text-shadow: 0px 5px 5px #333;
`;
