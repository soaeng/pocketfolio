import styled from 'styled-components';
import {Body1, H2, H3} from '../../styles/styles.style';
import {RiCloseFill} from 'react-icons/ri';

export const Overlay = styled.div`
  .modal.close {
    animation-name: fade-out;
  }
  .modal.close > section {
    animation-name: slide;
  }
  .modal > section > header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    background-color: #ffb9ae;
    padding: 0.7rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes slideUp {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0px);
    }
  }
  @keyframes slideDown {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(100px);
    }
  }
`;

export const ModalWrap = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: fadeIn;
  animation-fill-mode: forwards;
  cursor: default;

`;

export const Contents = styled.section`
  background-color: #fff;
  width: 50rem;
  height: 30rem;
  border-radius: 0.5rem;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: slideUp;
  animation-fill-mode: forwards;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  flex-direction: column;
  overflow: auto;
  height: 80%;
  width: 100%;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    height: 5%;
    background-color: lightgray;
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
    border-radius: 2rem;
  }
`;

export const Box = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.dropselect {
    flex-direction: row;
    width: 100%;
    /* justify-content: space-between; */
  }

  &.mainset {
  }
`;

export const TextDiv = styled.div`
  outline: solid black;
  display: flex;
  justify-content: center;
`;
export const Text = styled(Body1)`
  display: flex;
  color: black;
  margin-bottom: 1.3rem !important;
  font-family: 'NanumSquareBold' !important ;
`;

export const Head = styled(H2)`
  font-size: 2rem;
  margin: 0;
`;

export const IconDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 5%;
  font-size: 2rem;
`;

export const CloseIcon = styled(RiCloseFill)`
  cursor: pointer;
`;

export const InputDiv = styled.div``;

export const Input = styled.input`
  border-radius: 0.2rem;
  padding: 0.5rem;

  /* border: 1px black; */
  &.title {
    width: 30%;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    border: 0.5px solid #ffbcbc;
    :focus {
      outline: 0.5px solid #fcb4b4;
    }
  }
  &.themeselect {
    display: none;
    transition: all 0.1s;

    :checked + img {
      border-radius: 1rem;
      background-color: #f7c6c6;
      scale: 1;
    }
  }
`;

export const Label = styled.label``;

export const ThemeDiv = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

export const Theme = styled.div`
  :hover {
    border-radius: 1rem;
    background-color: #fff4f1;
  }
`;

export const ThemeImg = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    scale: 1.1;
  }
`;

export const ThemeTitle = styled.div`
  color: black;
`;

export const DropDiv = styled.div`
  padding: 0 1.5rem;
  /* outline: solid black; */
  margin: 0 1rem;
`;

export const Select = styled.select`
  width: fit-content;
`;

export const Option = styled.option``;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  text-align: right;
`;

export const StyledBtn = styled.button`
  padding: 6px 12px;
  color: #fff;
  background-color: #6c757d;
  border-radius: 5px;
  font-size: 13px;
  &.cancel {
    width: 5.5rem;
    height: 2.5rem;
    background-color: white;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #e75452;
    font-weight: 1000;
    font-size: 20px;
    margin-right: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: #f6f1f1;
    }
  }

  &.save {
    width: 5.5rem;
    height: 2.5rem;
    background-color: #e75452;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #ffffff;
    font-weight: 1000;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background-color: #fb706d;
    }
  }
`;
