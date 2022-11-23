import styled from 'styled-components';
import {RiLockUnlockLine, RiLockFill} from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;

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

export const WriteForm = styled.form`
  padding: 0.5rem 0;
  width: 96%;
  margin-bottom: 1rem;
`;

export const ImgTextDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgBox = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.4rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.4rem;
`;

export const TextArea = styled.textarea`
  margin-left: 1rem;
  padding: 1rem;
  width: calc(100% - 9.25rem);
  resize: none;
  height: 4.25rem;
  border-radius: 0.3rem;
`;

export const BottomBox = styled.div`
  width: 100%;
  margin: 0.6rem 0;

  display: flex;
  align-items: center;
  justify-content: end;
`;

export const LockIconDiv = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export const LockIcon = styled(RiLockFill)``;

export const UnlockIcon = styled(RiLockUnlockLine)``;

export const LockText = styled.p`
  margin: 0;
  margin-left: 0.3rem;
  margin-right: 0.5rem;
  font-size: 0.85rem;
`;

export const Btn = styled.button`
  background-color: #e75452;
  color: white;
  border: none;
  border-radius: 0.2rem;
  padding: 0.35rem 0.45rem;

  &:hover {
    background-color: #c13136;
    color: #eeeeee;
  }
`;

export const ScrollDiv = styled.div`
  width: 96%;
  height: 70%;
  overflow: auto;

  &.full {
    height: 92%;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 15px; 
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #eeeeee; 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #c6c6c6; 
  }
`;

export const ItemContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
