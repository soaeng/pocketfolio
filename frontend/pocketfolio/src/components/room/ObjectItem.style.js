import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff4f1;
  overflow: hidden;
  border-radius: 1rem;

  transition: all 0.1s;

  &:hover {
    background-color: #ff9392;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  transition: all 0.2s;

  &:hover {
    scale: 1.2;
  }
`;