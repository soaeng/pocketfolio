import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: -100vw;
  transition: all 0.5s ease-in-out;

  width: 40rem;
  height: 100vh;
  background-color: deeppink;

  &.open {
    right: 0;
  }
`;