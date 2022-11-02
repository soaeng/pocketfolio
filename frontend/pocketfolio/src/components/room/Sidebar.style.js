import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: -50rem;
  width: 38rem;
  height: calc(100vh - 2rem);
  padding: 1rem;
  background-color: deeppink;

  transition: all 0.3s;

  &.open {
    transition: all 0.5s;
    right: 0;
  }

  @media screen and (max-width: 1200px) {
    position: fixed;
    top: 100vh;
    left: 0;
    width: calc(100vw - 3rem);
    padding: 1.5rem;
    background-color: deeppink;

    transition: all 0.3s;

    &.open {
      transition: all 0.5s;
      top: 60%;
    }
  }
`;