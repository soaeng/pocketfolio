import styled from 'styled-components';
import {RiLockUnlockLine, RiLockFill} from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;

  & + & {
    margin-top: 1.5rem;
  }
`;

export const Header = styled.div`
  width: calc(100% - 1rem);
  background-color: #fff4f1;
  border-top: 2px solid #ffb9ae;
  padding: 0.1rem 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;

  &.secret {
    background-color: #f3eed9;
    border-top: 2px solid #d8d1b1;
  }
`;

export const NameDiv = styled.div`
  display: flex;
  align-items: end;
  font-size: 0.9rem;
`

export const IconDiv = styled.div`
  margin-right: 0.5rem;
`;

export const LockIcon = styled(RiLockFill)``;

export const UnlockIcon = styled(RiLockUnlockLine)``;

export const Name = styled.p`
  margin: 0;
  margin: 0.3rem 0;
`;

export const Date = styled.p`
  font-size: 0.75rem;
`

export const BtnDate = styled.div`
  display: flex;
  align-items: center;
`

export const BtnBox = styled.div`
  margin-left: 0.5rem;
`;

export const TextBtn = styled.button`
  background: none;
  border: none;
  border-radius: 0.5rem;

  &:hover {
    font-weight: bold;
  }
`;


export const ImgTextDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

export const ImgBox = styled.div`
  width: 6rem;
  height: 6rem;
  overflow: hidden;
  border-radius: 0.3rem;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const TextBox = styled.div`
  margin-left: 1rem;
  padding: 1rem;
  width: calc(100% - 9.25rem);
  min-height: 4.25rem;
  font-size: 0.85rem;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  
  /* background-color: white; */
`;
