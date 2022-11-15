import styled from 'styled-components';
import {RiCloseCircleLine} from 'react-icons/ri';

export const Container = styled.div`
  z-index: 1;
  display: flex;
  /* justify-content: space-between; */
  
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const TitleDiv = styled.div`
  /* outline: solid; */
`;

export const Title = styled.p`
  margin: 0;
`;

export const IconDiv = styled.div`
  
  visibility: hidden;
  cursor: pointer;
  &.on{
    visibility: visible;
  }
  z-index: 2;
`;

export const DelIcon = styled(RiCloseCircleLine)`
  font-size: 25px;
  color: #ff9392;
`;

