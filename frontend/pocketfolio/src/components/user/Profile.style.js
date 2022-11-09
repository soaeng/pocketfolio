import styled from 'styled-components';
import {RiCloseCircleLine} from 'react-icons/ri';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333333;

  @media screen and (max-width: 660px) {
    justify-content: flex-start;
    padding: 3rem 0;
    height: auto;
  }
`;

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Title = styled.h1`
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

  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ImgInputDiv = styled.div`
  width: fit-content;
  position: relative;
`;

export const ImgInput = styled.input`
  margin-top: 0.5rem;
  margin-left: 1rem;
  padding-right: 1.2rem;

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

export const DelBox = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
  width: 1.2rem;
  height: 1.2rem;

  &:hover {
    scale: 1.1;
  }
`;

export const DelIcon = styled(RiCloseCircleLine)`
  width: 100%;
  height: 100%;
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
  font-size: 1rem;
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

export const BtnContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const SignOutText = styled.p`
  margin: 0;
  color: #626262;
  text-decoration: underline;

  &:hover {
    color: #313131;
  }
`;

export const Btnbox = styled.div`
  margin-top: 3rem;
  width: 45%;
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
    color: #e75452;
    border: 0.5px solid #a5a5a5;

    &:hover {
      background-color: #eeeeee;
      color: #c13136;
    }
  }

  &.save {
    background-color: #e75452;
    color: white;

    &:hover {
      background-color: #c13136;
      color: #eeeeee;
    }
  }
`;
