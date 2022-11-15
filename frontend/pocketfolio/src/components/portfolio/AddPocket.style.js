import styled from 'styled-components';
import {Body1, H2} from '../../styles/styles.style';

export const Overlay = styled.div`
  .modal {
    z-index: 1000;
    outline: 2px solid purple;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: fadeIn;
    animation-fill-mode: forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    /* background-color: blue; */
  }
  .modal.close {
    animation-name: fade-out;
  }
  .modal button {
    outline: none;
    border: 0;
  }

  .modal.close > section {
    animation-name: slide;
  }
  .modal > section > header {
    position: relative;
    color: #ffffff;
    background-color: #ffb9ae;
    padding: 1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    /* font-size: 2rem; */
    /* font-weight: 700; */
  }
  .modal > section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  .modal > section > p {
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
  z-index: 9;
`;

export const Contents = styled.section`
  background-color: #fff;
  width: 60%;
  height: 80%;
  border-radius: 0.5rem;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: slideUp;
  animation-fill-mode: forwards;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
    /* height: 5px; */
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

export const Body = styled.div`
  display: flex;
  margin: 1rem auto;
  flex-direction: column;
  /* border: 1px black solid; */
  height: 70%;
  width: 70%;
`;

export const BtnDiv = styled.footer`
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

export const Box = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  &.dropselect {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* outline: solid black; */
    width: 50%;
  }
`;

export const Text = styled(Body1)`
  display: flex;
  color: black;
  margin-bottom: 1.3rem !important;
  font-family: 'NanumSquareBold' !important ;
`;

export const Head = styled(H2)`
  margin: 0;
`;

export const InputDiv = styled.div`

`
export const Input = styled.input`
  border-radius: 0.2rem;
  padding: 0.5rem;
  /* border: 1px black; */

  &.title {
    width: 50%;
  }
  &.themedrop {
    /* visibility: hidden; */
    display: none;
  }

  &.maincheck {
    /* width: 100%; */
  }
  :checked + img {
    border-radius: 1rem;
    background-color: #fdd7d7;
  }
`;


export const Label = styled.label``;

export const ThemeDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

export const Theme = styled.div``;

export const ThemeImg = styled.img`
  max-width: 100%;
  height: auto;
  cursor: pointer;
`;

export const ThemeTitle = styled.div`
  color: black;
`;

export const DropDiv = styled.div``;

export const Select = styled.select`
  width: fit-content;
`;

export const Option = styled.option``;
