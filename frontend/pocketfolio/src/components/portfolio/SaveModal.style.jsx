import styled from 'styled-components';
import {Body1} from '../../styles/styles.style';

export const Overlay = styled.div`
  .modal {
    z-index: 999;
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
  }
  .modal.close {
    animation-name: fadeOut;
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }

  .modal.close > section {
    animation-name: slide;
  }
  .modal > section > header {
    position: relative;
    padding: 18px 64px 16px 16px;
    font-weight: 700;
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
    display: flex;
    justify-content: center;
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
  outline: 1px solid;
`;

export const Contents = styled.section`
  width: 90%;
  max-width: 450px;
  background-color: black;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  overflow: hidden;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: slideUp;
  animation-fill-mode: forwards;
`;

export const BtnDiv = styled.footer`
  display: flex;
  justify-content: flex-end;
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
    color: #2c2365;
    font-weight: 1000;
    font-size: 20px;
    margin-right: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: #f2f2f2;
      
    }
  }

  &.save {
    width: 5.5rem;
    height: 2.5rem;
    background-color: #2c2365;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #ffffff;
    font-weight: 1000;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background-color: #3c3288;
      
    }
  }
`;

export const Text = styled(Body1)`
  font-family: 'NanumSquareBold' !important ;
`;
