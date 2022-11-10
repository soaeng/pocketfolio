// styled Component
import styled from 'styled-components';
import {Body3} from '../../styles/styles.style';

import {AiOutlineSearch} from 'react-icons/ai';
import {CiCircleChevUp} from 'react-icons/ci';

export const Container1 = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #bbb;
  width: 50%;
  min-width: 200px;
  padding: 5px 30px;
`;

// SearchInput
export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  padding: 0 10px;
  font-size: 15px;

  &::placeholder {
    font-size: 15px;
  }

  &:focus {
    border: none;
    outline: none;
    padding: 0 10px;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)``;

// Card 모양
export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 5%;
`;

export const Item = styled.div`
  margin: 10px;
  padding: 10px;
  width: 20%;
  min-width: 280px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

// Tag 스타일
// Tag 전체를 감싸는 것
export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
`;

//Tag 하나하나
export const Tag = styled(Body3)`
  display: flex;
  justify-content: center;
  background-color: lightgrey;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  min-width: 50px;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.25);
  }
`;

export const RecCarImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 70%;
`;

export const RecCarThumbnail = styled.img`
  width: 90%;
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
