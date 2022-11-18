import styled from 'styled-components';
import {RiPlayListAddFill} from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  color: #333;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;

  &::before {
    background-color: #e75452;
    border-radius: 0.25rem;
    content: '';
    display: block;
    height: 0.25rem;
    width: 50px;
    margin-bottom: 1.25rem;
  }
`;

export const Box = styled.div`
  width: calc(100% - 2rem);
  background-color: #fff4f1;
  border-radius: 0.5rem;
  padding: 1rem;
  color: #333333;

  & + & {
    margin-top: 1rem;
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
`;

export const ContentTitle = styled.h3`
  margin: 0.7rem 0;
`;