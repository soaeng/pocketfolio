import styled from 'styled-components';
import {H3} from '../../styles/styles.style';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const ModalWrap = styled.div`
  height: 200px;
  width: 600px;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const TextDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.7rem;
`;
export const Text = styled(H3)``;

export const BtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 1rem;
  width: 40%;
  height: 30%;
`;

export const StyledBtn = styled.button`
  p {
    margin: 0;
  }
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

  &.delete {
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
