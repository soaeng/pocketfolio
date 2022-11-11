import styled from 'styled-components';
import {RiLockUnlockLine, RiLockFill} from 'react-icons/ri';

export const Container = styled.div`
  width: 100%;
  color: #333;
`;

export const WriteForm = styled.form`
  border-bottom: 1px solid #333;
  padding: 1rem 0;
  width: 100%;
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
  object-fit: cover;
  background-color: purple;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextArea = styled.textarea`
  margin-left: 1rem;
  padding: 1rem;
  width: calc(100% - 9.25rem);
  resize: none;
  height: 4.25rem;
`;

export const BottomBox = styled.div`
  width: 100%;
  margin-top: 0.5rem;

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

export const Btn = styled.button``;
