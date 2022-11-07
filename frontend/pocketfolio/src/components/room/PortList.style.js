import styled from 'styled-components';
import {RiPlayListAddFill} from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  color: #333;
`;

export const Title = styled.h1``;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 0.5rem;
`;

export const IconBox = styled.div`
  font-size: 1.5rem;
  border-radius: 50%;
  padding: 0.2rem 0.4rem;
  transition: all 0.2s;

  & + & {
    margin-left: 5px;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export const AddIcon = styled(RiPlayListAddFill)`
`;