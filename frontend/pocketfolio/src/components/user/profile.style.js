import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 660px) {
    justify-content: flex-start;
    padding: 3rem 0;
    height: auto;
  }
`;

export const Title = styled.p`
  margin: 1rem 0;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const Form = styled.form`
  width: 35rem;

  @media screen and (max-width: 660px) {
    width: 90%;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.3rem;

  @media screen and (max-width: 660px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;

  @media screen and (max-width: 660px) {
    margin: 1rem 0;
  }
`;

export const ImgDiv = styled.div`
  border-radius: 50%;
  border: 1px solid white;
  height: 10rem;
  width: 10rem;
  overflow: hidden;
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const ImgInputDiv = styled.div`
  width: fit-content;
`;

export const ImgInput = styled.input`
  margin-top: 0.5rem;
  margin-left: 1rem;

  &::file-selector-button {
    display: inline-block;
    background-color: white;
    border: 1px solid #333;
    padding: 0.3rem 0.5rem;
    border-radius: 2rem;

    &:hover {
      background-color: #dddddd;
    }
  }
`;

export const NickBirth = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NBBox = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1.3rem;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-left: 0.3rem;
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  border: 1.4px solid #a5a5a5;

  &.blog {
    width: 100%;
  }

  &:hover {
    outline: none;
    border: 1.5px solid #333333;
  }

  &:focus {
    outline: none;
    border: 1.5px solid #333333;
  }
`;

export const BlogIntroDiv = styled.div`
  width: 100%;
`;

export const BIBox = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 1.3rem;
  }
`;

export const TextArea = styled.textarea`
  font-size: 1.2rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  border: 1.4px solid #a5a5a5;
  height: 6rem;
  resize: none;

  &:hover {
    outline: none;
    border: 1.5px solid #333333;
  }

  &:focus {
    outline: none;
    border: 1.5px solid #333333;
  }
`;

export const Btnbox = styled.div`
  margin-top: 3rem;
  width: 100%;
`;

export const Btn = styled.button`
  font-size: 1.4rem;
  font-weight: bold;
  width: calc(50% - 0.5rem);
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 0;

  & + & {
    margin-left: 1rem;
  }

  &.cancel {
    background-color: white;
    color: #3c2e9b;
    border: 0.5px solid #a5a5a5;

    &:hover {
      background-color: #eeeeee;
      color: #312582;
    }
  }

  &.save {
    background-color: #3c2e9b;
    color: white;

    &:hover {
      background-color: #312582;
      color: #dcdcdc;
    }
  }
`;
