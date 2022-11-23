import styled from 'styled-components';
import {RiLockUnlockLine, RiLockFill, RiDeleteBack2Fill} from 'react-icons/ri';

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
`;

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
`;

export const BtnDate = styled.div`
  display: flex;
  align-items: center;
`;

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

export const TextBox = styled.pre`
  margin-left: 1rem;
  padding: 1rem;
  width: calc(100% - 9.25rem);
  min-height: 4rem;
  font-size: 0.85rem;
  border-radius: 0.3rem;
`;

export const CommentList = styled.div`
  width: calc(100% - 2rem);
  background-color: #fff4f1;
  padding: 0.4rem 1rem;

  margin-bottom: 0.3rem;
`;

export const CommentItem = styled.div`
  margin: 0.8rem 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &:hover {
    & .delete {
      display: block;
    }
  }
`;

export const CommentL = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 6.8rem);
  flex-wrap: wrap;
`;

export const CommentName = styled.h5`
  margin: 0;
  margin-right: 0.5rem;
  background-color: #ffb9ae;
  padding: 0.2rem 0.3rem;
  border-radius: 1rem;
`;

export const CommentText = styled.p`
  margin: 0;
  font-size: 0.85rem;
`;

export const CommentDate = styled.p`
  margin: 0;
  font-size: 0.7rem;
  width: 6.3rem;
  padding-bottom: 0.25rem;
  margin-left: 0.5rem;
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CommentArea = styled.textarea`
  width: calc(90% - 1rem);
  height: calc(95% - 1rem);
  padding: 0.5rem;
  resize: none;
  border-radius: 0.3rem;
  border: 1.5px solid rgb(248, 211, 209);

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    height: 15%;
    background-color: #ef9d91;
    border-radius: 0.3rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #feefee;
    border-radius: 0.3rem;
  }

  &:focus {
    outline-color: #ef9d91;
  }

  &.secret {
    border: 1.5px solid #ede5c5;

    &:focus {
      outline-color: #d8d1b1;
    }
  }
`;

export const CommentBtn = styled.button`
  width: calc(10% - 1rem);
  margin-left: 0.5rem;
  height: 95%;
  background-color: #ffb9ae;
  border: none;
  border-radius: 0.3rem;

  transition: all 0.1s;

  &:hover {
    background-color: #ef9d91;
  }

  &.secret {
    background-color: #d8d1b1;
    &:hover {
      background-color: #b8b193;
    }
  }
`;

export const DelIconDiv = styled.div`
  display: none;
  font-size: 1rem;
  color: #bc827c;
`;

export const DelIcon = styled(RiDeleteBack2Fill)`
`;
