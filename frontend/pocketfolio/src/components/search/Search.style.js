// styled Component
import styled from 'styled-components';
import {Body3} from '../../styles/styles.style';

import {AiOutlineSearch} from 'react-icons/ai';
import {CiCircleChevUp} from 'react-icons/ci';

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 0.5px solid #bbb;
  width: 30%;
  height: 40px;
  min-width: 200px;
  padding: 0px 30px;
`;

// SearchInput
export const SearchInput = styled.input`
  width: 80%;
  height: 25px;
  border: none;
  padding: 0 10px;
  font-size: 17px;

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

// Tag 스타일
// Tag 전체를 감싸는 것
export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1%;
`;

//Tag 하나하나
export const Tag = styled(Body3)`
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 16px;
  min-width: 50px;
  cursor: pointer;
`;

export const TopButton = styled.div`
  position: fixed;
  z-index: 999;
  width: 5%;
  height: 5%;
  bottom: 3%;
  right: 1%;
  color: #e75452;
  cursor: pointer;
`;

export const TopButtonIcon = styled(CiCircleChevUp)`
  width: 100%;
  height: 100%;
`;

export const SelectBox = styled.div`
  padding: 10px 10.5% 0 10.5%;
`

export const Select = styled.select`
  padding: 5px;
  border-radius: 8px;
  border: 2px solid lightcoral;
  font-size: 16px;
  width: 100px;
`;

export const SelectOption = styled.option`
  font-size: 16px;
`;

export const FilterDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const DivTest = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
`;

export const Tabs = styled.div`
  display: flex;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  min-width: 80px;
  color: white;
  padding: 10px;
  transition: all 0.2s;
  border-radius: 3rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #f3a9a1;
  }

  background-color: ${props => {
    return props.searchMode === props.name ? '#e75452' : '#fff';
  }};

  border: ${props => {
    return props.searchMode === props.name ? 'none' : '1px solid #e75452';
  }};

  color: ${props => {
    return props.searchMode === props.name ? '#fff' : '#e75452';
  }};

  @media screen and (max-width: 768px) {
    min-width: 60px;
    font-size: small;
  }
`;
