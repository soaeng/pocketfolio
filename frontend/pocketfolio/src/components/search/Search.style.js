// styled Component
import styled from 'styled-components';
import {Body3} from '../../styles/styles.style';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

// SearchInput
export const SearchInput = styled.input`
  width: 50%;
  min-width: 200px;
  height: 25px;
  border-radius: 16px;
  border: 1px solid #bbb;
  padding: 6px 0 6px 20px;
  margin: 6px;

  &::-webkit-input-placeholder {
    background-image: url(https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png);
    background-size: contain;
    background-position: 1px center;
    background-repeat: no-repeat;
    padding-left: 30px;
  }

  &:focus {
    border: 1px solid #333333;
    outline: none;
  }
`;

// Card 모양
export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

export const Item = styled.div`
  margin: 10px;
  padding: 10px;
  width: 20%;
  min-width: 305px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

// Tag 스타일
// Tag 전체를 감싸는 것
export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  /* padding-left: 25vw; */
  /* padding-right: 20vw; */
`;

//Tag 하나하나
export const Tag = styled(Body3)`
  background-color: lightgrey;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 8px;
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
