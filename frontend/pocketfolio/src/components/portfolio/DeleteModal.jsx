import React, {useState} from 'react';
import {
  Overlay,
  ModalWrap,
  Contents,
  BtnDiv,
  StyledBtn,
} from './DeleteModal.style';
import {H3, Body1} from '../../styles/styles.style';

const DeleteModal = ({onClose}) => {
  const handleClose = () => {
    onClose();
  };

  const nothing = () => {};
  return (
    <Overlay>
      <ModalWrap onClick={nothing}>
        <Contents>
          <H3>이 포트폴리오를 지우시겠습니까?</H3>
          <BtnDiv>
            <StyledBtn className="cancel" onClick={handleClose}>
              <Body1>
              취소
                </Body1>
            </StyledBtn>
            <StyledBtn className="delete" onClick={handleClose}>
              <Body1>
              삭제
                </Body1>
            </StyledBtn>
          </BtnDiv>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

export default DeleteModal;
