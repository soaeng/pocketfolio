import styled from 'styled-components';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Tabs = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  font-weight: bold;
`;

export const Tab = styled.div`
  text-align: center;
  padding: 1rem 0rem;
  transition: all 0.2s;
  border-bottom: 3px solid #fffff0;
  border-radius: 5rem;

  &.active {
    background-color: #ff9392;
    color: white;

    &:hover {
      background-color: #ff9392;
    }
  }

  &:hover {
    background-color: #ffd8d7;
  }
`;

export const ScrollBox = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: block;
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff9392;
    height: 15px;
    border-radius: 0.2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffd8d7;
    border-radius: 0.2rem;
  }
`;

export const ItemBox = styled.div`
  width: calc(100% - 17px);
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PageContainer = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconBox = styled.div`
  /* background-color: #ff9392; */
  width: 2rem;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  & + & {
    margin-left: 0.5rem;
  }

  
  &:hover {
    background-color: #ffd8d7;
  }

  &.active {
    background-color: #ff9392;
    color: white;
  }

  &.disappear {
    visibility: hidden;
  }
`;

export const LeftIcon = styled(RiArrowLeftSLine)``;

export const RightIcon = styled(RiArrowRightSLine)``;
