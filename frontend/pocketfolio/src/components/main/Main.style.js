import styled from 'styled-components';
import {AiOutlineSearch} from 'react-icons/ai';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
  padding-bottom: 10rem;
`;

export const InnerContainer = styled.div`
  width: 70%;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }

  @media screen and (max-width: 1000px) {
    width: 90%;
  }

  @media screen and (max-width: 770px) {
    width: 80%;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  aspect-ratio: 13/5;
  display: flex;
  align-items: center;
`;

export const CanvasWrapper = styled.div`
  width: ${props => (props.user ? '63%' : '100%')};
  margin-right: ${props => (props.user ? '1rem' : '0')};
  height: calc(100% + 2rem);
  border-radius: 1rem;
  overflow: hidden;

  background-color: ${props => props.color};

  @media screen and (max-width: 770px) {
    width: 100%;
  }
`;

export const PortContainer = styled.div`
  width: calc(37% - 2rem);
  display: ${props => (props.user ? 'block' : 'none')};
  height: calc(100% - 8px);
  padding: 1rem;
  border-radius: 1rem;
  border: ${props => props.color && '4px solid'};
  border-color: ${props => props.color};

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const PortList = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  height: 100%;
`;

export const PortItem = styled.li`
  width: calc(100% - 2rem);
  padding: 1rem;
  font-size: 1.2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: ${props => props.color};
    border-radius: 1rem;
  }
`;


export const Num = styled.p`
  margin: 0;
  margin-right: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: #c3c3c3;
`;

export const Name = styled.p`
  font-size: 1rem;
  margin: 0;
  width: calc(100% - 3.2rem);
  word-break: break-all;
  word-wrap: break-word;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  width: 60%;
  height: 40px;
  min-width: 200px;
  padding: 0px 30px;
  border: 0.12rem solid #bbb;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 25px;
  border: none;
  padding: 0 10px;
  font-size: 17px;
  background-color: transparent;

  &::placeholder {
    font-size: 17px;
  }

  &:focus {
    border: none;
    outline: none;
    padding: 0 10px;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  height: 25px;
  width: 25px;
`;

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;
`;

