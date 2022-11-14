import styled from 'styled-components';

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
  /* 애니메이션 */
  
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const BtnDiv = styled.div`
  display: flex;

  justify-content: space-evenly;
  width: 40%;
  height: 30%;
`;

export const StyledBtn = styled.button`
  p {
    margin: 0;
  }
  &.cancel {
    width: 6rem;
    height: 2.8rem;
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #2c2365;
    font-weight: 1000;
    font-size: 20px;
    cursor: pointer;
  }

  &.delete {
    width: 6rem;
    height: 2.8rem;
    background-color: #2c2365;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 100px;
    color: #ffffff;
    font-weight: 1000;
    font-size: 20px;
    cursor: pointer;
  }
`;
