import React, {useState} from 'react';
import {
  Overlay,
  ModalWrap,
  Contents,
  TextDiv,
  Text,
  BtnDiv,
  StyledBtn,
} from './DeleteModal.style';
import {H3, Body1} from '../../styles/styles.style';

const DeleteModal = props => {
  const {onClose, text, seq, deleteFunc} = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <TextDiv>
            <Text>이 {text} 지우시겠습니까?</Text>
          </TextDiv>
          <BtnDiv>
            <StyledBtn
              className="cancel"
              onClick={event => {
                event.stopPropagation();
                handleClose();
              }}
            >
              <Body1>취소</Body1>
            </StyledBtn>
            <StyledBtn
              className="delete"
              onClick={event => {
                event.stopPropagation();
                deleteFunc(seq);
                handleClose();
              }}
            >
              <Body1>삭제</Body1>
            </StyledBtn>
          </BtnDiv>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

export default DeleteModal;
