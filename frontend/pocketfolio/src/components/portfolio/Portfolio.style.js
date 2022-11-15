import styled from 'styled-components';
import {TbTrash, TbTrashX} from 'react-icons/tb';
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
  margin: 5rem auto;
  justify-content: space-evenly;
  width: 50rem;
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

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  &.myroomwrapper {
    height: 20rem;
  }
`;

export const Text = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  &.portfolios {
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
    padding-top: 1rem;
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
  padding-bottom: 0.5rem;
`;

export const IconDiv = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 2rem;
  background-color: #ff9392;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border: 0;
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
  transition: all 0.3s;

  cursor: pointer;

  :hover {
    background-color: #fbb9b7;
  }

  :active {
    background-color: #f4716f;
  }

  &.addPortIcon {
    margin-right: 1rem;
  }

  &.addPocketIcon {
    margin-right: 1rem;
  }

  p {
    margin: 0;
  }
`;

export const AddPortIcon = styled(RiFileAddFill)``;

export const TrashIcon = styled(RiDeleteBinFill)``;

export const TrashIconX = styled(RiDeleteBin2Fill)``;

export const AddPocket = styled(RiFolderAddFill)``;

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
  /* border: 1px solid; */
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
  &.del{
    border-radius: 0 10px 0 0;
    font-size: 2px;
    color:#e75452;
    /* visibility: hidden; */
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

  &.delIcon {
    
  }
  /* border: 1px solid; */
`;

export const Tr = styled.tr``;
