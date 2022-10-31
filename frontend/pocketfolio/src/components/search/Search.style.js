// styled Component
import styled from 'styled-components';
import {Body3} from '../../styles/styles.style';

export const Container = styled.div`
  padding-left: 25vw;
  padding-top: 75px;
`;

// SearchInput
export const SearchInput = styled.input`
  display: flex;
  width: 70%;
  min-width: 200px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #bbb;
  padding: 6px 0 6px 0;
  padding-left: 20px;
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
  padding-left: 18vw;
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

export const Item = styled.div`
  margin: 10px;
  padding: 10px;
  width: 305px;
  border-radius: 16px;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
  flex: none;
`;

export const Tag = styled(Body3)`
  background-color: lightgrey;
  padding: 10px 20px;
  border-radius: 16px;
  cursor: pointer;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-left: 20vw;
  padding-right: 15vw;
`;
