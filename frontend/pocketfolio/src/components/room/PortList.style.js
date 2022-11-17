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
