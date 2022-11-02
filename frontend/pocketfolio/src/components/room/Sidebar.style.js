import styled from 'styled-components';

export const Container = styled.div`
  width: 38rem;
  height: calc(100vh - 2rem);
  padding: 1rem;
  background-color: deeppink;
  transition: all 0.3s;
  display: none;

  &.open {
    transition: all 0.5s;
    display: block;
  }

  @media screen and (max-width: 1200px) {
    width: calc(100vw - 3rem);
    padding: 1.5rem;
    background-color: deeppink;
    display: none;

    transition: all 0.3s;

    &.open {
      transition: all 0.5s;
      display: block;
    }
  }
`;