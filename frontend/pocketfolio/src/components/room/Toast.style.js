import styled from 'styled-components';
import {Body3} from '../../styles/styles.style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 1.5rem;
  left: 1.5rem;

  transition: all 0.3s;
  color: #333333;
`;

export const ToastDiv = styled.div`
  margin-top: 0.5rem;
`;

export const ToastText = styled(Body3)`
  max-width: 250px;
  background-color: #ffffef;
  border: 0.7px solid black;
`;
