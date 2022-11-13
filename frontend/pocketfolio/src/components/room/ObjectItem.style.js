import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff4f1;
  overflow: hidden;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  transition: all 0.2s;

  &:hover {
    scale: 1.2;
  }
`;