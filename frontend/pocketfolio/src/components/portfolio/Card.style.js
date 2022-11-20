import styled from 'styled-components';
import {HiMinusCircle} from 'react-icons/hi';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
`;

export const Item = styled.div`
  position: relative;

  /* 1안 */
  border-radius: 1rem;
  background-color: #fff0f0;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.25);
`;

export const PortDiv = styled.div``;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 11rem;
  width: 10rem;
  padding: 10px;
  overflow: hidden;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: #fef9ff;
  border-radius: 0.5rem;
  transition: all 0.2s;
  object-fit: cover;
  :hover {
    background-color: #e5e5e5;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: bold;
`;

export const Title = styled.p`
  font-size: 15px;
  padding: 10px;
  margin: 0;
  font-family: 'NanumSquareAcr' !important;
`;

export const IconDiv = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: 10rem;
  top: -1rem;
  transition: all ease-in-out 0.1s;

  &.delete {
    visibility: visible;
    opacity: 1;
    z-index: 99;
    cursor: pointer;
    display: flex;
  }
`;
export const DeleteIcon = styled(HiMinusCircle)`
  font-size: 2.5rem;
  color: #ff3434;
`;
