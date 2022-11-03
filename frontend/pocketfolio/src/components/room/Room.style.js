import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      width: 100vw;
      height: auto;
      transition: all 0.25s;
    }
  }
`;

export const CanvasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  &.active {
    width: calc(100vw - 40rem);
    transition: all 0.25s;
  }

  @media screen and (max-width: 1200px) {
    width: 100vw;
    height: 100vh;

    &.active {
      width: 100vw;
      height: 60vh;
      transition: all 0.25s;
    }
  }
`;
