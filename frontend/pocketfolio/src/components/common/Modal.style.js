import styled from 'styled-components';

export const Container = styled.div`
  // size
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

  // position
  position: fixed;
  top: 0;
  left: 0;

  // arrange
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  padding: 1.2rem;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`;
