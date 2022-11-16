import styled from 'styled-components';
import {RiBrushFill} from 'react-icons/ri';

export const Container = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;

  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  z-index: 1;
`;

export const IconBox = styled.div`
  background-color: #e75452;
  border-radius: 50%;
  width: 3rem;
  aspect-ratio: 1 / 1;
  color: white;
  font-size: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(RiBrushFill)``;

export const ThemeBox = styled.div`
  background-color: #ffffffe9;
  margin-bottom: 1rem;
  width: 10rem;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 2px 2px #eeeeee;

  &.close {
    display: none;
  }
`;

export const ImgBox = styled.div`
  border-radius: 0.3rem;
  background-color: #fff4f1;

  &.now {
    background-color: #e75452;
  }

  &:hover {
    background-color: #f0d1c8;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`

