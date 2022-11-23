import styled from 'styled-components';
import {
  RiFileAddFill,
  RiFolderAddFill,
  RiDeleteBinFill,
  RiDeleteBin2Fill,
  RiCloseCircleLine,
} from 'react-icons/ri';

export const Background = styled.div`
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
  margin: 2rem auto;
  justify-content: space-evenly;
  width: 60vw;
  padding-bottom: 5rem;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  &.myroomwrapper {
    height: fit-content;
    margin-bottom: 2rem;
  }
`;
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bababa;
  align-items: center;
`;
export const Header = styled.span`
  font-size: 30px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: max-content;
  border-bottom: 2px solid;
`;

export const Text = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &.portfolios {
  }
`;

export const CardList = styled.div`
  &.roomlists {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    height: 100%;
  }

  &.portlists {
    padding-top: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    &::-webkit-scrollbar-thumb {
      height: 5%;
      background-color: #ffc7bb;
      border-radius: 2rem;
    }

    &::-webkit-scrollbar-track {
      background-color: #fbddd7;
      border-radius: 2rem;
    }
  }
`;

export const BtnDiv = styled.div`
  display: flex;
`;

export const IconDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 0;
  border-radius: 50%;
  background-color: white;
  font-size: 20px;
  transition: all 0.3s;

  cursor: pointer;

  :hover {
    background-color: #ebebeb;
  }

  :active {
    background-color: #c7c7c7;
  }
`;

export const AddPortIcon = styled(RiFileAddFill)`
  color: #000000;
`;

export const TrashIcon = styled(RiDeleteBinFill)`
  color: #000000;
`;

export const TrashIconX = styled(RiDeleteBin2Fill)`
  color: #000000;
`;

export const AddPocketIcon = styled(RiFolderAddFill)`
  color: #000000;
`;

export const DelIcon = styled(RiCloseCircleLine)`
  font-size: 20px;
  color: #ff9392;
  visibility: hidden;
  cursor: pointer;
  &.on {
    visibility: visible;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 1rem 1rem 0 0;
`;

export const Th = styled.th`
  background-color: #e75452;
  color: #ffffff;
  font-size: 1.1rem;
  padding: 0.4rem 0;
  &.no {
    border-radius: 10px 0 0 0;
  }
  &.title {
  }
  &.del {
    border-radius: 0 10px 0 0;
    font-size: 2px;
    color: #e75452;
  }
`;

export const Td = styled.td`
  text-align: center;
  padding: 0.7rem 0;

  &.even {
    background-color: #edecec;
  }

  &.odd {
    background-color: #fbfbfb;
  }
`;

export const Tr = styled.tr`
  &.portlist {
    cursor: pointer;
  }
`;

export const Tbody = styled.tbody``;
