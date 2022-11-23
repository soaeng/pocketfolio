import styled from 'styled-components';
import {H2} from '../../styles/styles.style';
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiCloseFill,
  RiCheckboxBlankLine,
  RiCheckboxFill,
} from 'react-icons/ri';

export const Overlay = styled.div`
  .modal.close > section {
    animation-name: slide;
  }
  .modal > section > header {
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

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  width: 30rem;
  padding: 2rem;
  padding-bottom: 1rem;

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

export const Contents = styled.section`
  background-color: #fff;
  border-radius: 0.5rem;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: slideUp;
  animation-fill-mode: forwards;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: center;
`;

export const Text = styled.h4`
  display: flex;
  color: black;
  font-family: 'NanumSquareBold' !important ;
  margin: 0.6rem 0;
  margin-right: 1rem;

  &.privacy {
    margin-left: 2rem;
  }
`;

export const Head = styled(H2)`
  position: relative;
  font-size: 2rem;
  margin: 0;
`;

export const IconDiv = styled.div`
  &.close {
    position: absolute;
    display: flex;
    align-items: center;
    right: 5%;
    font-size: 2rem;
  }
`;

export const CloseIcon = styled(RiCloseFill)`
  cursor: pointer;
`;

export const InputDiv = styled.div``;

export const Input = styled.input`
  border-radius: 0.2rem;
  padding: 0.5rem;

  &.title {
    font-size: 1rem;
    border-radius: 0.3rem;
    border: 2px solid #ffe4de;
    width: 14rem;
    font-size: 1rem;
    :focus {
      outline: none;
      border-color: #f6b9ab;
    }
  }
`;

export const DropDiv = styled.div`
  display: flex;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 16px;
`;

export const StyledBtn = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 18px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  border: 0;
  font-weight: 1000;
  transition: all 0.2s;
  cursor: pointer;

  &.cancel {
    background-color: white;
    color: #ffa08b;
    margin-right: 0.5rem;
    &:hover {
      background-color: #f6f1f1;
    }
  }

  &.save {
    background-color: #ffa08b;
    color: #ffffff;
    &:hover {
      background-color: #fb706d;
    }
  }
`;

export const CheckIcon = styled(RiCheckboxFill)`
  color: #f6b9ab;
`;
export const BlankIcon = styled(RiCheckboxBlankLine)`
  color: #f6b9ab;
`;

export const CheckDiv = styled.div`
  font-size: 1.4rem;
  height: 1.4rem;
`;

export const SelectBox = styled.div`
  padding: 0.5rem;
  border: 2px solid #ffe4de;
  border-radius: 0.3rem;
  position: relative;
  width: 14rem;
  font-size: 1rem;
  &.open {
    border-color: #f6b9ab;
  }
`;

export const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;

  &.open {
    padding-bottom: 0.7rem;
    border-bottom: 2px solid #f6b9ab;
    margin-bottom: 0.7rem;
  }
`;

export const SelectOption = styled.div`
  display: block;
  width: 7rem;
  text-align: left;
  & + & {
    padding-top: 0.7rem;
  }

  &.close {
    display: none;
  }

  &:hover {
    font-weight: bold;
  }

  &.selected {
    font-weight: initial;
  }
`;

export const ShowIcon = styled(RiArrowDownSFill)``;
export const NoshowIcon = styled(RiArrowUpSFill)``;
