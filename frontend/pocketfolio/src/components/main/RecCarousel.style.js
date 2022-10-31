// styled Component
import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-rows: 50px 50px;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

export const Ui = styled.div`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  display: flex;
  width: calc(100% - 12px * 2);
  justify-content: space-between;
  padding: 12px;
  z-index: 100;

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #999;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
    border: 0;
    transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);

    &:hover {
      background: #666;
    }

    &:focus {
      outline: none;
      border: 1px solid rgba(255, 255, 255, 1);
    }
  }
`;

export const Item3 = styled.div`
  display: flex;
  justify-content: space-between;
`;
