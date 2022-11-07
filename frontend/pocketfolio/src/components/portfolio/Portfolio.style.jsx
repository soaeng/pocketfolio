import styled from 'styled-components';
import {TbTrash, TbTrashX} from 'react-icons/tb';

export const Background = styled.div`
  background-color: #f7f7f7;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .hHVskI {
    padding: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: space-evenly;
  width: 50rem;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bababa;
`;
export const Header = styled.span`
  font-size: 30px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: max-content;
  border-bottom: 2px solid;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  &.myroomwrapper {
    height: 20rem;
  }
`;

export const Text = styled.div`
  padding-bottom: 1rem;
  &.portfolios {
    border-bottom: 1px solid #bababa;
    margin-bottom: 1rem;
  }
`;

export const CardList = styled.div`
  &.roomlists {
    display: flex;
    align-items: flex-end;
    height: 100%;
    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 120%;
    }

    &::-webkit-scrollbar-thumb {
      height: 5%;
      background-color: #3c2e9b;
      border-radius: 2rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #d7dcff;
      border-radius: 2rem;
    }
  }

  &.portlists {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb {
      height: 5%;
      background-color: #3c2e9b;
      border-radius: 2rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #d7dcff;
      border-radius: 2rem;
    }
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 5rem;
  z-index: 65;
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 2rem;
  background-color: #2c2365;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 100px;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;

  :hover{
    background-color: #3c308a;
  }

  p {
    margin: 0;
  }
`;

export const DeleteIcon = styled(TbTrash)`

`;

export const DeleteIconX = styled(TbTrashX)`
 
`;
