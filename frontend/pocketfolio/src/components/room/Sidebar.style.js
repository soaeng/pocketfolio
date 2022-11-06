import styled from 'styled-components';
import {RiCloseFill} from 'react-icons/ri';

export const Container = styled.div`
  width: 38rem;
  height: calc(100vh - 4rem);
  padding: 2rem;
  background-color: #eee;
  transition: all 0.3s;
  display: none;

  &.open {
    transition: all 0.5s;
    display: block;
  }

  @media screen and (max-width: 1200px) {
    width: calc(100vw - 3rem);
    padding: 1.5rem;
    background-color: #eee;
    display: none;

    transition: all 0.3s;

    &.open {
      transition: all 0.5s;
      display: block;
    }
  }
`;

export const CloseBox = styled.div`
  font-size: 1.5rem;
`;

export const CloseIcon = styled(RiCloseFill)``;
